"use client";

import { 
  LayoutDashboard, 
  Users, 
  FolderKanban, 
  Calendar, 
  Brain,
  Wallet, 
  BarChart3, 
  Settings,
  LogOut
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
  { title: "Pacientes", href: "/app/patients", icon: Users },
  { title: "Casos", href: "/app/cases", icon: FolderKanban },
  { title: "Sessões", href: "/app/sessions", icon: Calendar },
  { title: "Clinical Engine", href: "/app/clinical-engine", icon: Brain },
  { title: "Financeiro", href: "/app/financial", icon: Wallet },
  { title: "Relatórios", href: "/app/reports", icon: BarChart3 },
  { title: "Configurações", href: "/app/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-20 xl:w-72 bg-[#1A1A1A] flex flex-col h-full transition-all duration-300">
      {/* Logo Area */}
      <div className="h-20 flex items-center justify-center xl:justify-start xl:px-8 border-b border-white/10">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#C77F49] to-[#8B6F5A] flex items-center justify-center shadow-lg shadow-[#C77F49]/20">
          {/* Logo Mark - Símbolo orgânico minimalista */}
          <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6 text-white">
            <path 
              d="M20 8C20 8 16 12 16 16C16 20 20 24 20 24C20 24 24 20 24 16C24 12 20 8 20 8Z" 
              fill="currentColor"
              opacity="0.6"
            />
            <path 
              d="M12 20C12 20 8 24 8 28C8 32 12 36 12 36" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path 
              d="M28 20C28 20 32 24 32 28C32 32 28 36 28 36" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="hidden xl:block ml-3">
          <span className="text-xl font-semibold text-white block leading-none tracking-tight">
            Synapse
          </span>
          <span className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">
            System
          </span>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-8 px-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex items-center gap-3 px-3 xl:px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                isActive 
                  ? "text-white" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              {/* Active Indicator - Barra vertical à esquerda */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#C77F49] rounded-r-full" />
              )}
              
              <Icon className={cn(
                "h-5 w-5 min-w-[20px] transition-transform group-hover:scale-110",
                isActive ? "text-[#C77F49]" : ""
              )} />
              
              <span className="hidden xl:block">{item.title}</span>
              
              {/* Tooltip para sidebar colapsada */}
              <div className="xl:hidden absolute left-full ml-2 px-2 py-1 bg-[#1A1A1A] text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-white/10">
                {item.title}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer - Logout */}
      <div className="p-4 border-t border-white/10">
        <button className="flex items-center gap-3 w-full px-3 xl:px-4 py-3 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all text-sm font-medium">
          <LogOut className="h-5 w-5 min-w-[20px]" />
          <span className="hidden xl:block">Sair</span>
        </button>
      </div>
    </aside>
  );
}