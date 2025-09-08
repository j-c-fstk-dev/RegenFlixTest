"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContentCard } from "@/components/content/ContentCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Mock data for courses
const featuredCourse = {
  id: "featured",
  title: "Masterclass: Agricultura Regenerativa Completa",
  description:
  "O curso mais completo sobre agricultura regenerativa, cobrindo desde os fundamentos teóricos até a implementação prática em diferentes escalas e contextos.",
  coverImage: "/api/placeholder/800/400",
  type: "course" as const,
  duration: "12h 30min",
  href: "/cursos/agricultura-regenerativa-completa",
  instructor: "Dr. Ana Silva & Equipe",
  rating: 4.9,
  studentsCount: 3250,
  isFeatured: true,
  isPremium: true,
  modules: 8,
  lessons: 45,
  certificate: true,
  level: "Intermediário",
  category: "Agroecologia"
};

const courses = [
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
  modules: 6,
  lessons: 24,
  certificate: true,
  level: "Iniciante",
  category: "Agroecologia",
  isNew: true
},
{
  id: "2",
  title: "Sistemas Agroflorestais Avançados",
  description:
  "Técnicas avançadas para implementar sistemas agroflorestais produtivos e sustentáveis.",
  coverImage: "/api/placeholder/400/225",
  type: "course" as const,
  duration: "6h 15min",
  href: "/cursos/sistemas-agroflorestais-avancados",
  instructor: "Prof. João Oliveira",
  rating: 4.7,
  studentsCount: 756,
  modules: 8,
  lessons: 32,
  certificate: true,
  level: "Avançado",
  category: "Agrofloresta",
  isPremium: true
},
{
  id: "3",
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
  modules: 5,
  lessons: 18,
  certificate: true,
  level: "Intermediário",
  category: "Recursos Hídricos",
  isPremium: true
},
{
  id: "4",
  title: "Permacultura: Design de Sistemas Sustentáveis",
  description:
  "Aprenda a projetar sistemas sustentáveis usando os princípios da permacultura.",
  coverImage: "/api/placeholder/400/225",
  type: "course" as const,
  duration: "8h 20min",
  href: "/cursos/permacultura-design",
  instructor: "Carlos Mendoza",
  rating: 4.6,
  studentsCount: 2100,
  modules: 10,
  lessons: 40,
  certificate: true,
  level: "Intermediário",
  category: "Permacultura"
},
{
  id: "5",
  title: "Bioconstrução e Arquitetura Sustentável",
  description:
  "Técnicas de construção sustentável utilizando materiais naturais e locais.",
  coverImage: "/api/placeholder/400/225",
  type: "course" as const,
  duration: "5h 10min",
  href: "/cursos/bioconstrucao",
  instructor: "Roberto Lima",
  rating: 4.5,
  studentsCount: 892,
  modules: 7,
  lessons: 28,
  certificate: true,
  level: "Iniciante",
  category: "Bioconstrução"
},
{
  id: "6",
  title: "Compostagem e Manejo de Resíduos Orgânicos",
  description:
  "Domine as técnicas de compostagem para diferentes contextos e escalas.",
  coverImage: "/api/placeholder/400/225",
  type: "course" as const,
  duration: "2h 45min",
  href: "/cursos/compostagem",
  instructor: "Maria Santos",
  rating: 4.9,
  studentsCount: 1456,
  modules: 4,
  lessons: 16,
  certificate: true,
  level: "Iniciante",
  category: "Sustentabilidade Urbana",
  isNew: true
},
{
  id: "7",
  title: "Agricultura Sintrópica",
  description:
  "Aprenda os princípios da agricultura sintrópica para regenerar ecossistemas.",
  coverImage: "/api/placeholder/400/225",
  type: "course" as const,
  duration: "4h 50min",
  href: "/cursos/agricultura-sintropica",
  instructor: "Ernst Götsch",
  rating: 5.0,
  studentsCount: 3200,
  modules: 6,
  lessons: 22,
  certificate: true,
  level: "Avançado",
  category: "Agroecologia",
  isPremium: true
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
  studentsCount: 1456,
  modules: 8,
  lessons: 30,
  certificate: true,
  level: "Intermediário",
  category: "Permacultura"
}];


const categories = [
"Todos",
"Agroecologia",
"Permacultura",
"Agrofloresta",
"Bioconstrução",
"Recursos Hídricos",
"Sustentabilidade Urbana"];


const levels = [
{ value: "all", label: "Todos os Níveis" },
{ value: "Iniciante", label: "Iniciante" },
{ value: "Intermediário", label: "Intermediário" },
{ value: "Avançado", label: "Avançado" }];


const sortOptions = [
{ value: "popular", label: "Mais Populares" },
{ value: "rating", label: "Melhor Avaliados" },
{ value: "newest", label: "Mais Recentes" },
{ value: "duration", label: "Duração" },
{ value: "title", label: "Título A-Z" }];


function CoursesContent() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);

  // Filter and sort courses
  const filteredCourses = courses.
  filter((course) => {
    if (selectedCategory !== "Todos" && course.category !== selectedCategory)
    return false;
    if (selectedLevel !== "all" && course.level !== selectedLevel)
    return false;
    if (showPremiumOnly && !course.isPremium) return false;
    return true;
  }).
  sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.studentsCount - a.studentsCount;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case "duration":
        const aDuration = parseFloat(a.duration.replace(/[^\d.]/g, ""));
        const bDuration = parseFloat(b.duration.replace(/[^\d.]/g, ""));
        return aDuration - bDuration;
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getLevelBadgeVariant = (level: string) => {
    switch (level) {
      case "Iniciante":
        return "success" as const;
      case "Intermediário":
        return "warning" as const;
      case "Avançado":
        return "error" as const;
      default:
        return "primary" as const;
    }
  };

  return (
    <div
      className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
      data-oid="8chvju-">

      <Header data-oid="2qsiq4c" />

      <main className="pt-20" data-oid="um1burh">
        {/* Hero Section with Featured Course */}
        <section
          className="py-16 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-neutral-dark-navy dark:to-black"
          data-oid="xqr4qum">

          <div className="container-regen" data-oid="k1hdj_w">
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              data-oid="7j9-vy7">

              <div data-oid="zog1-bd">
                <Badge
                  variant="info"
                  size="sm"
                  className="mb-4"
                  data-oid="ijeynz2">

                  Curso em Destaque
                </Badge>
                <h1
                  className="text-heading text-4xl lg:text-5xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                  data-oid="j7eh3mz">

                  {featuredCourse.title}
                </h1>
                <p
                  className="text-body text-lg text-neutral-medium-gray mb-6"
                  data-oid="jcck_um">

                  {featuredCourse.description}
                </p>

                <div
                  className="flex flex-wrap items-center gap-4 mb-6 text-sm text-neutral-medium-gray"
                  data-oid="1i7x43w">

                  <div
                    className="flex items-center space-x-1"
                    data-oid="9uqsio6">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="_3y-:i1">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="3pe:pqk" />

                    </svg>
                    <span data-oid="77vsdrt">{featuredCourse.duration}</span>
                  </div>
                  <div
                    className="flex items-center space-x-1"
                    data-oid="5nuraof">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="ntemhw:">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                        data-oid=".j_ncv6" />

                    </svg>
                    <span data-oid="u0z3nsl">
                      {featuredCourse.modules} módulos
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-1"
                    data-oid="y8622qw">

                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      data-oid=".if0f06">

                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        data-oid="7la:z24" />

                    </svg>
                    <span data-oid="th.:02:">{featuredCourse.rating}</span>
                  </div>
                  <div
                    className="flex items-center space-x-1"
                    data-oid="q2a725u">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="5y5-..7">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        data-oid="tvai6i9" />

                    </svg>
                    <span data-oid="dp_cxw:">
                      {featuredCourse.studentsCount.toLocaleString()} estudantes
                    </span>
                  </div>
                </div>

                <div
                  className="flex flex-col sm:flex-row gap-4"
                  data-oid="lt0a4_k">

                  <Button
                    size="lg"
                    className="flex-1 sm:flex-none"
                    data-oid="c0f_b3f">

                    Começar Curso
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="kgsxh.7">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid=".kci136" />

                    </svg>
                  </Button>
                  <Button variant="secondary" size="lg" data-oid="grooldh">
                    Ver Detalhes
                  </Button>
                </div>
              </div>

              <div className="relative" data-oid="-sfy0f2">
                <img
                  src={featuredCourse.coverImage}
                  alt={featuredCourse.title}
                  className="w-full rounded-regen-lg shadow-regen-hover"
                  data-oid="nunenh2" />


                <div className="absolute top-4 right-4" data-oid="x02xh-j">
                  <Badge
                    variant={getLevelBadgeVariant(featuredCourse.level)}
                    data-oid=".cibcpj">

                    {featuredCourse.level}
                  </Badge>
                </div>
                {featuredCourse.isPremium &&
                <div className="absolute top-4 left-4" data-oid="j04jh0j">
                    <Badge variant="warning" size="sm" data-oid="d-1ut.3">
                      Premium
                    </Badge>
                  </div>
                }
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section
          className="py-8 bg-white dark:bg-black border-b border-neutral-light-gray dark:border-neutral-medium-gray"
          data-oid="lrta:w1">

          <div className="container-regen" data-oid="w0fn13t">
            <div
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
              data-oid="pvep-8y">

              <div data-oid="yxiscsq">
                <h2
                  className="text-heading text-2xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                  data-oid="92_9.c.">

                  Todos os Cursos
                </h2>
                <p
                  className="text-body text-neutral-medium-gray"
                  data-oid="axr0.e.">

                  {filteredCourses.length}{" "}
                  {filteredCourses.length === 1 ?
                  "curso encontrado" :
                  "cursos encontrados"}
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4"
                data-oid="a1wf2ex">

                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="input-regen min-w-[150px]"
                  data-oid="xagpmqv">

                  {levels.map((level) =>
                  <option
                    key={level.value}
                    value={level.value}
                    data-oid="q.fjdwf">

                      {level.label}
                    </option>
                  )}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input-regen min-w-[150px]"
                  data-oid="8s-do1g">

                  {sortOptions.map((option) =>
                  <option
                    key={option.value}
                    value={option.value}
                    data-oid="t7tpdtu">

                      {option.label}
                    </option>
                  )}
                </select>

                <label
                  className="flex items-center space-x-2 text-sm"
                  data-oid="2ehusjk">

                  <input
                    type="checkbox"
                    checked={showPremiumOnly}
                    onChange={(e) => setShowPremiumOnly(e.target.checked)}
                    className="w-4 h-4 text-primary-300 bg-white border-neutral-light-gray rounded focus:ring-primary-300 focus:ring-2"
                    data-oid="bkq9.-a" />


                  <span
                    className="text-neutral-dark-navy dark:text-neutral-light-gray"
                    data-oid="cxun5nl">

                    Apenas Premium
                  </span>
                </label>
              </div>
            </div>

            {/* Category Filter */}
            <div className="mt-6" data-oid="xpq6wo3">
              <div className="flex flex-wrap gap-2" data-oid="uxd9leo">
                {categories.map((category) =>
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-regen text-sm font-medium transition-colors ${
                  selectedCategory === category ?
                  "bg-primary-300 text-white" :
                  "bg-neutral-light-gray dark:bg-neutral-dark-navy text-neutral-medium-gray hover:text-primary-300"}`
                  }
                  data-oid=":-us8_8">

                    {category}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12" data-oid=":o6skqr">
          <div className="container-regen" data-oid="30d:y..">
            {filteredCourses.length === 0 ?
            <div className="text-center py-16" data-oid="f0elu4_">
                <div
                className="w-24 h-24 bg-neutral-light-gray dark:bg-neutral-medium-gray rounded-full flex items-center justify-center mx-auto mb-6"
                data-oid="5qmhx82">

                  <svg
                  className="w-12 h-12 text-neutral-medium-gray"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="wlnt:u2">

                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                    data-oid="l.af03r" />

                  </svg>
                </div>
                <h3
                className="text-heading text-xl font-semibold text-neutral-dark-navy dark:text-white mb-2"
                data-oid="lu0_d6i">

                  Nenhum curso encontrado
                </h3>
                <p
                className="text-body text-neutral-medium-gray mb-6"
                data-oid="mo.0uht">

                  Tente ajustar os filtros para encontrar o curso ideal
                </p>
                <Button
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSelectedLevel("all");
                  setShowPremiumOnly(false);
                }}
                data-oid="xcaubgk">

                  Limpar Filtros
                </Button>
              </div> :

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              data-oid="tnxtb59">

                {filteredCourses.map((course) =>
              <div key={course.id} className="relative" data-oid="xvz17op">
                    <ContentCard {...course} data-oid="8ftapua" />
                    <div
                  className="absolute top-2 right-2 flex flex-col gap-1"
                  data-oid="d98s2ly">

                      <Badge
                    variant={getLevelBadgeVariant(course.level)}
                    size="sm"
                    data-oid="8qe15f1">

                        {course.level}
                      </Badge>
                      {course.isPremium &&
                  <Badge variant="warning" size="sm" data-oid="pt712rq">
                          Premium
                        </Badge>
                  }
                      {course.isNew &&
                  <Badge variant="info" size="sm" data-oid="8-kz.qi">
                          Novo
                        </Badge>
                  }
                    </div>
                  </div>
              )}
              </div>
            }
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-300" data-oid="ccz.15x">
          <div className="container-regen text-center" data-oid="57nm7gk">
            <h2
              className="text-heading text-4xl font-bold text-white mb-4"
              data-oid="xxd894_">

              Não encontrou o que procurava?
            </h2>
            <p
              className="text-body text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
              data-oid="m_jr0-n">

              Sugerir novos cursos ou entre em contato conosco para mais
              informações
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="t55xh8u">

              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary-300 hover:bg-primary-50"
                data-oid="s7qnszb">

                Sugerir Curso
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white hover:bg-white/10"
                data-oid="04213w0">

                Falar Conosco
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer data-oid="ji1a-no" />
    </div>);

}

export default function CoursesPage() {
  return (
    <ThemeProvider data-oid="46qq._i">
      <ToastProvider data-oid="t524-8j">
        <CoursesContent data-oid="i.i0.3." />
      </ToastProvider>
    </ThemeProvider>);

}