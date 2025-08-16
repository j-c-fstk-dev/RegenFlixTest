"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";

// Mock user data
const userData = {
  id: "user123",
  name: "Maria Fernanda Silva",
  email: "maria.fernanda@email.com",
  avatar: "/api/placeholder/120/120",
  joinDate: "2023-06-15",
  location: "São Paulo, SP",
  bio: "Apaixonada por agricultura regenerativa e sustentabilidade. Sempre em busca de conhecimento para criar um mundo mais verde.",

  // Subscription info
  subscription: {
    plan: "Premium",
    status: "active",
    nextBilling: "2024-02-15",
    price: 29.9
  },

  // Learning stats
  stats: {
    coursesCompleted: 12,
    coursesInProgress: 3,
    totalWatchTime: "45h 30min",
    certificatesEarned: 8,
    booksRead: 15,
    favoriteContent: 23
  },

  // Recent activity
  recentActivity: [
  {
    type: "course_completed",
    title: "Introdução à Agroecologia Regenerativa",
    date: "2024-01-20",
    icon: "🎓"
  },
  {
    type: "certificate_earned",
    title: "Certificado em Permacultura Básica",
    date: "2024-01-18",
    icon: "🏆"
  },
  {
    type: "book_read",
    title: "Manual de Compostagem Urbana",
    date: "2024-01-15",
    icon: "📚"
  },
  {
    type: "course_started",
    title: "Sistemas Agroflorestais Avançados",
    date: "2024-01-12",
    icon: "🌱"
  }],


  // Achievements
  achievements: [
  {
    id: "first_course",
    title: "Primeiro Curso",
    description: "Completou seu primeiro curso",
    icon: "🎯",
    earned: true,
    earnedDate: "2023-07-01"
  },
  {
    id: "knowledge_seeker",
    title: "Buscador de Conhecimento",
    description: "Completou 10 cursos",
    icon: "📖",
    earned: true,
    earnedDate: "2023-12-15"
  },
  {
    id: "eco_warrior",
    title: "Guerreiro Ecológico",
    description: "Leu 15 livros sobre sustentabilidade",
    icon: "🌍",
    earned: true,
    earnedDate: "2024-01-10"
  },
  {
    id: "master_learner",
    title: "Mestre do Aprendizado",
    description: "Completou 20 cursos",
    icon: "🏅",
    earned: false,
    progress: 60
  },
  {
    id: "community_helper",
    title: "Ajudante da Comunidade",
    description: "Ajudou 50 pessoas na comunidade",
    icon: "🤝",
    earned: false,
    progress: 30
  }]

};

function ProfileContent() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<
    "overview" | "activity" | "achievements" | "settings">(
    "overview");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    location: userData.location,
    bio: userData.bio
  });

  const handleSaveProfile = () => {
    // In a real app, this would make an API call
    setIsEditing(false);
    showToast({
      type: "success",
      title: "Perfil atualizado!",
      message: "Suas informações foram salvas com sucesso."
    });
  };

  const handleCancelEdit = () => {
    setFormData({
      name: userData.name,
      email: userData.email,
      location: userData.location,
      bio: userData.bio
    });
    setIsEditing(false);
  };

  const getActivityIcon = (type: string) => {
    const icons = {
      course_completed: "🎓",
      certificate_earned: "🏆",
      book_read: "📚",
      course_started: "🌱"
    };
    return icons[type as keyof typeof icons] || "📝";
  };

  const getActivityText = (activity: any) => {
    const texts = {
      course_completed: "Completou o curso",
      certificate_earned: "Conquistou",
      book_read: "Leu o livro",
      course_started: "Iniciou o curso"
    };
    return texts[activity.type as keyof typeof texts] || "Atividade";
  };

  return (
    <div
      className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
      data-oid=".0d0sak">

      <Header data-oid="vegytff" />

      <main className="pt-20" data-oid="6fd_1rb">
        <div className="container-regen py-8" data-oid="eouku4d">
          {/* Profile Header */}
          <div
            className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-8 mb-8"
            data-oid="nn527a9">

            <div
              className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8"
              data-oid="jeyibs3">

              <div className="relative" data-oid="vkzji4a">
                <img
                  src={userData.avatar}
                  alt={userData.name}
                  className="w-32 h-32 rounded-full object-cover"
                  data-oid="64hqm:a" />


                <div
                  className="absolute bottom-0 right-0 w-8 h-8 bg-success rounded-full border-4 border-white dark:border-neutral-dark-navy flex items-center justify-center"
                  data-oid="qi11_s_">

                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="x:nyid0">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                      data-oid="oxw5wq0" />

                  </svg>
                </div>
              </div>

              <div className="flex-1" data-oid="xtthxpv">
                <div
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"
                  data-oid="6._gxao">

                  <div data-oid="nd4y0yk">
                    <h1
                      className="text-heading text-3xl font-bold text-neutral-dark-navy dark:text-white mb-2"
                      data-oid="qwi.rbi">

                      {userData.name}
                    </h1>
                    <p
                      className="text-body text-neutral-medium-gray mb-2"
                      data-oid="7utf_bw">

                      {userData.email}
                    </p>
                    <div
                      className="flex items-center space-x-4 text-sm text-neutral-medium-gray"
                      data-oid="bd_g351">

                      <div
                        className="flex items-center space-x-1"
                        data-oid="dngt:j5">

                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="o5aqlvg">

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            data-oid=":8tg4ya" />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            data-oid="wbn_x88" />

                        </svg>
                        <span data-oid="_savl4j">{userData.location}</span>
                      </div>
                      <div
                        className="flex items-center space-x-1"
                        data-oid="yxo6l8y">

                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="4bpk493">

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 2m8-2l2 2m-2-2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V9"
                            data-oid="zhzlitj" />

                        </svg>
                        <span data-oid="1vc1w40">
                          Membro desde{" "}
                          {new Date(userData.joinDate).toLocaleDateString(
                            "pt-BR"
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center space-x-2"
                    data-oid=".6mxh67">

                    <Badge variant="success" size="lg" data-oid="-gxrky-">
                      {userData.subscription.plan}
                    </Badge>
                    <Button
                      variant="secondary"
                      onClick={() => setIsEditing(!isEditing)}
                      data-oid="rnmkk0k">

                      {isEditing ? "Cancelar" : "Editar Perfil"}
                    </Button>
                  </div>
                </div>

                <p
                  className="text-body text-neutral-medium-gray"
                  data-oid="j3vz9y5">

                  {userData.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            data-oid="v6:f5ns">

            <div
              className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-6 text-center"
              data-oid="-elfycl">

              <div
                className="text-3xl font-bold text-primary-300 mb-2"
                data-oid="r3:4r2r">

                {userData.stats.coursesCompleted}
              </div>
              <div
                className="text-sm text-neutral-medium-gray"
                data-oid="vrrxz7n">

                Cursos Concluídos
              </div>
            </div>
            <div
              className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-6 text-center"
              data-oid="f4vi588">

              <div
                className="text-3xl font-bold text-primary-300 mb-2"
                data-oid="-l0gc-m">

                {userData.stats.certificatesEarned}
              </div>
              <div
                className="text-sm text-neutral-medium-gray"
                data-oid="7vbtovl">

                Certificados
              </div>
            </div>
            <div
              className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-6 text-center"
              data-oid="_fi_kk.">

              <div
                className="text-3xl font-bold text-primary-300 mb-2"
                data-oid="hoi1:f3">

                {userData.stats.booksRead}
              </div>
              <div
                className="text-sm text-neutral-medium-gray"
                data-oid="7.dx4_z">

                Livros Lidos
              </div>
            </div>
            <div
              className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-6 text-center"
              data-oid="qxn94ac">

              <div
                className="text-3xl font-bold text-primary-300 mb-2"
                data-oid="l4f4up8">

                {userData.stats.totalWatchTime}
              </div>
              <div
                className="text-sm text-neutral-medium-gray"
                data-oid=".z.q:ql">

                Tempo de Estudo
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div
            className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen overflow-hidden"
            data-oid="gjbtfvw">

            <div
              className="flex border-b border-neutral-light-gray dark:border-neutral-medium-gray"
              data-oid="x.78o.h">

              {[
              { id: "overview", label: "Visão Geral", icon: "👤" },
              { id: "activity", label: "Atividade Recente", icon: "📊" },
              { id: "achievements", label: "Conquistas", icon: "🏆" },
              { id: "settings", label: "Configurações", icon: "⚙️" }].
              map((tab) =>
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 py-4 px-6 text-sm font-medium transition-colors ${
                activeTab === tab.id ?
                "bg-primary-50 dark:bg-primary-900 text-primary-300 border-b-2 border-primary-300" :
                "text-neutral-medium-gray hover:text-neutral-dark-navy dark:hover:text-white"}`
                }
                data-oid="yj.wv18">

                  <span className="mr-2" data-oid="61_urmr">
                    {tab.icon}
                  </span>
                  {tab.label}
                </button>
              )}
            </div>

            {/* Tab Content */}
            <div className="p-8" data-oid="l:k9e3r">
              {activeTab === "overview" &&
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                data-oid="v_s2vn2">

                  {/* Current Courses */}
                  <div data-oid="l71ffq1">
                    <h3
                    className="text-heading text-xl font-semibold mb-4"
                    data-oid="o-ydsat">

                      Cursos em Andamento
                    </h3>
                    <div className="space-y-4" data-oid="b3qx1t_">
                      {[
                    {
                      title: "Sistemas Agroflorestais Avançados",
                      progress: 65
                    },
                    {
                      title: "Bioconstrução com Materiais Locais",
                      progress: 30
                    },
                    { title: "Gestão de Recursos Hídricos", progress: 85 }].
                    map((course, index) =>
                    <div
                      key={index}
                      className="p-4 bg-neutral-light-gray dark:bg-black rounded-regen-lg"
                      data-oid="zmfz345">

                          <div
                        className="flex items-center justify-between mb-2"
                        data-oid="7zv2844">

                            <h4
                          className="text-heading font-medium"
                          data-oid="l-ulv2q">

                              {course.title}
                            </h4>
                            <span
                          className="text-sm text-neutral-medium-gray"
                          data-oid="9xv_uds">

                              {course.progress}%
                            </span>
                          </div>
                          <ProgressBar
                        progress={course.progress}
                        data-oid="fwwe.lb" />

                        </div>
                    )}
                    </div>
                  </div>

                  {/* Subscription Info */}
                  <div data-oid="c57yxzl">
                    <h3
                    className="text-heading text-xl font-semibold mb-4"
                    data-oid="yiaanty">

                      Assinatura
                    </h3>
                    <div
                    className="p-6 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900 dark:to-primary-800 rounded-regen-lg"
                    data-oid="jh.k9gw">

                      <div
                      className="flex items-center justify-between mb-4"
                      data-oid="eym8s5h">

                        <div data-oid="onyxy8f">
                          <h4
                          className="text-heading text-lg font-semibold"
                          data-oid="cd5ys0o">

                            Plano {userData.subscription.plan}
                          </h4>
                          <p
                          className="text-body text-sm text-neutral-medium-gray"
                          data-oid="bq2.ywq">

                            Próxima cobrança:{" "}
                            {new Date(
                            userData.subscription.nextBilling
                          ).toLocaleDateString("pt-BR")}
                          </p>
                        </div>
                        <Badge variant="success" data-oid="dglel1d">
                          Ativo
                        </Badge>
                      </div>
                      <div
                      className="flex items-center justify-between"
                      data-oid="vp0-bqa">

                        <span
                        className="text-2xl font-bold text-primary-300"
                        data-oid="2uo-5cc">

                          R$ {userData.subscription.price.toFixed(2)}/mês
                        </span>
                        <Button
                        variant="secondary"
                        size="sm"
                        data-oid="4_hwsxt">

                          Gerenciar Plano
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              }

              {activeTab === "activity" &&
              <div data-oid="slz5gvi">
                  <h3
                  className="text-heading text-xl font-semibold mb-6"
                  data-oid="c-4el2f">

                    Atividade Recente
                  </h3>
                  <div className="space-y-4" data-oid="lwog.:h">
                    {userData.recentActivity.map((activity, index) =>
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-neutral-light-gray dark:bg-black rounded-regen-lg"
                    data-oid="8ojf88_">

                        <div
                      className="w-10 h-10 bg-primary-300 rounded-full flex items-center justify-center text-white text-lg"
                      data-oid="9x8bkjk">

                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1" data-oid="e6j_hjw">
                          <p
                        className="text-heading font-medium"
                        data-oid="8y-x-6m">

                            {getActivityText(activity)} "{activity.title}"
                          </p>
                          <p
                        className="text-body text-sm text-neutral-medium-gray"
                        data-oid="yw1i70g">

                            {new Date(activity.date).toLocaleDateString(
                          "pt-BR"
                        )}
                          </p>
                        </div>
                      </div>
                  )}
                  </div>
                </div>
              }

              {activeTab === "achievements" &&
              <div data-oid="exu3jll">
                  <h3
                  className="text-heading text-xl font-semibold mb-6"
                  data-oid="bsvagx2">

                    Conquistas
                  </h3>
                  <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  data-oid="8du41pe">

                    {userData.achievements.map((achievement) =>
                  <div
                    key={achievement.id}
                    className={`p-6 rounded-regen-lg border-2 transition-all ${
                    achievement.earned ?
                    "bg-success/10 border-success" :
                    "bg-neutral-light-gray dark:bg-black border-neutral-light-gray dark:border-neutral-medium-gray"}`
                    }
                    data-oid="saqc427">

                        <div className="text-center" data-oid="sgm9bb9">
                          <div
                        className={`text-4xl mb-3 ${
                        achievement.earned ? "" : "grayscale opacity-50"}`
                        }
                        data-oid="m0zjlf1">

                            {achievement.icon}
                          </div>
                          <h4
                        className="text-heading font-semibold mb-2"
                        data-oid="bh3tjfs">

                            {achievement.title}
                          </h4>
                          <p
                        className="text-body text-sm text-neutral-medium-gray mb-3"
                        data-oid="koxfcq1">

                            {achievement.description}
                          </p>

                          {achievement.earned ?
                      <Badge
                        variant="success"
                        size="sm"
                        data-oid="hqivgxv">

                              Conquistado em{" "}
                              {new Date(
                          achievement.earnedDate!
                        ).toLocaleDateString("pt-BR")}
                            </Badge> :

                      <div data-oid="6dnms4w">
                              <div className="mb-2" data-oid="oh7vhgw">
                                <ProgressBar
                            progress={achievement.progress || 0}
                            data-oid="d-61l_x" />

                              </div>
                              <span
                          className="text-xs text-neutral-medium-gray"
                          data-oid=".8:t8r5">

                                {achievement.progress || 0}% completo
                              </span>
                            </div>
                      }
                        </div>
                      </div>
                  )}
                  </div>
                </div>
              }

              {activeTab === "settings" &&
              <div data-oid="3zxvqpi">
                  <h3
                  className="text-heading text-xl font-semibold mb-6"
                  data-oid=".rdtq7j">

                    Configurações do Perfil
                  </h3>

                  {isEditing ?
                <div className="max-w-2xl" data-oid="8x9:9wv">
                      <div className="space-y-6" data-oid="ki5kldn">
                        <div data-oid="-p4llx0">
                          <label
                        className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                        data-oid="cbureh5">

                            Nome Completo
                          </label>
                          <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                        }
                        className="input-regen"
                        data-oid="4mh31kd" />

                        </div>

                        <div data-oid="9a37st-">
                          <label
                        className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                        data-oid="2nsporg">

                            Email
                          </label>
                          <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value
                        })
                        }
                        className="input-regen"
                        data-oid="y_uy:6r" />

                        </div>

                        <div data-oid="0z4oukb">
                          <label
                        className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                        data-oid="7h10-lw">

                            Localização
                          </label>
                          <input
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                        setFormData({
                          ...formData,
                          location: e.target.value
                        })
                        }
                        className="input-regen"
                        data-oid="54x1o7o" />

                        </div>

                        <div data-oid="4iyj3y2">
                          <label
                        className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                        data-oid="ggc.4d2">

                            Bio
                          </label>
                          <textarea
                        value={formData.bio}
                        onChange={(e) =>
                        setFormData({ ...formData, bio: e.target.value })
                        }
                        rows={4}
                        className="input-regen resize-none"
                        data-oid="9wttk6q" />

                        </div>

                        <div className="flex space-x-4" data-oid="4jritom">
                          <Button
                        onClick={handleSaveProfile}
                        data-oid="l2tx554">

                            Salvar Alterações
                          </Button>
                          <Button
                        variant="secondary"
                        onClick={handleCancelEdit}
                        data-oid="knv5qrk">

                            Cancelar
                          </Button>
                        </div>
                      </div>
                    </div> :

                <div className="space-y-6" data-oid="..03lz5">
                      <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    data-oid=":mn1s7p">

                        <div
                      className="p-4 bg-neutral-light-gray dark:bg-black rounded-regen-lg"
                      data-oid="zjuz72u">

                          <h4
                        className="text-heading font-medium mb-2"
                        data-oid="wfcgnpt">

                            Notificações
                          </h4>
                          <div className="space-y-3" data-oid="gjgpmos">
                            <label
                          className="flex items-center space-x-2"
                          data-oid="k5:et__">

                              <input
                            type="checkbox"
                            defaultChecked
                            className="w-4 h-4 text-primary-300 rounded"
                            data-oid="f05ibjr" />

                              <span className="text-sm" data-oid="hp07u12">
                                Novos cursos disponíveis
                              </span>
                            </label>
                            <label
                          className="flex items-center space-x-2"
                          data-oid="bvqemtx">

                              <input
                            type="checkbox"
                            defaultChecked
                            className="w-4 h-4 text-primary-300 rounded"
                            data-oid="_b:0b38" />

                              <span className="text-sm" data-oid="584-t6f">
                                Lembretes de estudo
                              </span>
                            </label>
                            <label
                          className="flex items-center space-x-2"
                          data-oid="lc_o_nd">

                              <input
                            type="checkbox"
                            className="w-4 h-4 text-primary-300 rounded"
                            data-oid="4bdub:h" />

                              <span className="text-sm" data-oid="hdpktgo">
                                Newsletter semanal
                              </span>
                            </label>
                          </div>
                        </div>

                        <div
                      className="p-4 bg-neutral-light-gray dark:bg-black rounded-regen-lg"
                      data-oid="sgmzzbj">

                          <h4
                        className="text-heading font-medium mb-2"
                        data-oid="uqdway6">

                            Privacidade
                          </h4>
                          <div className="space-y-3" data-oid=".15u8k-">
                            <label
                          className="flex items-center space-x-2"
                          data-oid="o2:j0vh">

                              <input
                            type="checkbox"
                            defaultChecked
                            className="w-4 h-4 text-primary-300 rounded"
                            data-oid="_gbsq9g" />

                              <span className="text-sm" data-oid="vqoovcv">
                                Perfil público
                              </span>
                            </label>
                            <label
                          className="flex items-center space-x-2"
                          data-oid="kndwe6:">

                              <input
                            type="checkbox"
                            className="w-4 h-4 text-primary-300 rounded"
                            data-oid="d72zlul" />

                              <span className="text-sm" data-oid="w2vs4im">
                                Mostrar progresso
                              </span>
                            </label>
                            <label
                          className="flex items-center space-x-2"
                          data-oid="tku6g4j">

                              <input
                            type="checkbox"
                            defaultChecked
                            className="w-4 h-4 text-primary-300 rounded"
                            data-oid="g1pvs07" />

                              <span className="text-sm" data-oid="auaxh-6">
                                Permitir mensagens
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div
                    className="border-t border-neutral-light-gray dark:border-neutral-medium-gray pt-6"
                    data-oid="6li-mz2">

                        <h4
                      className="text-heading font-medium mb-4 text-error"
                      data-oid="57ml6rw">

                          Zona de Perigo
                        </h4>
                        <div className="space-y-3" data-oid="l0hfnpc">
                          <Button
                        variant="secondary"
                        size="sm"
                        data-oid="rio92ry">

                            Alterar Senha
                          </Button>
                          <Button
                        variant="secondary"
                        size="sm"
                        data-oid="_u7ia_d">

                            Baixar Dados
                          </Button>
                          <Button
                        variant="secondary"
                        size="sm"
                        className="text-error border-error hover:bg-error hover:text-white"
                        data-oid="7mrso7r">

                            Excluir Conta
                          </Button>
                        </div>
                      </div>
                    </div>
                }
                </div>
              }
            </div>
          </div>
        </div>
      </main>

      <Footer data-oid="amtesji" />
    </div>);

}

export default function ProfilePage() {
  return (
    <ThemeProvider data-oid="zk6l9to">
      <ToastProvider data-oid="rtlo2xp">
        <ProfileContent data-oid="6hctu94" />
      </ToastProvider>
    </ThemeProvider>);

}