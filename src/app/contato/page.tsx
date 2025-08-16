"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const contactMethods = [
{
  icon: "📧",
  title: "Email",
  description: "Envie-nos um email e responderemos em até 24 horas",
  contact: "contato@regenflix.com",
  action: "Enviar Email"
},
{
  icon: "💬",
  title: "Chat ao Vivo",
  description: "Converse conosco em tempo real durante o horário comercial",
  contact: "Segunda a Sexta, 9h às 18h",
  action: "Iniciar Chat"
},
{
  icon: "📱",
  title: "WhatsApp",
  description: "Fale conosco pelo WhatsApp para suporte rápido",
  contact: "+55 (11) 99999-9999",
  action: "Abrir WhatsApp"
},
{
  icon: "📞",
  title: "Telefone",
  description: "Ligue para nosso atendimento especializado",
  contact: "+55 (11) 3333-4444",
  action: "Ligar Agora"
}];


const faqItems = [
{
  question: "Como posso cancelar minha assinatura?",
  answer:
  "Você pode cancelar sua assinatura a qualquer momento através das configurações da sua conta ou entrando em contato conosco. Não há taxas de cancelamento."
},
{
  question: "Os certificados são reconhecidos?",
  answer:
  "Sim, nossos certificados são emitidos pela RegenFlix em parceria com instituições reconhecidas na área de sustentabilidade e regeneração."
},
{
  question: "Posso acessar o conteúdo offline?",
  answer:
  "Sim, assinantes Premium podem baixar vídeos e PDFs para acesso offline através de nossos aplicativos móveis."
},
{
  question: "Há desconto para estudantes?",
  answer:
  "Sim, oferecemos 50% de desconto para estudantes com comprovação. Entre em contato conosco para mais informações."
},
{
  question: "Como posso sugerir novos cursos?",
  answer:
  "Adoramos receber sugestões! Use o formulário de contato ou envie um email para sugestoes@regenflix.com com suas ideias."
}];


function ContactContent() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "geral"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      showToast({
        type: "success",
        title: "Mensagem enviada!",
        message: "Recebemos sua mensagem e responderemos em breve."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "geral"
      });
    }, 2000);
  };

  const handleInputChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div
      className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
      data-oid="s.1.pk1">

      <Header data-oid="eczb31j" />

      <main className="pt-20" data-oid="0c03toa">
        {/* Hero Section */}
        <section
          className="py-20 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-neutral-dark-navy dark:to-black"
          data-oid="o7xs5qo">

          <div className="container-regen text-center" data-oid="t7ih7hq">
            <h1
              className="text-heading text-5xl font-bold text-neutral-dark-navy dark:text-white mb-6"
              data-oid="pg_td5u">

              Entre em Contato
            </h1>
            <p
              className="text-body text-xl text-neutral-medium-gray max-w-3xl mx-auto"
              data-oid="njp8po_">

              Estamos aqui para ajudar! Entre em contato conosco através de
              qualquer um dos canais abaixo ou envie uma mensagem usando o
              formulário.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white dark:bg-black" data-oid="ausy13s">
          <div className="container-regen" data-oid="o1uk8ji">
            <div className="text-center mb-16" data-oid="x_y9ic4">
              <h2
                className="text-heading text-4xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                data-oid="cygjvm4">

                Como Podemos Ajudar?
              </h2>
              <p
                className="text-body text-lg text-neutral-medium-gray max-w-2xl mx-auto"
                data-oid="d:3349c">

                Escolha a forma de contato que preferir
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              data-oid="u11qdl5">

              {contactMethods.map((method, index) =>
              <div
                key={index}
                className="bg-neutral-light-gray dark:bg-neutral-dark-navy rounded-regen-lg p-6 text-center hover:shadow-regen-hover transition-all duration-300"
                data-oid="yxt78.2">

                  <div className="text-4xl mb-4" data-oid="w4auiuz">
                    {method.icon}
                  </div>
                  <h3
                  className="text-heading text-xl font-semibold mb-3"
                  data-oid="ch:eohz">

                    {method.title}
                  </h3>
                  <p
                  className="text-body text-sm text-neutral-medium-gray mb-4"
                  data-oid="b1j810e">

                    {method.description}
                  </p>
                  <p
                  className="text-heading font-medium mb-4"
                  data-oid="xaszdhh">

                    {method.contact}
                  </p>
                  <Button size="sm" className="w-full" data-oid="505mkg1">
                    {method.action}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 gradient-hero" data-oid="tp_eo21">
          <div className="container-regen" data-oid="j.m:i_o">
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              data-oid="-60.9hh">

              {/* Contact Form */}
              <div
                className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-8"
                data-oid="rkj674q">

                <h3
                  className="text-heading text-2xl font-bold mb-6"
                  data-oid="34p2o7o">

                  Envie uma Mensagem
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-oid="dxlo:5c">

                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    data-oid="::1mziw">

                    <div data-oid="g_ig6e_">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                        data-oid="lksgipt">

                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="input-regen"
                        placeholder="Seu nome completo"
                        data-oid="ddjc4xv" />

                    </div>

                    <div data-oid="ozr8-po">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                        data-oid="a1m:5zx">

                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="input-regen"
                        placeholder="seu@email.com"
                        data-oid="67co_5z" />

                    </div>
                  </div>

                  <div data-oid="gvj.jgf">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                      data-oid="154bo35">

                      Categoria
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="input-regen"
                      data-oid="ftfy11d">

                      <option value="geral" data-oid="urj28tc">
                        Dúvida Geral
                      </option>
                      <option value="tecnico" data-oid="kcaq-4.">
                        Suporte Técnico
                      </option>
                      <option value="assinatura" data-oid="8w3.dcv">
                        Assinatura e Pagamento
                      </option>
                      <option value="conteudo" data-oid="pp57n_1">
                        Sugestão de Conteúdo
                      </option>
                      <option value="parceria" data-oid="sqnayk-">
                        Parceria
                      </option>
                      <option value="imprensa" data-oid="7z6hrq6">
                        Imprensa
                      </option>
                    </select>
                  </div>

                  <div data-oid="nm-z4ic">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                      data-oid="ro_69_j">

                      Assunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="input-regen"
                      placeholder="Resumo da sua mensagem"
                      data-oid="1qnw_b2" />

                  </div>

                  <div data-oid="uv983q1">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                      data-oid="yy8_4m7">

                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="input-regen resize-none"
                      placeholder="Descreva sua dúvida ou mensagem em detalhes..."
                      data-oid="zy29ew0" />

                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    loading={isSubmitting}
                    data-oid="3ig19vt">

                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </div>

              {/* Contact Info & Map */}
              <div className="space-y-8" data-oid="4z8d2_u">
                {/* Office Info */}
                <div
                  className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-8"
                  data-oid="mq4omtm">

                  <h3
                    className="text-heading text-2xl font-bold mb-6"
                    data-oid="149368c">

                    Nosso Escritório
                  </h3>

                  <div className="space-y-4" data-oid="9t07cn-">
                    <div
                      className="flex items-start space-x-3"
                      data-oid="dxszm3h">

                      <div
                        className="w-6 h-6 text-primary-300 flex-shrink-0 mt-1"
                        data-oid="af0nfy4">

                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid=".0v6a7f">

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            data-oid="uhg37gn" />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            data-oid="ttj0kz_" />

                        </svg>
                      </div>
                      <div data-oid="cfuucv8">
                        <p
                          className="text-heading font-medium"
                          data-oid="0diuyy-">

                          Endereço
                        </p>
                        <p
                          className="text-body text-neutral-medium-gray"
                          data-oid="1fqo:mz">

                          Rua da Sustentabilidade, 123
                          <br data-oid="zkjp_9j" />
                          Vila Madalena - São Paulo, SP
                          <br data-oid=".ht5zme" />
                          CEP: 05433-000
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex items-start space-x-3"
                      data-oid="mn_dru4">

                      <div
                        className="w-6 h-6 text-primary-300 flex-shrink-0 mt-1"
                        data-oid=".3y_uoa">

                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="8hu_zct">

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            data-oid="97a36kh" />

                        </svg>
                      </div>
                      <div data-oid="hgz1d0l">
                        <p
                          className="text-heading font-medium"
                          data-oid="in08k7_">

                          Horário de Funcionamento
                        </p>
                        <p
                          className="text-body text-neutral-medium-gray"
                          data-oid="8dr:pii">

                          Segunda a Sexta: 9h às 18h
                          <br data-oid="-vk60ew" />
                          Sábado: 9h às 14h
                          <br data-oid="j3zph-i" />
                          Domingo: Fechado
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex items-start space-x-3"
                      data-oid="hpf1g2p">

                      <div
                        className="w-6 h-6 text-primary-300 flex-shrink-0 mt-1"
                        data-oid="g2c97j1">

                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="h8gfkad">

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            data-oid="hirz4kz" />

                        </svg>
                      </div>
                      <div data-oid="h0voe_s">
                        <p
                          className="text-heading font-medium"
                          data-oid="n98ouy7">

                          Email Geral
                        </p>
                        <p
                          className="text-body text-neutral-medium-gray"
                          data-oid="73qrh9-">

                          contato@regenflix.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div
                  className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-8"
                  data-oid="chswy:z">

                  <h3
                    className="text-heading text-2xl font-bold mb-6"
                    data-oid="iy7yw5o">

                    Localização
                  </h3>
                  <div
                    className="aspect-video bg-neutral-light-gray dark:bg-black rounded-regen-lg flex items-center justify-center"
                    data-oid="ikcrrz0">

                    <div
                      className="text-center text-neutral-medium-gray"
                      data-oid="gpsk4g7">

                      <svg
                        className="w-16 h-16 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="g:d1r.v">

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          data-oid="_a11iir" />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          data-oid=":w.q7:." />

                      </svg>
                      <p className="text-sm" data-oid="rgmbjpo">
                        Mapa Interativo
                      </p>
                      <p className="text-xs" data-oid="qxq6juy">
                        Vila Madalena, São Paulo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-black" data-oid="d4eogr7">
          <div className="container-regen" data-oid="v_gj.s8">
            <div className="text-center mb-16" data-oid="uzkoqty">
              <h2
                className="text-heading text-4xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                data-oid="qxxc_jv">

                Perguntas Frequentes
              </h2>
              <p
                className="text-body text-lg text-neutral-medium-gray max-w-2xl mx-auto"
                data-oid="qc_8:ai">

                Encontre respostas rápidas para as dúvidas mais comuns
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4" data-oid="zzej380">
              {faqItems.map((item, index) =>
              <details
                key={index}
                className="bg-neutral-light-gray dark:bg-neutral-dark-navy rounded-regen-lg"
                data-oid="paxrgnk">

                  <summary
                  className="p-6 cursor-pointer hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
                  data-oid="z27.i28">

                    <span
                    className="text-heading font-semibold text-lg"
                    data-oid=":pns34s">

                      {item.question}
                    </span>
                  </summary>
                  <div className="px-6 pb-6" data-oid=":341wwt">
                    <p
                    className="text-body text-neutral-medium-gray"
                    data-oid="6pgbsxf">

                      {item.answer}
                    </p>
                  </div>
                </details>
              )}
            </div>

            <div className="text-center mt-12" data-oid="-gaw5gd">
              <p
                className="text-body text-neutral-medium-gray mb-4"
                data-oid="wa.o4zx">

                Não encontrou a resposta que procurava?
              </p>
              <Button data-oid="97h5qjp">Fale Conosco Diretamente</Button>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-20 bg-primary-300" data-oid="faaqk55">
          <div className="container-regen text-center" data-oid="ugx2qmp">
            <h2
              className="text-heading text-4xl font-bold text-white mb-4"
              data-oid="ae8z5nt">

              Siga-nos nas Redes Sociais
            </h2>
            <p
              className="text-body text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
              data-oid="u7vcbt0">

              Acompanhe nossas novidades, dicas e conteúdos exclusivos
            </p>

            <div className="flex justify-center space-x-6" data-oid="jf2y458">
              {[
              { name: "Instagram", icon: "📷", handle: "@regenflix" },
              { name: "YouTube", icon: "📺", handle: "RegenFlix" },
              { name: "LinkedIn", icon: "💼", handle: "RegenFlix" },
              { name: "Twitter", icon: "🐦", handle: "@regenflix" }].
              map((social, index) =>
              <a
                key={index}
                href="#"
                className="flex flex-col items-center p-4 bg-white/20 rounded-regen-lg hover:bg-white/30 transition-colors"
                data-oid="ptu:pv7">

                  <div className="text-2xl mb-2" data-oid=":v4pu3y">
                    {social.icon}
                  </div>
                  <div className="text-white font-medium" data-oid="eckdfdd">
                    {social.name}
                  </div>
                  <div className="text-primary-100 text-sm" data-oid="b8s:t18">
                    {social.handle}
                  </div>
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer data-oid="vf4lgic" />
    </div>);

}

export default function ContactPage() {
  return (
    <ThemeProvider data-oid="edwguvj">
      <ToastProvider data-oid="vzbd3sk">
        <ContactContent data-oid="_cl79b." />
      </ToastProvider>
    </ThemeProvider>);

}