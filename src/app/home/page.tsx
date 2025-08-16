"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContentCard } from "@/components/content/ContentCard";
import { Button } from "@/components/ui/Button";

// Mock data for user's personalized content
const continueWatching = [
{
  id: "1",
  title: "Introdução à Agroecologia Regenerativa",
  description:
  "Aprenda os fundamentos da agricultura regenerativa e como ela pode transformar nosso sistema alimentar global.",
  coverImage: "/api/placeholder/400/225",
  type: "course" as const,
  duration: "4h 30min",
  href: "/cursos/agroecologia-regenerativa",
  instructor: "Dr. Ana Silva",
  rating: 4.8,
  studentsCount: 1250,
  progress: 35
},
{
  id: "2",
  title: "Permacultura: Princípios e Práticas",
  description:
  "Descubra como aplicar os princípios da permacultura em diferentes contextos e escalas.",
  coverImage: "/api/placeholder/400/225",
  type: "video" as const,
  duration: "45min",
  href: "/assistir/permacultura-principios",
  instructor: "Carlos Mendoza",
  rating: 4.6,
  studentsCount: 890,
  progress: 65
}];


const highlights = [
{
  id: "3",
  title: "Sistemas Agroflorestais Avançados",
  description:
  "Técnicas avançadas para implementar sistemas agroflorestais produtivos e sustentáveis.",
  coverImage: "/api/placeholder/400/225",
  type: "course" as const,
  duration: "6h 15min",
  href: "/cursos/sistemas-agroflorestais-avancados",
  instructor: "Prof. João Oliveira",
  rating: 4.9,
  studentsCount: 756,
  isNew: true,
  isFeatured: true
},
{
  id: "4",
  title: "Bioconstrução com Materiais Locais",
  description:
  "Aprenda técnicas de construção sustentável utilizando materiais naturais e locais.",
  coverImage: "/api/placeholder/400/225",
  type: "video" as const,
  duration: "1h 20min",
  href: "/assistir/bioconstrucao-materiais-locais",
  instructor: "Roberto Lima",
  rating: 4.5,
  studentsCount: 432,
  isNew: true
},
{
  id: "5",
  title: "Manual de Compostagem Urbana",
  description:
  "Guia completo para implementar sistemas de compostagem em ambientes urbanos.",
  coverImage: "/api/placeholder/400/225",
  type: "pdf" as const,
  href: "/ler/manual-compostagem-urbana",
  instructor: "Maria Santos",
  rating: 4.9,
  studentsCount: 2100,
  isPremium: true
}];


const recommended = [
{
  id: "6",
  title: "Gestão de Recursos Hídricos",
  description:
  "Estratégias para conservação e manejo sustentável da água em propriedades rurais e urbanas.",
  coverImage: "/api/placeholder/400/225",
  type: "course" as const,
  duration: "3h 45min",
  href: "/cursos/gestao-recursos-hidricos",
  instructor: "Dra. Patricia Costa",
  rating: 4.8,
  studentsCount: 1890,
  isPremium: true
},
{
  id: "7",
  title: "Agricultura Sintrópica",
  description:
  "Aprenda os princípios da agricultura sintrópica para regenerar ecossistemas.",
  coverImage: "/api/placeholder/400/225",
  type: "video" as const,
  duration: "2h 10min",
  href: "/assistir/agricultura-sintropica",
  instructor: "Ernst Götsch",
  rating: 5.0,
  studentsCount: 3200
},
{
  id: "8",
  title: "Design de Paisagens Regenerativas",
  description:
  "Como projetar paisagens que regeneram o meio ambiente e produzem alimentos.",
  coverImage: "/api/placeholder/400/225",
  type: "course" as const,
  duration: "5h 30min",
  href: "/cursos/design-paisagens-regenerativas",
  instructor: "Claudia Visoni",
  rating: 4.7,
  studentsCount: 1456
}];


const newReleases = [
{
  id: "9",
  title: "Microbiologia do Solo",
  description:
  "Entenda a vida microscópica do solo e como ela influencia a produtividade.",
  coverImage: "/api/placeholder/400/225",
  type: "video" as const,
  duration: "1h 45min",
  href: "/assistir/microbiologia-solo",
  instructor: "Dr. Elaine Ingham",
  rating: 4.8,
  studentsCount: 892,
  isNew: true
},
{
  id: "10",
  title: "Economia Regenerativa",
  description:
  "Modelos econômicos que promovem a regeneração social e ambiental.",
  coverImage: "/api/placeholder/400/225",
  type: "pdf" as const,
  href: "/ler/economia-regenerativa",
  instructor: "Kate Raworth",
  rating: 4.6,
  studentsCount: 1234,
  isNew: true
}];


function HomeContent() {
  const [userName] = useState("Maria"); // This would come from user context/auth

  return (
    <div
      className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
      data-oid="r58ays6">

      <Header data-oid="816i.hv" />

      <main className="pt-20" data-oid="ouwm37.">
        {/* Welcome Section */}
        <section
          className="py-12 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-neutral-dark-navy dark:to-black"
          data-oid="gne:a3k">

          <div className="container-regen" data-oid="lt3qld8">
            <div
              className="flex items-center justify-between"
              data-oid="91ud08b">

              <div data-oid="lzfadkf">
                <h1
                  className="text-heading text-4xl font-bold text-neutral-dark-navy dark:text-white mb-2"
                  data-oid="6rg:2da">

                  Bem-vinda de volta, {userName}! 👋
                </h1>
                <p
                  className="text-body text-lg text-neutral-medium-gray"
                  data-oid="70d1d0p">

                  Continue sua jornada de aprendizado regenerativo
                </p>
              </div>
              <div
                className="hidden md:flex items-center space-x-4"
                data-oid="twu:4oa">

                <div className="text-center" data-oid="rwys.hd">
                  <div
                    className="text-2xl font-bold text-primary-300"
                    data-oid="6hscrx:">

                    12
                  </div>
                  <div
                    className="text-sm text-neutral-medium-gray"
                    data-oid="rzz88w7">

                    Cursos Concluídos
                  </div>
                </div>
                <div className="text-center" data-oid=".mekt_0">
                  <div
                    className="text-2xl font-bold text-primary-300"
                    data-oid="u05:4vb">

                    45h
                  </div>
                  <div
                    className="text-sm text-neutral-medium-gray"
                    data-oid="eooptsm">

                    Tempo de Estudo
                  </div>
                </div>
                <div className="text-center" data-oid="b_exmip">
                  <div
                    className="text-2xl font-bold text-primary-300"
                    data-oid="5qm60r.">

                    8
                  </div>
                  <div
                    className="text-sm text-neutral-medium-gray"
                    data-oid=":90q-vk">

                    Certificados
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Watching Section */}
        {continueWatching.length > 0 &&
        <section className="py-16 bg-white dark:bg-black" data-oid="odcxy.x">
            <div className="container-regen" data-oid="rf9.w25">
              <div
              className="flex items-center justify-between mb-8"
              data-oid="t1pmee9">

                <h2
                className="text-heading text-3xl font-bold text-neutral-dark-navy dark:text-white"
                data-oid="3zj9lgl">

                  Continue Assistindo
                </h2>
                <Button variant="ghost" size="sm" data-oid="yfsild7">
                  Ver Todos
                  <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="0k1q7op">

                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                    data-oid="o:zab5p" />

                  </svg>
                </Button>
              </div>

              <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-oid="r3:e7ey">

                {continueWatching.map((content) =>
              <ContentCard
                key={content.id}
                {...content}
                data-oid="zy2yn66" />

              )}
              </div>
            </div>
          </section>
        }

        {/* Highlights Section */}
        <section className="py-16 gradient-hero" data-oid="fo0w-_b">
          <div className="container-regen" data-oid="y610vxt">
            <div
              className="flex items-center justify-between mb-8"
              data-oid="22lx23q">

              <h2
                className="text-heading text-3xl font-bold text-neutral-dark-navy dark:text-white"
                data-oid=".k_ujhe">

                Destaques da Semana
              </h2>
              <Button variant="ghost" size="sm" data-oid="65mfio6">
                Ver Todos
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="6i2ucal">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                    data-oid="2beff_h" />

                </svg>
              </Button>
            </div>

            {/* Horizontal Scrollable Carousel */}
            <div
              className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
              data-oid="o0lgwgg">

              {highlights.map((content) =>
              <div
                key={content.id}
                className="flex-shrink-0 w-80"
                data-oid="lo0cq15">

                  <ContentCard {...content} data-oid="_7qcybg" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Recommended Section */}
        <section className="py-16 bg-white dark:bg-black" data-oid="5xa6k_s">
          <div className="container-regen" data-oid="lm2mszq">
            <div
              className="flex items-center justify-between mb-8"
              data-oid="0iasv7w">

              <h2
                className="text-heading text-3xl font-bold text-neutral-dark-navy dark:text-white"
                data-oid="eq3:k2q">

                Recomendado para Você
              </h2>
              <Button variant="ghost" size="sm" data-oid="sx4u55z">
                Ver Todos
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="0jgmobi">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                    data-oid="swhl-u0" />

                </svg>
              </Button>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-oid="0lfm76b">

              {recommended.map((content) =>
              <ContentCard key={content.id} {...content} data-oid="dth52r:" />
              )}
            </div>
          </div>
        </section>

        {/* New Releases Section */}
        <section
          className="py-16 bg-neutral-light-gray dark:bg-neutral-dark-navy"
          data-oid="w7dinh7">

          <div className="container-regen" data-oid="-n59wut">
            <div
              className="flex items-center justify-between mb-8"
              data-oid=".0zeb7g">

              <h2
                className="text-heading text-3xl font-bold text-neutral-dark-navy dark:text-white"
                data-oid="h_353zi">

                Novos Lançamentos
              </h2>
              <Button variant="ghost" size="sm" data-oid="nj1gem5">
                Ver Todos
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="pd8k3ng">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                    data-oid=".kgb90u" />

                </svg>
              </Button>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              data-oid="xhd:s61">

              {newReleases.map((content) =>
              <ContentCard key={content.id} {...content} data-oid="3eq0awx" />
              )}
            </div>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="py-16 bg-primary-300" data-oid="w2cmjj8">
          <div className="container-regen" data-oid="pq_je.z">
            <div className="text-center mb-12" data-oid="wzf:sc9">
              <h2
                className="text-heading text-3xl font-bold text-white mb-4"
                data-oid="wngo-6a">

                Acelere seu Aprendizado
              </h2>
              <p
                className="text-body text-xl text-primary-100 max-w-2xl mx-auto"
                data-oid="zht43gi">

                Explore diferentes formas de aprender e se conectar com a
                comunidade
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="qj2eurl">

              <div className="text-center" data-oid="we:sqn2">
                <div
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  data-oid="pd:e::j">

                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="ikfsex_">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                      data-oid="0g_zdqe" />

                  </svg>
                </div>
                <h3
                  className="text-heading text-xl font-semibold text-white mb-2"
                  data-oid="4d0my.o">

                  Explore a RegenPedia
                </h3>
                <p className="text-primary-100 mb-4" data-oid="5g4oop:">
                  Acesse nossa biblioteca de livros e PDFs especializados
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-primary-300 hover:bg-primary-50"
                  data-oid="e2:rv7i">

                  Ir para RegenPedia
                </Button>
              </div>

              <div className="text-center" data-oid="a5p1lrs">
                <div
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  data-oid="lw3uy4t">

                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="wjhbgo7">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      data-oid="zqg9yjz" />

                  </svg>
                </div>
                <h3
                  className="text-heading text-xl font-semibold text-white mb-2"
                  data-oid="p2p396i">

                  Conecte-se
                </h3>
                <p className="text-primary-100 mb-4" data-oid="h3:5o1j">
                  Participe da nossa comunidade de praticantes
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-primary-300 hover:bg-primary-50"
                  data-oid=":h3fbr6">

                  Entrar na Comunidade
                </Button>
              </div>

              <div className="text-center" data-oid="p9_j6ia">
                <div
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  data-oid="q.a13ed">

                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="4:k-4is">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      data-oid="_rprw40" />

                  </svg>
                </div>
                <h3
                  className="text-heading text-xl font-semibold text-white mb-2"
                  data-oid="ud0hytm">

                  RegenMarket
                </h3>
                <p className="text-primary-100 mb-4" data-oid="l:gq.c_">
                  Descubra produtos e materiais sustentáveis
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-primary-300 hover:bg-primary-50"
                  data-oid="m7mef4q">

                  Explorar Loja
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer data-oid="kul2:5o" />
    </div>);

}

export default function HomePage() {
  return (
    <ThemeProvider data-oid="ylvn_al">
      <ToastProvider data-oid="xnua817">
        <HomeContent data-oid="5od7u93" />
      </ToastProvider>
    </ThemeProvider>);

}