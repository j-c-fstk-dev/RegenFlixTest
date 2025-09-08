"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContentCard } from "@/components/content/ContentCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Mock data for user's library
const libraryContent = [
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
  progress: 35,
  addedDate: "2024-01-15",
  category: "Agroecologia"
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
  progress: 100,
  addedDate: "2024-01-10",
  category: "Permacultura"
},
{
  id: "3",
  title: "Manual de Compostagem Urbana",
  description:
  "Guia completo para implementar sistemas de compostagem em ambientes urbanos.",
  coverImage: "/api/placeholder/400/225",
  type: "pdf" as const,
  href: "/ler/manual-compostagem-urbana",
  instructor: "Maria Santos",
  rating: 4.9,
  studentsCount: 2100,
  progress: 80,
  addedDate: "2024-01-08",
  category: "Sustentabilidade Urbana"
},
{
  id: "4",
  title: "Sistemas Agroflorestais",
  description:
  "Explore como integrar árvores, cultivos e animais em sistemas produtivos sustentáveis.",
  coverImage: "/api/placeholder/400/225",
  type: "course" as const,
  duration: "6h 15min",
  href: "/cursos/sistemas-agroflorestais",
  instructor: "Prof. João Oliveira",
  rating: 4.7,
  studentsCount: 756,
  progress: 0,
  addedDate: "2024-01-20",
  category: "Agrofloresta"
},
{
  id: "5",
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
  progress: 100,
  addedDate: "2024-01-05",
  category: "Bioconstrução"
},
{
  id: "6",
  title: "Gestão de Recursos Hídricos",
  description: "Estratégias para conservação e manejo sustentável da água.",
  coverImage: "/api/placeholder/400/225",
  type: "course" as const,
  duration: "3h 45min",
  href: "/cursos/gestao-recursos-hidricos",
  instructor: "Dra. Patricia Costa",
  rating: 4.8,
  studentsCount: 1890,
  progress: 60,
  addedDate: "2024-01-12",
  category: "Recursos Hídricos"
}];


const categories = [
"Todos",
"Agroecologia",
"Permacultura",
"Sustentabilidade Urbana",
"Agrofloresta",
"Bioconstrução",
"Recursos Hídricos"];


const contentTypes = [
{ value: "all", label: "Todos os Tipos" },
{ value: "course", label: "Cursos" },
{ value: "video", label: "Vídeos" },
{ value: "pdf", label: "PDFs/Livros" }];


const progressFilters = [
{ value: "all", label: "Todos" },
{ value: "not-started", label: "Não Iniciados" },
{ value: "in-progress", label: "Em Progresso" },
{ value: "completed", label: "Concluídos" }];


const sortOptions = [
{ value: "recent", label: "Adicionados Recentemente" },
{ value: "oldest", label: "Mais Antigos" },
{ value: "progress", label: "Progresso" },
{ value: "rating", label: "Avaliação" },
{ value: "title", label: "Título A-Z" }];


function MyLibraryContent() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedProgress, setSelectedProgress] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter and sort content
  const filteredContent = libraryContent.
  filter((content) => {
    if (selectedCategory !== "Todos" && content.category !== selectedCategory)
    return false;
    if (selectedType !== "all" && content.type !== selectedType) return false;
    if (selectedProgress !== "all") {
      if (selectedProgress === "not-started" && content.progress > 0)
      return false;
      if (
      selectedProgress === "in-progress" && (
      content.progress === 0 || content.progress === 100))

      return false;
      if (selectedProgress === "completed" && content.progress !== 100)
      return false;
    }
    return true;
  }).
  sort((a, b) => {
    switch (sortBy) {
      case "recent":
        return (
          new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime());

      case "oldest":
        return (
          new Date(a.addedDate).getTime() - new Date(b.addedDate).getTime());

      case "progress":
        return b.progress - a.progress;
      case "rating":
        return b.rating - a.rating;
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getProgressStatus = (progress: number) => {
    if (progress === 0)
    return { label: "Não Iniciado", variant: "primary" as const };
    if (progress === 100)
    return { label: "Concluído", variant: "success" as const };
    return { label: "Em Progresso", variant: "info" as const };
  };

  return (
    <div
      className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
      data-oid="a3ueyh:">

      <Header data-oid="5.olihg" />

      <main className="pt-20" data-oid="x-j86b5">
        {/* Header Section */}
        <section
          className="py-12 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-neutral-dark-navy dark:to-black"
          data-oid="v1qxjxp">

          <div className="container-regen" data-oid="53wvsnk">
            <div
              className="flex items-center justify-between"
              data-oid="3_8dem:">

              <div data-oid="yz.c7iw">
                <h1
                  className="text-heading text-4xl font-bold text-neutral-dark-navy dark:text-white mb-2"
                  data-oid="u7c8vdv">

                  Minha Biblioteca
                </h1>
                <p
                  className="text-body text-lg text-neutral-medium-gray"
                  data-oid="0lwg7dp">

                  {filteredContent.length}{" "}
                  {filteredContent.length === 1 ? "item" : "itens"} na sua
                  biblioteca
                </p>
              </div>

              {/* View Mode Toggle */}
              <div
                className="hidden md:flex items-center space-x-2 bg-white dark:bg-neutral-dark-navy rounded-regen p-1"
                data-oid="bvg11f_">

                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-regen transition-colors ${
                  viewMode === "grid" ?
                  "bg-primary-300 text-white" :
                  "text-neutral-medium-gray hover:text-primary-300"}`
                  }
                  data-oid="5wt:8o3">

                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="lqp92e_">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      data-oid="q..zi8a" />

                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-regen transition-colors ${
                  viewMode === "list" ?
                  "bg-primary-300 text-white" :
                  "text-neutral-medium-gray hover:text-primary-300"}`
                  }
                  data-oid="oilrg0f">

                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="7q76q2e">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      data-oid="i68_vcu" />

                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section
          className="py-8 bg-white dark:bg-black border-b border-neutral-light-gray dark:border-neutral-medium-gray"
          data-oid="9yjuiix">

          <div className="container-regen" data-oid="zx8ytoa">
            {/* Category Filter */}
            <div className="mb-6" data-oid="gopcc-w">
              <h3
                className="text-heading font-semibold mb-3"
                data-oid="oa1cny3">

                Categorias
              </h3>
              <div className="flex flex-wrap gap-2" data-oid="jy28jft">
                {categories.map((category) =>
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-regen text-sm font-medium transition-colors ${
                  selectedCategory === category ?
                  "bg-primary-300 text-white" :
                  "bg-neutral-light-gray dark:bg-neutral-dark-navy text-neutral-medium-gray hover:text-primary-300"}`
                  }
                  data-oid="vul45h8">

                    {category}
                  </button>
                )}
              </div>
            </div>

            {/* Other Filters */}
            <div
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
              data-oid="px2tf8y">

              {/* Content Type Filter */}
              <div data-oid=".b30d2i">
                <label
                  className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                  data-oid="w5awq6:">

                  Tipo de Conteúdo
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="input-regen"
                  data-oid=".p022y0">

                  {contentTypes.map((type) =>
                  <option
                    key={type.value}
                    value={type.value}
                    data-oid="fz8t6gz">

                      {type.label}
                    </option>
                  )}
                </select>
              </div>

              {/* Progress Filter */}
              <div data-oid="ac7d3fa">
                <label
                  className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                  data-oid="-aswi.y">

                  Progresso
                </label>
                <select
                  value={selectedProgress}
                  onChange={(e) => setSelectedProgress(e.target.value)}
                  className="input-regen"
                  data-oid="u7k.px0">

                  {progressFilters.map((filter) =>
                  <option
                    key={filter.value}
                    value={filter.value}
                    data-oid="z453u.u">

                      {filter.label}
                    </option>
                  )}
                </select>
              </div>

              {/* Sort Filter */}
              <div data-oid="ewp-rtx">
                <label
                  className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                  data-oid="k9ai8dd">

                  Ordenar por
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input-regen"
                  data-oid="0tkv9q1">

                  {sortOptions.map((option) =>
                  <option
                    key={option.value}
                    value={option.value}
                    data-oid="yb:ebco">

                      {option.label}
                    </option>
                  )}
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end" data-oid="zodl-l.">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSelectedCategory("Todos");
                    setSelectedType("all");
                    setSelectedProgress("all");
                    setSortBy("recent");
                  }}
                  className="w-full"
                  data-oid="trnpviq">

                  Limpar Filtros
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12" data-oid="pd6c_2w">
          <div className="container-regen" data-oid="_dogytk">
            {filteredContent.length === 0 ?
            <div className="text-center py-16" data-oid="g4k.fhm">
                <div
                className="w-24 h-24 bg-neutral-light-gray dark:bg-neutral-medium-gray rounded-full flex items-center justify-center mx-auto mb-6"
                data-oid="zc93jqe">

                  <svg
                  className="w-12 h-12 text-neutral-medium-gray"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="nfa_7mw">

                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                    data-oid="l1ymef3" />

                  </svg>
                </div>
                <h3
                className="text-heading text-xl font-semibold text-neutral-dark-navy dark:text-white mb-2"
                data-oid="na.7a_f">

                  Nenhum conteúdo encontrado
                </h3>
                <p
                className="text-body text-neutral-medium-gray mb-6"
                data-oid="wa64dub">

                  Tente ajustar os filtros ou explore novos conteúdos
                </p>
                <Button data-oid="5opv8t0">Explorar Conteúdos</Button>
              </div> :

            <div
              className={
              viewMode === "grid" ?
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" :
              "space-y-4"
              }
              data-oid="ebliknq">

                {filteredContent.map((content) =>
              <div
                key={content.id}
                className={
                viewMode === "list" ?
                "flex items-center space-x-4 p-4 bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen" :
                ""
                }
                data-oid="-svr7gf">

                    {viewMode === "list" ?
                <>
                        <img
                    src={content.coverImage}
                    alt={content.title}
                    className="w-24 h-16 object-cover rounded-regen flex-shrink-0"
                    data-oid="vqx:jvi" />


                        <div className="flex-grow" data-oid="eufh550">
                          <div
                      className="flex items-start justify-between"
                      data-oid="en97jtn">

                            <div data-oid=":hi-7-w">
                              <h3
                          className="text-heading font-semibold text-lg mb-1"
                          data-oid="83fy.l:">

                                {content.title}
                              </h3>
                              <p
                          className="text-body text-sm text-neutral-medium-gray mb-2"
                          data-oid="..o22ry">

                                {content.instructor}
                              </p>
                              <div
                          className="flex items-center space-x-4 text-sm text-neutral-medium-gray"
                          data-oid="knc9flm">

                                <span className="capitalize" data-oid="-:4166f">
                                  {content.type}
                                </span>
                                {content.duration &&
                          <span data-oid="37jbuk2">
                                    {content.duration}
                                  </span>
                          }
                                <span data-oid="05n.v:5">
                                  ★ {content.rating}
                                </span>
                              </div>
                            </div>
                            <div
                        className="flex items-center space-x-2"
                        data-oid="1e07j61">

                              <Badge
                          {...getProgressStatus(content.progress)}
                          size="sm"
                          data-oid="1j_rdva">

                                {getProgressStatus(content.progress).label}
                              </Badge>
                              <Button size="sm" data-oid="::v6c0t">
                                {content.progress === 0 ?
                          "Iniciar" :
                          content.progress === 100 ?
                          "Revisar" :
                          "Continuar"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </> :

                <div className="relative" data-oid="nmis-up">
                        <ContentCard {...content} data-oid="o94xm3." />
                        <div
                    className="absolute top-2 right-2"
                    data-oid="79.jkgs">

                          <Badge
                      {...getProgressStatus(content.progress)}
                      size="sm"
                      data-oid="kkc4zmp">

                            {getProgressStatus(content.progress).label}
                          </Badge>
                        </div>
                      </div>
                }
                  </div>
              )}
              </div>
            }
          </div>
        </section>
      </main>

      <Footer data-oid="8amxm18" />
    </div>);

}

export default function MyLibraryPage() {
  return (
    <ThemeProvider data-oid="z8qnsi3">
      <ToastProvider data-oid="gw470w4">
        <MyLibraryContent data-oid="szev:er" />
      </ToastProvider>
    </ThemeProvider>);

}