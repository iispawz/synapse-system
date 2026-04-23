"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

// Dados mockados (depois virão do Supabase)
const activityData = [
  { name: "Seg", sessoes: 4, pacientes: 2 },
  { name: "Ter", sessoes: 6, pacientes: 3 },
  { name: "Qua", sessoes: 3, pacientes: 2 },
  { name: "Qui", sessoes: 7, pacientes: 4 },
  { name: "Sex", sessoes: 5, pacientes: 3 },
  { name: "Sáb", sessoes: 2, pacientes: 1 },
  { name: "Dom", sessoes: 0, pacientes: 0 },
];

const recentPatients = [
  { name: "Ana Silva", lastSession: "Hoje, 14:00", status: "active", progress: 75 },
  { name: "Carlos Oliveira", lastSession: "Ontem, 10:30", status: "active", progress: 60 },
  { name: "Maria Santos", lastSession: "2 dias atrás", status: "paused", progress: 45 },
  { name: "João Pereira", lastSession: "3 dias atrás", status: "active", progress: 80 },
];

const upcomingSessions = [
  { patient: "Ana Silva", time: "14:00", type: "Individual", status: "confirmed" },
  { patient: "Carlos Oliveira", time: "16:30", type: "Casal", status: "confirmed" },
  { patient: "Maria Santos", time: "Amanhã, 09:00", type: "Individual", status: "pending" },
];

const stats = [
  {
    title: "Pacientes Ativos",
    value: "42",
    change: "+12%",
    trend: "up",
    icon: Users,
    description: "vs mês anterior",
  },
  {
    title: "Sessões Hoje",
    value: "5",
    change: "+2",
    trend: "up",
    icon: Calendar,
    description: "das 8h às 18h",
  },
  {
    title: "Taxa de Evolução",
    value: "78%",
    change: "+5%",
    trend: "up",
    icon: TrendingUp,
    description: "média dos pacientes",
  },
  {
    title: "Horas Atendidas",
    value: "124",
    change: "-3%",
    trend: "down",
    icon: Clock,
    description: "este mês",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Bem-vindo de volta! Aqui está o resumo da sua prática clínica.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-primary border-primary">
            Plano Pro
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const isPositive = stat.trend === "up";
          
          return (
            <Card key={stat.title} className="border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  {isPositive ? (
                    <ArrowUpRight className="h-3 w-3 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-500" />
                  )}
                  <span className={`text-xs ${isPositive ? "text-green-500" : "text-red-500"}`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">
                    {stat.description}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Activity Chart */}
        <Card className="col-span-4 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Atividade da Semana</CardTitle>
            <CardDescription className="text-muted-foreground">
              Sessões realizadas e pacientes atendidos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData}>
                  <defs>
                    <linearGradient id="colorSessoes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C4A57B" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#C4A57B" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#343A40" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#6C757D" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#6C757D" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#1A1D23", 
                      border: "1px solid #343A40",
                      borderRadius: "8px"
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="sessoes" 
                    stroke="#C4A57B" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorSessoes)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Patients */}
        <Card className="col-span-3 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Pacientes Recentes</CardTitle>
            <CardDescription className="text-muted-foreground">
              Últimos atendimentos realizados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPatients.map((patient) => (
                <div 
                  key={patient.name} 
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {patient.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{patient.name}</p>
                      <p className="text-xs text-muted-foreground">{patient.lastSession}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16">
                      <div className="h-1.5 bg-border rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${patient.progress}%` }}
                        />
                      </div>
                    </div>
                    <Badge 
                      variant={patient.status === "active" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {patient.status === "active" ? "Ativo" : "Pausado"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Sessions */}
      <Card className="border-border bg-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-foreground">Próximas Sessões</CardTitle>
              <CardDescription className="text-muted-foreground">
                Agenda dos próximos dias
              </CardDescription>
            </div>
            <button className="text-sm text-primary hover:underline">
              Ver agenda completa
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingSessions.map((session, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{session.patient}</p>
                    <p className="text-xs text-muted-foreground">{session.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{session.time}</p>
                    <Badge 
                      variant={session.status === "confirmed" ? "default" : "outline"}
                      className="text-xs"
                    >
                      {session.status === "confirmed" ? "Confirmada" : "Pendente"}
                    </Badge>
                  </div>
                  <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                    <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}