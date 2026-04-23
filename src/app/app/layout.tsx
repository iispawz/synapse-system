"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { SettingsModal } from "@/components/layout/SettingsModal";
import { ProfileDrawer } from "@/components/layout/ProfileDrawer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { useState } from "react";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <SmoothScroll />
      
      <div className="flex h-screen bg-[#1A1A1A] font-sans">
        {/* Sidebar Escura Fixa */}
        <Sidebar />
        
        {/* Área Principal */}
        <div className="flex-1 flex flex-col overflow-hidden p-4 xl:p-6">
          {/* Container Flutuante */}
          <div className="flex-1 bg-[#F5F3EF] rounded-[28px] shadow-2xl overflow-hidden flex flex-col relative">
            {/* Topbar */}
            <Topbar 
              onOpenSettings={() => setIsSettingsOpen(true)}
              onOpenProfile={() => setIsProfileOpen(true)}
            />
            
            {/* Container de Scroll Interno (Alvo do Lenis) */}
            <main 
              id="smooth-container" 
              className="flex-1 overflow-y-auto overflow-x-hidden"
            >
              <div className="max-w-7xl mx-auto p-6 xl:p-8 pb-20">
                {children}
              </div>
            </main>
          </div>
        </div>

        {/* Modais/Drawers */}
        <SettingsModal open={isSettingsOpen} onOpenChange={setIsSettingsOpen} />
        <ProfileDrawer open={isProfileOpen} onOpenChange={setIsProfileOpen} />
      </div>
    </>
  );
}