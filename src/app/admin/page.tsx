"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Mock admin data
const adminStats = {
  totalUsers: 52847,
  activeSubscriptions: 18293,
  totalCourses: 156,
  totalRevenue: 847293.5,
  monthlyGrowth: 12.5,
  newUsersToday: 127,
  coursesCompleted: 8934,
  supportTickets: 23
};

const recentActivity = [
{
  type: "user_signup",
  message: "Novo usuário cadastrado: maria.silva@email.com",
  time: "2 min atrás",
  icon: "👤"
},
{
  type: "course_completed",
  message: "Curso 'Agroecologia Regenerativa' concluído por João Santos",
  time: "5 min atrás",
  icon: "🎓"
},
{
  type: "subscription",
  message: "Nova assinatura Premium: Ana Costa",
  time: "12 min atrás",
  icon: "💳"
},
{
  type: "support",
  message: "Novo ticket de suporte #1234 criado",
  time: "18 min atrás",
  icon: "🎫"
},
{
  type: "content",
  message: "Novo curso 'Bioconstrução Avançada' publicado",
  time: "1 hora atrás",
  icon: "📚"
}];


const quickActions = [
{
  title: "Gerenciar Usuários",
  description: "Visualizar e gerenciar contas de usuários",
  icon: "👥",
  href: "/admin/usuarios",
  color: "bg-blue-500"
},
{
  title: "Conteúdo",
  description: "Adicionar e editar cursos e materiais",
  icon: "📖",
  href: "/admin/conteudo",
  color: "bg-green-500"
},
{
  title: "Relatórios",
  description: "Visualizar métricas e relatórios",
  icon: "📊",
  href: "/admin/relatorios",
  color: "bg-purple-500"
},
{
  title: "Configurações",
  description: "Configurações gerais da plataforma",
  icon: "⚙️",
  href: "/admin/configuracoes",
  color: "bg-gray-500"
}];


function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("7d");

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  };

  const formatNumber = (value: number) => {
    return value.toLocaleString("pt-BR");
  };

  return (
    <div
      className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
      data-oid="2gy:4up">

      {/* Admin Header */}
      <header
        className="bg-white dark:bg-neutral-dark-navy border-b border-neutral-light-gray dark:border-neutral-medium-gray"
        data-oid="a4nd-hp">

        <div className="px-6 py-4" data-oid="e-_j6h.">
          <div className="flex items-center justify-between" data-oid="varx74h">
            <div className="flex items-center space-x-4" data-oid="lyurdg2">
              <div
                className="w-10 h-10 bg-primary-300 rounded-regen flex items-center justify-center"
                data-oid=".ensop6">

                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="hl6jeay">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    data-oid="5xx3l_3" />

                </svg>
              </div>
              <div data-oid="rvabl5o">
                <h1
                  className="text-heading text-2xl font-bold text-neutral-dark-navy dark:text-white"
                  data-oid=".8kdeug">

                  RegenFlix Admin
                </h1>
                <p
                  className="text-body text-sm text-neutral-medium-gray"
                  data-oid="e:-ojf1">

                  Painel de Administração
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4" data-oid="ca04t-7">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="input-regen text-sm"
                data-oid="ml.fa0w">

                <option value="24h" data-oid="xw:9yu-">
                  Últimas 24h
                </option>
                <option value="7d" data-oid="mgvj8h1">
                  Últimos 7 dias
                </option>
                <option value="30d" data-oid="n4xq0y1">
                  Últimos 30 dias
                </option>
                <option value="90d" data-oid="2wa0dkb">
                  Últimos 90 dias
                </option>
              </select>

              <div className="flex items-center space-x-2" data-oid="3-z878c">
                <img
                  src="/api/placeholder/40/40"
                  alt="Admin"
                  className="w-10 h-10 rounded-full"
                  data-oid="6d3qw9g" />


                <div className="text-right" data-oid="9gbb7e0">
                  <p
                    className="text-heading text-sm font-medium"
                    data-oid="3_qdaoy">

                    Admin User
                  </p>
                  <p
                    className="text-body text-xs text-neutral-medium-gray"
                    data-oid="7wk77op">

                    Administrador
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex" data-oid="4y..gx9">
        {/* Sidebar */}
        <aside
          className="w-64 bg-white dark:bg-neutral-dark-navy border-r border-neutral-light-gray dark:border-neutral-medium-gray min-h-screen"
          data-oid="_ar32wj">

          <nav className="p-4" data-oid="f80tn:8">
            <div className="space-y-2" data-oid="7fj9uki">
              {[
              { name: "Dashboard", icon: "📊", href: "/admin", active: true },
              { name: "Usuários", icon: "👥", href: "/admin/usuarios" },
              { name: "Cursos", icon: "🎓", href: "/admin/cursos" },
              { name: "Vídeos", icon: "📹", href: "/admin/videos" },
              { name: "PDFs", icon: "📄", href: "/admin/pdfs" },
              { name: "Loja", icon: "🛒", href: "/admin/loja" },
              { name: "Relatórios", icon: "📈", href: "/admin/relatorios" },
              {
                name: "Configurações",
                icon: "⚙️",
                href: "/admin/configuracoes"
              }].
              map((item) =>
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-regen text-sm transition-colors ${
                item.active ?
                "bg-primary-100 dark:bg-primary-900 text-primary-300" :
                "text-neutral-medium-gray hover:bg-neutral-light-gray dark:hover:bg-black hover:text-neutral-dark-navy dark:hover:text-white"}`
                }
                data-oid="4g9.693">

                  <span data-oid="365w_ht">{item.icon}</span>
                  <span data-oid="lkk6f-a">{item.name}</span>
                </a>
              )}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6" data-oid="5:p3z0q">
          {/* Stats Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            data-oid="pcr52t0">

            <div
              className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-6"
              data-oid="oh0l5s3">

              <div
                className="flex items-center justify-between"
                data-oid="llftsm-">

                <div data-oid="evcp9fb">
                  <p
                    className="text-body text-sm text-neutral-medium-gray"
                    data-oid="2dc.trr">

                    Total de Usuários
                  </p>
                  <p
                    className="text-heading text-2xl font-bold text-neutral-dark-navy dark:text-white"
                    data-oid="bk6shwi">

                    {formatNumber(adminStats.totalUsers)}
                  </p>
                </div>
                <div
                  className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-regen flex items-center justify-center"
                  data-oid="_re-yug">

                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="nnas3xj">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      data-oid="6-vbcaj" />

                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center" data-oid="s3x2-0y">
                <Badge variant="success" size="sm" data-oid="rd97uqu">
                  +{adminStats.newUsersToday} hoje
                </Badge>
              </div>
            </div>

            <div
              className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-6"
              data-oid="xk:zoys">

              <div
                className="flex items-center justify-between"
                data-oid="54lq972">

                <div data-oid="01sh1m7">
                  <p
                    className="text-body text-sm text-neutral-medium-gray"
                    data-oid="t57x7gx">

                    Assinaturas Ativas
                  </p>
                  <p
                    className="text-heading text-2xl font-bold text-neutral-dark-navy dark:text-white"
                    data-oid="9jv5:.o">

                    {formatNumber(adminStats.activeSubscriptions)}
                  </p>
                </div>
                <div
                  className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-regen flex items-center justify-center"
                  data-oid="1lvkyfs">

                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="tvyuszg">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      data-oid="4081fab" />

                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center" data-oid="l6ijge4">
                <Badge variant="success" size="sm" data-oid="yb:stsq">
                  +{adminStats.monthlyGrowth}% este mês
                </Badge>
              </div>
            </div>

            <div
              className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-6"
              data-oid="dx_egh.">

              <div
                className="flex items-center justify-between"
                data-oid="kco_on3">

                <div data-oid="sfpjlpn">
                  <p
                    className="text-body text-sm text-neutral-medium-gray"
                    data-oid="6cy_ze5">

                    Total de Cursos
                  </p>
                  <p
                    className="text-heading text-2xl font-bold text-neutral-dark-navy dark:text-white"
                    data-oid="0ex00ac">

                    {formatNumber(adminStats.totalCourses)}
                  </p>
                </div>
                <div
                  className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-regen flex items-center justify-center"
                  data-oid="x-3lzdj">

                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="p5zbpod">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                      data-oid="zfqh06f" />

                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center" data-oid="nvj433a">
                <Badge variant="info" size="sm" data-oid="5bs8q..">
                  {adminStats.coursesCompleted} concluídos
                </Badge>
              </div>
            </div>

            <div
              className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-6"
              data-oid="5gjp2dn">

              <div
                className="flex items-center justify-between"
                data-oid="2kv93a3">

                <div data-oid="q10lg35">
                  <p
                    className="text-body text-sm text-neutral-medium-gray"
                    data-oid="fzmwdwr">

                    Receita Total
                  </p>
                  <p
                    className="text-heading text-2xl font-bold text-neutral-dark-navy dark:text-white"
                    data-oid="zthnsjs">

                    {formatCurrency(adminStats.totalRevenue)}
                  </p>
                </div>
                <div
                  className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-regen flex items-center justify-center"
                  data-oid="m4d4b:c">

                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="oo9x339">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      data-oid="53ify03" />

                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center" data-oid="ah2.lrx">
                <Badge variant="warning" size="sm" data-oid="mxrvc6u">
                  {adminStats.supportTickets} tickets abertos
                </Badge>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            data-oid="w6s8.m8">

            {/* Quick Actions */}
            <div
              className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-6"
              data-oid="eh_xn1s">

              <h3
                className="text-heading text-xl font-semibold mb-6"
                data-oid="wqucmkl">

                Ações Rápidas
              </h3>
              <div className="grid grid-cols-2 gap-4" data-oid="-u-4u.:">
                {quickActions.map((action, index) =>
                <a
                  key={index}
                  href={action.href}
                  className="p-4 border border-neutral-light-gray dark:border-neutral-medium-gray rounded-regen-lg hover:shadow-regen transition-all duration-200 group"
                  data-oid="p0797qh">

                    <div
                    className={`w-10 h-10 ${action.color} rounded-regen flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                    data-oid="y_llb1:">

                      <span className="text-white text-lg" data-oid="8fsc8ww">
                        {action.icon}
                      </span>
                    </div>
                    <h4
                    className="text-heading font-medium mb-1"
                    data-oid="wxrm_x_">

                      {action.title}
                    </h4>
                    <p
                    className="text-body text-sm text-neutral-medium-gray"
                    data-oid="bus0:ml">

                      {action.description}
                    </p>
                  </a>
                )}
              </div>
            </div>

            {/* Recent Activity */}
            <div
              className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-6"
              data-oid=".rks26e">

              <div
                className="flex items-center justify-between mb-6"
                data-oid="5735g_o">

                <h3
                  className="text-heading text-xl font-semibold"
                  data-oid=".2pynd-">

                  Atividade Recente
                </h3>
                <Button size="sm" variant="secondary" data-oid="lovwlfy">
                  Ver Todas
                </Button>
              </div>
              <div className="space-y-4" data-oid="7s_ymn.">
                {recentActivity.map((activity, index) =>
                <div
                  key={index}
                  className="flex items-start space-x-3"
                  data-oid="ysfx9_d">

                    <div
                    className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0"
                    data-oid="cn3wady">

                      <span className="text-sm" data-oid="7i6:och">
                        {activity.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0" data-oid="90f2197">
                      <p
                      className="text-body text-sm text-neutral-dark-navy dark:text-white"
                      data-oid="aur514s">

                        {activity.message}
                      </p>
                      <p
                      className="text-body text-xs text-neutral-medium-gray"
                      data-oid="r8pa_tw">

                        {activity.time}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div
            className="mt-8 bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-6"
            data-oid=":qjp9n1">

            <div
              className="flex items-center justify-between mb-6"
              data-oid="9ncoilt">

              <h3
                className="text-heading text-xl font-semibold"
                data-oid="f8.h_d9">

                Métricas de Crescimento
              </h3>
              <div className="flex space-x-2" data-oid="51yti54">
                <Button size="sm" variant="secondary" data-oid="crc_n02">
                  Usuários
                </Button>
                <Button size="sm" variant="secondary" data-oid="mw58hvd">
                  Receita
                </Button>
                <Button size="sm" data-oid="kkw-0-x">
                  Assinaturas
                </Button>
              </div>
            </div>
            <div
              className="h-64 bg-neutral-light-gray dark:bg-black rounded-regen-lg flex items-center justify-center"
              data-oid="fc6s3a1">

              <div
                className="text-center text-neutral-medium-gray"
                data-oid="m3alhc2">

                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="7y-va_u">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    data-oid="b:d84.v" />

                </svg>
                <p className="text-lg font-medium" data-oid="33wwyzl">
                  Gráfico de Métricas
                </p>
                <p className="text-sm" data-oid="7zu7-9v">
                  Dados dos últimos {timeRange}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>);

}

export default function AdminPage() {
  return (
    <ThemeProvider data-oid="jo4wnh_">
      <ToastProvider data-oid="z93qyku">
        <AdminDashboard data-oid="1xxq:1o" />
      </ToastProvider>
    </ThemeProvider>);

}