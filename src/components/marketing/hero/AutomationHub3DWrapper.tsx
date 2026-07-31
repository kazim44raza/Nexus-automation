'use client';

import { useState, useEffect } from 'react';
import AutomationHub3D from './AutomationHub3D';

export function AutomationHub3DWrapper() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return <AutomationHub3D />;
}
