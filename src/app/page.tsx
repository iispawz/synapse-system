import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar Pública */}
      <nav className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <span className="text-xl font-semibold text-foreground">
              Synapse System
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link href="/signup">
              <Button>Começar Agora</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Raciocínio clínico estruturado
            <span className="text-primary"> para terapeutas MPC</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Do sintoma à evolução: uma plataforma que pensa junto com você.
            Estruture seu raciocínio terapêutico com o método Procure Cicatrizes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="px-8">
                Teste Grátis por 14 Dias
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Ver Demonstração
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}