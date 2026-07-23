import React, { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string | ReactNode;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const alignmentClass = align === 'center' ? 'mx-auto text-center' : '';
  const textPrimary = dark ? 'text-text-on-dark' : 'text-text-primary';
  const textSecondary = dark ? 'text-text-muted' : 'text-text-secondary';

  return (
    <div className={`flex flex-col gap-4 ${alignmentClass} ${className}`}>
      <div className="flex items-center gap-2">
        {align === 'center' && <div className="h-px w-6 bg-accent opacity-50" />}
        <span className="uppercase tracking-wider text-xs font-semibold text-accent">
          {eyebrow}
        </span>
        <div className="h-px w-6 bg-accent opacity-50" />
      </div>
      
      <h2 className={`heading-lg sm:heading-xl ${textPrimary}`}>
        {title}
      </h2>
      
      {description && (
        <p className={`text-lg max-w-2xl ${textSecondary}`}>
          {description}
        </p>
      )}
    </div>
  );
}
