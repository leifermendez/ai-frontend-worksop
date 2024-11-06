'use client';

import { cn } from '@/lib/utils';

interface NodeProps {
  type: 'start' | 'webhook' | 'check' | 'trigger' | 'email' | 'event-transform' | 'http';
  label: string;
  subLabel?: string;
  variant?: 'default' | 'selected' | 'success' | 'error';
  className?: string;
}

export function Node({ type, label, subLabel, variant = 'default', className }: NodeProps) {
  const icons = {
    start: '⭐',
    webhook: '🔌',
    check: '✓',
    trigger: '👁',
    email: '✉️',
    'event-transform': '🔄',
    http: '🌐',
  };

  const variants = {
    default: 'border-gray-200 bg-white',
    selected: 'border-emerald-500 border-2 bg-white',
    success: 'border-emerald-500 bg-emerald-50',
    error: 'border-red-500 bg-red-50',
  };

  const nodeStyles = {
    start: 'h-8 w-8 rounded-full bg-emerald-500 text-white',
    webhook: 'rounded-md border p-3',
    check: 'h-12 w-12 rounded-lg bg-orange-400 text-white',
    trigger: 'rounded-md border p-3',
    email: 'rounded-md border p-3',
    'event-transform': 'h-12 w-12 rounded-lg bg-purple-500 text-white',
    http: 'rounded-md border p-3',
  };

  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <div className={cn(
        'flex items-center justify-center',
        nodeStyles[type],
        type !== 'start' && type !== 'check' && type !== 'event-transform' && variants[variant]
      )}>
        {type === 'webhook' ? (
          <div className="text-xs">
            <div className="font-medium">{label}</div>
            <div className="text-gray-500">{subLabel}</div>
          </div>
        ) : (
          <span>{icons[type]}</span>
        )}
      </div>
    </div>
  );
}