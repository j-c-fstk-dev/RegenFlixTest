"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Mock PDF data
const pdfData = {
  id: "manual-compostagem-urbana",
  title: "Manual de Compostagem Urbana",
  description:
  "Guia completo para implementar sistemas de compostagem em ambientes urbanos e reduzir o desperdício orgânico.",
  author: "Maria Santos",
  pages: 120,
  fileSize: "8 MB",
  language: "Português",
  publishedDate: "2023",
  category: "Sustentabilidade Urbana",
  rating: 4.9,
  downloads: 2100,
  tags: ["compostagem", "urbano", "resíduos", "sustentabilidade"],

  // PDF content (mock - in production this would be actual PDF content)
  pdfUrl: "/api/placeholder/pdf/manual-compostagem-urbana.pdf",

  // Table of contents
  tableOfContents: [
  { page: 1, title: "Introdução à Compostagem Urbana", level: 1 },
  { page: 5, title: "Benefícios da Compostagem", level: 2 },
  { page: 8, title: "Impacto Ambiental", level: 2 },
  { page: 12, title: "Tipos de Compostagem", level: 1 },
  { page: 15, title: "Compostagem Doméstica", level: 2 },
  { page: 25, title: "Compostagem Comunitária", level: 2 },
  { page: 35, title: "Vermicompostagem", level: 2 },
  { page: 45, title: "Materiais e Equipamentos", level: 1 },
  { page: 50, title: "Materiais Orgânicos", level: 2 },
  { page: 58, title: "Equipamentos Básicos", level: 2 },
  { page: 65, title: "Processo de Compostagem", level: 1 },
  { page: 70, title: "Preparação dos Materiais", level: 2 },
  { page: 78, title: "Montagem da Composteira", level: 2 },
  { page: 85, title: "Manutenção e Cuidados", level: 2 },
  { page: 95, title: "Solução de Problemas", level: 1 },
  { page: 100, title: "Problemas Comuns", level: 2 },
  { page: 108, title: "Dicas e Truques", level: 2 },
  { page: 115, title: "Conclusão", level: 1 },
  { page: 118, title: "Referências", level: 1 }],


  // Additional resources
  resources: [
  {
    title: "Lista de Materiais Compostáveis",
    type: "pdf",
    size: "500 KB",
    url: "/downloads/lista-materiais-compostageis.pdf"
  },
  {
    title: "Planilha de Controle de Compostagem",
    type: "xlsx",
    size: "200 KB",
    url: "/downloads/planilha-controle-compostagem.xlsx"
  },
  {
    title: "Vídeo: Montando sua Primeira Composteira",
    type: "video",
    duration: "15min",
    url: "/assistir/montando-composteira"
  }],


  // User's reading progress and bookmarks
  userProgress: {
    currentPage: 45,
    totalPages: 120,
    bookmarks: [
    {
      page: 15,
      title: "Compostagem Doméstica",
      note: "Importante para meu projeto"
    },
    {
      page: 78,
      title: "Montagem da Composteira",
      note: "Revisar este processo"
    }],


    highlights: [
    {
      page: 25,
      text: "A compostagem comunitária pode reduzir até 30% dos resíduos orgânicos urbanos"
    },
    {
      page: 85,
      text: "A temperatura ideal para compostagem está entre 50-60°C"
    }]

  }
};

function PDFViewerContent() {
  const params = useParams();
  const { showToast } = useToast();
  const [currentPage, setCurrentPage] = useState(
    pdfData.userProgress.currentPage
  );
  const [zoom, setZoom] = useState(100);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"toc" | "bookmarks" | "resources">(
    "toc"
  );
  const [showBookmarkForm, setShowBookmarkForm] = useState(false);
  const [newBookmark, setNewBookmark] = useState("");

  const progress = currentPage / pdfData.pages * 100;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pdfData.pages) {
      setCurrentPage(page);
    }
  };

  const handleZoomChange = (newZoom: number) => {
    if (newZoom >= 50 && newZoom <= 200) {
      setZoom(newZoom);
    }
  };

  const handleAddBookmark = () => {
    if (newBookmark.trim()) {
      showToast({
        type: "success",
        title: "Marcador adicionado!",
        message: `Página ${currentPage} marcada com sucesso.`
      });
      setNewBookmark("");
      setShowBookmarkForm(false);
    }
  };

  const handleDownloadPDF = () => {
    showToast({
      type: "info",
      title: "Download iniciado",
      message: "O PDF será baixado em instantes..."
    });
  };

  const handleDownloadResource = (resource: any) => {
    showToast({
      type: "info",
      title: "Download iniciado",
      message: `Baixando ${resource.title}...`
    });
  };

  return (
    <div
      className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
      data-oid="8b4n3.6">

      <Header data-oid="lxvgiw." />

      <main className="pt-20" data-oid="i4il80p">
        {/* PDF Header */}
        <div
          className="bg-white dark:bg-neutral-dark-navy border-b border-neutral-light-gray dark:border-neutral-medium-gray"
          data-oid="m1m5p8g">

          <div className="container-regen py-4" data-oid="97oftfx">
            <div
              className="flex items-center justify-between"
              data-oid="_73kico">

              <div className="flex items-center space-x-4" data-oid="s1vb43k">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 hover:bg-neutral-light-gray dark:hover:bg-black rounded-regen transition-colors"
                  data-oid="346o4uw">

                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="lr_kz2j">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                      data-oid="2_tn38e" />

                  </svg>
                </button>
                <div data-oid="5b30avf">
                  <h1
                    className="text-heading text-xl font-semibold"
                    data-oid="-4jxpz_">

                    {pdfData.title}
                  </h1>
                  <p
                    className="text-body text-sm text-neutral-medium-gray"
                    data-oid="zy5j10w">

                    por {pdfData.author} • {pdfData.pages} páginas
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4" data-oid="z_e2mji">
                {/* Page Navigation */}
                <div className="flex items-center space-x-2" data-oid="xg6o355">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className="p-2 hover:bg-neutral-light-gray dark:hover:bg-black rounded-regen transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    data-oid="0nc:7dr">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="w6tq.8p">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                        data-oid="66kbcd7" />

                    </svg>
                  </button>

                  <div
                    className="flex items-center space-x-2"
                    data-oid="9v99t9s">

                    <input
                      type="number"
                      value={currentPage}
                      onChange={(e) =>
                      handlePageChange(parseInt(e.target.value) || 1)
                      }
                      className="w-16 px-2 py-1 text-center text-sm border border-neutral-light-gray dark:border-neutral-medium-gray rounded-regen bg-white dark:bg-neutral-dark-navy"
                      min="1"
                      max={pdfData.pages}
                      data-oid="qgd:7yw" />


                    <span
                      className="text-sm text-neutral-medium-gray"
                      data-oid="7knnyj:">

                      de {pdfData.pages}
                    </span>
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= pdfData.pages}
                    className="p-2 hover:bg-neutral-light-gray dark:hover:bg-black rounded-regen transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    data-oid="5h_gwkw">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="tymx4bl">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                        data-oid="yr-m6-0" />

                    </svg>
                  </button>
                </div>

                {/* Zoom Controls */}
                <div className="flex items-center space-x-2" data-oid="_-_bxws">
                  <button
                    onClick={() => handleZoomChange(zoom - 25)}
                    disabled={zoom <= 50}
                    className="p-2 hover:bg-neutral-light-gray dark:hover:bg-black rounded-regen transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    data-oid="nrwhggz">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="94xav06">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                        data-oid="t5t48fk" />

                    </svg>
                  </button>

                  <span
                    className="text-sm text-neutral-medium-gray min-w-[50px] text-center"
                    data-oid="sjhgrpn">

                    {zoom}%
                  </span>

                  <button
                    onClick={() => handleZoomChange(zoom + 25)}
                    disabled={zoom >= 200}
                    className="p-2 hover:bg-neutral-light-gray dark:hover:bg-black rounded-regen transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    data-oid="rv.7uhe">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="fi7-2on">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        data-oid="baecmco" />

                    </svg>
                  </button>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2" data-oid="fpq-:rj">
                  <Button
                    size="sm"
                    onClick={() => setShowBookmarkForm(true)}
                    data-oid="a6b3myp">

                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="e29pmte">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        data-oid="ba7log6" />

                    </svg>
                    Marcar
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={handleDownloadPDF}
                    data-oid="01mv3qd">

                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="tb6dfv0">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        data-oid=".xfdl6k" />

                    </svg>
                    Download
                  </Button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4" data-oid="0n81.c9">
              <div
                className="flex items-center justify-between text-sm text-neutral-medium-gray mb-2"
                data-oid="vaoa6u2">

                <span data-oid="4ct86zt">Progresso de Leitura</span>
                <span data-oid="6zq_afr">{Math.round(progress)}%</span>
              </div>
              <div
                className="w-full bg-neutral-light-gray dark:bg-neutral-medium-gray rounded-full h-2"
                data-oid="8l.-th7">

                <div
                  className="bg-primary-300 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                  data-oid="z:-.:k." />

              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex" data-oid="5f0sd1q">
          {/* Sidebar */}
          {sidebarOpen &&
          <div
            className="w-80 bg-white dark:bg-neutral-dark-navy border-r border-neutral-light-gray dark:border-neutral-medium-gray h-[calc(100vh-140px)] overflow-y-auto"
            data-oid="a6a21b.">

              {/* Tab Navigation */}
              <div
              className="flex border-b border-neutral-light-gray dark:border-neutral-medium-gray"
              data-oid="zv2sm-f">

                {[
              { id: "toc", label: "Índice", icon: "📑" },
              { id: "bookmarks", label: "Marcadores", icon: "🔖" },
              { id: "resources", label: "Recursos", icon: "📁" }].
              map((tab) =>
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                activeTab === tab.id ?
                "bg-primary-50 dark:bg-primary-900 text-primary-300 border-b-2 border-primary-300" :
                "text-neutral-medium-gray hover:text-neutral-dark-navy dark:hover:text-white"}`
                }
                data-oid="ma_hopo">

                    <span className="mr-2" data-oid="spy8-xr">
                      {tab.icon}
                    </span>
                    {tab.label}
                  </button>
              )}
              </div>

              {/* Tab Content */}
              <div className="p-4" data-oid="sug73p_">
                {activeTab === "toc" &&
              <div data-oid="sw.uven">
                    <h3
                  className="text-heading font-semibold mb-4"
                  data-oid="at.ipad">

                      Índice
                    </h3>
                    <div className="space-y-1" data-oid="lfmols:">
                      {pdfData.tableOfContents.map((item, index) =>
                  <button
                    key={index}
                    onClick={() => handlePageChange(item.page)}
                    className={`w-full text-left p-2 rounded-regen transition-colors hover:bg-neutral-light-gray dark:hover:bg-black ${
                    currentPage >= item.page && (
                    index === pdfData.tableOfContents.length - 1 ||
                    currentPage <
                    pdfData.tableOfContents[index + 1].page) ?
                    "bg-primary-50 dark:bg-primary-900 text-primary-300" :
                    ""}`
                    }
                    data-oid="4j_au:a">

                          <div
                      className={`flex items-center justify-between ${
                      item.level === 2 ? "ml-4" : ""}`
                      }
                      data-oid="joymch6">

                            <span
                        className={`text-sm ${
                        item.level === 1 ? "font-medium" : ""}`
                        }
                        data-oid="5_9f.79">

                              {item.title}
                            </span>
                            <span
                        className="text-xs text-neutral-medium-gray"
                        data-oid="6.-9w28">

                              {item.page}
                            </span>
                          </div>
                        </button>
                  )}
                    </div>
                  </div>
              }

                {activeTab === "bookmarks" &&
              <div data-oid="n3t-xxc">
                    <div
                  className="flex items-center justify-between mb-4"
                  data-oid="vr.1vko">

                      <h3
                    className="text-heading font-semibold"
                    data-oid="s978uzi">

                        Marcadores
                      </h3>
                      <Button
                    size="sm"
                    onClick={() => setShowBookmarkForm(!showBookmarkForm)}
                    data-oid="m1v9c0p">

                        <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="3v6r1r4">

                          <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                        data-oid="nk5_dx3" />

                        </svg>
                      </Button>
                    </div>

                    {showBookmarkForm &&
                <div
                  className="mb-4 p-3 bg-neutral-light-gray dark:bg-black rounded-regen-lg"
                  data-oid="ak0w8o.">

                        <div className="mb-2" data-oid=".js._:n">
                          <label
                      className="block text-sm font-medium mb-1"
                      data-oid="t4kj3ir">

                            Marcar página {currentPage}
                          </label>
                          <input
                      type="text"
                      value={newBookmark}
                      onChange={(e) => setNewBookmark(e.target.value)}
                      placeholder="Nota do marcador..."
                      className="input-regen text-sm"
                      data-oid="dydv30n" />

                        </div>
                        <div className="flex space-x-2" data-oid="lav-evw">
                          <Button
                      size="sm"
                      onClick={handleAddBookmark}
                      data-oid="07w24ms">

                            Salvar
                          </Button>
                          <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setShowBookmarkForm(false)}
                      data-oid="4zblfnk">

                            Cancelar
                          </Button>
                        </div>
                      </div>
                }

                    <div className="space-y-2" data-oid="s_h3zcv">
                      {pdfData.userProgress.bookmarks.map((bookmark, index) =>
                  <button
                    key={index}
                    onClick={() => handlePageChange(bookmark.page)}
                    className="w-full text-left p-3 bg-neutral-light-gray dark:bg-black rounded-regen-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
                    data-oid="wm0mw0.">

                          <div
                      className="flex items-center justify-between mb-1"
                      data-oid="_ta2ybp">

                            <span
                        className="text-sm font-medium"
                        data-oid="vhisu3r">

                              {bookmark.title}
                            </span>
                            <span
                        className="text-xs text-neutral-medium-gray"
                        data-oid="4th0_99">

                              p. {bookmark.page}
                            </span>
                          </div>
                          <p
                      className="text-xs text-neutral-medium-gray"
                      data-oid="vd4itjm">

                            {bookmark.note}
                          </p>
                        </button>
                  )}
                    </div>
                  </div>
              }

                {activeTab === "resources" &&
              <div data-oid="80jdon2">
                    <h3
                  className="text-heading font-semibold mb-4"
                  data-oid="000ii6x">

                      Recursos Adicionais
                    </h3>
                    <div className="space-y-3" data-oid="t9e26dh">
                      {pdfData.resources.map((resource, index) =>
                  <div
                    key={index}
                    className="p-3 bg-neutral-light-gray dark:bg-black rounded-regen-lg"
                    data-oid="dg6uf:5">

                          <div
                      className="flex items-start justify-between"
                      data-oid="vrufly7">

                            <div className="flex-1" data-oid="4g1rzo8">
                              <p
                          className="text-sm font-medium mb-1"
                          data-oid="we_d.3j">

                                {resource.title}
                              </p>
                              <p
                          className="text-xs text-neutral-medium-gray"
                          data-oid="84h745r">

                                {resource.type.toUpperCase()} •{" "}
                                {resource.size || resource.duration}
                              </p>
                            </div>
                            <Button
                        size="sm"
                        onClick={() => handleDownloadResource(resource)}
                        data-oid="3g4dv.g">

                              {resource.type === "video" ?
                        "Assistir" :
                        "Download"}
                            </Button>
                          </div>
                        </div>
                  )}
                    </div>
                  </div>
              }
              </div>
            </div>
          }

          {/* PDF Viewer */}
          <div
            className="flex-1 bg-gray-100 dark:bg-gray-800 p-8"
            data-oid="h3o-e-_">

            <div className="max-w-4xl mx-auto" data-oid="lf1j4e3">
              {/* Mock PDF Page */}
              <div
                className="bg-white shadow-lg mx-auto"
                style={{
                  width: `${595 * zoom / 100}px`,
                  height: `${842 * zoom / 100}px`,
                  transform: `scale(${zoom / 100})`
                }}
                data-oid="390mxgg">

                <div className="p-8 h-full flex flex-col" data-oid="_5fbcd.">
                  <div className="text-center mb-8" data-oid="kz9jyx0">
                    <h1
                      className="text-2xl font-bold text-gray-800 mb-2"
                      data-oid="8.274f0">

                      {pdfData.title}
                    </h1>
                    <p className="text-gray-600" data-oid="d56.11:">
                      por {pdfData.author}
                    </p>
                  </div>

                  <div
                    className="flex-1 flex items-center justify-center"
                    data-oid="0kdjgc8">

                    <div
                      className="text-center text-gray-500"
                      data-oid="o_9z:.1">

                      <div
                        className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4"
                        data-oid="8he.6b9">

                        <svg
                          className="w-12 h-12"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="hovmy8s">

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                            data-oid="t535um-" />

                        </svg>
                      </div>
                      <p className="text-lg font-medium" data-oid="kz78bio">
                        Visualizador de PDF
                      </p>
                      <p className="text-sm" data-oid="0cxoyq-">
                        Página {currentPage} de {pdfData.pages}
                      </p>
                      <p className="text-xs mt-2" data-oid="i-ljup8">
                        Em uma implementação real, o conteúdo do PDF seria
                        exibido aqui
                      </p>
                    </div>
                  </div>

                  <div
                    className="text-center text-sm text-gray-400"
                    data-oid=":77_9l3">

                    Página {currentPage}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer data-oid="rx6x58l" />
    </div>);

}

export default function PDFViewerPage() {
  return (
    <ThemeProvider data-oid="y9_g5f9">
      <ToastProvider data-oid="39rq5_v">
        <PDFViewerContent data-oid="if1jsuy" />
      </ToastProvider>
    </ThemeProvider>);

}