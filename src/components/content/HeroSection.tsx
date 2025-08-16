"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter } from
"@/components/ui/Modal";

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-organic-gradient"
        data-oid="boapzmv">

        {/* Cozy background with organic shapes */}
        <div className="absolute inset-0 z-0" data-oid="9vhdumj">
          {/* Organic floating shapes */}
          <div
            className="absolute top-20 left-10 w-32 h-32 bg-earth-peach/20 organic-shape animate-gentle-float"
            data-oid="organic-1">
          </div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-earth-sage/15 organic-shape-alt animate-gentle-float"
            style={{ animationDelay: "2s" }}
            data-oid="organic-2">
          </div>
          <div
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-earth-clay/10 organic-shape animate-gentle-float"
            style={{ animationDelay: "4s" }}
            data-oid="organic-3">
          </div>
          <div
            className="absolute bottom-20 right-1/3 w-28 h-28 bg-earth-stone/15 organic-shape-alt animate-gentle-float"
            style={{ animationDelay: "1s" }}
            data-oid="organic-4">
          </div>

          {/* Soft background image overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url('/api/placeholder/1920/1080')`,
              filter: "sepia(20%) saturate(80%) brightness(1.1)"
            }}
            data-oid="nekuqst">
          </div>

          {/* Gentle overlay for warmth */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-earth-cream/40 via-transparent to-earth-peach/20"
            data-oid="2qkqlpz">
          </div>
        </div>

        {/* Decorative elements */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          data-oid="o75q2f5">

          {/* Soft glowing orbs */}
          <div
            className="absolute top-1/3 left-1/5 w-48 h-48 bg-earth-sage/10 rounded-full blur-3xl animate-soft-pulse"
            data-oid="i1wkig7">
          </div>
          <div
            className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-earth-peach/8 rounded-full blur-3xl animate-soft-pulse"
            style={{ animationDelay: "3s" }}
            data-oid="50sbnkc">
          </div>
        </div>

        {/* Content */}
        <div
          className="relative z-10 container-cozy text-center"
          data-oid="vdywf3i">

          <div className="max-w-4xl mx-auto" data-oid="bkxe:yf">
            {/* Cozy badge */}
            <div
              className="inline-flex items-center px-6 py-3 bg-neutral-warm-white/80 backdrop-blur-cozy rounded-cozy-lg text-earth-sage text-sm font-medium mb-8 animate-gentle-float shadow-cozy"
              data-oid="8zzrf3g">

              <span className="mr-2 text-lg" data-oid="-vsbgca">
                🌱
              </span>
              Criando memórias e aprendizados em família
              <span className="ml-2 text-lg" data-oid="lkgspw5">
                ✨
              </span>
            </div>

            {/* Main Heading - More family-friendly */}
            <h1
              className="text-heading text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-charcoal dark:text-neutral-cream mb-6 leading-tight animate-gentle-float"
              style={{ animationDelay: "0.2s" }}
              data-oid="pb8cjbx">

              Brincando e{" "}
              <span className="text-earth-peach relative" data-oid="pe_d71:">
                Aprendendo
                <svg
                  className="absolute -bottom-2 left-0 w-full h-4 text-earth-peach/40"
                  viewBox="0 0 300 16"
                  fill="none"
                  data-oid="d5nyf2u">

                  <path
                    d="M5 12C60 4 120 8 180 6C240 4 280 8 295 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    data-oid="vqnr70l" />

                </svg>
              </span>{" "}
              em Família
            </h1>

            {/* Subtitle - Warm and inviting */}
            <p
              className="text-body text-xl md:text-2xl text-neutral-dark-sage/80 dark:text-neutral-cream/90 mb-12 leading-relaxed max-w-3xl mx-auto animate-gentle-float"
              style={{ animationDelay: "0.4s" }}
              data-oid="8e_nyz8">

              Descubra atividades Waldorf, recursos para homeschooling e
              inspirações para criar um lar cheio de aprendizado natural.
              Junte-se a uma comunidade de mães que valorizam a infância e o
              crescimento orgânico. 🏡💚
            </p>

            {/* CTA Buttons - Cozy and inviting */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-gentle-float"
              style={{ animationDelay: "0.6s" }}
              data-oid="1t8pp:g">

              <Link href="/login" data-oid="15j-9uw">
                <Button
                  size="lg"
                  className="btn-primary px-8 py-4 text-lg font-semibold"
                  data-oid="6y_.2lh">

                  Começar Nossa Jornada 🌿
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="x310zs0">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                      data-oid="pa0zzie" />

                  </svg>
                </Button>
              </Link>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => setIsVideoModalOpen(true)}
                className="btn-secondary px-8 py-4 text-lg font-semibold"
                data-oid="grn8878">

                <span className="mr-2" data-oid="yeos2hf">
                  🎬
                </span>
                Ver Nossa História
              </Button>
            </div>

            {/* Stats - Family-friendly */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-gentle-float"
              style={{ animationDelay: "0.8s" }}
              data-oid="bmy550m">

              <div className="text-center" data-oid="eskl:13">
                <div
                  className="text-3xl font-bold text-earth-sage mb-2"
                  data-oid="a:blwbt">

                  200+ 🎨
                </div>
                <div
                  className="text-neutral-dark-sage/70 text-sm"
                  data-oid="qzg6iwf">

                  Atividades Criativas
                </div>
              </div>
              <div className="text-center" data-oid="4y_ad43">
                <div
                  className="text-3xl font-bold text-earth-sage mb-2"
                  data-oid="3j69nne">

                  5k+ 👩‍👧‍👦
                </div>
                <div
                  className="text-neutral-dark-sage/70 text-sm"
                  data-oid=":ebihi8">

                  Famílias Conectadas
                </div>
              </div>
              <div className="text-center" data-oid="z-28:-c">
                <div
                  className="text-3xl font-bold text-earth-sage mb-2"
                  data-oid="q.362vh">

                  15+ 🌟
                </div>
                <div
                  className="text-neutral-dark-sage/70 text-sm"
                  data-oid="-ds6i3.">

                  Anos de Experiência
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="mt-16 flex justify-center space-x-4 opacity-60"
              data-oid="hxygyez">

              <span
                className="text-2xl animate-gentle-float"
                data-oid="0ze-svg">

                🌸
              </span>
              <span
                className="text-2xl animate-gentle-float"
                style={{ animationDelay: "1s" }}
                data-oid="ks06gp4">

                🦋
              </span>
              <span
                className="text-2xl animate-gentle-float"
                style={{ animationDelay: "2s" }}
                data-oid="n-vggd_">

                🌿
              </span>
              <span
                className="text-2xl animate-gentle-float"
                style={{ animationDelay: "3s" }}
                data-oid="nh4ncb7">

                🌻
              </span>
              <span
                className="text-2xl animate-gentle-float"
                style={{ animationDelay: "4s" }}
                data-oid="7syu-29">

                🐝
              </span>
            </div>
          </div>
        </div>

        {/* Gentle scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-organic-bounce"
          data-oid="1i.bqa0">

          <div
            className="flex flex-col items-center text-earth-sage/60"
            data-oid="7jxdnay">

            <span className="text-sm mb-2 font-medium" data-oid="2kklp5w">
              Explore mais
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              data-oid=".nny.u0">

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                data-oid="w-wb:r-" />

            </svg>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Modal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        size="xl"
        data-oid="ygajo8d">

        <ModalHeader data-oid="wrbp14o">
          <h2
            className="text-heading text-2xl font-semibold flex items-center"
            data-oid="g06wgn_">

            <span className="mr-2" data-oid="frkg801">
              🏡
            </span>
            Nossa História de Família
          </h2>
        </ModalHeader>
        <ModalBody data-oid="fuxh.jv">
          <div
            className="aspect-video bg-gradient-cozy rounded-cozy-lg flex items-center justify-center"
            data-oid="86hp-36">

            <div className="text-center" data-oid="obagfsw">
              <div
                className="w-20 h-20 bg-gradient-to-br from-earth-sage to-earth-peach rounded-cozy-lg flex items-center justify-center mx-auto mb-4 shadow-cozy"
                data-oid="qcbr2pc">

                <span className="text-3xl" data-oid="-ake6l8">
                  🎬
                </span>
              </div>
              <p
                className="text-neutral-dark-sage text-lg mb-2"
                data-oid="p31cj-f">

                Em breve: Nossa jornada em família
              </p>
              <p
                className="text-neutral-medium-gray text-sm"
                data-oid="pnh6gts">

                Compartilhando como transformamos nossa casa em um espaço de
                aprendizado natural 🌱
              </p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter data-oid="0e4u-cj">
          <Button
            variant="secondary"
            onClick={() => setIsVideoModalOpen(false)}
            className="btn-secondary"
            data-oid="yjnxb5u">

            Fechar
          </Button>
        </ModalFooter>
      </Modal>
    </>);

}