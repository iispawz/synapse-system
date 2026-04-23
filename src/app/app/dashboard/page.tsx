"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Clock,
  ArrowUpRight,
  Brain,
  Activity,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

// Dados mockados
const weeklyData = [
  { day: "Seg", sessions: 4, progress: 65 },
  { day: "Ter", sessions: 6, progress: 78 },
  { day: "Qua", sessions: 3, progress: 52 },
  { day: "Qui", sessions: 7, progress: 85 },
  { day: "Sex", sessions: 5, progress: 72 },
  { day: "Sáb", sessions: 2, progress: 45 },
  { day: "Dom", sessions: 0, progress: 0 },
];

const recentActivity = [
  { patient: "Ana Silva", time: "14:00", type: "Sessão Individual", status: "Em andamento", statusType: "active" },
  { patient: "Carlos Oliveira", time: "16:30", type: "Terapia de Casal", status: "Confirmado", statusType: "confirmed" },
  { patient: "Maria Santos", time: "Amanhã, 09:00", type: "Acompanhamento", status: "Pendente", statusType: "pending" },
];

const stats = [
  { title: "Pacientes Ativos", value: "42", change: "+12%", trend: "up", icon: Users, color: "bg-[#E7DBC7]", iconColor: "text-[#8B6F5A]" },
  { title: "Sessões Hoje", value: "5", change: "+2", trend: "up", icon: Calendar, color: "bg-[#E8F0E9]", iconColor: "text-[#6F7C6D]" },
  { title: "Taxa de Evolução", value: "78%", change: "+5%", trend: "up", icon: TrendingUp, color: "bg-[#F5EBE0]", iconColor: "text-[#C77F49]" },
  { title: "Tempo Médio", value: "45min", change: "-3%", trend: "down", icon: Clock, color: "bg-[#F2EFEA]", iconColor: "text-[#6B6359]" },
];

const clinicalInsights = [
  { title: "Padrão Identificado", description: "Pacientes com gatilhos noturnos respondem melhor a intervenções matinais.", icon: Brain, color: "text-[#C77F49]" },
  { title: "Recomendação", description: "Considere revisar o plano terapêutico de 3 casos com progresso estagnado.", icon: AlertCircle, color: "text-[#6F7C6D]" }
];

const motivationalMessages = [
  "Organização que sustenta sua missão.",
  "Que sua prática seja leve e clara hoje.",
  "Prepare-se para acolher quem precisa de você.",
  "Seu espaço clínico está pronto para o dia.",
  "Respire fundo, você está fazendo um ótimo trabalho."
];

export default function DashboardPage() {
  const [greeting, setGreeting] = useState("Olá");
  const [dailyMessage, setDailyMessage] = useState("");
  const userName = "Dra. Clara";

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting("Bom dia");
    else if (hour >= 12 && hour < 18) setGreeting("Boa tarde");
    else setGreeting("Boa noite");

    const randomMsg = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
    setDailyMessage(randomMsg);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-1">
        <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#2B2420]">
          {greeting}, {userName}!
        </h1>
        <p className="text-[#6B6359] text-sm font-medium italic">
          "{dailyMessage}"
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="bg-white border-none shadow-sm hover:shadow-lg hover-lift transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.color}`}><Icon className={`h-5 w-5 ${stat.iconColor}`} /></div>
                  <div className={`flex items-center gap-1 text-xs font-medium ${stat.trend === "up" ? "text-[#6F7C6D]" : "text-red-500"}`}>
                    {stat.trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowUpRight className="h-3 w-3 rotate-180" />}
                    {stat.change}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-semibold tracking-tight text-[#2B2420]">{stat.value}</p>
                  <p className="text-xs text-[#6B6359] font-medium uppercase tracking-wide">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <Card className="lg:col-span-2 bg-white border-none shadow-sm rounded-2xl">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[#2B2420]">Atividade da Semana</h3>
                <p className="text-xs text-[#6B6359] mt-1">Sessões realizadas e progresso dos pacientes</p>
              </div>
              <Badge variant="outline" className="text-xs border-[#E7DBC7] text-[#6B6359] font-medium">24h</Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-70">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData}>
                  <defs>
                    <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C77F49" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#C77F49" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E7DBC7" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#8B6F5A', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#8B6F5A', fontSize: 12 }} />
                  <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E7DBC7', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', fontFamily: 'var(--font-dm-sans)', fontSize: '12px' }} />
                  <Area type="monotone" dataKey="sessions" stroke="#C77F49" strokeWidth={3} fill="url(#colorSessions)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Clinical Insights */}
        <Card className="bg-linear-to-br from-[#2B2420] to-[#1A1A1A] text-white border-none shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C77F49] opacity-10 rounded-full blur-3xl -mr-10 -mt-10" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-5 w-5 text-[#C77F49]" />
                <span className="text-xs font-medium text-[#C77F49] uppercase tracking-wider">Clinical Engine</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-2">Insights Clínicos</h3>
              <p className="text-gray-400 text-sm mb-6">Análises baseadas no seu método MPC.</p>
              <div className="space-y-4 mb-6">
                {clinicalInsights.map((insight, index) => {
                  const Icon = insight.icon;
                  return (
                    <div key={index} className="p-4 bg-white/5 rounded-xl backdrop-blur border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-start gap-3">
                        <Icon className={`h-5 w-5 mt-0.5 ${insight.color}`} />
                        <div>
                          <p className="text-sm font-semibold text-white">{insight.title}</p>
                          <p className="text-xs text-gray-400 mt-1">{insight.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="w-full py-3 bg-[#C77F49] hover:bg-[#C77F49]/90 rounded-xl text-sm font-semibold transition-colors icon-hover">Ver Análise Completa</button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-white border-none shadow-sm rounded-2xl">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[#2B2420]">Próximas Sessões</h3>
                <p className="text-xs text-[#6B6359] mt-1">Agenda dos próximos dias</p>
              </div>
              <button className="text-sm text-[#C77F49] font-semibold hover:underline">Ver agenda completa</button>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-2">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-[#F5F3EF] transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F5F3EF] group-hover:bg-[#E7DBC7] transition-colors">
                      <Calendar className="h-5 w-5 text-[#C77F49]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2B2420]">{activity.patient}</p>
                      <p className="text-xs text-[#6B6359]">{activity.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#8B6F5A] w-24 text-right">{activity.time}</span>
                    <Badge variant={activity.statusType === "active" ? "default" : "outline"} className={`${activity.statusType === "active" ? "bg-[#6F7C6D] text-white" : activity.statusType === "confirmed" ? "bg-[#E8F0E9] text-[#6F7C6D] border-[#6F7C6D]" : "bg-[#F5EBE0] text-[#C77F49] border-[#C77F49]"} font-medium`}>
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-none shadow-sm rounded-2xl">
          <CardHeader className="pb-2">
            <h3 className="text-lg font-semibold tracking-tight text-[#2B2420]">Foco de Hoje</h3>
          </CardHeader>
          <CardContent className="pt-4 space-y-3">
            <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#F5F3EF] hover:bg-[#E7DBC7] transition-colors text-left group">
              <div className="p-2 bg-[#C77F49] rounded-lg"><CheckCircle2 className="h-4 w-4 text-white" /></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#2B2420]">Revisar casos pendentes</p>
                <p className="text-xs text-[#6B6359] mt-0.5">3 casos aguardam atualização</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#8B6F5A] group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#F5F3EF] hover:bg-[#E7DBC7] transition-colors text-left group">
              <div className="p-2 bg-[#6F7C6D] rounded-lg"><Activity className="h-4 w-4 text-white" /></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#2B2420]">Registrar evolução</p>
                <p className="text-xs text-[#6B6359] mt-0.5">2 sessões de ontem</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#8B6F5A] group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#F5F3EF] hover:bg-[#E7DBC7] transition-colors text-left group">
              <div className="p-2 bg-[#8B6F5A] rounded-lg"><Users className="h-4 w-4 text-white" /></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#2B2420]">Novo paciente</p>
                <p className="text-xs text-[#6B6359] mt-0.5">Iniciar fluxo de intake</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#8B6F5A] group-hover:translate-x-1 transition-transform" />
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}