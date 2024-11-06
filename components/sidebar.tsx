'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: '🔄', label: 'Requests', count: 0 },
  { icon: '</>', label: 'Code', count: 0 },
  { icon: '💾', label: 'Data Imp', count: 0 },
  { icon: '🔄', label: 'Event transform', count: 0 },
  { icon: '📝', label: 'Save to story', count: 0 },
  { icon: '🌐', label: 'Webhook', count: 0 },
  { icon: '⌨️', label: 'Terminal', count: 0 },
];

const connectors = [
  { name: 'Abnormal Security', count: 12 },
  { name: 'Abuse.ch', count: 4, active: true },
  { name: 'Agari', count: 2 },
  { name: 'Airtable', count: 10, active: true },
];

export function Sidebar() {
  return (
    <div className="w-64 border-r border-gray-200 bg-white flex flex-col">
      <div className="p-2 border-b border-gray-200">
        <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-md">
          <span className="text-xl">▶️</span>
          <span className="font-medium">Story</span>
        </div>
      </div>

      <div className="p-3">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search connectors..." 
            className="pl-8 bg-gray-50"
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Action Blocks</span>
            <span className="text-xs text-gray-500">8</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer"
              >
                <span className="text-xl mb-1">{item.icon}</span>
                <span className="text-xs text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-2">
          {connectors.map((connector) => (
            <div
              key={connector.name}
              className={cn(
                "flex items-center justify-between p-2 rounded-md hover:bg-gray-50 cursor-pointer",
                connector.active && "text-emerald-600"
              )}
            >
              <span className="text-sm">{connector.name}</span>
              <span className="text-xs text-gray-500">{connector.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}