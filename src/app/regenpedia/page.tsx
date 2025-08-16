"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContentCard } from "@/components/content/ContentCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Mock data for PDFs and books
const featuredBook = {
  id: "featured",
  title: "Manual Completo de Agricultura Regenerativa",
  description:
  "O guia definitivo para implementar práticas regenerativas em qualquer escala, desde hortas urbanas até grandes propriedades rurais. Inclui estudos de caso, técnicas práticas e fundamentos científicos.",
  coverImage: "/api/placeholder/400/600",
  type: "pdf" as const,
  href: "/ler/manual-agricultura-regenerativa",
  instructor: "Dr. Ana Silva & Colaboradores",
  rating: 4.9,
  studentsCount: 5200,
  isFeatured: true,
  isPremium: true,
  pages: 450,
  language: "Português",
  fileSize: "25 MB",
  category: "Agroecologia",
  publishedDate: "2024"
};

const books = [
{
  id: "1",
  title: "Manual de Compostagem Urbana",
  description:
  "Guia completo para implementar sistemas de compostagem em ambientes urbanos e reduzir o desperdício orgânico.",
  coverImage: "/api/placeholder/300/400",
  type: "pdf" as const,
  href: "/ler/manual-compostagem-urbana",
  instructor: "Maria Santos",
  rating: 4.9,
  studentsCount: 2100,
  pages: 120,
  language: "Português",
  fileSize: "8 MB",
  category: "Sustentabilidade Urbana",
  publishedDate: "2023",
  isNew: true
},
{
  id: "2",
  title: "Fundamentos da Permacultura",
  description:
  "Princípios e práticas essenciais para criar sistemas sustentáveis baseados na observação da natureza.",
  coverImage: "/api/placeholder/300/400",
  type: "pdf" as const,
  href: "/ler/fundamentos-permacultura",
  instructor: "Bill Mollison",
  rating: 4.8,
  studentsCount: 3450,
  pages: 280,
  language: "Português",
  fileSize: "15 MB",
  category: "Permacultura",
  publishedDate: "2023",
  isPremium: true
},
{
  id: "3",
  title: "Bioconstrução: Técnicas e Materiais",
  description:
  "Aprenda a construir de forma sustentável usando materiais naturais e técnicas tradicionais.",
  coverImage: "/api/placeholder/300/400",
  type: "pdf" as const,
  href: "/ler/bioconstrucao-tecnicas",
  instructor: "Roberto Lima",
  rating: 4.6,
  studentsCount: 1890,
  pages: 200,
  language: "Português",
  fileSize: "12 MB",
  category: "Bioconstrução",
  publishedDate: "2023"
},
{
  id: "4",
  title: "Gestão Holística de Recursos",
  description:
  "Estratégias integradas para o manejo sustentável de recursos naturais em propriedades rurais.",
  coverImage: "/api/placeholder/300/400",
  type: "pdf" as const,
  href: "/ler/gestao-holistica-recursos",
  instructor: "Allan Savory",
  rating: 4.7,
  studentsCount: 2340,
  pages: 320,
  language: "Português",
  fileSize: "18 MB",
  category: "Manejo Holístico",
  publishedDate: "2024",
  isPremium: true
},
{
  id: "5",
  title: "Plantas Medicinais e Alimentícias",
  description:
  "Guia ilustrado de plantas com propriedades medicinais e alimentícias para cultivo sustentável.",
  coverImage: "/api/placeholder/300/400",
  type: "pdf" as const,
  href: "/ler/plantas-medicinais-alimenticias",
  instructor: "Dra. Patricia Costa",
  rating: 4.8,
  studentsCount: 1670,
  pages: 180,
  language: "Português",
  fileSize: "22 MB",
  category: "Plantas Medicinais",
  publishedDate: "2023"
},
{
  id: "6",
  title: "Sistemas Agroflorestais Tropicais",
  description:
  "Implementação e manejo de sistemas agroflorestais em regiões tropicais e subtropicais.",
  coverImage: "/api/placeholder/300/400",
  type: "pdf" as const,
  href: "/ler/sistemas-agroflorestais-tropicais",
  instructor: "Prof. João Oliveira",
  rating: 4.9,
  studentsCount: 2890,
  pages: 380,
  language: "Português",
  fileSize: "28 MB",
  category: "Agrofloresta",
  publishedDate: "2024",
  isPremium: true,
  isNew: true
},
{
  id: "7",
  title: "Economia Regenerativa",
  description:
  "Modelos econômicos que promovem a regeneração social e ambiental em comunidades.",
  coverImage: "/api/placeholder/300/400",
  type: "pdf" as const,
  href: "/ler/economia-regenerativa",
  instructor: "Kate Raworth",
  rating: 4.6,
  studentsCount: 1234,
  pages: 250,
  language: "Português",
  fileSize: "14 MB",
  category: "Economia",
  publishedDate: "2024",
  isNew: true
},
{
  id: "8",
  title: "Microbiologia do Solo",
  description:
  "Entenda a vida microscópica do solo e como ela influencia a produtividade e saúde das plantas.",
  coverImage: "/api/placeholder/300/400",
  type: "pdf" as const,
  href: "/ler/microbiologia-solo",
  instructor: "Dr. Elaine Ingham",
  rating: 4.8,
  studentsCount: 1890,
  pages: 160,
  language: "Português",
  fileSize: "11 MB",
  category: "Ciência do Solo",
  publishedDate: "2023",
  isPremium: true
}];


const categories = [
"Todos",
"Agroecologia",
"Permacultura",
"Bioconstrução",
"Sustentabilidade Urbana",
"Agrofloresta",
"Manejo Holístico",
"Plantas Medicinais",
"Economia",
"Ciência do Solo"];


const sortOptions = [
{ value: "popular", label: "Mais Populares" },
{ value: "rating", label: "Melhor Avaliados" },
{ value: "newest", label: "Mais Recentes" },
{ value: "pages", label: "Número de Páginas" },
{ value: "title", label: "Título A-Z" }];


function RegenPediaContent() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("popular");
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and sort books
  const filteredBooks = books.
  filter((book) => {
    if (selectedCategory !== "Todos" && book.category !== selectedCategory)
    return false;
    if (showPremiumOnly && !book.isPremium) return false;
    if (
    searchQuery &&
    !book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !book.description.toLowerCase().includes(searchQuery.toLowerCase()))

    return false;
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
      case "pages":
        return b.pages - a.pages;
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div
      className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
      data-oid="tkr:m64">

      <Header data-oid="osgw_40" />

      <main className="pt-20" data-oid="17e1dx:">
        {/* Hero Section with Featured Book */}
        <section
          className="py-16 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-neutral-dark-navy dark:to-black"
          data-oid="256m2p2">

          <div className="container-regen" data-oid="838249q">
            <div className="text-center mb-12" data-oid="4rryfgg">
              <h1
                className="text-heading text-5xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                data-oid="xcsmcjh">

                RegenPedia
              </h1>
              <p
                className="text-body text-xl text-neutral-medium-gray max-w-3xl mx-auto"
                data-oid="cu1142n">

                Nossa biblioteca digital com livros, manuais e guias
                especializados em regeneração, sustentabilidade e práticas
                ecológicas
              </p>
            </div>

            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              data-oid="zmun85-">

              <div className="order-2 lg:order-1" data-oid="mi:cbsb">
                <Badge
                  variant="info"
                  size="sm"
                  className="mb-4"
                  data-oid="c4:g:-d">

                  Livro em Destaque
                </Badge>
                <h2
                  className="text-heading text-3xl lg:text-4xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                  data-oid="euobn5v">

                  {featuredBook.title}
                </h2>
                <p
                  className="text-body text-lg text-neutral-medium-gray mb-6"
                  data-oid=".jkczqx">

                  {featuredBook.description}
                </p>

                <div
                  className="flex flex-wrap items-center gap-4 mb-6 text-sm text-neutral-medium-gray"
                  data-oid="r.__9oe">

                  <div
                    className="flex items-center space-x-1"
                    data-oid="8odhtuo">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="ub:w5w3">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                        data-oid="9y.l9o2" />

                    </svg>
                    <span data-oid="90dp02:">{featuredBook.pages} páginas</span>
                  </div>
                  <div
                    className="flex items-center space-x-1"
                    data-oid=":9.ss3-">

                    <svg
                      className="w-4 h-4 text-accent-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="zdsk9e7">

                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        data-oid="9n.k6mo" />

                    </svg>
                    <span data-oid="zfsdi7k">{featuredBook.rating}</span>
                  </div>
                  <div
                    className="flex items-center space-x-1"
                    data-oid="8x4nxm_">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="l9kzdbb">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        data-oid="hj9daot" />

                    </svg>
                    <span data-oid="zhz5y33">
                      {featuredBook.studentsCount.toLocaleString()} leitores
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-1"
                    data-oid="6k_-dgk">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="gh0rx9z">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                        data-oid="bvf7xo0" />

                    </svg>
                    <span data-oid="d-m5d6.">{featuredBook.fileSize}</span>
                  </div>
                </div>

                <div
                  className="flex flex-col sm:flex-row gap-4"
                  data-oid="-i5uk01">

                  <Button
                    size="lg"
                    className="flex-1 sm:flex-none"
                    data-oid="6thczak">

                    Ler Agora
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="nviur8x">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                        data-oid="i1x-iv1" />

                    </svg>
                  </Button>
                  <Button variant="secondary" size="lg" data-oid="e28e_.c">
                    Download PDF
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="xxhdx1u">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                        data-oid="09_3r-v" />

                    </svg>
                  </Button>
                </div>
              </div>

              <div className="relative order-1 lg:order-2" data-oid="vo14i_9">
                <img
                  src={featuredBook.coverImage}
                  alt={featuredBook.title}
                  className="w-full max-w-sm mx-auto rounded-regen-lg shadow-regen-hover"
                  data-oid="f3iqggh" />


                {featuredBook.isPremium &&
                <div className="absolute top-4 right-4" data-oid="s_qlpg4">
                    <Badge variant="warning" size="sm" data-oid="z9enpu6">
                      Premium
                    </Badge>
                  </div>
                }
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters Section */}
        <section
          className="py-8 bg-white dark:bg-black border-b border-neutral-light-gray dark:border-neutral-medium-gray"
          data-oid="g1552:6">

          <div className="container-regen" data-oid="1dweqa2">
            <div
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6"
              data-oid="4g18ndq">

              <div data-oid="qruby1i">
                <h2
                  className="text-heading text-2xl font-bold text-neutral-dark-navy dark:text-white mb-2"
                  data-oid="kdb3e7t">

                  Biblioteca Completa
                </h2>
                <p
                  className="text-body text-neutral-medium-gray"
                  data-oid="hhul3hu">

                  {filteredBooks.length}{" "}
                  {filteredBooks.length === 1 ?
                  "livro encontrado" :
                  "livros encontrados"}
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-md w-full" data-oid="9n.hqcz">
                <input
                  type="text"
                  placeholder="Buscar livros..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-regen pl-10"
                  data-oid="nuyzvfn" />


                <svg
                  className="w-5 h-5 text-neutral-medium-gray absolute left-3 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="w_tqjtv">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    data-oid="56ep-fw" />

                </svg>
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-6"
              data-oid=".c9_vde">

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-regen min-w-[150px]"
                data-oid="gx30a34">

                {sortOptions.map((option) =>
                <option
                  key={option.value}
                  value={option.value}
                  data-oid="ii8s3vz">

                    {option.label}
                  </option>
                )}
              </select>

              <label
                className="flex items-center space-x-2 text-sm"
                data-oid="yn_69wd">

                <input
                  type="checkbox"
                  checked={showPremiumOnly}
                  onChange={(e) => setShowPremiumOnly(e.target.checked)}
                  className="w-4 h-4 text-primary-300 bg-white border-neutral-light-gray rounded focus:ring-primary-300 focus:ring-2"
                  data-oid="r2w5qhh" />


                <span
                  className="text-neutral-dark-navy dark:text-neutral-light-gray"
                  data-oid="cl_m1a7">

                  Apenas Premium
                </span>
              </label>

              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedCategory("Todos");
                  setShowPremiumOnly(false);
                  setSearchQuery("");
                  setSortBy("popular");
                }}
                data-oid="jxzm1h0">

                Limpar Filtros
              </Button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2" data-oid="eycppq5">
              {categories.map((category) =>
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-regen text-sm font-medium transition-colors ${
                selectedCategory === category ?
                "bg-primary-300 text-white" :
                "bg-neutral-light-gray dark:bg-neutral-dark-navy text-neutral-medium-gray hover:text-primary-300"}`
                }
                data-oid="i:1tupe">

                  {category}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Books Grid */}
        <section className="py-12" data-oid="si66yr.">
          <div className="container-regen" data-oid="d:b-kzx">
            {filteredBooks.length === 0 ?
            <div className="text-center py-16" data-oid="4v3vmsa">
                <div
                className="w-24 h-24 bg-neutral-light-gray dark:bg-neutral-medium-gray rounded-full flex items-center justify-center mx-auto mb-6"
                data-oid="ia.v9fg">

                  <svg
                  className="w-12 h-12 text-neutral-medium-gray"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="ss2turx">

                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                    data-oid="pnmizkg" />

                  </svg>
                </div>
                <h3
                className="text-heading text-xl font-semibold text-neutral-dark-navy dark:text-white mb-2"
                data-oid="_y5gjqe">

                  Nenhum livro encontrado
                </h3>
                <p
                className="text-body text-neutral-medium-gray mb-6"
                data-oid="on_xw_l">

                  Tente ajustar os filtros ou termos de busca
                </p>
                <Button
                onClick={() => {
                  setSelectedCategory("Todos");
                  setShowPremiumOnly(false);
                  setSearchQuery("");
                }}
                data-oid="oz158nw">

                  Limpar Filtros
                </Button>
              </div> :

            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
              data-oid="h6ps9wf">

                {filteredBooks.map((book) =>
              <div
                key={book.id}
                className="relative group"
                data-oid="jicv:.3">

                    <div
                  className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen hover:shadow-regen-hover transition-all duration-300 overflow-hidden"
                  data-oid="95q4epd">

                      <div className="relative" data-oid="4.nlzfu">
                        <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-64 object-cover"
                      data-oid="54dba4t" />


                        <div
                      className="absolute top-2 right-2 flex flex-col gap-1"
                      data-oid="kl1bkgx">

                          {book.isPremium &&
                      <Badge
                        variant="warning"
                        size="sm"
                        data-oid="y4hruix">

                              Premium
                            </Badge>
                      }
                          {book.isNew &&
                      <Badge variant="info" size="sm" data-oid="4e4b5hy">
                              Novo
                            </Badge>
                      }
                        </div>

                        {/* Hover overlay */}
                        <div
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      data-oid="ym9c3rf">

                          <div className="flex space-x-2" data-oid="w2e6c_8">
                            <Button size="sm" data-oid="4vt3sfo">
                              Ler
                            </Button>
                            <Button
                          size="sm"
                          variant="secondary"
                          data-oid=":xeej9n">

                              Download
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4" data-oid="f:cl8cx">
                        <h3
                      className="text-heading font-semibold text-lg mb-2 line-clamp-2"
                      data-oid="n5_fpc_">

                          {book.title}
                        </h3>
                        <p
                      className="text-body text-sm text-neutral-medium-gray mb-2"
                      data-oid="vsh.0l_">

                          {book.instructor}
                        </p>

                        <div
                      className="flex items-center justify-between text-xs text-neutral-medium-gray mb-3"
                      data-oid="0178qvi">

                          <div
                        className="flex items-center space-x-1"
                        data-oid="tdufy-g">

                            <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="d-l9s42">

                              <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                            data-oid="x7fn4d_" />

                            </svg>
                            <span data-oid="9mglk1p">{book.pages}p</span>
                          </div>
                          <div
                        className="flex items-center space-x-1"
                        data-oid="o6duzk-">

                            <svg
                          className="w-3 h-3 text-accent-gold"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="1mt7n8w">

                              <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            data-oid="2zzf53_" />

                            </svg>
                            <span data-oid="pkfhhjo">{book.rating}</span>
                          </div>
                        </div>

                        <div
                      className="flex items-center justify-between"
                      data-oid="y8l1.lw">

                          <Badge variant="default" size="sm" data-oid="vjzih3:">
                            {book.category}
                          </Badge>
                          <span
                        className="text-xs text-neutral-medium-gray"
                        data-oid="13z:j3e">

                            {book.fileSize}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
              )}
              </div>
            }
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-300" data-oid="dgrpglj">
          <div className="container-regen text-center" data-oid="ed.o-n8">
            <h2
              className="text-heading text-4xl font-bold text-white mb-4"
              data-oid="jfdhv6x">

              Contribua com a RegenPedia
            </h2>
            <p
              className="text-body text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
              data-oid=".l:294n">

              Tem conhecimento para compartilhar? Ajude a expandir nossa
              biblioteca com seus materiais
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="2o9zzrc">

              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary-300 hover:bg-primary-50"
                data-oid="ecjex1k">

                Enviar Material
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white hover:bg-white/10"
                data-oid="t32y6lm">

                Saiba Mais
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer data-oid="66rx1_q" />
    </div>);

}

export default function RegenPediaPage() {
  return (
    <ThemeProvider data-oid="2boxblo">
      <ToastProvider data-oid="ywi.dmo">
        <RegenPediaContent data-oid="km77dtc" />
      </ToastProvider>
    </ThemeProvider>);

}