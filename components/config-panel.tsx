'use client';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ConfigPanel() {
  return (
    <div className="w-80 border-l border-gray-200 bg-white">
      <Tabs defaultValue="general">
        <TabsList className="w-full justify-start rounded-none border-b">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <div className="p-4">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-gray-500 mb-2">Status</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm">Enable</span>
                <Switch />
              </div>
            </div>

            <div>
              <h4 className="text-sm text-gray-500 mb-2">Name</h4>
              <input
                type="text"
                value="Send authentication issue email"
                className="w-full p-2 border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" checked className="rounded text-emerald-500" />
                <h4 className="text-sm text-gray-500">Sequence</h4>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Prefix"
                  className="flex-1 p-2 border border-gray-200 rounded-md"
                />
                <input
                  type="text"
                  value="1"
                  className="w-20 p-2 border border-gray-200 rounded-md"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" checked className="rounded text-emerald-500" />
                <h4 className="text-sm text-gray-500">Encryption</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Sensitive / Personal information</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Hidden / Confidential</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
            Publish block changes
          </Button>
        </div>
      </Tabs>
    </div>
  );
}