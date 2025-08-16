"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      showToast({
        type: "success",
        title: isLogin ?
        "Login realizado com sucesso!" :
        "Conta criada com sucesso!",
        message: isLogin ?
        "Bem-vindo de volta!" :
        "Verifique seu email para ativar sua conta."
      });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-primary-100 via-neutral-cream to-primary-50 dark:from-neutral-dark-navy dark:via-black dark:to-neutral-dark-navy flex items-center justify-center p-4"
      data-oid="tqoumhj">

      {/* Background decoration */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        data-oid="3hutjf3">

        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-300/10 rounded-full blur-3xl"
          data-oid="nide1lk">
        </div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl"
          data-oid="qtagvqf">
        </div>
      </div>

      <div className="w-full max-w-md relative z-10" data-oid="h.tf668">
        {/* Header */}
        <div className="text-center mb-8" data-oid="wqleqc3">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 mb-6"
            data-oid="l9nw89b">

            <div
              className="w-10 h-10 bg-primary-300 rounded-regen flex items-center justify-center"
              data-oid="t1.tore">

              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="gj9yqke">

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  data-oid="1kjwi8i" />

              </svg>
            </div>
            <span
              className="text-heading text-2xl font-semibold text-primary-300"
              data-oid="_w-28ut">

              RegenFlix
            </span>
          </Link>

          <h1
            className="text-heading text-3xl font-bold text-neutral-dark-navy dark:text-white mb-2"
            data-oid="8v8i8fa">

            {isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}
          </h1>
          <p className="text-body text-neutral-medium-gray" data-oid="wwo9zqh">
            {isLogin ?
            "Entre para continuar sua jornada regenerativa" :
            "Comece sua jornada de aprendizado regenerativo"}
          </p>
        </div>

        {/* Form Card */}
        <Card className="shadow-regen-hover" data-oid="56y-3ce">
          <CardContent className="p-8" data-oid="kqyrnh6">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              data-oid="059zdrt">

              {!isLogin &&
              <div data-oid="6.vebrw">
                  <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                  data-oid="p3i28q-">

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
                  required={!isLogin}
                  data-oid="j:_bh:z" />

                </div>
              }

              <div data-oid="b5yb.03">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                  data-oid="v-yttus">

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
                  required
                  data-oid="dopg:zn" />

              </div>

              <div data-oid="zcy9gzt">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                  data-oid="rn8h46y">

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
                  required
                  data-oid="ye81246" />

              </div>

              {!isLogin &&
              <div data-oid="9ko7zaf">
                  <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                  data-oid="480k7y5">

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
                  required={!isLogin}
                  data-oid="nidmin9" />

                </div>
              }

              {isLogin &&
              <div
                className="flex items-center justify-between"
                data-oid="o.l8gyz">

                  <label className="flex items-center" data-oid="rsa_ahk">
                    <input
                    type="checkbox"
                    className="w-4 h-4 text-primary-300 bg-white border-neutral-light-gray rounded focus:ring-primary-300 focus:ring-2"
                    data-oid="y9zdj:2" />


                    <span
                    className="ml-2 text-sm text-neutral-medium-gray"
                    data-oid="ypewier">

                      Lembrar de mim
                    </span>
                  </label>
                  <Link
                  href="/forgot-password"
                  className="text-sm text-primary-300 hover:text-primary-400 transition-colors"
                  data-oid="-k54-29">

                    Esqueceu a senha?
                  </Link>
                </div>
              }

              <Button
                type="submit"
                size="lg"
                className="w-full"
                loading={isLoading}
                data-oid="olhpajo">

                {isLogin ? "Entrar" : "Criar conta"}
              </Button>

              <div className="relative" data-oid="u8xtfjq">
                <div
                  className="absolute inset-0 flex items-center"
                  data-oid="bq5_o.r">

                  <div
                    className="w-full border-t border-neutral-light-gray dark:border-neutral-medium-gray"
                    data-oid="ynqdj9-">
                  </div>
                </div>
                <div
                  className="relative flex justify-center text-sm"
                  data-oid="93.r8z5">

                  <span
                    className="px-2 bg-white dark:bg-neutral-dark-navy text-neutral-medium-gray"
                    data-oid="g7-lgl6">

                    ou
                  </span>
                </div>
              </div>

              <Button
                type="button"
                variant="secondary"
                size="lg"
                className="w-full"
                data-oid="pfzvr0f">

                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  data-oid="_ffa7np">

                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    data-oid="ylybmke" />

                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    data-oid="vzixrq3" />

                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    data-oid="qqz7qk-" />

                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    data-oid="9rq6wf3" />

                </svg>
                Continuar com Google
              </Button>
            </form>

            <div className="mt-6 text-center" data-oid="7xs7vmi">
              <p
                className="text-sm text-neutral-medium-gray"
                data-oid="i2d9_:b">

                {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary-300 hover:text-primary-400 font-medium transition-colors"
                  data-oid="ehk.788">

                  {isLogin ? "Cadastre-se" : "Faça login"}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div
          className="mt-8 text-center text-sm text-neutral-medium-gray"
          data-oid="28defak">

          <p data-oid="7lr54xt">
            Ao continuar, você concorda com nossos{" "}
            <Link
              href="/termos-de-uso"
              className="text-primary-300 hover:text-primary-400 transition-colors"
              data-oid=".ffjzdo">

              Termos de Uso
            </Link>{" "}
            e{" "}
            <Link
              href="/politica-de-privacidade"
              className="text-primary-300 hover:text-primary-400 transition-colors"
              data-oid="qjtuw1c">

              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </div>);

}

export default function LoginPage() {
  return (
    <ThemeProvider data-oid=".mzd9o7">
      <ToastProvider data-oid="lv8hbjq">
        <LoginForm data-oid="-mqj_g-" />
      </ToastProvider>
    </ThemeProvider>);

}