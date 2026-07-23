import React from 'react';

interface DemoDisclaimerProps {
  text?: string;
  variant?: 'inline' | 'banner';
}

export function DemoDisclaimer({ 
  text = 'Demo data shown for illustration purposes',
  variant = 'inline' 
}: DemoDisclaimerProps) {
  if (variant === 'banner') {
    return (
      <div className="w-full bg-bg-alt border-y border-border px-4 py-2 text-center">
        <p className="text-sm text-text-muted flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {text}
        </p>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-1.5 text-xs italic text-text-muted">
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{text}</span>
    </div>
  );
}
