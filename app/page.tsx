import { NavBar } from '@/components/nav-bar';
import { Sidebar } from '@/components/sidebar';
import { WorkflowEditor } from '@/components/workflow-editor';
import { ConfigPanel } from '@/components/config-panel';

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-[#f8f9fa]">
      <NavBar />
      <div className="flex-1 flex">
        <Sidebar />
        <WorkflowEditor />
        <ConfigPanel />
      </div>
    </div>
  );
}