"use client";

import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";

// Mock video data
const videoData = {
  id: "permacultura-principios",
  title: "Permacultura: Princípios e Práticas",
  description:
  "Descubra como aplicar os princípios da permacultura em diferentes contextos e escalas para criar sistemas sustentáveis.",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Mock YouTube URL
  duration: "45min",
  instructor: {
    name: "Carlos Mendoza",
    bio: "Especialista em permacultura com mais de 20 anos de experiência em design de sistemas sustentáveis.",
    avatar: "/api/placeholder/100/100"
  },
  category: "Permacultura",
  level: "Intermediário",
  rating: 4.6,
  studentsCount: 890,
  publishedDate: "2024-01-15",
  tags: ["permacultura", "design", "sustentabilidade", "sistemas"],

  // Course context (if part of a course)
  courseContext: {
    courseId: "permacultura-design",
    courseTitle: "Permacultura: Design de Sistemas Sustentáveis",
    currentLesson: 3,
    totalLessons: 12,
    nextLesson: {
      id: "permacultura-zonas",
      title: "Zonas e Setores em Permacultura",
      duration: "38min"
    },
    previousLesson: {
      id: "permacultura-etica",
      title: "Ética da Permacultura",
      duration: "42min"
    }
  },

  // Video resources
  resources: [
  {
    title: "Slides da Apresentação",
    type: "pdf",
    size: "2.5 MB",
    url: "/downloads/permacultura-principios-slides.pdf"
  },
  {
    title: "Lista de Plantas Companheiras",
    type: "pdf",
    size: "1.8 MB",
    url: "/downloads/plantas-companheiras.pdf"
  },
  {
    title: "Exercício Prático: Design Básico",
    type: "pdf",
    size: "800 KB",
    url: "/downloads/exercicio-design-basico.pdf"
  }],


  // Transcript
  transcript: `
Olá e bem-vindos a esta aula sobre os princípios fundamentais da permacultura.

A permacultura é um sistema de design que nos ajuda a criar ambientes humanos sustentáveis, baseando-se na observação dos padrões e características dos ecossistemas naturais.

Os três princípios éticos fundamentais da permacultura são:

1. Cuidar da Terra - Isso significa proteger todos os sistemas vivos e não vivos do nosso planeta.

2. Cuidar das Pessoas - Garantir que todas as pessoas tenham acesso aos recursos necessários para uma vida digna.

3. Partilha Justa - Limitar o consumo e redistribuir os excedentes.

Além desses princípios éticos, temos os 12 princípios de design que nos guiam na criação de sistemas sustentáveis...
  `,

  // Notes (user's personal notes)
  userNotes: [
  {
    id: 1,
    timestamp: "05:23",
    note: "Importante: Os três princípios éticos são a base de tudo",
    createdAt: "2024-01-20T10:30:00Z"
  },
  {
    id: 2,
    timestamp: "12:45",
    note: "Lembrar de aplicar o princípio 'observe e interaja' no meu projeto",
    createdAt: "2024-01-20T10:35:00Z"
  }]

};

function VideoPlayerContent() {
  const params = useParams();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<
    "resources" | "transcript" | "notes">(
    "resources");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(2700); // 45 minutes in seconds
  const [isPlaying, setIsPlaying] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [showNoteForm, setShowNoteForm] = useState(false);

  const progress = duration > 0 ? currentTime / duration * 100 : 0;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAddNote = () => {
    if (newNote.trim()) {
      showToast({
        type: "success",
        title: "Nota adicionada!",
        message: "Sua nota foi salva com sucesso."
      });
      setNewNote("");
      setShowNoteForm(false);
    }
  };

  const handleDownloadResource = (resource: any) => {
    showToast({
      type: "info",
      title: "Download iniciado",
      message: `Baixando ${resource.title}...`
    });
  };

  const handleNextLesson = () => {
    showToast({
      type: "info",
      title: "Próxima aula",
      message: "Redirecionando para a próxima aula..."
    });
  };

  const handlePreviousLesson = () => {
    showToast({
      type: "info",
      title: "Aula anterior",
      message: "Redirecionando para a aula anterior..."
    });
  };

  return (
    <div
      className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
      data-oid="t0cwnqa">

      <Header data-oid="5-jr77w" />

      <main className="pt-20" data-oid="m_j5nwy">
        <div className="container-regen py-8" data-oid="o9ds-kb">
          <div
            className="grid grid-cols-1 lg:grid-cols-4 gap-8"
            data-oid="ue-b_zh">

            {/* Main Video Player */}
            <div className="lg:col-span-3" data-oid="848v4_6">
              {/* Video Player */}
              <div
                className="bg-black rounded-regen-lg overflow-hidden mb-6"
                data-oid="8aoh507">

                <div className="relative aspect-video" data-oid="5krw70b">
                  {/* Mock video player - in production, use a proper video player */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
                    data-oid="9h4u3bm">

                    <div className="text-center text-white" data-oid="mkf9ee9">
                      <div
                        className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                        data-oid="afqk2q3">

                        <svg
                          className="w-10 h-10 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="yr4ld-c">

                          <path d="M8 5v14l11-7z" data-oid="jgmn49f" />
                        </svg>
                      </div>
                      <p className="text-lg font-medium" data-oid="bld5t_u">
                        Video Player
                      </p>
                      <p className="text-sm opacity-75" data-oid="ushzh_w">
                        {videoData.title} - {videoData.duration}
                      </p>
                    </div>
                  </div>

                  {/* Video Controls */}
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
                    data-oid="hwptlc-">

                    <div className="mb-2" data-oid="llt9b1t">
                      <ProgressBar
                        progress={progress}
                        className="h-1"
                        data-oid="1j2hrpr" />

                    </div>
                    <div
                      className="flex items-center justify-between text-white text-sm"
                      data-oid="0jr104.">

                      <div
                        className="flex items-center space-x-4"
                        data-oid="n:7mnqj">

                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          data-oid="4pzot_h">

                          {isPlaying ?
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="_y:n:c-">

                              <path
                              d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"
                              data-oid="ngyf_4b" />

                            </svg> :

                          <svg
                            className="w-4 h-4 ml-0.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="u19e72w">

                              <path d="M8 5v14l11-7z" data-oid=".or37mu" />
                            </svg>
                          }
                        </button>
                        <span data-oid="7-vs4ot">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>
                      <div
                        className="flex items-center space-x-2"
                        data-oid="kaet3ks">

                        <button
                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          data-oid="7f1qkte">

                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="pvd-v..">

                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M6.343 6.343L4.93 4.93m1.414 1.414L4.93 7.757m0 8.486l1.414 1.414M7.757 19.07l-1.414-1.414M19.07 16.243l1.414 1.414m-1.414-1.414L16.243 19.07m1.414-1.414L19.07 7.757m-1.414 1.414L16.243 4.93"
                              data-oid="_g30166" />

                          </svg>
                        </button>
                        <button
                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          data-oid="tg_wfse">

                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="nh62v:n">

                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                              data-oid="5s4cp65" />

                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div
                className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg p-6 mb-6"
                data-oid="nos7etw">

                <div
                  className="flex flex-wrap items-center gap-2 mb-4"
                  data-oid="73wg_vz">

                  <Badge variant="info" size="sm" data-oid="wd1rtb9">
                    {videoData.category}
                  </Badge>
                  <Badge variant="warning" size="sm" data-oid="41psgr4">
                    {videoData.level}
                  </Badge>
                </div>

                <h1
                  className="text-heading text-3xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                  data-oid="xbtxk0e">

                  {videoData.title}
                </h1>

                <p
                  className="text-body text-neutral-medium-gray mb-6"
                  data-oid="5db3w0h">

                  {videoData.description}
                </p>

                {/* Video Stats */}
                <div
                  className="flex flex-wrap items-center gap-6 text-sm text-neutral-medium-gray mb-6"
                  data-oid="qj-hcag">

                  <div
                    className="flex items-center space-x-1"
                    data-oid="iayrzw:">

                    <svg
                      className="w-4 h-4 text-accent-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      data-oid=".dmqfld">

                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        data-oid="ar-p32x" />

                    </svg>
                    <span data-oid="r0h5fbf">{videoData.rating}</span>
                  </div>
                  <div
                    className="flex items-center space-x-1"
                    data-oid=".-f1er_">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="72vvdfi">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        data-oid="hyov-:m" />

                    </svg>
                    <span data-oid="bt7.z59">
                      {videoData.studentsCount} visualizações
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-1"
                    data-oid="jo7l7g0">

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="79skr04">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="xp4fbe_" />

                    </svg>
                    <span data-oid="ee-12c2">{videoData.duration}</span>
                  </div>
                </div>

                {/* Instructor Info */}
                <div
                  className="flex items-center space-x-4 p-4 bg-neutral-light-gray dark:bg-black rounded-regen-lg"
                  data-oid="cpz6ay:">

                  <img
                    src={videoData.instructor.avatar}
                    alt={videoData.instructor.name}
                    className="w-12 h-12 rounded-full object-cover"
                    data-oid="-q57cz5" />


                  <div data-oid="m.vqeft">
                    <p
                      className="text-heading font-semibold"
                      data-oid="6629fzr">

                      {videoData.instructor.name}
                    </p>
                    <p
                      className="text-body text-sm text-neutral-medium-gray"
                      data-oid="a.z.i9e">

                      Instrutor
                    </p>
                  </div>
                </div>
              </div>

              {/* Course Navigation (if part of a course) */}
              {videoData.courseContext &&
              <div
                className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg p-6 mb-6"
                data-oid="v3uk1hw">

                  <div
                  className="flex items-center justify-between mb-4"
                  data-oid="iwv-wi2">

                    <div data-oid="ee6_f5n">
                      <h3
                      className="text-heading font-semibold text-lg"
                      data-oid="_e0dttk">

                        {videoData.courseContext.courseTitle}
                      </h3>
                      <p
                      className="text-body text-sm text-neutral-medium-gray"
                      data-oid="-:h33:y">

                        Aula {videoData.courseContext.currentLesson} de{" "}
                        {videoData.courseContext.totalLessons}
                      </p>
                    </div>
                    <div className="text-right" data-oid="jxvu_c0">
                      <div
                      className="text-sm text-neutral-medium-gray mb-1"
                      data-oid="bmy6ygn">

                        Progresso do Curso
                      </div>
                      <div className="w-32" data-oid="wn007qz">
                        <ProgressBar
                        progress={
                        videoData.courseContext.currentLesson /
                        videoData.courseContext.totalLessons *
                        100
                        }
                        data-oid="igqvyvh" />

                      </div>
                    </div>
                  </div>

                  <div
                  className="flex flex-col sm:flex-row gap-4"
                  data-oid="_v5aq:i">

                    {videoData.courseContext.previousLesson &&
                  <Button
                    variant="secondary"
                    onClick={handlePreviousLesson}
                    className="flex-1"
                    data-oid="0o423is">

                        <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="lhbvzyh">

                          <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                        data-oid="u9d2wdf" />

                        </svg>
                        Aula Anterior
                      </Button>
                  }
                    {videoData.courseContext.nextLesson &&
                  <Button
                    onClick={handleNextLesson}
                    className="flex-1"
                    data-oid="qgkhzvh">

                        Próxima Aula
                        <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="h88davv">

                          <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                        data-oid="j502i-9" />

                        </svg>
                      </Button>
                  }
                  </div>
                </div>
              }

              {/* Content Tabs */}
              <div
                className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg overflow-hidden"
                data-oid="gf6:tzb">

                {/* Tab Navigation */}
                <div
                  className="flex border-b border-neutral-light-gray dark:border-neutral-medium-gray"
                  data-oid="j6u946q">

                  {[
                  { id: "resources", label: "Recursos", icon: "📁" },
                  { id: "transcript", label: "Transcrição", icon: "📝" },
                  { id: "notes", label: "Minhas Notas", icon: "📋" }].
                  map((tab) =>
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 py-4 px-6 text-sm font-medium transition-colors ${
                    activeTab === tab.id ?
                    "bg-primary-50 dark:bg-primary-900 text-primary-300 border-b-2 border-primary-300" :
                    "text-neutral-medium-gray hover:text-neutral-dark-navy dark:hover:text-white"}`
                    }
                    data-oid="0rd1vxt">

                      <span className="mr-2" data-oid="4akddak">
                        {tab.icon}
                      </span>
                      {tab.label}
                    </button>
                  )}
                </div>

                {/* Tab Content */}
                <div className="p-6" data-oid="mey_h99">
                  {activeTab === "resources" &&
                  <div data-oid="7e:g4xy">
                      <h3
                      className="text-heading text-xl font-semibold mb-4"
                      data-oid="9:amc.g">

                        Recursos da Aula
                      </h3>
                      <div className="space-y-3" data-oid="r80.gyq">
                        {videoData.resources.map((resource, index) =>
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-neutral-light-gray dark:bg-black rounded-regen-lg"
                        data-oid="7-tw34i">

                            <div
                          className="flex items-center space-x-3"
                          data-oid="3rys68x">

                              <div
                            className="w-10 h-10 bg-primary-300 rounded-regen flex items-center justify-center"
                            data-oid="t7a2yzj">

                                <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              data-oid="ua4haqd">

                                  <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                data-oid=".ozg3un" />

                                </svg>
                              </div>
                              <div data-oid=".omius8">
                                <p
                              className="text-heading font-medium"
                              data-oid="854c5hg">

                                  {resource.title}
                                </p>
                                <p
                              className="text-body text-sm text-neutral-medium-gray"
                              data-oid="zu_3mmu">

                                  {resource.type.toUpperCase()} •{" "}
                                  {resource.size}
                                </p>
                              </div>
                            </div>
                            <Button
                          size="sm"
                          onClick={() => handleDownloadResource(resource)}
                          data-oid="3gt4d3x">

                              Download
                            </Button>
                          </div>
                      )}
                      </div>
                    </div>
                  }

                  {activeTab === "transcript" &&
                  <div data-oid="s0sz23l">
                      <h3
                      className="text-heading text-xl font-semibold mb-4"
                      data-oid="4ik7s-d">

                        Transcrição da Aula
                      </h3>
                      <div
                      className="prose prose-neutral dark:prose-invert max-w-none"
                      data-oid="gz3h3w.">

                        <div
                        className="whitespace-pre-line text-body text-neutral-medium-gray leading-relaxed"
                        data-oid="3de-qcr">

                          {videoData.transcript}
                        </div>
                      </div>
                    </div>
                  }

                  {activeTab === "notes" &&
                  <div data-oid=".7apsp1">
                      <div
                      className="flex items-center justify-between mb-4"
                      data-oid="0urni97">

                        <h3
                        className="text-heading text-xl font-semibold"
                        data-oid="-9e.d2h">

                          Minhas Notas
                        </h3>
                        <Button
                        size="sm"
                        onClick={() => setShowNoteForm(!showNoteForm)}
                        data-oid="ywwvf.q">

                          <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="f2dzokd">

                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                            data-oid="3qv1efi" />

                          </svg>
                          Nova Nota
                        </Button>
                      </div>

                      {showNoteForm &&
                    <div
                      className="mb-6 p-4 bg-neutral-light-gray dark:bg-black rounded-regen-lg"
                      data-oid="6gb2guw">

                          <div className="mb-3" data-oid="luvpzeo">
                            <label
                          className="block text-sm font-medium mb-2"
                          data-oid="5a.ii4c">

                              Nota no tempo: {formatTime(currentTime)}
                            </label>
                            <textarea
                          value={newNote}
                          onChange={(e) => setNewNote(e.target.value)}
                          placeholder="Digite sua nota aqui..."
                          className="input-regen min-h-[100px] resize-none"
                          data-oid="5evn.r9" />

                          </div>
                          <div className="flex space-x-2" data-oid="j9kj47h">
                            <Button
                          size="sm"
                          onClick={handleAddNote}
                          data-oid="-0_nn9_">

                              Salvar Nota
                            </Button>
                            <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => setShowNoteForm(false)}
                          data-oid="68ayrw5">

                              Cancelar
                            </Button>
                          </div>
                        </div>
                    }

                      <div className="space-y-3" data-oid="9nolzlt">
                        {videoData.userNotes.map((note) =>
                      <div
                        key={note.id}
                        className="p-4 bg-neutral-light-gray dark:bg-black rounded-regen-lg"
                        data-oid="b2hl5z9">

                            <div
                          className="flex items-center justify-between mb-2"
                          data-oid="te-q_z3">

                              <span
                            className="text-sm font-medium text-primary-300"
                            data-oid="y59rpzf">

                                {note.timestamp}
                              </span>
                              <span
                            className="text-xs text-neutral-medium-gray"
                            data-oid="cbxwwfp">

                                {new Date(note.createdAt).toLocaleDateString(
                              "pt-BR"
                            )}
                              </span>
                            </div>
                            <p
                          className="text-body text-neutral-medium-gray"
                          data-oid="1uahrao">

                              {note.note}
                            </p>
                          </div>
                      )}
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1" data-oid="9tp:wo8">
              <div className="sticky top-24 space-y-6" data-oid="0w8apax">
                {/* Quick Actions */}
                <div
                  className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg p-6"
                  data-oid="36c5skx">

                  <h4
                    className="text-heading font-semibold mb-4"
                    data-oid="87s35mg">

                    Ações Rápidas
                  </h4>
                  <div className="space-y-3" data-oid="wtfnxbv">
                    <Button size="sm" className="w-full" data-oid="2gm_uwg">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="wp6:qb_">

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          data-oid=".5-vrgf" />

                      </svg>
                      Favoritar
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-full"
                      data-oid="vi:ygs6">

                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="ooyf1al">

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                          data-oid="xbbh:ea" />

                      </svg>
                      Compartilhar
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-full"
                      data-oid="8w2best">

                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="c9mul51">

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          data-oid="8g8swvg" />

                      </svg>
                      Download
                    </Button>
                  </div>
                </div>

                {/* Related Videos */}
                <div
                  className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg p-6"
                  data-oid="cs9ld1i">

                  <h4
                    className="text-heading font-semibold mb-4"
                    data-oid="sdeegbp">

                    Vídeos Relacionados
                  </h4>
                  <div className="space-y-4" data-oid="26qxndf">
                    {/* Mock related videos */}
                    {[
                    {
                      title: "Ética da Permacultura",
                      duration: "42min",
                      thumbnail: "/api/placeholder/120/68"
                    },
                    {
                      title: "Zonas e Setores",
                      duration: "38min",
                      thumbnail: "/api/placeholder/120/68"
                    },
                    {
                      title: "Padrões Naturais",
                      duration: "35min",
                      thumbnail: "/api/placeholder/120/68"
                    }].
                    map((video, index) =>
                    <div
                      key={index}
                      className="flex space-x-3 cursor-pointer hover:bg-neutral-light-gray dark:hover:bg-black p-2 rounded-regen transition-colors"
                      data-oid="mz-tu1v">

                        <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-20 h-12 object-cover rounded-regen flex-shrink-0"
                        data-oid="-84ke5:" />


                        <div className="flex-1 min-w-0" data-oid="8176ky5">
                          <p
                          className="text-heading font-medium text-sm line-clamp-2"
                          data-oid="40i:idh">

                            {video.title}
                          </p>
                          <p
                          className="text-body text-xs text-neutral-medium-gray"
                          data-oid="vq:l6pd">

                            {video.duration}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer data-oid="8co.c7u" />
    </div>);

}

export default function VideoPlayerPage() {
  return (
    <ThemeProvider data-oid="vbetwwb">
      <ToastProvider data-oid="vo-j4hq">
        <VideoPlayerContent data-oid="p5a3h4l" />
      </ToastProvider>
    </ThemeProvider>);

}