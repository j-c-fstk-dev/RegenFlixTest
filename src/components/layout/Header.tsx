"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Button } from "@/components/ui/Button";
import { Modal, ModalHeader, ModalBody } from "@/components/ui/Modal";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useUserProfile } from "@/hooks/useUserProfile";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "pt_BR", name: "Português", flag: "🇧🇷" },
  { code: "en_US", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const { theme, toggleTheme } = useTheme();
  const { user, logout, isLoading: isAuthLoading } = useAuth();
  const { profile, isLoading: isProfileLoading } = useUserProfile();

  const isLoading = isAuthLoading || isProfileLoading;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsSearchOpen(false);
      setIsProfileMenuOpen(false);
    };

    if (isSearchOpen || isProfileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSearchOpen, isProfileMenuOpen]);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem("regenflix-language", language.code);
    setIsLanguageModalOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-neutral-warm-white/95 dark:bg-neutral-charcoal/95 backdrop-blur-cozy shadow-cozy"
            : "bg-transparent"
        )}
        data-oid="1h967qm">
        <div className="container-cozy" data-oid="6i1m865">
          <div
            className="flex items-center justify-between h-16"
            data-oid="9l-166e">
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              data-oid="vx0ps46">
              <div
                className="w-10 h-10 bg-gradient-to-br from-earth-sage to-earth-peach rounded-cozy flex items-center justify-center shadow-cozy group-hover:shadow-cozy-hover transition-all duration-300 transform group-hover:scale-105"
                data-oid="xteqzc5">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="c4298f.">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.19 0 2.34-.21 3.41-.6.3-.11.49-.4.49-.72 0-.43-.35-.78-.78-.78-.22 0-.42.09-.56.24-.83.29-1.72.44-2.64.44-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6c0 .92-.15 1.81-.44 2.64-.15.14-.24.34-.24.56 0 .43.35.78.78.78.32 0 .61-.19.72-.49.39-1.07.6-2.22.6-3.41C22 6.48 17.52 2 12 2z"
                    data-oid="yrxr_e." />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12l2 2 4-4"
                    data-oid="leaf-check" />
                </svg>
              </div>
              <div className="flex flex-col" data-oid=".lcug9a">
                <span
                  className="text-heading text-xl font-semibold text-earth-sage group-hover:text-earth-peach transition-colors duration-300"
                  data-oid="83eg4lo">
                  Brincando em Família
                </span>
                <span
                  className="text-script text-xs text-earth-peach opacity-80"
                  data-oid="sf.gznb">
                  aprender • criar • crescer 🌿
                </span>
              </div>
            </Link>

            <nav
              className="hidden md:flex items-center space-x-8"
              data-oid="4sqd016">
              <Link
                href="/cursos"
                className="text-body font-medium text-neutral-dark-sage dark:text-neutral-cream hover:text-earth-peach transition-all duration-300 relative group"
                data-oid=":9nklch">
                Atividades
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-earth-peach transition-all duration-300 group-hover:w-full rounded-full"
                  data-oid="z5k_79h">
                </span>
              </Link>
              <Link
                href="/regenpedia"
                className="text-body font-medium text-neutral-dark-sage dark:text-neutral-cream hover:text-earth-peach transition-all duration-300 relative group"
                data-oid="mr06mmn">
                Recursos
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-earth-peach transition-all duration-300 group-hover:w-full rounded-full"
                  data-oid="rlt26fw">
                </span>
              </Link>
              <Link
                href="/loja"
                className="text-body font-medium text-neutral-dark-sage dark:text-neutral-cream hover:text-earth-peach transition-all duration-300 relative group"
                data-oid="lexg.p3">
                Lojinha
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-earth-peach transition-all duration-300 group-hover:w-full rounded-full"
                  data-oid="shw2n4j">
                </span>
              </Link>
            </nav>

            <div className="flex items-center space-x-3" data-oid="r_uy5z0">
              <div
                className="relative"
                onClick={(e) => e.stopPropagation()}
                data-oid="ql9xspu">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-neutral-medium-gray hover:text-earth-peach transition-all duration-300 rounded-cozy hover:bg-earth-cream/50 dark:hover:bg-earth-sage/20"
                  data-oid="l5kej01">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="ljjtvgk">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      data-oid="o37__vn" />
                  </svg>
                </button>
                {isSearchOpen && (
                  <div
                    className="absolute right-0 top-full mt-2 w-80 animate-gentle-float"
                    data-oid="y_le3zl">
                    <div className="card-cozy p-4" data-oid="vk6-:bm">
                      <input
                        type="text"
                        placeholder="Buscar atividades, recursos..."
                        className="input-cozy"
                        autoFocus
                        data-oid="xjzm:t0"
                      />
                      <div
                        className="mt-3 text-xs text-neutral-medium-gray flex items-center"
                        data-oid="lvdz:f8">
                        <span data-oid="w1p296y">
                          Pressione Enter para buscar
                        </span>
                        <span className="ml-2" data-oid="akli1r9">
                          🔍
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 text-neutral-medium-gray hover:text-earth-peach transition-all duration-300 rounded-cozy hover:bg-earth-cream/50 dark:hover:bg-earth-sage/20"
                title={theme === "light" ? "Modo noturno" : "Modo diurno"}
                data-oid="8945u_d">
                {theme === "light" ? (
                  <svg
                    className="w-5 h-5 transition-transform duration-300 hover:rotate-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="bhg4b3p">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      data-oid="i97-esw"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 transition-transform duration-300 hover:rotate-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="5mtnhwl">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      data-oid="86g4-m3"
                    />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setIsLanguageModalOpen(true)}
                className="p-2 text-neutral-medium-gray hover:text-earth-peach transition-all duration-300 rounded-cozy hover:bg-earth-cream/50 dark:hover:bg-earth-sage/20 text-lg"
                title="Alterar idioma"
                data-oid="yjjjtn2">
                {currentLanguage.flag}
              </button>

              {!isLoading && (
                user ? (
                  <div
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                    data-oid="16:xr:f">
                    <button
                      onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                      className="w-10 h-10 rounded-cozy bg-gradient-to-br from-earth-sage to-earth-peach flex items-center justify-center text-white font-medium text-sm hover:shadow-cozy-hover transition-all duration-300 transform hover:scale-105"
                      data-oid="y6x67c7">
                      {profile?.name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || 'U'}
                    </button>
                    {isProfileMenuOpen && (
                      <div
                        className="absolute right-0 top-full mt-2 w-48 animate-gentle-float"
                        data-oid="y0x3g_e">
                        <div className="card-cozy py-2" data-oid="8h0.bpy">
                          <div className="px-4 py-2 border-b border-neutral-soft-gray dark:border-neutral-medium-gray">
                            <p className="text-sm font-medium text-neutral-charcoal dark:text-neutral-cream truncate">{profile?.name}</p>
                            <p className="text-xs text-neutral-dark-sage/80 truncate">{user.email}</p>
                          </div>
                          <Link
                            href="/home"
                            className="block px-4 py-2 text-sm text-neutral-dark-sage dark:text-neutral-cream hover:bg-earth-cream/50 dark:hover:bg-earth-sage/20 transition-all duration-300"
                            data-oid="home-link">
                            Meu Cantinho
                          </Link>
                          <Link
                            href="/perfil"
                            className="block px-4 py-2 text-sm text-neutral-dark-sage dark:text-neutral-cream hover:bg-earth-cream/50 dark:hover:bg-earth-sage/20 transition-all duration-300"
                            data-oid="n.26k-g">
                            Meu Perfil
                          </Link>
                          <hr
                            className="my-2 border-neutral-soft-gray dark:border-neutral-medium-gray"
                            data-oid=".r2a:5f"
                          />
                          <button
                            onClick={logout}
                            className="block w-full text-left px-4 py-2 text-sm text-accent-rust hover:bg-accent-rust/10 transition-all duration-300"
                            data-oid="voykc76">
                            Sair
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center space-x-2" data-oid="w7v6wo1">
                    <Link href="/login" data-oid="2nkcpwq">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="btn-ghost"
                        data-oid="-iqvzfs">
                        Entrar
                      </Button>
                    </Link>
                    <Link href="/planos" data-oid="u1-58w8">
                      <Button size="sm" className="btn-warm" data-oid="_k_:15z">
                        Começar 🌱
                      </Button>
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </header>

      <Modal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        size="sm"
        data-oid="ax9qm_x">
        <ModalHeader data-oid="y.c7xqc">
          <h2 className="text-heading text-xl font-semibold" data-oid=".htzjxg">
            Selecionar Idioma
          </h2>
        </ModalHeader>
        <ModalBody data-oid="hixiwu9">
          <div className="space-y-2" data-oid="xqwkc.m">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className={cn(
                  "w-full flex items-center space-x-3 p-3 rounded-cozy transition-all duration-300 text-left",
                  currentLanguage.code === language.code
                    ? "bg-earth-cream text-earth-sage"
                    : "hover:bg-neutral-soft-gray/30 dark:hover:bg-neutral-medium-gray/20"
                )}
                data-oid="6z2o15f">
                <span className="text-lg" data-oid=".kovhec">
                  {language.flag}
                </span>
                <span className="font-medium" data-oid="kfeye8o">
                  {language.name}
                </span>
                {currentLanguage.code === language.code && (
                  <svg
                    className="w-5 h-5 ml-auto text-earth-sage"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="vu_2xbd">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                      data-oid="jp-109b"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
