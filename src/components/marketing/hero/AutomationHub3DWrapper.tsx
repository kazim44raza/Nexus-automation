'use client';

import { useState, useEffect, lazy, Suspense } from 'react';

const AutomationHub3D = lazy(() => import('./AutomationHub3D'));

export function AutomationHub3DWrapper() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <Suspense fallback={null}>
      <AutomationHub3D />
    </Suspense>
  );
}
