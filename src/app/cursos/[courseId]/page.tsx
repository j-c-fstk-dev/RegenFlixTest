"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";

// Mock course data - in a real app, this would come from an API
const courseData = {
  id: "agroecologia-regenerativa",
  title: "Introdução à Agroecologia Regenerativa",
  shortDescription:
  "Aprenda os fundamentos da agricultura regenerativa e como ela pode transformar nosso sistema alimentar global.",
  longDescription:
  "Este curso abrangente oferece uma introdução completa aos princípios e práticas da agroecologia regenerativa. Você aprenderá sobre os fundamentos científicos por trás da agricultura regenerativa, técnicas práticas de implementação, e como esses métodos podem contribuir para a restauração de ecossistemas degradados enquanto mantêm a produtividade agrícola.",
  coverImage: "/api/placeholder/800/400",
  instructor: {
    name: "Dr. Ana Silva",
    bio: "Doutora em Agroecologia pela UFRGS, com mais de 15 anos de experiência em pesquisa e consultoria em agricultura regenerativa. Autora de diversos artigos científicos e livros sobre o tema.",
    avatar: "/api/placeholder/100/100",
    credentials: [
    "PhD em Agroecologia",
    "15+ anos de experiência",
    "50+ projetos implementados"]

  },
  duration: "4h 30min",
  level: "Iniciante",
  rating: 4.8,
  studentsCount: 1250,
  language: "Português",
  lastUpdated: "Janeiro 2024",
  certificate: true,
  price: 0, // Free course
  isPremium: false,
  category: "Agroecologia",
  tags: [
  "agricultura",
  "sustentabilidade",
  "regeneração",
  "solo",
  "biodiversidade"],


  // Course curriculum
  modules: [
  {
    id: 1,
    title: "Fundamentos da Agroecologia",
    description:
    "Introdução aos conceitos básicos e princípios da agroecologia regenerativa",
    duration: "45min",
    lessons: [
    {
      id: 1,
      title: "O que é Agroecologia Regenerativa?",
      duration: "12min",
      type: "video",
      isCompleted: true,
      isLocked: false
    },
    {
      id: 2,
      title: "História e Evolução da Agricultura",
      duration: "15min",
      type: "video",
      isCompleted: true,
      isLocked: false
    },
    {
      id: 3,
      title: "Princípios Fundamentais",
      duration: "18min",
      type: "video",
      isCompleted: false,
      isLocked: false
    }]

  },
  {
    id: 2,
    title: "Saúde do Solo",
    description:
    "Compreenda a importância do solo saudável para sistemas regenerativos",
    duration: "1h 15min",
    lessons: [
    {
      id: 4,
      title: "Biologia do Solo",
      duration: "20min",
      type: "video",
      isCompleted: false,
      isLocked: false
    },
    {
      id: 5,
      title: "Microorganismos e Nutrição",
      duration: "25min",
      type: "video",
      isCompleted: false,
      isLocked: false
    },
    {
      id: 6,
      title: "Técnicas de Regeneração do Solo",
      duration: "30min",
      type: "video",
      isCompleted: false,
      isLocked: false
    }]

  },
  {
    id: 3,
    title: "Biodiversidade e Ecossistemas",
    description:
    "Como promover e manter a biodiversidade em sistemas agrícolas",
    duration: "1h 30min",
    lessons: [
    {
      id: 7,
      title: "Importância da Biodiversidade",
      duration: "22min",
      type: "video",
      isCompleted: false,
      isLocked: false
    },
    {
      id: 8,
      title: "Corredores Ecológicos",
      duration: "28min",
      type: "video",
      isCompleted: false,
      isLocked: false
    },
    {
      id: 9,
      title: "Plantas Companheiras",
      duration: "25min",
      type: "video",
      isCompleted: false,
      isLocked: false
    },
    {
      id: 10,
      title: "Manejo Integrado de Pragas",
      duration: "15min",
      type: "video",
      isCompleted: false,
      isLocked: false
    }]

  },
  {
    id: 4,
    title: "Práticas Regenerativas",
    description:
    "Técnicas práticas para implementar agricultura regenerativa",
    duration: "1h 20min",
    lessons: [
    {
      id: 11,
      title: "Rotação de Culturas",
      duration: "18min",
      type: "video",
      isCompleted: false,
      isLocked: false
    },
    {
      id: 12,
      title: "Cultivos de Cobertura",
      duration: "22min",
      type: "video",
      isCompleted: false,
      isLocked: false
    },
    {
      id: 13,
      title: "Compostagem e Adubação Orgânica",
      duration: "25min",
      type: "video",
      isCompleted: false,
      isLocked: false
    },
    {
      id: 14,
      title: "Manejo da Água",
      duration: "15min",
      type: "video",
      isCompleted: false,
      isLocked: false
    }]

  }],


  // What you'll learn
  learningOutcomes: [
  "Compreender os princípios fundamentais da agroecologia regenerativa",
  "Identificar práticas que promovem a saúde do solo",
  "Implementar técnicas de manejo sustentável",
  "Desenvolver sistemas agrícolas biodiversos",
  "Aplicar métodos de regeneração de ecossistemas degradados",
  "Avaliar a sustentabilidade de sistemas produtivos"],


  // Prerequisites
  prerequisites: [
  "Interesse em agricultura sustentável",
  "Conhecimentos básicos de biologia (desejável)",
  "Acesso a computador ou dispositivo móvel"],


  // Course materials
  materials: [
  "24 vídeo-aulas em HD",
  "Material de apoio em PDF",
  "Exercícios práticos",
  "Certificado de conclusão",
  "Acesso vitalício ao conteúdo",
  "Suporte da comunidade"]

};

function CourseDetailsContent() {
  const params = useParams();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<
    "overview" | "curriculum" | "instructor" | "reviews">(
    "overview");
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  // Calculate progress
  const totalLessons = courseData.modules.reduce(
    (acc, module) => acc + module.lessons.length,
    0
  );
  const completedLessons = courseData.modules.reduce(
    (acc, module) =>
    acc + module.lessons.filter((lesson) => lesson.isCompleted).length,
    0
  );
  const progress = Math.round(completedLessons / totalLessons * 100);

  const handleEnrollment = () => {
    showToast({
      type: "success",
      title: "Inscrição realizada com sucesso!",
      message: "Você já pode começar a assistir as aulas."
    });
  };

  const handleStartLesson = (lessonId: number) => {
    showToast({
      type: "info",
      title: "Redirecionando...",
      message: "Você será redirecionado para a aula."
    });
  };

  const getLevelBadgeVariant = (level: string) => {
    switch (level) {
      case "Iniciante":
        return "success" as const;
      case "Intermediário":
        return "warning" as const;
      case "Avançado":
        return "error" as const;
      default:
        return "default" as const;
    }
  };

  return (
    <div
      className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
      data-oid="bnzkyw4">

      <Header data-oid="ros.oe8" />

      <main className="pt-20" data-oid="-7nctud">
        {/* Hero Section */}
        <section
          className="py-16 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-neutral-dark-navy dark:to-black"
          data-oid="hur9_no">

          <div className="container-regen" data-oid="f6_txqg">
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
              data-oid="7-m9ube">

              {/* Course Info */}
              <div className="lg:col-span-2" data-oid="kkm-mvt">
                <div
                  className="flex flex-wrap items-center gap-2 mb-4"
                  data-oid="rq959-3">

                  <Badge variant="info" size="sm" data-oid="kqm53oh">
                    {courseData.category}
                  </Badge>
                  <Badge
                    variant={getLevelBadgeVariant(courseData.level)}
                    size="sm"
                    data-oid="02-xuqh">

                    {courseData.level}
                  </Badge>
                  {courseData.isPremium &&
                  <Badge variant="warning" size="sm" data-oid="g-6h3zm">
                      Premium
                    </Badge>
                  }
                </div>

                <h1
                  className="text-heading text-4xl lg:text-5xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                  data-oid="73mt8fy">

                  {courseData.title}
                </h1>

                <p
                  className="text-body text-lg text-neutral-medium-gray mb-6"
                  data-oid="l_0peem">

                  {courseData.shortDescription}
                </p>

                {/* Course Stats */}
                <div
                  className="flex flex-wrap items-center gap-6 text-sm text-neutral-medium-gray mb-6"
                  data-oid="gsao6gc">

                  <div
                    className="flex items-center space-x-1"
                    data-oid="5qzje2_">

                    <svg
                      className="w-4 h-4 text-accent-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="fn21b26">

                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        data-oid="4m08muu" />

                    </svg>
                    <span className="font-medium" data-oid="-eo3pqc">
                      {courseData.rating}
                    </span>
                    <span data-oid="1p.0_8z">
                      ({courseData.studentsCount.toLocaleString()} avaliações)
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-1"
                    data-oid="9pqy_q4">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="sipyzqj">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        data-oid="nnpe-c0" />

                    </svg>
                    <span data-oid=".zc4b55">
                      {courseData.studentsCount.toLocaleString()} estudantes
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-1"
                    data-oid="g.v4kb2">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid=":1w12ex">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="js0hl.1" />

                    </svg>
                    <span data-oid="8lnp.6.">{courseData.duration}</span>
                  </div>
                  <div
                    className="flex items-center space-x-1"
                    data-oid="2wg1ayq">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="g0m2g1a">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="1cyrea3" />

                    </svg>
                    <span data-oid="c-lc_x9">Certificado incluído</span>
                  </div>
                </div>

                {/* Instructor Info */}
                <div
                  className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-black/20 rounded-regen-lg backdrop-blur-sm"
                  data-oid="hi4kl34">

                  <img
                    src={courseData.instructor.avatar}
                    alt={courseData.instructor.name}
                    className="w-12 h-12 rounded-full object-cover"
                    data-oid="saz6hrl" />


                  <div data-oid=".kfq_mt">
                    <p
                      className="text-heading font-semibold text-neutral-dark-navy dark:text-white"
                      data-oid="xll2fkb">

                      {courseData.instructor.name}
                    </p>
                    <p
                      className="text-body text-sm text-neutral-medium-gray"
                      data-oid="7ch:529">

                      Instrutor do curso
                    </p>
                  </div>
                </div>
              </div>

              {/* Course Preview & Enrollment */}
              <div className="lg:col-span-1" data-oid="hh_uccw">
                <div className="sticky top-24" data-oid="ikpbfaz">
                  <div
                    className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen-hover p-6"
                    data-oid="qp18jm7">

                    <div className="relative mb-6" data-oid="7enae_-">
                      <img
                        src={courseData.coverImage}
                        alt={courseData.title}
                        className="w-full rounded-regen-lg"
                        data-oid="mdpif73" />


                      <button
                        className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-regen-lg hover:bg-black/40 transition-colors"
                        data-oid="53o6n8j">

                        <div
                          className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                          data-oid="gfoic:-">

                          <svg
                            className="w-8 h-8 text-primary-300 ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            data-oid=":-u._k9">

                            <path d="M8 5v14l11-7z" data-oid="oc22who" />
                          </svg>
                        </div>
                      </button>
                    </div>

                    {progress > 0 &&
                    <div className="mb-6" data-oid="rid3b3z">
                        <div
                        className="flex items-center justify-between mb-2"
                        data-oid="v6ryb9.">

                          <span
                          className="text-sm font-medium text-neutral-dark-navy dark:text-white"
                          data-oid="738a_03">

                            Seu Progresso
                          </span>
                          <span
                          className="text-sm text-neutral-medium-gray"
                          data-oid="ixbpvol">

                            {progress}%
                          </span>
                        </div>
                        <ProgressBar progress={progress} data-oid="_8trvm9" />
                      </div>
                    }

                    <div className="text-center mb-6" data-oid="4z.:qo9">
                      {courseData.price === 0 ?
                      <div
                        className="text-3xl font-bold text-success mb-2"
                        data-oid="hyriy18">

                          Gratuito
                        </div> :

                      <div
                        className="text-3xl font-bold text-neutral-dark-navy dark:text-white mb-2"
                        data-oid="d4-2jh6">

                          R$ {courseData.price.toFixed(2)}
                        </div>
                      }
                    </div>

                    <div className="space-y-3" data-oid="d:a.4c6">
                      <Button
                        size="lg"
                        className="w-full"
                        onClick={handleEnrollment}
                        data-oid="gdoaeoo">

                        {progress > 0 ? "Continuar Curso" : "Começar Curso"}
                      </Button>
                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-full"
                        data-oid="kfxu_-a">

                        Adicionar à Lista
                      </Button>
                    </div>

                    {/* Course includes */}
                    <div
                      className="mt-6 pt-6 border-t border-neutral-light-gray dark:border-neutral-medium-gray"
                      data-oid="jj7-.0n">

                      <h4
                        className="text-heading font-semibold mb-3"
                        data-oid="deo-nse">

                        Este curso inclui:
                      </h4>
                      <ul className="space-y-2 text-sm" data-oid="_4o.jdo">
                        {courseData.materials.map((material, index) =>
                        <li
                          key={index}
                          className="flex items-center space-x-2"
                          data-oid="k7f5ov0">

                            <svg
                            className="w-4 h-4 text-success flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid=":3fkd92">

                              <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                              data-oid="77bg0pi" />

                            </svg>
                            <span
                            className="text-neutral-medium-gray"
                            data-oid=".wc963a">

                              {material}
                            </span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content Tabs */}
        <section className="py-12" data-oid="hgo7n98">
          <div className="container-regen" data-oid="_98tnw7">
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
              data-oid="k8cqe31">

              <div className="lg:col-span-2" data-oid="ks8oi04">
                {/* Tab Navigation */}
                <div
                  className="flex space-x-1 bg-neutral-light-gray dark:bg-neutral-dark-navy rounded-regen p-1 mb-8"
                  data-oid="rkvq20i">

                  {[
                  { id: "overview", label: "Visão Geral" },
                  { id: "curriculum", label: "Conteúdo" },
                  { id: "instructor", label: "Instrutor" },
                  { id: "reviews", label: "Avaliações" }].
                  map((tab) =>
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 py-2 px-4 rounded-regen text-sm font-medium transition-colors ${
                    activeTab === tab.id ?
                    "bg-white dark:bg-black text-primary-300" :
                    "text-neutral-medium-gray hover:text-neutral-dark-navy dark:hover:text-white"}`
                    }
                    data-oid="pl-flup">

                      {tab.label}
                    </button>
                  )}
                </div>

                {/* Tab Content */}
                {activeTab === "overview" &&
                <div className="space-y-8" data-oid="migif23">
                    <div data-oid="73zii51">
                      <h3
                      className="text-heading text-2xl font-bold mb-4"
                      data-oid="1fh9r:2">

                        Sobre este curso
                      </h3>
                      <p
                      className="text-body text-neutral-medium-gray leading-relaxed"
                      data-oid="l5a5oe2">

                        {courseData.longDescription}
                      </p>
                    </div>

                    <div data-oid="7yo_vqc">
                      <h3
                      className="text-heading text-2xl font-bold mb-4"
                      data-oid="hdd4-za">

                        O que você vai aprender
                      </h3>
                      <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-3"
                      data-oid="95t20.h">

                        {courseData.learningOutcomes.map((outcome, index) =>
                      <div
                        key={index}
                        className="flex items-start space-x-2"
                        data-oid="3jhk4yb">

                            <svg
                          className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="oni89d:">

                              <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                            data-oid="3t-txcf" />

                            </svg>
                            <span
                          className="text-body text-neutral-medium-gray"
                          data-oid=":70zvew">

                              {outcome}
                            </span>
                          </div>
                      )}
                      </div>
                    </div>

                    <div data-oid="cyua1ni">
                      <h3
                      className="text-heading text-2xl font-bold mb-4"
                      data-oid="pddcje9">

                        Pré-requisitos
                      </h3>
                      <ul className="space-y-2" data-oid="ruv77wx">
                        {courseData.prerequisites.map((prerequisite, index) =>
                      <li
                        key={index}
                        className="flex items-start space-x-2"
                        data-oid="oo1b:l8">

                            <svg
                          className="w-5 h-5 text-info flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="jffpal0">

                              <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            data-oid="5:1d.6k" />

                            </svg>
                            <span
                          className="text-body text-neutral-medium-gray"
                          data-oid="7xh:o.5">

                              {prerequisite}
                            </span>
                          </li>
                      )}
                      </ul>
                    </div>
                  </div>
                }

                {activeTab === "curriculum" &&
                <div data-oid="-igrm1o">
                    <h3
                    className="text-heading text-2xl font-bold mb-6"
                    data-oid="g-d9f4s">

                      Conteúdo do Curso
                    </h3>
                    <div className="space-y-4" data-oid="2qjg.5:">
                      {courseData.modules.map((module) =>
                    <div
                      key={module.id}
                      className="border border-neutral-light-gray dark:border-neutral-medium-gray rounded-regen-lg overflow-hidden"
                      data-oid="ksf_e04">

                          <button
                        onClick={() =>
                        setExpandedModule(
                          expandedModule === module.id ? null : module.id
                        )
                        }
                        className="w-full p-4 bg-white dark:bg-neutral-dark-navy hover:bg-neutral-light-gray dark:hover:bg-black transition-colors text-left"
                        data-oid="3_k5z-o">

                            <div
                          className="flex items-center justify-between"
                          data-oid="gzc3ec4">

                              <div data-oid="ej.ctrx">
                                <h4
                              className="text-heading font-semibold text-lg mb-1"
                              data-oid="bks5d6:">

                                  Módulo {module.id}: {module.title}
                                </h4>
                                <p
                              className="text-body text-sm text-neutral-medium-gray"
                              data-oid="gfzgy5o">

                                  {module.lessons.length} aulas •{" "}
                                  {module.duration}
                                </p>
                              </div>
                              <svg
                            className={`w-5 h-5 text-neutral-medium-gray transition-transform ${
                            expandedModule === module.id ?
                            "rotate-180" :
                            ""}`
                            }
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="o-g:m1v">

                                <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                              data-oid="-vftjvd" />

                              </svg>
                            </div>
                          </button>

                          {expandedModule === module.id &&
                      <div
                        className="border-t border-neutral-light-gray dark:border-neutral-medium-gray"
                        data-oid="iyeb2z8">

                              {module.lessons.map((lesson) =>
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between p-4 hover:bg-neutral-light-gray dark:hover:bg-black transition-colors"
                          data-oid="_tgam:y">

                                  <div
                            className="flex items-center space-x-3"
                            data-oid="y2t5:-m">

                                    <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              lesson.isCompleted ?
                              "bg-success text-white" :
                              lesson.isLocked ?
                              "bg-neutral-medium-gray text-white" :
                              "bg-primary-300 text-white"}`
                              }
                              data-oid="dh54kos">

                                      {lesson.isCompleted ?
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="u7kga:s">

                                          <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                  data-oid="y.317et" />

                                        </svg> :
                              lesson.isLocked ?
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="j57udew">

                                          <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                  data-oid="x8qcnla" />

                                        </svg> :

                              <svg
                                className="w-3 h-3"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="end39ao">

                                          <path
                                  d="M8 5v14l11-7z"
                                  data-oid="x_fbsi6" />

                                        </svg>
                              }
                                    </div>
                                    <div data-oid="-onkcai">
                                      <p
                                className="text-heading font-medium"
                                data-oid="__.ypd4">

                                        {lesson.title}
                                      </p>
                                      <p
                                className="text-body text-sm text-neutral-medium-gray"
                                data-oid="n1.uf3b">

                                        {lesson.type} • {lesson.duration}
                                      </p>
                                    </div>
                                  </div>

                                  {!lesson.isLocked &&
                          <Button
                            size="sm"
                            variant={
                            lesson.isCompleted ?
                            "secondary" :
                            "primary"
                            }
                            onClick={() =>
                            handleStartLesson(lesson.id)
                            }
                            data-oid="z1ey2g7">

                                      {lesson.isCompleted ?
                            "Revisar" :
                            "Assistir"}
                                    </Button>
                          }
                                </div>
                        )}
                            </div>
                      }
                        </div>
                    )}
                    </div>
                  </div>
                }

                {activeTab === "instructor" &&
                <div data-oid="yold32.">
                    <h3
                    className="text-heading text-2xl font-bold mb-6"
                    data-oid="_vsbdnl">

                      Sobre o Instrutor
                    </h3>
                    <div
                    className="flex items-start space-x-6 mb-6"
                    data-oid="p2saw8t">

                      <img
                      src={courseData.instructor.avatar}
                      alt={courseData.instructor.name}
                      className="w-24 h-24 rounded-full object-cover"
                      data-oid=".iq.y88" />


                      <div data-oid="omdurnt">
                        <h4
                        className="text-heading text-xl font-semibold mb-2"
                        data-oid="lc.j.h_">

                          {courseData.instructor.name}
                        </h4>
                        <div className="space-y-1 mb-4" data-oid="nbgzef8">
                          {courseData.instructor.credentials.map(
                          (credential, index) =>
                          <p
                            key={index}
                            className="text-body text-sm text-neutral-medium-gray"
                            data-oid="r3u2gj0">

                                {credential}
                              </p>

                        )}
                        </div>
                      </div>
                    </div>
                    <p
                    className="text-body text-neutral-medium-gray leading-relaxed"
                    data-oid="uojkf2p">

                      {courseData.instructor.bio}
                    </p>
                  </div>
                }

                {activeTab === "reviews" &&
                <div data-oid="zhhrm.b">
                    <h3
                    className="text-heading text-2xl font-bold mb-6"
                    data-oid="z6q47l1">

                      Avaliações dos Estudantes
                    </h3>
                    <div className="text-center py-16" data-oid="5gftq7g">
                      <div
                      className="w-16 h-16 bg-neutral-light-gray dark:bg-neutral-medium-gray rounded-full flex items-center justify-center mx-auto mb-4"
                      data-oid="r:0irjo">

                        <svg
                        className="w-8 h-8 text-neutral-medium-gray"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="_8:46-f">

                          <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          data-oid="x0tq_up" />

                        </svg>
                      </div>
                      <p
                      className="text-body text-neutral-medium-gray"
                      data-oid="7iyyjc.">

                        As avaliações serão exibidas aqui em breve.
                      </p>
                    </div>
                  </div>
                }
              </div>

              {/* Sidebar with related courses */}
              <div className="lg:col-span-1" data-oid="c4aaur4">
                <div className="sticky top-24" data-oid="seh14ta">
                  <h4
                    className="text-heading text-xl font-semibold mb-4"
                    data-oid=":bbnovu">

                    Cursos Relacionados
                  </h4>
                  <div className="space-y-4" data-oid="iy4udyn">
                    {/* This would be populated with related courses */}
                    <div className="text-center py-8" data-oid="e.d:xcg">
                      <p
                        className="text-body text-neutral-medium-gray"
                        data-oid="xflrk1w">

                        Cursos relacionados serão exibidos aqui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer data-oid="fp_yzi:" />
    </div>);

}

export default function CourseDetailsPage() {
  return (
    <ThemeProvider data-oid="q9_ji55">
      <ToastProvider data-oid="gg-tqqr">
        <CourseDetailsContent data-oid="wm3kbb_" />
      </ToastProvider>
    </ThemeProvider>);

}