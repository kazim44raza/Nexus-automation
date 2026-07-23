'use client';

import React from 'react';

const tools = [
  'Google Calendar', 'HubSpot', 'GoHighLevel', 'Twilio', 'Vapi', 
  'n8n', 'WhatsApp', 'Slack', 'Airtable', 'Salesforce', 
  'Calendly', 'Zapier', 'Make', 'OpenAI'
];

export function IntegrationStrip() {
  return (
    <div className="relative w-full overflow-hidden py-4 bg-transparent border-y border-border/50">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg-base to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg-base to-transparent z-10 pointer-events-none" />
      
      <div className="flex gap-4 w-max animate-signal-flow [animation-duration:30s] hover:[animation-play-state:paused] motion-reduce:[animation:none] motion-reduce:transform-none">
        {/* Duplicate list for infinite loop */}
        {[...tools, ...tools].map((tool, index) => (
          <div 
            key={`${tool}-${index}`}
            className="flex items-center justify-center px-4 py-2 bg-bg-surface rounded-full shadow-sm border border-border text-sm font-medium text-text-muted whitespace-nowrap"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}
