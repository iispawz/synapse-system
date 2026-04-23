"use client";

import { 
  LayoutDashboard, 
  Users, 
  FolderKanban, 
  Brain, 
  Calendar, 
  Wallet, 
  BarChart3, 
  UsersRound, 
  Settings,
  CreditCard
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
  { title: "Pacientes", href: "/app/patients", icon: Users },
  { title: "Casos", href: "/app/cases", icon: FolderKanban },
  { title: "Clinical Engine", href: "/app/clinical-engine", icon: Brain },
  { title: "Agenda", href: "/app/calendar", icon: Calendar },
  { title: "Financeiro", href: "/app/financial", icon: Wallet },
  { title: "Relatórios", href: "/app/reports", icon: BarChart3 },
  { title: "Equipe", href: "/app/team", icon: UsersRound },
  { title: "Faturamento", href: "/app/billing", icon: CreditCard },
  { title: "Configurações", href: "/app/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card">
      <div className="flex h-16 items-center border-b border-border px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary" />
          <span className="text-lg font-semibold text-foreground">
            Synapse
          </span>
        </Link>
      </div>
      
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}