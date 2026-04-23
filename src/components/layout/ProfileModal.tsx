"use client";

import { X, User, Mail, CreditCard, LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ProfileDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProfileDrawer({ open, onOpenChange }: ProfileDrawerProps) {
  // Mock user data
  const user = {
    name: "Dra. Clara Silva",
    email: "clarasilva@synapse.system",
    role: "Psicóloga Clínica",
    crp: "CRP 06/12345",
    plan: "Pro",
    avatar: "https://github.com/shadcn.png",
  };

  return (
    <>
      {/* Backdrop com Blur */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => onOpenChange(false)}
      />
      
      {/* Drawer Panel */}
      <div 
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E7DBC7]">
            <h2 className="text-lg font-serif font-semibold text-[#2B2420]">
              Meu Perfil
            </h2>
            <button 
              onClick={() => onOpenChange(false)}
              className="p-2 hover:bg-[#F5F3EF] rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-[#6B6359]" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Avatar e Info Principal */}
            <div className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4 ring-4 ring-[#F5F3EF]">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-gradient-to-br from-[#C77F49] to-[#8B6F5A] text-white text-2xl font-serif">
                  CS
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-serif font-semibold text-[#2B2420]">
                {user.name}
              </h3>
              <p className="text-sm text-[#6B6359] mt-1">{user.role}</p>
              <p className="text-xs text-[#8B6F5A] mt-0.5">{user.crp}</p>
              
              <Badge className="mt-3 bg-[#E8F0E9] text-[#6F7C6D] hover:bg-[#E8F0E9]">
                Plano {user.plan}
              </Badge>
            </div>

            {/* Informações de Conta */}
            <div className="space-y-3">
              <div className="p-4 bg-[#F5F3EF] rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-4 w-4 text-[#8B6F5A]" />
                  <span className="text-xs font-medium text-[#6B6359] uppercase tracking-wide">
                    E-mail
                  </span>
                </div>
                <p className="text-sm text-[#2B2420]">{user.email}</p>
              </div>

              <div className="p-4 bg-[#F5F3EF] rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="h-4 w-4 text-[#8B6F5A]" />
                  <span className="text-xs font-medium text-[#6B6359] uppercase tracking-wide">
                    Assinatura
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#2B2420]">Plano Pro</p>
                  <span className="text-xs text-[#6F7C6D] font-medium">Ativo</span>
                </div>
              </div>
            </div>

            {/* Menu de Ações */}
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#2B2420] hover:bg-[#F5F3EF] transition-colors text-sm font-medium">
                <User className="h-5 w-5 text-[#8B6F5A]" />
                Editar Perfil
              </button>
              
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#2B2420] hover:bg-[#F5F3EF] transition-colors text-sm font-medium">
                <Shield className="h-5 w-5 text-[#8B6F5A]" />
                Privacidade e Segurança
              </button>
              
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#2B2420] hover:bg-[#F5F3EF] transition-colors text-sm font-medium">
                <CreditCard className="h-5 w-5 text-[#8B6F5A]" />
                Faturamento
              </button>
            </div>
          </div>

          {/* Footer - Logout */}
          <div className="p-6 border-t border-[#E7DBC7]">
            <Button 
              variant="outline" 
              className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair da Conta
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}