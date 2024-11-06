'use client';

import { Handle, Position } from 'reactflow';
import { cn } from '@/lib/utils';

const baseStyles = {
  padding: '10px',
  borderRadius: '3px',
  width: '150px',
  fontSize: '12px',
  color: '#222',
  textAlign: 'center' as const,
  border: '1px solid #1a192b',
};

export function StartNode() {
  return (
    <div className="relative">
      <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
        ⭐
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
}

export function WebhookNode({ data }: any) {
  return (
    <div className={cn("bg-white border rounded-md p-3", data.selected && "border-emerald-500 border-2")}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="text-xs">
        <div className="font-medium">Webhook</div>
        <div className="text-gray-500">Receive URLs</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
}

export function CheckNode() {
  return (
    <div className="relative">
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="h-12 w-12 rounded-lg bg-orange-400 text-white flex items-center justify-center">
        ✓
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
}

export function TriggerNode({ data }: any) {
  return (
    <div className={cn("bg-white border rounded-md p-3", data.selected && "border-emerald-500 border-2")}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="text-xs">
        <div className="font-medium">Trigger</div>
        <div className="text-gray-500">{data.subLabel}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
}

export function EmailNode({ data }: any) {
  return (
    <div className={cn("bg-white border rounded-md p-3", data.selected && "border-emerald-500 border-2")}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="text-xs">
        <div className="font-medium">Email</div>
        <div className="text-gray-500">{data.subLabel}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
}

export function EventTransformNode() {
  return (
    <div className="relative">
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="h-12 w-12 rounded-lg bg-purple-500 text-white flex items-center justify-center">
        🔄
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
}

export function HttpNode({ data }: any) {
  return (
    <div className={cn("bg-white border rounded-md p-3", data.selected && "border-emerald-500 border-2")}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="text-xs">
        <div className="font-medium">Http request</div>
        <div className="text-gray-500">Get URLScan Results</div>
      </div>
    </div>
  );
}