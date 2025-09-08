"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/content/HeroSection";
import { ContentCard } from "@/components/content/ContentCard";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabaseClient";

// Adicionando as interfaces para tipar os dados do Supabase
interface CourseItem {
  id: string;
  title: { en: string };
  shortDescription: { en: string };
  coverImageUrl: string;
  duration?: string;
  instructor: { name: string };
}

interface VideoItem {
  id: string;
  title: { en: string };
  description: { en: string };
  coverImageUrl: string;
  duration?: string;
  instructor: { name: string };
}

interface PdfItem {
  id: string;
  title: { en: string };
  description: { en: string };
  coverImageUrl: string;
  author: { name: string };
}

interface ContentItem {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  type: "course" | "video" | "pdf";
  duration?: string;
  href: string;
  instructor?: string;
}

export default function Page() {
  const [featuredContent, setFeaturedContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedContent = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch courses
        const { data: coursesData, error: coursesError } = await supabase
          .from("courses")
          .select("*")
          .limit(2);

        if (coursesError) throw coursesError;

        // Fetch videos
        const { data: videosData, error: videosError } = await supabase
          .from("videos")
          .select("*")
          .limit(2);

        if (videosError) throw videosError;

        // Fetch pdfs
        const { data: pdfsData, error: pdfsError } = await supabase
          .from("pdfs")
          .select("*")
          .limit(2);

        if (pdfsError) throw pdfsError;

        // Combine e mapeie os dados para corresponderem às props do ContentCard
        const combinedContent: ContentItem[] = [];

        if (coursesData) {
          combinedContent.push(...coursesData.map((item: CourseItem) => ({
            id: item.id,
            title: item.title.en,
            description: item.shortDescription.en,
            coverImage: item.coverImageUrl,
            type: "course",
            duration: item.duration,
            href: `/cursos/${item.id}`,
            instructor: item.instructor.name,
          } as ContentItem)));
        }

        if (videosData) {
          combinedContent.push(...videosData.map((item: VideoItem) => ({
            id: item.id,
            title: item.title.en,
            description: item.description.en,
            coverImage: item.coverImageUrl,
            type: "video",
            duration: item.duration,
            href: `/assistir/${item.id}`,
            instructor: item.instructor.name,
          } as ContentItem)));
        }

        if (pdfsData) {
            combinedContent.push(...pdfsData.map((item: PdfItem) => ({
                id: item.id,
                title: item.title.en,
                description: item.description.en,
                coverImage: item.coverImageUrl,
                type: "pdf",
                href: `/ler/${item.id}`,
                instructor: item.author.name,
              } as ContentItem)));
        }


        setFeaturedContent(combinedContent);

      } catch (err: any) {
        console.error("Error fetching featured content:", err);
        setError(err.message || "An error occurred while fetching content.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedContent();
  }, []);

  const handleCookieAccept = () => {
    console.log("Cookies accepted");
  };

  const handleCookieReject = () => {
    console.log("Cookies rejected");
  };

  const handleManagePreferences = () => {
    console.log("Manage cookie preferences");
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-neutral-cream dark:bg-neutral-charcoal transition-colors duration-300">
          <Header />
          <main>
            <HeroSection />
            <section className="py-20 bg-neutral-warm-white dark:bg-neutral-dark-sage">
              <div className="container-cozy">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <span className="text-4xl">✨</span>
                  </div>
                  <h2 className="text-heading text-4xl font-bold text-neutral-charcoal dark:text-neutral-cream mb-4">
                    Atividades em Destaque
                  </h2>
                  <p className="text-body text-lg text-neutral-dark-sage/80 max-w-2xl mx-auto">
                    Explore nossas atividades mais queridas pelas famílias, criadas com amor para nutrir a infância e fortalecer os laços familiares 💚
                  </p>
                </div>

                {loading && <p className="text-center">Loading featured content...</p>}
                {error && <p className="text-center text-error">Error: {error}</p>}

                {!loading && !error && featuredContent.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {featuredContent.map((content) => (
                      <ContentCard
                        key={content.id}
                        id={content.id}
                        title={content.title}
                        description={content.description}
                        coverImage={content.coverImage}
                        type={content.type}
                        duration={content.duration}
                        href={content.href}
                        instructor={content.instructor}
                      />
                    ))}
                  </div>
                )}

                {!loading && !error && featuredContent.length === 0 && (
                  <p className="text-center">No featured content found.</p>
                )}

                <div className="text-center">
                  <Link href="/cursos">
                    <Button size="lg" className="btn-primary">
                      Ver Todas as Atividades 🌈
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

             <section className="py-20 gradient-cozy">
              <div className="container-cozy">
                <div className="text-center mb-16">
                  <div className="flex justify-center mb-4">
                    <span className="text-4xl">
                      🏡
                    </span>
                  </div>
                  <h2
                    className="text-heading text-4xl font-bold text-neutral-charcoal dark:text-neutral-cream mb-4">

                    Por que escolher Brincando em Família?
                  </h2>
                  <p
                    className="text-body text-lg text-neutral-dark-sage/80 max-w-2xl mx-auto">

                    Um espaço acolhedor para mães que desejam criar uma infância
                    rica em experiências naturais e aprendizado significativo
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8">

                  <div className="text-center p-8 card-cozy">
                    <div
                      className="w-16 h-16 bg-gradient-to-br from-earth-sage to-earth-peach rounded-cozy flex items-center justify-center mx-auto mb-6 shadow-cozy">

                      <span className="text-2xl">
                        🌱
                      </span>
                    </div>
                    <h3
                      className="text-heading text-xl font-semibold mb-4 text-neutral-charcoal dark:text-neutral-cream">

                      Pedagogia Waldorf
                    </h3>
                    <p
                      className="text-body text-neutral-dark-sage/80">

                      Atividades baseadas na pedagogia Waldorf que respeitam o
                      desenvolvimento natural da criança
                    </p>
                  </div>

                  <div className="text-center p-8 card-cozy">
                    <div
                      className="w-16 h-16 bg-gradient-to-br from-earth-peach to-earth-clay rounded-cozy flex items-center justify-center mx-auto mb-6 shadow-cozy">

                      <span className="text-2xl">
                        🎨
                      </span>
                    </div>
                    <h3
                      className="text-heading text-xl font-semibold mb-4 text-neutral-charcoal dark:text-neutral-cream">

                      Criatividade Natural
                    </h3>
                    <p
                      className="text-body text-neutral-dark-sage/80">

                      Projetos artísticos e criativos usando materiais naturais
                      que despertam a imaginação
                    </p>
                  </div>

                  <div className="text-center p-8 card-cozy">
                    <div
                      className="w-16 h-16 bg-gradient-to-br from-earth-stone to-earth-sage rounded-cozy flex items-center justify-center mx-auto mb-6 shadow-cozy">

                      <span className="text-2xl">
                        👩‍👧‍👦
                      </span>
                    </div>
                    <h3
                      className="text-heading text-xl font-semibold mb-4 text-neutral-charcoal dark:text-neutral-cream">

                      Comunidade de Mães
                    </h3>
                    <p
                      className="text-body text-neutral-dark-sage/80">

                      Conecte-se com outras mães que compartilham os mesmos
                      valores sobre educação e infância
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="py-20 bg-neutral-warm-white dark:bg-neutral-dark-sage">

              <div className="container-cozy">
                <div className="text-center mb-16">
                  <div className="flex justify-center mb-4">
                    <span className="text-4xl">
                      💝
                    </span>
                  </div>
                  <h2
                    className="text-heading text-4xl font-bold text-neutral-charcoal dark:text-neutral-cream mb-4">

                    O que as mães estão dizendo
                  </h2>
                  <p
                    className="text-body text-lg text-neutral-dark-sage/80 max-w-2xl mx-auto">

                    Histórias reais de transformação e conexão familiar através
                    de nossas atividades e recursos
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8">

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
                    className="card-cozy p-6">

                      <div
                      className="flex items-center mb-4">

                        {[...Array(testimonial.rating)].map((_, i) =>
                      <span
                        key={i}
                        className="text-earth-peach text-lg">

                            ⭐
                          </span>
                      )}
                      </div>
                      <p
                      className="text-body text-neutral-dark-sage/80 mb-4 italic">

                        "{testimonial.content}"
                      </p>
                      <div >
                        <p
                        className="text-heading font-semibold text-neutral-charcoal dark:text-neutral-cream">

                          {testimonial.name}
                        </p>
                        <p
                        className="text-body text-sm text-neutral-dark-sage/70">

                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section
              className="py-20 bg-gradient-to-br from-earth-sage to-earth-peach">

              <div className="container-cozy text-center">
                <div className="flex justify-center mb-6">
                  <span className="text-5xl">
                    🌈
                  </span>
                </div>
                <h2
                  className="text-heading text-4xl font-bold text-white mb-4">

                  Pronta para criar memórias mágicas?
                </h2>
                <p
                  className="text-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">

                  Junte-se a milhares de mães que já descobriram a alegria de
                  brincar e aprender junto com seus filhos de forma natural e
                  significativa 🌸
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center">

                  <Link href="/login">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="bg-white text-earth-sage hover:bg-neutral-cream shadow-cozy hover:shadow-cozy-hover transform hover:-translate-y-1 transition-all duration-300">

                      Começar Gratuitamente 🌱
                    </Button>
                  </Link>
                  <Link href="/planos">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="text-white border-white hover:bg-white/10 backdrop-blur-cozy">

                      Ver Planos ✨
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </main>
          <Footer />
          <CookieBanner
            onAccept={handleCookieAccept}
            onReject={handleCookieReject}
            onManagePreferences={handleManagePreferences}
          />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );

}