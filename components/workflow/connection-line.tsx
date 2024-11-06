'use client';

interface ConnectionLineProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  variant?: 'default' | 'success' | 'error';
}

export function ConnectionLine({ from, to, variant = 'default' }: ConnectionLineProps) {
  const strokeColor = {
    default: '#e5e7eb',
    success: '#10b981',
    error: '#ef4444',
  }[variant];

  const path = `M ${from.x} ${from.y} C ${(from.x + to.x) / 2} ${from.y}, ${(from.x + to.x) / 2} ${to.y}, ${to.x} ${to.y}`;

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <path
        d={path}
        stroke={strokeColor}
        strokeWidth={2}
        fill="none"
      />
    </svg>
  );
}