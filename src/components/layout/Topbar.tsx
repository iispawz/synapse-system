"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Search, Bell, Settings as SettingsIcon, ChevronLeft, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createClient } from "@/lib/supabase/client";

interface TopbarProps {
  onOpenSettings: () => void;
  onOpenProfile: () => void;
}

const pageTitleMap: Record<string, string> = {
  "/app/dashboard": "Dashboard",
  "/app/patients": "Pacientes",
  "/app/cases": "Casos",
  "/app/sessions": "Sessões",
  "/app/clinical-engine": "Clinical Engine",
  "/app/financial": "Financeiro",
  "/app/reports": "Relatórios",
  "/app/settings": "Configurações",
};

export function Topbar({ onOpenSettings, onOpenProfile }: TopbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  
  const currentPage = pageTitleMap[pathname] || "Overview";

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <header className="h-20 px-6 xl:px-8 flex items-center justify-between bg-transparent">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-[#2B2420] hidden md:block tracking-tight">
          {currentPage}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-11 w-11 bg-white/60 hover:bg-white/90 text-[#6B6359] hover:text-[#2B2420] icon-hover rounded-xl backdrop-blur-sm border border-white/20">
          <Search className="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="icon" className="h-11 w-11 bg-white/60 hover:bg-white/90 text-[#6B6359] hover:text-[#2B2420] icon-hover rounded-xl backdrop-blur-sm border border-white/20 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-[#C77F49] rounded-full ring-2 ring-white" />
        </Button>

        <Button 
          variant="ghost" 
          size="icon"
          onClick={onOpenSettings}
          className="h-11 w-11 bg-white/60 hover:bg-white/90 text-[#6B6359] hover:text-[#2B2420] icon-hover rounded-xl backdrop-blur-sm border border-white/20"
        >
          <SettingsIcon className="h-5 w-5" />
        </Button>

        <div className="h-6 w-px bg-[#DAD8D4] mx-1" />

        {/* Botão de Logout */}
        <Button
          onClick={handleLogout}
          variant="ghost"
          size="icon"
          className="h-11 w-11 bg-white/60 hover:bg-red-50 hover:text-red-600 text-[#6B6359] icon-hover rounded-xl backdrop-blur-sm border border-white/20 transition-all"
          title="Sair da conta"
        >
          <LogOut className="h-5 w-5" />
        </Button>

        <button 
          onClick={onOpenProfile}
          className="flex items-center gap-3 pl-2 pr-3 py-2 rounded-xl bg-white/60 hover:bg-white/90 transition-all duration-200 icon-hover backdrop-blur-sm border border-white/20"
        >
          <Avatar className="h-8 w-8 ring-2 ring-white">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-gradient-to-br from-[#C77F49] to-[#8B6F5A] text-white text-sm font-semibold">
              CS
            </AvatarFallback>
          </Avatar>
          <span className="hidden lg:block text-sm font-semibold text-[#2B2420]">
            Dra. Clara
          </span>
          <ChevronLeft className="h-4 w-4 text-[#8B6F5A] rotate-180 hidden lg:block" />
        </button>
      </div>
    </header>
  );
}