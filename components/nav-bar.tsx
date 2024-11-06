'use client';

import { Menu, Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export function NavBar() {
  return (
    <nav className="h-14 bg-[#0a0b14] flex items-center px-4 justify-between">
      <div className="flex items-center gap-2">
        <Menu className="h-5 w-5 text-white/70" />
        <span className="text-white font-semibold">makelog.io</span>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="secondary" size="sm" className="bg-[#1e1f2e] text-white hover:bg-[#2a2b3a]">
          Dry run modeler
        </Button>
        <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
          Publish story
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Bell className="h-5 w-5 text-white/70" />
        <div className="flex -space-x-2">
          <Avatar className="h-7 w-7 border-2 border-[#0a0b14]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="h-7 w-7 border-2 border-[#0a0b14]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="h-7 w-7 border-2 border-[#0a0b14]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <span className="text-white/70 text-sm">+3</span>
        <div className="flex items-center gap-2">
          <Avatar className="h-7 w-7">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SF</AvatarFallback>
          </Avatar>
          <span className="text-white">Shane Floyd</span>
        </div>
      </div>
    </nav>
  );
}