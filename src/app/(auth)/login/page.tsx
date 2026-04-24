"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/app/dashboard");
    }
  };

  return (
    <div className="bg-white rounded-[24px] shadow-xl p-8 border border-[#E7DBC7]">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#C77F49] to-[#8B6F5A] flex items-center justify-center text-white font-serif text-xl font-bold">
          S
        </div>
      </div>

      <h1 className="text-2xl font-serif font-semibold text-[#2B2420] text-center mb-2">
        Bem-vinda de volta
      </h1>
      <p className="text-[#6B6359] text-center text-sm mb-8">
        Entre na sua conta para acessar o Synapse
      </p>

      <form onSubmit={handleLogin} className="space-y-4">
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
            className="w-full h-12 px-4 rounded-xl border border-[#E7DBC7] bg-[#F5F3EF] text-[#2B2420] focus:outline-none focus:ring-2 focus:ring-[#C77F49]/20 transition-all"
            placeholder="••••••••"
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
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-[#6B6359]">
          Não tem uma conta?{" "}
          <Link href="/signup" className="text-[#C77F49] font-medium hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}