"use client";

import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Topbar() {
  return (
    <header className="fixed right-0 top-0 z-40 h-16 w-[calc(100%-16rem)] border-b border-border bg-card/95 backdrop-blur">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Buscar pacientes, casos..."
              className="h-9 w-64 rounded-md border border-border bg-background pl-9 pr-4 text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-muted-foreground" />
          </Button>
          <div className="h-8 w-8 rounded-full bg-primary" />
        </div>
      </div>
    </header>
  );
}