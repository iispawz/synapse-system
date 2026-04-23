export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground">
        Dashboard
      </h1>
      <p className="mt-2 text-muted-foreground">
        Bem-vindo à área administrativa do Synapse System.
      </p>
      
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Cards placeholders para visualização */}
        <div className="h-32 rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Pacientes Ativos</p>
          <p className="mt-2 text-2xl font-bold text-primary">42</p>
        </div>
        <div className="h-32 rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Sessões Hoje</p>
          <p className="mt-2 text-2xl font-bold text-foreground">5</p>
        </div>
      </div>
    </div>
  );
}