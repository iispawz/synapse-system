"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const supabase = createClient();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-[24px] shadow-xl p-8 border border-[#E7DBC7] text-center">
        <div className="h-16 w-16 bg-[#E8F0E9] rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✅</span>
        </div>
        <h2 className="text-2xl font-serif font-semibold text-[#2B2420] mb-2">
          Conta criada!
        </h2>
        <p className="text-[#6B6359] text-sm">
          Verifique seu e-mail para confirmar o cadastro e depois faça login.
        </p>
        <Link href="/login">
          <button className="mt-6 w-full h-12 bg-[#C77F49] text-white rounded-xl font-semibold hover:bg-[#C77F49]/90 transition-colors">
            Ir para Login
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[24px] shadow-xl p-8 border border-[#E7DBC7]">
      <h1 className="text-2xl font-serif font-semibold text-[#2B2420] text-center mb-2">
        Crie sua conta
      </h1>
      <p className="text-[#6B6359] text-center text-sm mb-8">
        Comece a organizar sua prática clínica hoje
      </p>

      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-[#6B6359] uppercase tracking-wide mb-1">
            Nome Completo
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full h-12 px-4 rounded-xl border border-[#E7DBC7] bg-[#F5F3EF] text-[#2B2420] focus:outline-none focus:ring-2 focus:ring-[#C77F49]/20 transition-all"
            placeholder="Dra. Clara Silva"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#6B6359] uppercase tracking-wide mb-1">
            E-mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-12 px-4 rounded-xl border border-[#E7DBC7] bg-[#F5F3EF] text-[#2B2420] focus:outline-none focus:ring-2 focus:ring-[#C77F49]/20 transition-all"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#6B6359] uppercase tracking-wide mb-1">
            Senha
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full h-12 px-4 rounded-xl border border-[#E7DBC7] bg-[#F5F3EF] text-[#2B2420] focus:outline-none focus:ring-2 focus:ring-[#C77F49]/20 transition-all"
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-600 text-xs rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-[#C77F49] text-white rounded-xl font-semibold hover:bg-[#C77F49]/90 transition-colors disabled:opacity-50"
        >
          {loading ? "Criando conta..." : "Cadastrar"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-[#6B6359]">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-[#C77F49] font-medium hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}