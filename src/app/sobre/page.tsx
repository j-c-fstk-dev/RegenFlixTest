"use client";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const teamMembers = [
{
  name: "Dr. Ana Silva",
  role: "Fundadora & Especialista em Agroecologia",
  bio: "Doutora em Agroecologia pela UFRGS, com mais de 15 anos de experiência em pesquisa e consultoria em agricultura regenerativa.",
  avatar: "/api/placeholder/200/200",
  expertise: [
  "Agricultura Regenerativa",
  "Sistemas Sustentáveis",
  "Pesquisa Científica"]

},
{
  name: "Carlos Mendoza",
  role: "Especialista em Permacultura",
  bio: "Designer em Permacultura certificado com experiência internacional em projetos de regeneração de ecossistemas.",
  avatar: "/api/placeholder/200/200",
  expertise: ["Permacultura", "Design de Sistemas", "Educação Ambiental"]
},
{
  name: "Maria Santos",
  role: "Especialista em Sustentabilidade Urbana",
  bio: "Engenheira Ambiental especializada em soluções sustentáveis para ambientes urbanos e compostagem.",
  avatar: "/api/placeholder/200/200",
  expertise: ["Sustentabilidade Urbana", "Compostagem", "Gestão de Resíduos"]
},
{
  name: "Prof. João Oliveira",
  role: "Especialista em Sistemas Agroflorestais",
  bio: "Professor universitário e consultor em sistemas agroflorestais, com projetos em toda América Latina.",
  avatar: "/api/placeholder/200/200",
  expertise: ["Agrofloresta", "Consultoria", "Educação Superior"]
}];


const milestones = [
{
  year: "2020",
  title: "Fundação da RegenFlix",
  description:
  "Nasceu a ideia de democratizar o conhecimento sobre regeneração e sustentabilidade."
},
{
  year: "2021",
  title: "Primeiros Cursos",
  description:
  "Lançamento dos primeiros cursos online com especialistas renomados."
},
{
  year: "2022",
  title: "RegenPedia",
  description:
  "Criação da biblioteca digital com centenas de materiais especializados."
},
{
  year: "2023",
  title: "RegenMarket",
  description:
  "Lançamento da loja com produtos sustentáveis e serviços especializados."
},
{
  year: "2024",
  title: "Comunidade Global",
  description:
  "Mais de 50.000 estudantes ativos em nossa plataforma de aprendizado."
}];


const values = [
{
  icon: "🌱",
  title: "Regeneração",
  description:
  "Acreditamos que é possível restaurar e regenerar nossos ecossistemas através do conhecimento e ação consciente."
},
{
  icon: "🤝",
  title: "Colaboração",
  description:
  "Construímos uma comunidade colaborativa onde o conhecimento é compartilhado para o bem comum."
},
{
  icon: "📚",
  title: "Educação Acessível",
  description:
  "Democratizamos o acesso ao conhecimento especializado em sustentabilidade e regeneração."
},
{
  icon: "🌍",
  title: "Impacto Global",
  description:
  "Trabalhamos para criar um impacto positivo que transcende fronteiras e gerações."
},
{
  icon: "🔬",
  title: "Base Científica",
  description:
  "Todo nosso conteúdo é baseado em evidências científicas e melhores práticas comprovadas."
},
{
  icon: "💚",
  title: "Sustentabilidade",
  description:
  "Praticamos o que ensinamos, operando de forma sustentável e responsável."
}];


function AboutContent() {
  return (
    <div
      className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
      data-oid="e0yjfe_">

      <Header data-oid="cu_go6n" />

      <main className="pt-20" data-oid="n4r33_:">
        {/* Hero Section */}
        <section
          className="py-20 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-neutral-dark-navy dark:to-black"
          data-oid="nzsn046">

          <div className="container-regen text-center" data-oid="v4gztbk">
            <h1
              className="text-heading text-5xl font-bold text-neutral-dark-navy dark:text-white mb-6"
              data-oid="c9ug8t6">

              Sobre a RegenFlix
            </h1>
            <p
              className="text-body text-xl text-neutral-medium-gray max-w-3xl mx-auto mb-8"
              data-oid="ni:hkjo">

              Somos uma plataforma dedicada a democratizar o conhecimento sobre
              regeneração, sustentabilidade e práticas ecológicas, conectando
              pessoas ao redor do mundo em uma jornada de transformação
              positiva.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid=".musiyz">

              <Button size="lg" data-oid="3gt4yvt">
                Junte-se a Nós
              </Button>
              <Button variant="secondary" size="lg" data-oid="7h2s91v">
                Nossa Missão
              </Button>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-white dark:bg-black" data-oid="lho6486">
          <div className="container-regen" data-oid="ery5j7b">
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
              data-oid="1hxv31i">

              <div className="text-center" data-oid="th:xenu">
                <div
                  className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-6"
                  data-oid="drtx4ow">

                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="3zslnij">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      data-oid="7c93q8z" />

                  </svg>
                </div>
                <h3
                  className="text-heading text-2xl font-bold mb-4"
                  data-oid="oog0mqh">

                  Missão
                </h3>
                <p
                  className="text-body text-neutral-medium-gray"
                  data-oid="xj0wt61">

                  Democratizar o acesso ao conhecimento sobre regeneração e
                  sustentabilidade, capacitando pessoas para criar um mundo mais
                  equilibrado e próspero.
                </p>
              </div>

              <div className="text-center" data-oid="pwd1.6h">
                <div
                  className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-6"
                  data-oid="sa-ozly">

                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid=":eh7dxy">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      data-oid="vypqvf." />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      data-oid="jyt4d_l" />

                  </svg>
                </div>
                <h3
                  className="text-heading text-2xl font-bold mb-4"
                  data-oid="c8n6w91">

                  Visão
                </h3>
                <p
                  className="text-body text-neutral-medium-gray"
                  data-oid="50zv2sz">

                  Ser a principal plataforma global de educação em regeneração,
                  inspirando uma nova geração de agentes de transformação
                  ambiental e social.
                </p>
              </div>

              <div className="text-center" data-oid="r-tqb83">
                <div
                  className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-6"
                  data-oid="_oa:dx4">

                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="jh_6ds6">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      data-oid="h8bpoqa" />

                  </svg>
                </div>
                <h3
                  className="text-heading text-2xl font-bold mb-4"
                  data-oid="480.09b">

                  Valores
                </h3>
                <p
                  className="text-body text-neutral-medium-gray"
                  data-oid="-y7o60z">

                  Pautamos nossas ações na colaboração, transparência, respeito
                  à natureza e compromisso com a excelência educacional e
                  científica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 gradient-hero" data-oid="6-nruad">
          <div className="container-regen" data-oid="u7t6jht">
            <div className="text-center mb-16" data-oid="n1w2:.j">
              <h2
                className="text-heading text-4xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                data-oid="8nzxler">

                Nossos Valores
              </h2>
              <p
                className="text-body text-lg text-neutral-medium-gray max-w-2xl mx-auto"
                data-oid="71k01jf">

                Os princípios que guiam cada decisão e ação da RegenFlix
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              data-oid="8_0ihtq">

              {values.map((value, index) =>
              <div
                key={index}
                className="bg-white/50 dark:bg-black/20 rounded-regen-lg p-6 backdrop-blur-sm"
                data-oid="4pk_ezw">

                  <div className="text-4xl mb-4" data-oid="917nvdl">
                    {value.icon}
                  </div>
                  <h3
                  className="text-heading text-xl font-semibold mb-3"
                  data-oid="v4.jo73">

                    {value.title}
                  </h3>
                  <p
                  className="text-body text-neutral-medium-gray"
                  data-oid="lkjrk0_">

                    {value.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white dark:bg-black" data-oid="sswrpgb">
          <div className="container-regen" data-oid="n_ypddb">
            <div className="text-center mb-16" data-oid="z.oio:s">
              <h2
                className="text-heading text-4xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                data-oid="v291a.p">

                Nossa Jornada
              </h2>
              <p
                className="text-body text-lg text-neutral-medium-gray max-w-2xl mx-auto"
                data-oid="gwepb6f">

                Os marcos importantes da nossa trajetória de crescimento e
                impacto
              </p>
            </div>

            <div className="relative" data-oid="3uej6im">
              {/* Timeline line */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-300"
                data-oid="bn3hxbu">
              </div>

              <div className="space-y-12" data-oid="n5g.yh5">
                {milestones.map((milestone, index) =>
                <div
                  key={index}
                  className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`
                  }
                  data-oid="mq7ktx9">

                    <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                    data-oid="g-88kbj">

                      <div
                      className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-6"
                      data-oid="g01mcx6">

                        <div
                        className="text-primary-300 font-bold text-xl mb-2"
                        data-oid="3bggbyt">

                          {milestone.year}
                        </div>
                        <h3
                        className="text-heading text-lg font-semibold mb-2"
                        data-oid="-r12-0x">

                          {milestone.title}
                        </h3>
                        <p
                        className="text-body text-neutral-medium-gray"
                        data-oid="a:s99l0">

                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div
                    className="relative z-10 w-4 h-4 bg-primary-300 rounded-full border-4 border-white dark:border-neutral-dark-navy"
                    data-oid="glroylu">
                  </div>

                    <div className="w-1/2" data-oid="utx.j-8"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 gradient-hero" data-oid="r_rkbc.">
          <div className="container-regen" data-oid="xd:3o7a">
            <div className="text-center mb-16" data-oid="sl0rt4o">
              <h2
                className="text-heading text-4xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                data-oid="-77:11x">

                Nossa Equipe
              </h2>
              <p
                className="text-body text-lg text-neutral-medium-gray max-w-2xl mx-auto"
                data-oid="ty3lbi0">

                Especialistas apaixonados por regeneração e educação
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              data-oid="h5u5_e3">

              {teamMembers.map((member, index) =>
              <div
                key={index}
                className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen overflow-hidden"
                data-oid="0t4n2gv">

                  <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                  data-oid="i5g9rjv" />


                  <div className="p-6" data-oid="c1w-kc.">
                    <h3
                    className="text-heading text-lg font-semibold mb-2"
                    data-oid="tcvdpd7">

                      {member.name}
                    </h3>
                    <p
                    className="text-primary-300 text-sm font-medium mb-3"
                    data-oid="05ebm:r">

                      {member.role}
                    </p>
                    <p
                    className="text-body text-sm text-neutral-medium-gray mb-4"
                    data-oid="boki_yu">

                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-1" data-oid="krwdr9d">
                      {member.expertise.map((skill, skillIndex) =>
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-300 text-xs rounded-regen"
                      data-oid="t23_xpq">

                          {skill}
                        </span>
                    )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-primary-300" data-oid="4ei._6v">
          <div className="container-regen" data-oid="e7ct1w9">
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
              data-oid="y8qtlss">

              <div data-oid="0nplwf.">
                <div className="text-4xl font-bold mb-2" data-oid="iq_xssu">
                  50K+
                </div>
                <div className="text-primary-100" data-oid="sjf2fv7">
                  Estudantes Ativos
                </div>
              </div>
              <div data-oid="hao..i-">
                <div className="text-4xl font-bold mb-2" data-oid="bqwufpo">
                  200+
                </div>
                <div className="text-primary-100" data-oid="o37_j2n">
                  Cursos Disponíveis
                </div>
              </div>
              <div data-oid="5gyqnsm">
                <div className="text-4xl font-bold mb-2" data-oid="tzw8m33">
                  500+
                </div>
                <div className="text-primary-100" data-oid="en61s7r">
                  Materiais na RegenPedia
                </div>
              </div>
              <div data-oid="ocs9068">
                <div className="text-4xl font-bold mb-2" data-oid="fttef3x">
                  95%
                </div>
                <div className="text-primary-100" data-oid="purz-ye">
                  Satisfação dos Usuários
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white dark:bg-black" data-oid="z4.x4xu">
          <div className="container-regen text-center" data-oid="2.-s3tw">
            <h2
              className="text-heading text-4xl font-bold text-neutral-dark-navy dark:text-white mb-4"
              data-oid="kibonb6">

              Faça Parte da Transformação
            </h2>
            <p
              className="text-body text-xl text-neutral-medium-gray mb-8 max-w-2xl mx-auto"
              data-oid="ns-j2v4">

              Junte-se a milhares de pessoas que já estão criando um mundo mais
              sustentável
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="cdwkgi5">

              <Button size="lg" data-oid="r-qk_g0">
                Começar Agora
              </Button>
              <Button variant="secondary" size="lg" data-oid="_fgwquz">
                Falar Conosco
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer data-oid="jnp298m" />
    </div>);

}

export default function AboutPage() {
  return (
    <ThemeProvider data-oid="_3ts:n6">
      <ToastProvider data-oid="x6n4fym">
        <AboutContent data-oid=":9oj65p" />
      </ToastProvider>
    </ThemeProvider>);

}