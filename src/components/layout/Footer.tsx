import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
  { href: "/cursos", label: "Atividades" },
  { href: "/regenpedia", label: "Recursos" },
  { href: "/loja", label: "Lojinha" },
  { href: "/planos", label: "Planos" }];


  const companyLinks = [
  { href: "/sobre", label: "Nossa História" },
  { href: "/contato", label: "Fale Conosco" },
  { href: "/termos-de-uso", label: "Termos de Uso" },
  { href: "/politica-de-privacidade", label: "Política de Privacidade" }];


  const socialLinks = [
  {
    href: "https://instagram.com/brincandoemfamilia",
    label: "Instagram",
    icon:
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      data-oid="ty-jgb:">

          <path
        d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017.001 12.017 0z"
        data-oid="gx0w8xo" />

        </svg>

  },
  {
    href: "https://youtube.com/@brincandoemfamilia",
    label: "YouTube",
    icon:
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      data-oid="091vlli">

          <path
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        data-oid="i7jk72n" />

        </svg>

  },
  {
    href: "https://pinterest.com/brincandoemfamilia",
    label: "Pinterest",
    icon:
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      data-oid="1bo9rr9">

          <path
        d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017.001 12.017 0z"
        data-oid="q--4gi6" />

        </svg>

  },
  {
    href: "https://facebook.com/brincandoemfamilia",
    label: "Facebook",
    icon:
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      data-oid="0c.l1kb">

          <path
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        data-oid="htn48ld" />

        </svg>

  }];


  return (
    <footer
      className="bg-neutral-dark-sage dark:bg-neutral-charcoal text-neutral-cream"
      data-oid="_87n7t4">

      <div className="container-cozy py-16" data-oid="q1amo0i">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          data-oid="tz9b412">

          {/* Brand Section */}
          <div className="lg:col-span-1" data-oid="jzf0sjz">
            <div
              className="flex items-center space-x-3 mb-4"
              data-oid="0r.x_r3">

              <div
                className="w-10 h-10 bg-gradient-to-br from-earth-sage to-earth-peach rounded-cozy flex items-center justify-center shadow-cozy"
                data-oid="abukly_">

                <span className="text-2xl" data-oid="ajkrl_r">
                  🌿
                </span>
              </div>
              <div className="flex flex-col" data-oid="j9wb::c">
                <span
                  className="text-heading text-xl font-semibold text-earth-peach"
                  data-oid="tkfpudw">

                  Brincando em Família
                </span>
                <span
                  className="text-script text-xs text-earth-sage opacity-80"
                  data-oid="2v_-n6.">

                  aprender • criar • crescer
                </span>
              </div>
            </div>
            <p
              className="text-body text-sm text-neutral-cream/80 mb-6 leading-relaxed"
              data-oid="g_057cy">

              Um espaço acolhedor para mães que desejam criar uma infância rica
              em experiências naturais, aprendizado Waldorf e conexão familiar.
              Transformando lares em espaços de crescimento e descoberta. 🏡💚
            </p>
            <div className="flex space-x-4" data-oid="6cnlxvf">
              {socialLinks.map((social) =>
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-cream/60 hover:text-earth-peach hover:bg-earth-peach/10 rounded-cozy transition-all duration-300 transform hover:scale-110"
                title={social.label}
                data-oid="8huims5">

                  {social.icon}
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div data-oid="kvyt.yl">
            <h3
              className="text-heading font-semibold text-lg mb-4 text-earth-peach flex items-center"
              data-oid="aizfrx3">

              <span className="mr-2" data-oid="bw2q_k8">
                🌸
              </span>
              Links Rápidos
            </h3>
            <ul className="space-y-3" data-oid="pz.-km9">
              {quickLinks.map((link) =>
              <li key={link.href} data-oid="uhh_g8i">
                  <Link
                  href={link.href}
                  className="text-body text-sm text-neutral-cream/70 hover:text-earth-peach transition-all duration-300 hover:underline hover:translate-x-1 inline-block"
                  data-oid="7wr98ad">

                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Company */}
          <div data-oid="nvbno0a">
            <h3
              className="text-heading font-semibold text-lg mb-4 text-earth-peach flex items-center"
              data-oid="nbw:jqr">

              <span className="mr-2" data-oid="a0.iex9">
                🦋
              </span>
              Nossa Família
            </h3>
            <ul className="space-y-3" data-oid="eu-2-_t">
              {companyLinks.map((link) =>
              <li key={link.href} data-oid="mzudo05">
                  <Link
                  href={link.href}
                  className="text-body text-sm text-neutral-cream/70 hover:text-earth-peach transition-all duration-300 hover:underline hover:translate-x-1 inline-block"
                  data-oid="dg9855_">

                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-oid="w--w1db">
            <h3
              className="text-heading font-semibold text-lg mb-4 text-earth-peach flex items-center"
              data-oid="me1c7no">

              <span className="mr-2" data-oid="qws_d5g">
                💌
              </span>
              Vamos Conversar
            </h3>
            <div className="space-y-3" data-oid="w1btb3f">
              <div className="flex items-start space-x-3" data-oid="2sqjnww">
                <svg
                  className="w-5 h-5 text-earth-peach mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid=".r:j3-g">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    data-oid="6kl-ys7" />

                </svg>
                <a
                  href="mailto:ola@brincandoemfamilia.com"
                  className="text-body text-sm text-neutral-cream/70 hover:text-earth-peach transition-all duration-300"
                  data-oid="oavihg3">

                  ola@brincandoemfamilia.com
                </a>
              </div>
              <div className="flex items-start space-x-3" data-oid="la_x9mb">
                <svg
                  className="w-5 h-5 text-earth-peach mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="_amf_-b">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    data-oid="hpvtf-l" />

                </svg>
                <a
                  href="tel:+5511999999999"
                  className="text-body text-sm text-neutral-cream/70 hover:text-earth-peach transition-all duration-300"
                  data-oid="rwq6c1b">

                  +55 (11) 99999-9999
                </a>
              </div>
              <div className="flex items-start space-x-3" data-oid="fs1w7sr">
                <svg
                  className="w-5 h-5 text-earth-peach mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="1:hfwxi">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    data-oid="9:lt.uf" />


                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    data-oid="s.07qv7" />

                </svg>
                <span
                  className="text-body text-sm text-neutral-cream/70"
                  data-oid="4bkoa2l">

                  São Paulo, SP - Brasil 🇧🇷
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="border-t border-neutral-cream/20 mt-12 pt-8"
          data-oid="hpoc8m8">

          <div
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            data-oid="xsutjro">

            <div
              className="text-body text-sm text-neutral-cream/60 flex items-center"
              data-oid="p_dxq2_">

              <span className="mr-2" data-oid="l_.kghk">
                🌱
              </span>
              © {currentYear} Brincando em Família. Feito com amor para
              famílias especiais.
            </div>
            <div className="flex items-center space-x-6" data-oid="-ibrbhn">
              <Link
                href="/termos-de-uso"
                className="text-body text-sm text-neutral-cream/60 hover:text-earth-peach transition-all duration-300"
                data-oid="lycbt3i">

                Termos de Uso
              </Link>
              <Link
                href="/politica-de-privacidade"
                className="text-body text-sm text-neutral-cream/60 hover:text-earth-peach transition-all duration-300"
                data-oid="e78q2m.">

                Política de Privacidade
              </Link>
              <Link
                href="/cookies"
                className="text-body text-sm text-neutral-cream/60 hover:text-earth-peach transition-all duration-300"
                data-oid="4h50y2a">

                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}