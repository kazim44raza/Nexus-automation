'use client';

import React, { Suspense, useEffect, useState, useRef, ReactNode } from 'react';

interface Canvas3DWrapperProps {
  children: ReactNode;
  fallback: ReactNode;
  height?: string;
  className?: string;
}

export function Canvas3DWrapper({
  children,
  fallback,
  height = 'h-96',
  className = ''
}: Canvas3DWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      mediaQuery.removeEventListener('change', listener);
      observer.disconnect();
    };
  }, []);

  if (hasError || reduceMotion) {
    return <div className={`${height} ${className}`}>{fallback}</div>;
  }

  return (
    <div ref={containerRef} className={`${height} relative ${className}`}>
      {!isVisible ? (
        <div className="absolute inset-0 bg-gradient-to-br from-bg-alt to-bg-surface animate-pulse-soft rounded-xl" />
      ) : (
        <ErrorBoundary fallback={fallback} onError={() => setHasError(true)}>
          <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-bg-alt to-bg-surface animate-pulse-soft rounded-xl" />}>
            {children}
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}

// Simple Error Boundary component
class ErrorBoundary extends React.Component<
  { fallback: ReactNode; onError: () => void; children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: ReactNode; onError: () => void; children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
