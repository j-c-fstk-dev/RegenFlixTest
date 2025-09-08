"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";
import { createClient } from '@/lib/supabase';
import { Card, CardContent } from "@/components/ui/Card";
import { useRouter } from "next/navigation";

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  });
  const { showToast } = useToast();
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { email, password, name, confirmPassword } = formData;

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setIsLoading(false);
      if (error) {
        showToast({ type: "error", title: "Erro ao fazer login", message: error.message });
      } else {
        showToast({ type: "success", title: "Login realizado com sucesso!", message: "Bem-vindo de volta!" });
        router.push("/");
      }
    } else {
      // Adiciona validação de senhas
      if (password !== confirmPassword) {
        showToast({
          type: "error",
          title: "Erro de cadastro",
          message: "As senhas não coincidem."
        });
        setIsLoading(false);
        return;
      }
      
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name, // Aqui passamos o nome para o Supabase
          },
        },
      });
      setIsLoading(false);
      if (error) {
        showToast({ type: "error", title: "Erro ao criar conta", message: error.message });
      } else {
        showToast({
          type: "success",
          title: "Conta criada com sucesso!",
          message: "Verifique seu email para ativar sua conta."
        });
        setIsLogin(true); // Redireciona o usuário para a tela de login após o cadastro
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-primary-100 via-neutral-cream to-primary-50 dark:from-neutral-dark-navy dark:via-black dark:to-neutral-dark-navy flex items-center justify-center p-4">

      {/* Background decoration */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-300/10 rounded-full blur-3xl">
        </div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl">
        </div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 mb-6">

            <div
              className="w-10 h-10 bg-primary-300 rounded-regen flex items-center justify-center">

              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />

              </svg>
            </div>
            <span
              className="text-heading text-2xl font-semibold text-primary-300">

              RegenFlix
            </span>
          </Link>

          <h1
            className="text-heading text-3xl font-bold text-neutral-dark-navy dark:text-white mb-2">

            {isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}
          </h1>
          <p className="text-body text-neutral-medium-gray">
            {isLogin ?
            "Entre para continuar sua jornada regenerativa" :
            "Comece sua jornada de aprendizado regenerativo"}
          </p>
        </div>

        {/* Form Card */}
        <Card className="shadow-regen-hover">
          <CardContent className="p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-6">

              {!isLogin &&
              <div>
                  <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2">

                    Nome completo
                  </label>
                  <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-regen"
                  placeholder="Seu nome completo"
                  required={!isLogin} />

                </div>
              }

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2">

                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-regen"
                  placeholder="seu@email.com"
                  required />

              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2">

                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input-regen"
                  placeholder="••••••••"
                  required />

              </div>

              {!isLogin &&
              <div>
                  <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2">

                    Confirmar senha
                  </label>
                  <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="input-regen"
                  placeholder="••••••••"
                  required={!isLogin} />

                </div>
              }

              {isLogin &&
              <div
                className="flex items-center justify-between">

                  <label className="flex items-center">
                    <input
                    type="checkbox"
                    className="w-4 h-4 text-primary-300 bg-white border-neutral-light-gray rounded focus:ring-primary-300 focus:ring-2" />


                    <span
                    className="ml-2 text-sm text-neutral-medium-gray">

                      Lembrar de mim
                    </span>
                  </label>
                  <Link
                  href="/forgot-password"
                  className="text-sm text-primary-300 hover:text-primary-400 transition-colors">

                    Esqueceu a senha?
                  </Link>
                </div>
              }

              <Button
                type="submit"
                size="lg"
                className="w-full"
                loading={isLoading}>

                {isLogin ? "Entrar" : "Criar conta"}
              </Button>

              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center">

                  <div
                    className="w-full border-t border-neutral-light-gray dark:border-neutral-medium-gray">
                  </div>
                </div>
                <div
                  className="relative flex justify-center text-sm">

                  <span
                    className="px-2 bg-white dark:bg-neutral-dark-navy text-neutral-medium-gray">

                    ou
                  </span>
                </div>
              </div>

              <Button
                type="button"
                variant="secondary"
                size="lg"
                className="w-full">

                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24">

                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />

                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />

                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />

                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />

                </svg>
                Continuar com Google
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p
                className="text-sm text-neutral-medium-gray">

                {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary-300 hover:text-primary-400 font-medium transition-colors">

                  {isLogin ? "Cadastre-se" : "Faça login"}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div
          className="mt-8 text-center text-sm text-neutral-medium-gray">

          <p>
            Ao continuar, você concorda com nossos{" "}
            <Link
              href="/termos-de-uso"
              className="text-primary-300 hover:text-primary-400 transition-colors">

              Termos de Uso
            </Link>{" "}
            e{" "}
            <Link
              href="/politica-de-privacidade"
              className="text-primary-300 hover:text-primary-400 transition-colors">

              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <LoginForm />
      </ToastProvider>
    </ThemeProvider>
  );
}
