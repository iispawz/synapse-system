import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar Fixa à Esquerda */}
      <Sidebar />
      
      {/* Área Principal */}
      <div className="flex-1 pl-64">
        <Topbar />
        
        <main className="p-6 pt-20">
          {children}
        </main>
      </div>
    </div>
  );
}