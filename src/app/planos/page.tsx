"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: PlanFeature[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: "primary" | "secondary" | "ghost";
}

const plans: Plan[] = [
{
  id: "free",
  name: "Gratuito",
  description: "Perfeito para começar sua jornada",
  price: {
    monthly: 0,
    yearly: 0
  },
  features: [
  { name: "Acesso a conteúdo básico", included: true },
  { name: "3 vídeos por mês", included: true },
  { name: "Comunidade básica", included: true },
  { name: "Certificados", included: false },
  { name: "Conteúdo premium", included: false },
  { name: "Downloads offline", included: false },
  { name: "Suporte prioritário", included: false }],


  buttonText: "Começar Grátis",
  buttonVariant: "secondary"
},
{
  id: "premium",
  name: "Premium",
  description: "Para aprendizado completo",
  price: {
    monthly: 29.9,
    yearly: 299.9
  },
  features: [
  { name: "Acesso total ao conteúdo", included: true },
  { name: "Vídeos ilimitados", included: true },
  { name: "Todos os PDFs e livros", included: true },
  { name: "Certificados oficiais", included: true },
  { name: "Downloads offline", included: true },
  { name: "Comunidade premium", included: true },
  { name: "Suporte prioritário", included: false }],


  isPopular: true,
  buttonText: "Assinar Premium",
  buttonVariant: "primary"
},
{
  id: "pro",
  name: "Pro",
  description: "Para profissionais e empresas",
  price: {
    monthly: 59.9,
    yearly: 599.9
  },
  features: [
  { name: "Tudo do Premium", included: true },
  { name: "Acesso antecipado", included: true },
  { name: "Mentoria em grupo", included: true },
  { name: "Workshops exclusivos", included: true },
  { name: "Suporte prioritário", included: true },
  { name: "Licença comercial", included: true },
  { name: "Relatórios de progresso", included: true }],


  buttonText: "Assinar Pro",
  buttonVariant: "primary"
}];


function PlansContent() {
  const [isYearly, setIsYearly] = useState(false);
  const { showToast } = useToast();

  const handleSubscribe = (planId: string) => {
    showToast({
      type: "info",
      title: "Redirecionando para pagamento...",
      message: `Você será redirecionado para finalizar a assinatura do plano ${plans.find((p) => p.id === planId)?.name}.`
    });
  };

  const getPrice = (plan: Plan) => {
    const price = isYearly ? plan.price.yearly : plan.price.monthly;
    if (price === 0) return "Grátis";

    if (isYearly) {
      const monthlyEquivalent = price / 12;
      return (
        <div data-oid="2tpo-7t">
          <span className="text-3xl font-bold" data-oid="_ltck7o">
            R$ {price.toFixed(2)}
          </span>
          <span
            className="text-sm text-neutral-medium-gray ml-2"
            data-oid="41wjn7y">

            /ano
          </span>
          <div className="text-sm text-primary-300" data-oid=".vsudw-">
            R$ {monthlyEquivalent.toFixed(2)}/mês
          </div>
        </div>);

    }

    return (
      <div data-oid="hmsncsk">
        <span className="text-3xl font-bold" data-oid="-.f.op0">
          R$ {price.toFixed(2)}
        </span>
        <span
          className="text-sm text-neutral-medium-gray ml-2"
          data-oid="qkdr_3_">

          /mês
        </span>
      </div>);

  };

  return (
    <div
      className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
      data-oid="ce3d-jv">

      <Header data-oid="t64z270" />

      <main className="pt-20" data-oid="855vdq7">
        {/* Hero Section */}
        <section
          className="py-20 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-neutral-dark-navy dark:to-black"
          data-oid="hp2gg-0">

          <div className="container-regen text-center" data-oid="x6ktmm2">
            <h1
              className="text-heading text-5xl font-bold text-neutral-dark-navy dark:text-white mb-6"
              data-oid="obz6v5m">

              Escolha seu plano
            </h1>
            <p
              className="text-body text-xl text-neutral-medium-gray max-w-2xl mx-auto mb-12"
              data-oid="tc69lv-">

              Encontre o plano perfeito para sua jornada de aprendizado
              regenerativo. Comece grátis e evolua conforme suas necessidades.
            </p>

            {/* Billing Toggle */}
            <div
              className="flex items-center justify-center space-x-4 mb-12"
              data-oid="xs9i1c_">

              <span
                className={`text-sm font-medium ${!isYearly ? "text-neutral-dark-navy dark:text-white" : "text-neutral-medium-gray"}`}
                data-oid="6j5k:ee">

                Mensal
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? "bg-primary-300" : "bg-neutral-medium-gray"}`
                }
                data-oid="qb9qgi4">

                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? "translate-x-6" : "translate-x-1"}`
                  }
                  data-oid="u_o.wf8" />

              </button>
              <span
                className={`text-sm font-medium ${isYearly ? "text-neutral-dark-navy dark:text-white" : "text-neutral-medium-gray"}`}
                data-oid="ze:opw1">

                Anual
              </span>
              {isYearly &&
              <Badge
                variant="success"
                size="sm"
                className="ml-2"
                data-oid="hshdies">

                  Economize 17%
                </Badge>
              }
            </div>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-20" data-oid="g.xuyvr">
          <div className="container-regen" data-oid="h91a610">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              data-oid="5uh3jcb">

              {plans.map((plan) =>
              <Card
                key={plan.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-regen-hover hover:-translate-y-2 ${
                plan.isPopular ?
                "ring-2 ring-primary-300 ring-opacity-50 scale-105" :
                ""}`
                }
                data-oid="kutb5mb">

                  {plan.isPopular &&
                <div
                  className="absolute top-0 left-0 right-0 bg-primary-300 text-white text-center py-2 text-sm font-medium"
                  data-oid="icfmak1">

                      Mais Popular
                    </div>
                }

                  <CardContent
                  className={`p-8 ${plan.isPopular ? "pt-12" : ""}`}
                  data-oid="1fn.q6g">

                    <div className="text-center mb-8" data-oid="0hf0-gq">
                      <h3
                      className="text-heading text-2xl font-bold mb-2"
                      data-oid="_tvjxkn">

                        {plan.name}
                      </h3>
                      <p
                      className="text-body text-neutral-medium-gray mb-6"
                      data-oid="gkj4lfk">

                        {plan.description}
                      </p>
                      <div className="mb-6" data-oid="muxbp-m">
                        {getPrice(plan)}
                      </div>
                      <Button
                      variant={plan.buttonVariant}
                      size="lg"
                      className="w-full"
                      onClick={() => handleSubscribe(plan.id)}
                      data-oid="0k6dj3b">

                        {plan.buttonText}
                      </Button>
                    </div>

                    <div className="space-y-4" data-oid="g6tf3vh">
                      <h4
                      className="text-heading font-semibold text-lg"
                      data-oid="qydrwab">

                        O que está incluído:
                      </h4>
                      <ul className="space-y-3" data-oid="__fykr9">
                        {plan.features.map((feature, index) =>
                      <li
                        key={index}
                        className="flex items-center space-x-3"
                        data-oid="6omgw2_">

                            <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          feature.included ?
                          "bg-success text-white" :
                          "bg-neutral-light-gray dark:bg-neutral-medium-gray"}`
                          }
                          data-oid="et8qj.p">

                              {feature.included ?
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="_m38lv-">

                                  <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                              data-oid="o2xcfyh" />

                                </svg> :

                          <svg
                            className="w-3 h-3 text-neutral-medium-gray"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="4tajh:3">

                                  <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                              data-oid="._3:odq" />

                                </svg>
                          }
                            </div>
                            <span
                          className={`text-sm ${
                          feature.included ?
                          "text-neutral-dark-navy dark:text-neutral-light-gray" :
                          "text-neutral-medium-gray line-through"}`
                          }
                          data-oid="xmyhf5k">

                              {feature.name}
                            </span>
                          </li>
                      )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-black" data-oid=".r-estz">
          <div className="container-regen" data-oid="oum72yw">
            <div className="text-center mb-16" data-oid="y6:0t.p">
              <h2
                className="text-heading text-4xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                data-oid="nqgjq30">

                Perguntas Frequentes
              </h2>
              <p
                className="text-body text-lg text-neutral-medium-gray max-w-2xl mx-auto"
                data-oid="c.t15tp">

                Tire suas dúvidas sobre nossos planos e funcionalidades
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6" data-oid="72zf1zv">
              {[
              {
                question:
                "Posso cancelar minha assinatura a qualquer momento?",
                answer:
                "Sim, você pode cancelar sua assinatura a qualquer momento através das configurações da sua conta. Não há taxas de cancelamento."
              },
              {
                question: "Os certificados são reconhecidos?",
                answer:
                "Nossos certificados são emitidos pela RegenFlix em parceria com instituições reconhecidas na área de sustentabilidade e regeneração."
              },
              {
                question: "Posso fazer upgrade ou downgrade do meu plano?",
                answer:
                "Sim, você pode alterar seu plano a qualquer momento. As alterações entram em vigor no próximo ciclo de cobrança."
              },
              {
                question: "Há desconto para estudantes?",
                answer:
                "Sim, oferecemos 50% de desconto para estudantes com comprovação. Entre em contato conosco para mais informações."
              }].
              map((faq, index) =>
              <Card key={index} className="p-6" data-oid="h1018og">
                  <h3
                  className="text-heading font-semibold text-lg mb-3"
                  data-oid="i7usc7i">

                    {faq.question}
                  </h3>
                  <p
                  className="text-body text-neutral-medium-gray"
                  data-oid="ri3eune">

                    {faq.answer}
                  </p>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-300" data-oid="o.t2ea_">
          <div className="container-regen text-center" data-oid="6ns7rr:">
            <h2
              className="text-heading text-4xl font-bold text-white mb-4"
              data-oid=":9s-ak3">

              Ainda tem dúvidas?
            </h2>
            <p
              className="text-body text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
              data-oid="le.wvck">

              Nossa equipe está pronta para ajudar você a escolher o melhor
              plano
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary-300 hover:bg-primary-50"
              data-oid="lw_ksfx">

              Falar com Especialista
            </Button>
          </div>
        </section>
      </main>

      <Footer data-oid="1st.qjw" />
    </div>);

}

export default function PlansPage() {
  return (
    <ThemeProvider data-oid="8-d4nk_">
      <ToastProvider data-oid="ra5exs6">
        <PlansContent data-oid="6eut5sg" />
      </ToastProvider>
    </ThemeProvider>);

}