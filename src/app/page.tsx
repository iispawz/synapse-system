import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 md:p-24">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Synapse System
      </h1>
      <p className="text-muted-foreground text-center max-w-md">
        shadcn/ui configurado com tokens de design premium.
        Fundo escuro, acento terroso e componentes acessíveis.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button>Primário</Button>
        <Button variant="secondary">Secundário</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destrutivo</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </main>
  );
}