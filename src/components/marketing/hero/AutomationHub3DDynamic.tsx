'use client';

import dynamic from 'next/dynamic';

const AutomationHub3D = dynamic(() => import('./AutomationHub3D'), { ssr: false });

export default function AutomationHub3DDynamic() {
  return <AutomationHub3D />;
}
