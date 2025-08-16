"use client";

import Link from "next/link";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/content/HeroSection";
import { ContentCard } from "@/components/content/ContentCard";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { Button } from "@/components/ui/Button";

// Enhanced mock data for family-friendly content
const featuredContent = [
{
  id: "1",
  title: "Atividades Waldorf para o Outono 🍂",
  description:
  "Descubra brincadeiras e atividades sazonais que conectam as crianças com os ritmos da natureza, perfeitas para homeschooling.",
  coverImage: "/api/placeholder/400/225",
  type: "course" as const,
  duration: "2h 30min",
  isPremium: true,
  href: "/cursos/atividades-waldorf-outono",
  instructor: "Ana Montessori",
  rating: 4.9,
  studentsCount: 850,
  isNew: true,
  isFeatured: true
},
{
  id: "2",
  title: "Mesa da Estação: Criando Altares Naturais",
  description:
  "Aprenda a criar lindas mesas sazonais que celebram os ciclos da natureza e trazem magia para o lar.",
  coverImage: "/api/placeholder/400/225",
  type: "video" as const,
  duration: "35min",
  href: "/assistir/mesa-da-estacao",
  instructor: "Maria Waldorf",
  rating: 4.8,
  studentsCount: 1200,
  progress: 45
},
{
  id: "3",
  title: "Guia de Brinquedos Naturais DIY",
  description:
  "Manual completo para criar brinquedos com materiais naturais que estimulam a imaginação e criatividade.",
  coverImage: "/api/placeholder/400/225",
  type: "pdf" as const,
  isPremium: true,
  href: "/ler/brinquedos-naturais-diy",
  instructor: "Clara Artesã",
  rating: 4.9,
  studentsCount: 950
},
{
  id: "4",
  title: "Horta em Casa com Crianças 🌱",
  description:
  "Transforme sua casa em um espaço de aprendizado verde, ensinando as crianças sobre plantas e responsabilidade.",
  coverImage: "/api/placeholder/400/225",
  type: "course" as const,
  duration: "3h 15min",
  href: "/cursos/horta-em-casa-criancas",
  instructor: "João Jardineiro",
  rating: 4.7,
  studentsCount: 680,
  isNew: true
},
{
  id: "5",
  title: "Contação de Histórias Terapêuticas",
  description:
  "Descubra o poder das histórias para curar, ensinar e conectar-se profundamente com seus filhos.",
  coverImage: "/api/placeholder/400/225",
  type: "video" as const,
  duration: "1h 45min",
  href: "/assistir/contacao-historias-terapeuticas",
  instructor: "Sofia Contadora",
  rating: 4.8,
  studentsCount: 1100
},
{
  id: "6",
  title: "Rotinas Familiares Conscientes",
  description:
  "Crie rotinas que nutrem a alma da família, trazendo paz e harmonia para o dia a dia com as crianças.",
  coverImage: "/api/placeholder/400/225",
  type: "course" as const,
  duration: "2h 45min",
  isPremium: true,
  href: "/cursos/rotinas-familiares-conscientes",
  instructor: "Lucia Mindful",
  rating: 4.9,
  studentsCount: 1350
}];


export default function Page() {
  const handleCookieAccept = () => {
    console.log("Cookies accepted");
    // Implement cookie acceptance logic
  };

  const handleCookieReject = () => {
    console.log("Cookies rejected");
    // Implement cookie rejection logic
  };

  const handleManagePreferences = () => {
    console.log("Manage cookie preferences");
    // Implement cookie preferences management
  };

  return (
    <ThemeProvider data-oid="ycsef67">
      <ToastProvider data-oid="nogd-wa">
        <div
          className="min-h-screen bg-neutral-cream dark:bg-neutral-charcoal transition-colors duration-300"
          data-oid="qx1c36m">

          <Header data-oid="d8vayr3" />

          <main data-oid="tks_jeb">
            {/* Hero Section */}
            <HeroSection data-oid="tqw40ls" />

            {/* Featured Content Section */}
            <section
              className="py-20 bg-neutral-warm-white dark:bg-neutral-dark-sage"
              data-oid="md7nz56">

              <div className="container-cozy" data-oid="7q_wpgd">
                <div className="text-center mb-12" data-oid="2a08c5v">
                  <div className="flex justify-center mb-4" data-oid="qm7a7ul">
                    <span className="text-4xl" data-oid="5dmz.mf">
                      ✨
                    </span>
                  </div>
                  <h2
                    className="text-heading text-4xl font-bold text-neutral-charcoal dark:text-neutral-cream mb-4"
                    data-oid="x8ykg7m">

                    Atividades em Destaque
                  </h2>
                  <p
                    className="text-body text-lg text-neutral-dark-sage/80 max-w-2xl mx-auto"
                    data-oid="g53w:cg">

                    Explore nossas atividades mais queridas pelas famílias,
                    criadas com amor para nutrir a infância e fortalecer os
                    laços familiares 💚
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                  data-oid="4.olh7k">

                  {featuredContent.map((content) =>
                  <ContentCard
                    key={content.id}
                    {...content}
                    data-oid="cv3uy67" />

                  )}
                </div>

                <div className="text-center" data-oid="zhbjs-i">
                  <Link href="/cursos" data-oid="yqfu11-">
                    <Button
                      size="lg"
                      className="btn-primary"
                      data-oid="m00xt6r">

                      Ver Todas as Atividades 🌈
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="maabj-5">

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                          data-oid="igqr--0" />

                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* Value Proposition Section */}
            <section className="py-20 gradient-cozy" data-oid="x3aurad">
              <div className="container-cozy" data-oid="7alk3.h">
                <div className="text-center mb-16" data-oid="kyr0wlw">
                  <div className="flex justify-center mb-4" data-oid=".y-_fmj">
                    <span className="text-4xl" data-oid="fo-5nhs">
                      🏡
                    </span>
                  </div>
                  <h2
                    className="text-heading text-4xl font-bold text-neutral-charcoal dark:text-neutral-cream mb-4"
                    data-oid="rs7hst3">

                    Por que escolher Brincando em Família?
                  </h2>
                  <p
                    className="text-body text-lg text-neutral-dark-sage/80 max-w-2xl mx-auto"
                    data-oid="hj8jiqy">

                    Um espaço acolhedor para mães que desejam criar uma infância
                    rica em experiências naturais e aprendizado significativo
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  data-oid="o7u7.im">

                  <div className="text-center p-8 card-cozy" data-oid="g8f75i1">
                    <div
                      className="w-16 h-16 bg-gradient-to-br from-earth-sage to-earth-peach rounded-cozy flex items-center justify-center mx-auto mb-6 shadow-cozy"
                      data-oid="61xquzr">

                      <span className="text-2xl" data-oid="krcmz_b">
                        🌱
                      </span>
                    </div>
                    <h3
                      className="text-heading text-xl font-semibold mb-4 text-neutral-charcoal dark:text-neutral-cream"
                      data-oid="dtc7g:r">

                      Pedagogia Waldorf
                    </h3>
                    <p
                      className="text-body text-neutral-dark-sage/80"
                      data-oid="r274vlq">

                      Atividades baseadas na pedagogia Waldorf que respeitam o
                      desenvolvimento natural da criança
                    </p>
                  </div>

                  <div className="text-center p-8 card-cozy" data-oid="k1hmte3">
                    <div
                      className="w-16 h-16 bg-gradient-to-br from-earth-peach to-earth-clay rounded-cozy flex items-center justify-center mx-auto mb-6 shadow-cozy"
                      data-oid="31930s.">

                      <span className="text-2xl" data-oid="jdqf_qd">
                        🎨
                      </span>
                    </div>
                    <h3
                      className="text-heading text-xl font-semibold mb-4 text-neutral-charcoal dark:text-neutral-cream"
                      data-oid="chd53za">

                      Criatividade Natural
                    </h3>
                    <p
                      className="text-body text-neutral-dark-sage/80"
                      data-oid="i73y3ew">

                      Projetos artísticos e criativos usando materiais naturais
                      que despertam a imaginação
                    </p>
                  </div>

                  <div className="text-center p-8 card-cozy" data-oid="dvpg1fw">
                    <div
                      className="w-16 h-16 bg-gradient-to-br from-earth-stone to-earth-sage rounded-cozy flex items-center justify-center mx-auto mb-6 shadow-cozy"
                      data-oid="d6selgs">

                      <span className="text-2xl" data-oid="bvq0ox3">
                        👩‍👧‍👦
                      </span>
                    </div>
                    <h3
                      className="text-heading text-xl font-semibold mb-4 text-neutral-charcoal dark:text-neutral-cream"
                      data-oid="0gbx0ym">

                      Comunidade de Mães
                    </h3>
                    <p
                      className="text-body text-neutral-dark-sage/80"
                      data-oid="vu6jtfc">

                      Conecte-se com outras mães que compartilham os mesmos
                      valores sobre educação e infância
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section
              className="py-20 bg-neutral-warm-white dark:bg-neutral-dark-sage"
              data-oid="p6y-0x2">

              <div className="container-cozy" data-oid="42764i7">
                <div className="text-center mb-16" data-oid="-hnejw3">
                  <div className="flex justify-center mb-4" data-oid="hsb11j:">
                    <span className="text-4xl" data-oid=".2r1lcs">
                      💝
                    </span>
                  </div>
                  <h2
                    className="text-heading text-4xl font-bold text-neutral-charcoal dark:text-neutral-cream mb-4"
                    data-oid="ei6kaxv">

                    O que as mães estão dizendo
                  </h2>
                  <p
                    className="text-body text-lg text-neutral-dark-sage/80 max-w-2xl mx-auto"
                    data-oid="ncg2efc">

                    Histórias reais de transformação e conexão familiar através
                    de nossas atividades e recursos
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  data-oid="wrx1i77">

                  {[
                  {
                    name: "Marina Silva",
                    role: "Mãe homeschooler de 3 filhos",
                    content:
                    "As atividades transformaram nossa rotina! Meus filhos estão mais conectados com a natureza e comigo. É maravilhoso ver o brilho nos olhos deles. 🌟",
                    rating: 5
                  },
                  {
                    name: "Carla Mendes",
                    role: "Educadora Waldorf",
                    content:
                    "Conteúdo de qualidade excepcional! Uso as ideias tanto em casa quanto na escola. As crianças ficam encantadas com cada proposta. 💚",
                    rating: 5
                  },
                  {
                    name: "Juliana Costa",
                    role: "Mãe de gêmeos de 5 anos",
                    content:
                    "Finalmente encontrei um espaço que entende nossa filosofia de vida. As atividades são simples, mas profundamente significativas. 🦋",
                    rating: 5
                  }].
                  map((testimonial, index) =>
                  <div
                    key={index}
                    className="card-cozy p-6"
                    data-oid="gwvxp8d">

                      <div
                      className="flex items-center mb-4"
                      data-oid="lc_m40d">

                        {[...Array(testimonial.rating)].map((_, i) =>
                      <span
                        key={i}
                        className="text-earth-peach text-lg"
                        data-oid="_8pg9-6">

                            ⭐
                          </span>
                      )}
                      </div>
                      <p
                      className="text-body text-neutral-dark-sage/80 mb-4 italic"
                      data-oid="f8cjx:l">

                        "{testimonial.content}"
                      </p>
                      <div data-oid="rflq0yu">
                        <p
                        className="text-heading font-semibold text-neutral-charcoal dark:text-neutral-cream"
                        data-oid=":iu5ozg">

                          {testimonial.name}
                        </p>
                        <p
                        className="text-body text-sm text-neutral-dark-sage/70"
                        data-oid="mz0ux.4">

                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section
              className="py-20 bg-gradient-to-br from-earth-sage to-earth-peach"
              data-oid="oe-jmzn">

              <div className="container-cozy text-center" data-oid="p5bukbc">
                <div className="flex justify-center mb-6" data-oid="ufl_aex">
                  <span className="text-5xl" data-oid="dh6c_5.">
                    🌈
                  </span>
                </div>
                <h2
                  className="text-heading text-4xl font-bold text-white mb-4"
                  data-oid="z9pnx-0">

                  Pronta para criar memórias mágicas?
                </h2>
                <p
                  className="text-body text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                  data-oid=".yov2j3">

                  Junte-se a milhares de mães que já descobriram a alegria de
                  brincar e aprender junto com seus filhos de forma natural e
                  significativa 🌸
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  data-oid="iird4l1">

                  <Link href="/login" data-oid="0nmx1_w">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="bg-white text-earth-sage hover:bg-neutral-cream shadow-cozy hover:shadow-cozy-hover transform hover:-translate-y-1 transition-all duration-300"
                      data-oid="y::nidd">

                      Começar Gratuitamente 🌱
                    </Button>
                  </Link>
                  <Link href="/planos" data-oid="o2m8ype">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="text-white border-white hover:bg-white/10 backdrop-blur-cozy"
                      data-oid=".x1uvdx">

                      Ver Planos ✨
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </main>

          <Footer data-oid="_944krw" />

          {/* Cookie Banner */}
          <CookieBanner
            onAccept={handleCookieAccept}
            onReject={handleCookieReject}
            onManagePreferences={handleManagePreferences}
            data-oid="pufs-yb" />

        </div>
      </ToastProvider>
    </ThemeProvider>);

}