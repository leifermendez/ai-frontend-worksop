'use client';

import { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  Node,
  Edge,
  Connection,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import { Search, Workflow, Circle, Triangle, Square, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StartNode, WebhookNode, CheckNode, TriggerNode, EmailNode, EventTransformNode, HttpNode } from './workflow/custom-nodes';
import 'reactflow/dist/style.css';

const nodeTypes = {
  start: StartNode,
  webhook: WebhookNode,
  check: CheckNode,
  trigger: TriggerNode,
  email: EmailNode,
  eventTransform: EventTransformNode,
  http: HttpNode,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'start',
    position: { x: 400, y: 0 },
    data: {},
  },
  {
    id: '2',
    type: 'webhook',
    position: { x: 375, y: 100 },
    data: {},
  },
  {
    id: '3',
    type: 'check',
    position: { x: 400, y: 200 },
    data: {},
  },
  {
    id: '4',
    type: 'trigger',
    position: { x: 200, y: 300 },
    data: { subLabel: 'On authentication issue' },
  },
  {
    id: '5',
    type: 'trigger',
    position: { x: 375, y: 300 },
    data: { subLabel: 'If scan submitted', selected: true },
  },
  {
    id: '6',
    type: 'trigger',
    position: { x: 550, y: 300 },
    data: { subLabel: 'If scan prevented' },
  },
  {
    id: '7',
    type: 'email',
    position: { x: 200, y: 400 },
    data: { subLabel: 'Send authentication issue email' },
  },
  {
    id: '8',
    type: 'email',
    position: { x: 550, y: 400 },
    data: { subLabel: 'Send scan prevented email' },
  },
  {
    id: '9',
    type: 'eventTransform',
    position: { x: 400, y: 500 },
    data: {},
  },
  {
    id: '10',
    type: 'http',
    position: { x: 375, y: 600 },
    data: {},
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e3-5', source: '3', target: '5' },
  { id: 'e3-6', source: '3', target: '6' },
  { id: 'e4-7', source: '4', target: '7' },
  { id: 'e6-8', source: '6', target: '8' },
  { id: 'e5-9', source: '5', target: '9' },
  { id: 'e9-10', source: '9', target: '10' },
];

export function WorkflowEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="flex-1 p-4 relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Traffic</span>
          <div className="px-2 py-1 bg-gray-100 rounded-md text-sm flex items-center gap-1">
            Status is pending
            <span className="text-gray-400">×</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">saved 3 min ago</span>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-lg border border-gray-200 h-[600px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          className="bg-gray-50"
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#0a0b14] p-2 rounded-lg shadow-lg">
        <div className="flex items-center gap-3 px-3">
          <Button variant="ghost" size="icon" className="text-white/70">
            <Workflow className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70">
            <Circle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70">
            <Triangle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70">
            <Square className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70">
            <Star className="h-4 w-4" />
          </Button>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-white/70" />
            <input
              type="text"
              placeholder="Search on board"
              className="bg-transparent border-none text-white placeholder-white/50 focus:outline-none w-32"
            />
          </div>
        </div>
        <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
          Quick Add
        </Button>
      </div>
    </div>
  );
}