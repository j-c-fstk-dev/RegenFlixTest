"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "./Modal";

interface CookieBannerProps {
  onAccept: () => void;
  onReject: () => void;
  onManagePreferences: () => void;
}

export function CookieBanner({
  onAccept,
  onReject,
  onManagePreferences
}: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("regenflix-cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("regenflix-cookie-consent", "accepted");
    setIsVisible(false);
    onAccept();
  };

  const handleReject = () => {
    localStorage.setItem("regenflix-cookie-consent", "rejected");
    setIsVisible(false);
    onReject();
  };

  const handleManagePreferences = () => {
    setShowPreferences(true);
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-neutral-dark-navy/95 backdrop-blur-regen border-t border-neutral-light-gray dark:border-neutral-medium-gray animate-slide-up"
        data-oid="kjjnj6-">

        <div className="container-regen py-4" data-oid="eem3xa-">
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            data-oid="vg-liz7">

            <div className="flex-1" data-oid="c-3c7ei">
              <h3
                className="text-heading font-semibold text-lg mb-2"
                data-oid="kpho7e8">

                Consentimento de Cookies
              </h3>
              <p
                className="text-body text-sm text-neutral-medium-gray"
                data-oid=":lo0jwx">

                Utilizamos cookies e tecnologias similares para melhorar sua
                experiência, personalizar conteúdo e analisar o tráfego do site.
                Ao continuar navegando, você concorda com nossa política de
                cookies.
              </p>
            </div>
            <div
              className="flex flex-col sm:flex-row gap-2 min-w-fit"
              data-oid="lcd.fc0">

              <Button
                variant="primary"
                size="sm"
                onClick={handleAccept}
                data-oid="dsbpmok">

                Aceitar Todos
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleReject}
                data-oid="712aqvw">

                Rejeitar Todos
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleManagePreferences}
                data-oid="bs5w0xi">

                Gerenciar Preferências
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      <Modal
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
        size="lg"
        data-oid="z50ds5j">

        <ModalHeader data-oid="_iuu59h">
          <h2
            className="text-heading text-2xl font-semibold"
            data-oid="bggum9e">

            Preferências de Cookies
          </h2>
        </ModalHeader>
        <ModalBody data-oid="-9h.u69">
          <div className="space-y-6" data-oid="kk1mn_1">
            <div data-oid="hav2u.n">
              <h3
                className="text-heading font-semibold mb-2"
                data-oid="3.howrm">

                Cookies Essenciais
              </h3>
              <p
                className="text-body text-sm text-neutral-medium-gray mb-3"
                data-oid="3-bbgo-">

                Necessários para o funcionamento básico do site. Não podem ser
                desabilitados.
              </p>
              <div
                className="flex items-center justify-between p-3 bg-neutral-light-gray dark:bg-neutral-medium-gray/20 rounded-regen"
                data-oid="lnt18fk">

                <span className="text-sm font-medium" data-oid="jv1-0.h">
                  Sempre ativo
                </span>
                <div
                  className="w-10 h-6 bg-primary-300 rounded-full flex items-center justify-end px-1"
                  data-oid="0f:wras">

                  <div
                    className="w-4 h-4 bg-white rounded-full"
                    data-oid="uc4612c">
                  </div>
                </div>
              </div>
            </div>

            <div data-oid=":t:jw3.">
              <h3
                className="text-heading font-semibold mb-2"
                data-oid="uhpq_c9">

                Cookies de Análise
              </h3>
              <p
                className="text-body text-sm text-neutral-medium-gray mb-3"
                data-oid="0nkinhp">

                Nos ajudam a entender como os visitantes interagem com o site.
              </p>
              <div
                className="flex items-center justify-between p-3 bg-neutral-light-gray dark:bg-neutral-medium-gray/20 rounded-regen"
                data-oid="5sulhpw">

                <span className="text-sm font-medium" data-oid="gc9oyj1">
                  Opcional
                </span>
                <button
                  className="w-10 h-6 bg-neutral-medium-gray rounded-full flex items-center px-1"
                  data-oid="ls1r.6n">

                  <div
                    className="w-4 h-4 bg-white rounded-full"
                    data-oid="g_bhc7m">
                  </div>
                </button>
              </div>
            </div>

            <div data-oid="6wv.fdi">
              <h3
                className="text-heading font-semibold mb-2"
                data-oid="-qu2c4l">

                Cookies de Marketing
              </h3>
              <p
                className="text-body text-sm text-neutral-medium-gray mb-3"
                data-oid="p1zw4zh">

                Utilizados para personalizar anúncios e medir a eficácia das
                campanhas.
              </p>
              <div
                className="flex items-center justify-between p-3 bg-neutral-light-gray dark:bg-neutral-medium-gray/20 rounded-regen"
                data-oid="hgp9zol">

                <span className="text-sm font-medium" data-oid="0vr_rz2">
                  Opcional
                </span>
                <button
                  className="w-10 h-6 bg-neutral-medium-gray rounded-full flex items-center px-1"
                  data-oid="hk4hvl3">

                  <div
                    className="w-4 h-4 bg-white rounded-full"
                    data-oid=".k_zj7.">
                  </div>
                </button>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter data-oid="x.1-7v4">
          <Button
            variant="secondary"
            onClick={() => setShowPreferences(false)}
            data-oid="tpjg8r6">

            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShowPreferences(false);
              handleAccept();
            }}
            data-oid="jcy-yyh">

            Salvar Preferências
          </Button>
        </ModalFooter>
      </Modal>
    </>);

}