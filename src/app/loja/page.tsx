"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Mock data for products
const featuredProduct = {
  id: "kit-compostagem-completo",
  name: "Kit Compostagem Completo",
  description:
  "Kit completo para começar sua compostagem doméstica, incluindo composteira, termômetro, manual e curso online.",
  price: 189.9,
  originalPrice: 249.9,
  discount: 24,
  image: "/api/placeholder/600/400",
  category: "Kits",
  rating: 4.8,
  reviews: 156,
  inStock: true,
  isFeatured: true,
  isNew: false,
  tags: ["compostagem", "sustentabilidade", "kit", "iniciante"]
};

const products = [
{
  id: "1",
  name: "Sementes Orgânicas - Mix Hortaliças",
  description:
  "Coleção de 12 variedades de sementes orgânicas certificadas para horta doméstica.",
  price: 45.9,
  originalPrice: null,
  image: "/api/placeholder/300/300",
  category: "Sementes",
  rating: 4.9,
  reviews: 89,
  inStock: true,
  isNew: true,
  tags: ["sementes", "orgânico", "horta"]
},
{
  id: "2",
  name: "Curso: Permacultura Urbana",
  description:
  "Curso online completo sobre permacultura aplicada em ambientes urbanos.",
  price: 197.0,
  originalPrice: 297.0,
  image: "/api/placeholder/300/300",
  category: "Cursos",
  rating: 4.7,
  reviews: 234,
  inStock: true,
  isNew: false,
  tags: ["curso", "permacultura", "urbano"]
},
{
  id: "3",
  name: "Livro: Agricultura Regenerativa",
  description:
  "Guia completo sobre práticas de agricultura regenerativa por especialistas renomados.",
  price: 89.9,
  originalPrice: null,
  image: "/api/placeholder/300/300",
  category: "Livros",
  rating: 4.8,
  reviews: 67,
  inStock: true,
  isNew: false,
  tags: ["livro", "agricultura", "regenerativa"]
},
{
  id: "4",
  name: "Kit Ferramentas de Jardim",
  description:
  "Conjunto de ferramentas essenciais para jardinagem sustentável, feitas com materiais reciclados.",
  price: 129.9,
  originalPrice: 159.9,
  image: "/api/placeholder/300/300",
  category: "Ferramentas",
  rating: 4.6,
  reviews: 123,
  inStock: true,
  isNew: false,
  tags: ["ferramentas", "jardim", "sustentável"]
},
{
  id: "5",
  name: "Minhocário Doméstico",
  description:
  "Sistema completo de vermicompostagem para apartamentos e casas pequenas.",
  price: 159.9,
  originalPrice: null,
  image: "/api/placeholder/300/300",
  category: "Compostagem",
  rating: 4.9,
  reviews: 78,
  inStock: false,
  isNew: false,
  tags: ["minhocário", "vermicompostagem", "apartamento"]
},
{
  id: "6",
  name: "Consultoria em Sustentabilidade",
  description:
  "Sessão de consultoria personalizada para implementar práticas sustentáveis em sua propriedade.",
  price: 350.0,
  originalPrice: null,
  image: "/api/placeholder/300/300",
  category: "Serviços",
  rating: 5.0,
  reviews: 45,
  inStock: true,
  isNew: true,
  tags: ["consultoria", "sustentabilidade", "personalizado"]
},
{
  id: "7",
  name: "Biofertilizante Concentrado",
  description:
  "Fertilizante orgânico concentrado produzido através de processos sustentáveis.",
  price: 34.9,
  originalPrice: null,
  image: "/api/placeholder/300/300",
  category: "Fertilizantes",
  rating: 4.7,
  reviews: 156,
  inStock: true,
  isNew: false,
  tags: ["biofertilizante", "orgânico", "concentrado"]
},
{
  id: "8",
  name: "Workshop: Bioconstrução",
  description:
  "Workshop prático de fim de semana sobre técnicas de bioconstrução com materiais naturais.",
  price: 450.0,
  originalPrice: 550.0,
  image: "/api/placeholder/300/300",
  category: "Workshops",
  rating: 4.9,
  reviews: 34,
  inStock: true,
  isNew: true,
  tags: ["workshop", "bioconstrução", "prático"]
}];


const categories = [
"Todos",
"Kits",
"Sementes",
"Cursos",
"Livros",
"Ferramentas",
"Compostagem",
"Serviços",
"Fertilizantes",
"Workshops"];


const sortOptions = [
{ value: "popular", label: "Mais Populares" },
{ value: "price-low", label: "Menor Preço" },
{ value: "price-high", label: "Maior Preço" },
{ value: "rating", label: "Melhor Avaliados" },
{ value: "newest", label: "Mais Recentes" }];


function RegenMarketContent() {
  const { showToast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and sort products
  const filteredProducts = products.
  filter((product) => {
    if (selectedCategory !== "Todos" && product.category !== selectedCategory)
    return false;
    if (showOnlyInStock && !product.inStock) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1])
    return false;
    if (
    searchQuery &&
    !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !product.description.toLowerCase().includes(searchQuery.toLowerCase()))

    return false;
    return true;
  }).
  sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.reviews - a.reviews;
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return 0;
    }
  });

  const handleAddToCart = (product: any) => {
    showToast({
      type: "success",
      title: "Produto adicionado!",
      message: `${product.name} foi adicionado ao carrinho.`
    });
  };

  const handleBuyNow = (product: any) => {
    showToast({
      type: "info",
      title: "Redirecionando...",
      message: "Você será redirecionado para o checkout."
    });
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  };

  return (
    <div
      className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
      data-oid="o9_mrhn">

      <Header data-oid="5zz-npw" />

      <main className="pt-20" data-oid="jo:8-z:">
        {/* Hero Section with Featured Product */}
        <section
          className="py-16 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-neutral-dark-navy dark:to-black"
          data-oid="k8qt1x:">

          <div className="container-regen" data-oid="94txps3">
            <div className="text-center mb-12" data-oid="we7tvpr">
              <h1
                className="text-heading text-5xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                data-oid="epy6_mf">

                RegenMarket
              </h1>
              <p
                className="text-body text-xl text-neutral-medium-gray max-w-3xl mx-auto"
                data-oid="b2w2ziy">

                Produtos, cursos e serviços selecionados para sua jornada
                sustentável. Tudo que você precisa para viver de forma mais
                regenerativa.
              </p>
            </div>

            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              data-oid="-vgw:9p">

              <div className="order-2 lg:order-1" data-oid="6ld20uy">
                <Badge
                  variant="error"
                  size="sm"
                  className="mb-4"
                  data-oid="r1:imkd">

                  Oferta Especial - {featuredProduct.discount}% OFF
                </Badge>
                <h2
                  className="text-heading text-3xl lg:text-4xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                  data-oid="knlund6">

                  {featuredProduct.name}
                </h2>
                <p
                  className="text-body text-lg text-neutral-medium-gray mb-6"
                  data-oid="su811u7">

                  {featuredProduct.description}
                </p>

                <div
                  className="flex items-center gap-4 mb-6"
                  data-oid="xpdg2q1">

                  <div
                    className="flex items-baseline space-x-2"
                    data-oid="iyuy9dp">

                    <span
                      className="text-3xl font-bold text-success"
                      data-oid="o457j05">

                      {formatPrice(featuredProduct.price)}
                    </span>
                    {featuredProduct.originalPrice &&
                    <span
                      className="text-lg text-neutral-medium-gray line-through"
                      data-oid="2flauxp">

                        {formatPrice(featuredProduct.originalPrice)}
                      </span>
                    }
                  </div>
                  <div
                    className="flex items-center space-x-1 text-sm text-neutral-medium-gray"
                    data-oid="nyi-q50">

                    <svg
                      className="w-4 h-4 text-accent-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="cd7owvh">

                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        data-oid="_nz260." />

                    </svg>
                    <span data-oid=".in1p42">{featuredProduct.rating}</span>
                    <span data-oid="qx3bn0v">
                      ({featuredProduct.reviews} avaliações)
                    </span>
                  </div>
                </div>

                <div
                  className="flex flex-col sm:flex-row gap-4"
                  data-oid="ex.qiw2">

                  <Button
                    size="lg"
                    className="flex-1 sm:flex-none"
                    onClick={() => handleBuyNow(featuredProduct)}
                    data-oid="et8:b2v">

                    Comprar Agora
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => handleAddToCart(featuredProduct)}
                    data-oid="grno:v0">

                    Adicionar ao Carrinho
                  </Button>
                </div>
              </div>

              <div className="relative order-1 lg:order-2" data-oid="q0ghcwi">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="w-full rounded-regen-lg shadow-regen-hover"
                  data-oid="dchy.uz" />


                {featuredProduct.discount > 0 &&
                <div className="absolute top-4 right-4" data-oid="e3nzq4z">
                    <Badge variant="error" size="lg" data-oid="dc6dpf1">
                      -{featuredProduct.discount}%
                    </Badge>
                  </div>
                }
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section
          className="py-8 bg-white dark:bg-black border-b border-neutral-light-gray dark:border-neutral-medium-gray"
          data-oid="x1z_g9f">

          <div className="container-regen" data-oid="16ri5tp">
            <div
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6"
              data-oid="qs-g4oj">

              <div data-oid="hw00jaa">
                <h2
                  className="text-heading text-2xl font-bold text-neutral-dark-navy dark:text-white mb-2"
                  data-oid="m890gze">

                  Todos os Produtos
                </h2>
                <p
                  className="text-body text-neutral-medium-gray"
                  data-oid="55fcesi">

                  {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ?
                  "produto encontrado" :
                  "produtos encontrados"}
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-md w-full" data-oid="xysifoj">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-regen pl-10"
                  data-oid="z-nn2ty" />


                <svg
                  className="w-5 h-5 text-neutral-medium-gray absolute left-3 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid=".ivr2x.">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    data-oid="gck0lm7" />

                </svg>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
              data-oid="-65qol7">

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-regen"
                data-oid="1mbxgwy">

                {sortOptions.map((option) =>
                <option
                  key={option.value}
                  value={option.value}
                  data-oid=".u47gv6">

                    {option.label}
                  </option>
                )}
              </select>

              <div data-oid="e-1:qa3">
                <label
                  className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                  data-oid="5o8ceje">

                  Preço máximo: {formatPrice(priceRange[1])}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-full h-2 bg-neutral-light-gray rounded-lg appearance-none cursor-pointer"
                  data-oid="e-ior0m" />

              </div>

              <label
                className="flex items-center space-x-2 text-sm"
                data-oid="w_ow8fw">

                <input
                  type="checkbox"
                  checked={showOnlyInStock}
                  onChange={(e) => setShowOnlyInStock(e.target.checked)}
                  className="w-4 h-4 text-primary-300 bg-white border-neutral-light-gray rounded focus:ring-primary-300 focus:ring-2"
                  data-oid=".84_e2k" />


                <span
                  className="text-neutral-dark-navy dark:text-neutral-light-gray"
                  data-oid="0bkcutt">

                  Apenas em Estoque
                </span>
              </label>

              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedCategory("Todos");
                  setShowOnlyInStock(false);
                  setSearchQuery("");
                  setPriceRange([0, 1000]);
                  setSortBy("popular");
                }}
                data-oid="ljytsjk">

                Limpar Filtros
              </Button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2" data-oid="x2yp.wr">
              {categories.map((category) =>
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-regen text-sm font-medium transition-colors ${
                selectedCategory === category ?
                "bg-primary-300 text-white" :
                "bg-neutral-light-gray dark:bg-neutral-dark-navy text-neutral-medium-gray hover:text-primary-300"}`
                }
                data-oid="sp0u2w:">

                  {category}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12" data-oid="_z-1bax">
          <div className="container-regen" data-oid="qba3dha">
            {filteredProducts.length === 0 ?
            <div className="text-center py-16" data-oid="treuydx">
                <div
                className="w-24 h-24 bg-neutral-light-gray dark:bg-neutral-medium-gray rounded-full flex items-center justify-center mx-auto mb-6"
                data-oid="kb.07og">

                  <svg
                  className="w-12 h-12 text-neutral-medium-gray"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid=":recwxq">

                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    data-oid="olz1lvn" />

                  </svg>
                </div>
                <h3
                className="text-heading text-xl font-semibold text-neutral-dark-navy dark:text-white mb-2"
                data-oid="0sh-vj3">

                  Nenhum produto encontrado
                </h3>
                <p
                className="text-body text-neutral-medium-gray mb-6"
                data-oid="igje1ll">

                  Tente ajustar os filtros ou termos de busca
                </p>
                <Button
                onClick={() => {
                  setSelectedCategory("Todos");
                  setShowOnlyInStock(false);
                  setSearchQuery("");
                  setPriceRange([0, 1000]);
                }}
                data-oid="zgsy1ma">

                  Limpar Filtros
                </Button>
              </div> :

            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              data-oid="j:2_2ee">

                {filteredProducts.map((product) =>
              <div
                key={product.id}
                className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen hover:shadow-regen-hover transition-all duration-300 overflow-hidden group"
                data-oid="h--p:hs">

                    <div className="relative" data-oid="bkq..l5">
                      <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-oid="n-o8ybe" />


                      <div
                    className="absolute top-2 right-2 flex flex-col gap-1"
                    data-oid="lq4j:js">

                        {!product.inStock &&
                    <Badge variant="error" size="sm" data-oid="10vd83h">
                            Esgotado
                          </Badge>
                    }
                        {product.isNew &&
                    <Badge variant="info" size="sm" data-oid="hfl-z9z">
                            Novo
                          </Badge>
                    }
                        {product.originalPrice &&
                    <Badge variant="warning" size="sm" data-oid="kbp2ysk">
                            Oferta
                          </Badge>
                    }
                      </div>

                      {/* Hover overlay */}
                      <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    data-oid="s8nrg4r">

                        <div className="flex space-x-2" data-oid="h9h:.m9">
                          <Button
                        size="sm"
                        onClick={() => handleBuyNow(product)}
                        disabled={!product.inStock}
                        data-oid="-zdq29b">

                            {product.inStock ? "Comprar" : "Esgotado"}
                          </Button>
                          {product.inStock &&
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleAddToCart(product)}
                        data-oid="tzmyouz">

                              Carrinho
                            </Button>
                      }
                        </div>
                      </div>
                    </div>

                    <div className="p-4" data-oid="7lql89o">
                      <div className="mb-2" data-oid="x_x0rwj">
                        <Badge variant="primary" size="sm" data-oid="8uto5.2">
                          {product.category}
                        </Badge>
                      </div>

                      <h3
                    className="text-heading font-semibold text-lg mb-2 line-clamp-2"
                    data-oid=":4i6_kz">

                        {product.name}
                      </h3>

                      <p
                    className="text-body text-sm text-neutral-medium-gray mb-3 line-clamp-2"
                    data-oid="gjkyqj5">

                        {product.description}
                      </p>

                      <div
                    className="flex items-center justify-between text-xs text-neutral-medium-gray mb-3"
                    data-oid="tz.52p4">

                        <div
                      className="flex items-center space-x-1"
                      data-oid="3uzqswh">

                          <svg
                        className="w-3 h-3 text-accent-gold"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="2ouzb1b">

                            <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          data-oid="i7rfcgc" />

                          </svg>
                          <span data-oid="k80o0m9">{product.rating}</span>
                        </div>
                        <span data-oid=".2fc1v4">
                          ({product.reviews} avaliações)
                        </span>
                      </div>

                      <div
                    className="flex items-center justify-between"
                    data-oid="jib22u9">

                        <div
                      className="flex items-baseline space-x-2"
                      data-oid="dnzir6_">

                          <span
                        className="text-lg font-bold text-success"
                        data-oid="5n10czq">

                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice &&
                      <span
                        className="text-sm text-neutral-medium-gray line-through"
                        data-oid="sd3wq_w">

                              {formatPrice(product.originalPrice)}
                            </span>
                      }
                        </div>

                        <div className="flex space-x-1" data-oid="7z_9s:9">
                          <button
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                        className="p-2 hover:bg-neutral-light-gray dark:hover:bg-black rounded-regen transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        data-oid="vqx:dbt">

                            <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="owpz.-.">

                              <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z"
                            data-oid="6k_b.-s" />

                            </svg>
                          </button>
                          <button
                        className="p-2 hover:bg-neutral-light-gray dark:hover:bg-black rounded-regen transition-colors"
                        data-oid="gkv54mg">

                            <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="m-5txyb">

                              <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            data-oid="2lt9mvp" />

                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              )}
              </div>
            }
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-primary-300" data-oid="vzrm77.">
          <div className="container-regen text-center" data-oid="1lter-c">
            <h2
              className="text-heading text-4xl font-bold text-white mb-4"
              data-oid="cu1h6k.">

              Fique por Dentro das Novidades
            </h2>
            <p
              className="text-body text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
              data-oid="je47_wr">

              Receba ofertas exclusivas, lançamentos e dicas sustentáveis
              diretamente no seu email
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
              data-oid="_g6y64b">

              <input
                type="email"
                placeholder="Seu melhor email"
                className="input-regen flex-1"
                data-oid="-5tkgar" />


              <Button
                variant="secondary"
                className="bg-white text-primary-300 hover:bg-primary-50"
                data-oid="mn_fh58">

                Inscrever-se
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer data-oid="oes-:cb" />
    </div>);

}

export default function RegenMarketPage() {
  return (
    <ThemeProvider data-oid="tkjm:.6">
      <ToastProvider data-oid="zbijdtk">
        <RegenMarketContent data-oid="pe2yg43" />
      </ToastProvider>
    </ThemeProvider>);

}