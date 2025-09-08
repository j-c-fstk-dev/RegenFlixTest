"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Mock cart data
const initialCartItems = [
{
  id: "1",
  name: "Kit Compostagem Completo",
  description: "Kit completo para começar sua compostagem doméstica",
  price: 189.9,
  originalPrice: 249.9,
  quantity: 1,
  image: "/api/placeholder/120/120",
  category: "Kits",
  inStock: true,
  maxQuantity: 5
},
{
  id: "2",
  name: "Sementes Orgânicas - Mix Hortaliças",
  description: "Coleção de 12 variedades de sementes orgânicas certificadas",
  price: 45.9,
  originalPrice: null,
  quantity: 2,
  image: "/api/placeholder/120/120",
  category: "Sementes",
  inStock: true,
  maxQuantity: 10
},
{
  id: "3",
  name: "Curso: Permacultura Urbana",
  description:
  "Curso online completo sobre permacultura aplicada em ambientes urbanos",
  price: 197.0,
  originalPrice: 297.0,
  quantity: 1,
  image: "/api/placeholder/120/120",
  category: "Cursos",
  inStock: true,
  maxQuantity: 1 // Digital product
}];


// Mock recommended products
const recommendedProducts = [
{
  id: "rec1",
  name: "Biofertilizante Concentrado",
  price: 34.9,
  image: "/api/placeholder/150/150",
  rating: 4.7
},
{
  id: "rec2",
  name: "Kit Ferramentas de Jardim",
  price: 129.9,
  originalPrice: 159.9,
  image: "/api/placeholder/150/150",
  rating: 4.6
},
{
  id: "rec3",
  name: "Livro: Agricultura Regenerativa",
  price: 89.9,
  image: "/api/placeholder/150/150",
  rating: 4.8
}];


function CartContent() {
  const { showToast } = useToast();
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
  } | null>(null);

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((items) =>
    items.map((item) => {
      if (item.id === id) {
        const quantity = Math.min(newQuantity, item.maxQuantity);
        return { ...item, quantity };
      }
      return item;
    })
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    showToast({
      type: "success",
      title: "Item removido",
      message: "O produto foi removido do seu carrinho."
    });
  };

  const applyCoupon = () => {
    // Mock coupon validation
    const validCoupons = {
      REGEN10: 10,
      SUSTENTAVEL15: 15,
      PRIMEIRA20: 20
    };

    if (validCoupons[couponCode as keyof typeof validCoupons]) {
      const discount = validCoupons[couponCode as keyof typeof validCoupons];
      setAppliedCoupon({ code: couponCode, discount });
      showToast({
        type: "success",
        title: "Cupom aplicado!",
        message: `Desconto de ${discount}% aplicado com sucesso.`
      });
      setCouponCode("");
    } else {
      showToast({
        type: "error",
        title: "Cupom inválido",
        message: "O código do cupom não é válido ou expirou."
      });
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast({
      type: "info",
      title: "Cupom removido",
      message: "O desconto foi removido do seu pedido."
    });
  };

  const addRecommendedProduct = (product: any) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      setCartItems((items) => [
      ...items,
      {
        ...product,
        quantity: 1,
        description: "Produto recomendado",
        inStock: true,
        maxQuantity: 10
      }]
      );
    }
    showToast({
      type: "success",
      title: "Produto adicionado!",
      message: `${product.name} foi adicionado ao carrinho.`
    });
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const savings = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + (item.originalPrice - item.price) * item.quantity;
    }
    return sum;
  }, 0);
  const couponDiscount = appliedCoupon ?
  subtotal * appliedCoupon.discount / 100 :
  0;
  const shipping = subtotal > 150 ? 0 : 15.9; // Free shipping over R$ 150
  const total = subtotal - couponDiscount + shipping;

  if (cartItems.length === 0) {
    return (
      <div
        className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
        data-oid=".idvo92">

        <Header data-oid="ykcae_s" />

        <main className="pt-20" data-oid="bf_63gp">
          <div className="container-regen py-16" data-oid="x2r71t2">
            <div className="text-center" data-oid="kuy9gfb">
              <div
                className="w-24 h-24 bg-neutral-light-gray dark:bg-neutral-medium-gray rounded-full flex items-center justify-center mx-auto mb-6"
                data-oid="4fo3ozf">

                <svg
                  className="w-12 h-12 text-neutral-medium-gray"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="dnoa6mp">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z"
                    data-oid="n.wd78r" />

                </svg>
              </div>
              <h1
                className="text-heading text-3xl font-bold text-neutral-dark-navy dark:text-white mb-4"
                data-oid="67.ga-x">

                Seu carrinho está vazio
              </h1>
              <p
                className="text-body text-neutral-medium-gray mb-8"
                data-oid="l0m0ew3">

                Que tal explorar nossos produtos sustentáveis?
              </p>
              <Link href="/loja" data-oid="ip0p1w9">
                <Button size="lg" data-oid="i8gfsg0">
                  Explorar Produtos
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer data-oid="ch8fax:" />
      </div>);

  }

  return (
    <div
      className="min-h-screen bg-neutral-cream dark:bg-neutral-dark-navy"
      data-oid="wrosjpg">

      <Header data-oid="o48pyai" />

      <main className="pt-20" data-oid="vj41u.4">
        <div className="container-regen py-8" data-oid="25rko20">
          <div
            className="flex items-center justify-between mb-8"
            data-oid="l87d9mi">

            <h1
              className="text-heading text-3xl font-bold text-neutral-dark-navy dark:text-white"
              data-oid="iyvxrxs">

              Carrinho de Compras
            </h1>
            <Link href="/loja" data-oid="4ustwku">
              <Button variant="secondary" data-oid="xdsemm5">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="_e7.vfq">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                    data-oid="1r7p7b3" />

                </svg>
                Continuar Comprando
              </Button>
            </Link>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            data-oid="w6d9ww9">

            {/* Cart Items */}
            <div className="lg:col-span-2" data-oid="ekl88:d">
              <div
                className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen overflow-hidden"
                data-oid="20:vzpd">

                <div
                  className="p-6 border-b border-neutral-light-gray dark:border-neutral-medium-gray"
                  data-oid="ghtkkob">

                  <h2
                    className="text-heading text-xl font-semibold"
                    data-oid="comc.ed">

                    Itens no Carrinho ({cartItems.length})
                  </h2>
                </div>

                <div
                  className="divide-y divide-neutral-light-gray dark:divide-neutral-medium-gray"
                  data-oid="y:wjb_f">

                  {cartItems.map((item) =>
                  <div key={item.id} className="p-6" data-oid=":i22gpx">
                      <div
                      className="flex items-start space-x-4"
                      data-oid="9:nbnze">

                        <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-regen flex-shrink-0"
                        data-oid="s3jxnz3" />


                        <div className="flex-1 min-w-0" data-oid="z:8r.8v">
                          <div
                          className="flex items-start justify-between"
                          data-oid="pnbknak">

                            <div className="flex-1" data-oid="sn-xyyd">
                              <h3
                              className="text-heading font-semibold text-lg mb-1"
                              data-oid="-cmete6">

                                {item.name}
                              </h3>
                              <p
                              className="text-body text-sm text-neutral-medium-gray mb-2"
                              data-oid="6:d61tt">

                                {item.description}
                              </p>
                              <Badge
                              variant="primary"
                              size="sm"
                              data-oid="xe.1olg">

                                {item.category}
                              </Badge>
                            </div>

                            <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-neutral-medium-gray hover:text-error transition-colors"
                            data-oid="ey64ht_">

                              <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              data-oid="9qc:0:l">

                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                data-oid="sjw96at" />

                              </svg>
                            </button>
                          </div>

                          <div
                          className="flex items-center justify-between mt-4"
                          data-oid="3mep-70">

                            <div
                            className="flex items-center space-x-3"
                            data-oid="7le1sz-">

                              <button
                              onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                              className="w-8 h-8 rounded-regen border border-neutral-light-gray dark:border-neutral-medium-gray flex items-center justify-center hover:bg-neutral-light-gray dark:hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              data-oid="7:k.o:v">

                                <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="x1.a6x4">

                                  <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M20 12H4"
                                  data-oid="6xtv4n_" />

                                </svg>
                              </button>

                              <span
                              className="text-heading font-medium min-w-[2rem] text-center"
                              data-oid="p9b3h-u">

                                {item.quantity}
                              </span>

                              <button
                              onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                              }
                              disabled={item.quantity >= item.maxQuantity}
                              className="w-8 h-8 rounded-regen border border-neutral-light-gray dark:border-neutral-medium-gray flex items-center justify-center hover:bg-neutral-light-gray dark:hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              data-oid="7pa.7yo">

                                <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="can3h5m">

                                  <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4v16m8-8H4"
                                  data-oid="2qjevxk" />

                                </svg>
                              </button>
                            </div>

                            <div className="text-right" data-oid="yrzue:s">
                              <div
                              className="flex items-center space-x-2"
                              data-oid="olxv969">

                                <span
                                className="text-lg font-bold text-success"
                                data-oid="8s_45zg">

                                  {formatPrice(item.price * item.quantity)}
                                </span>
                                {item.originalPrice &&
                              <span
                                className="text-sm text-neutral-medium-gray line-through"
                                data-oid=".t8kok3">

                                    {formatPrice(
                                  item.originalPrice * item.quantity
                                )}
                                  </span>
                              }
                              </div>
                              <div
                              className="text-xs text-neutral-medium-gray"
                              data-oid="b925jt8">

                                {formatPrice(item.price)} cada
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Recommended Products */}
              <div
                className="mt-8 bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-6"
                data-oid="-w1r4n9">

                <h3
                  className="text-heading text-xl font-semibold mb-4"
                  data-oid="fvte_js">

                  Você também pode gostar
                </h3>
                <div
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                  data-oid="9_rgjdq">

                  {recommendedProducts.map((product) =>
                  <div
                    key={product.id}
                    className="border border-neutral-light-gray dark:border-neutral-medium-gray rounded-regen-lg p-4"
                    data-oid="6-6_zw6">

                      <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded-regen mb-3"
                      data-oid="4ccld18" />


                      <h4
                      className="text-heading font-medium text-sm mb-2 line-clamp-2"
                      data-oid="u40zsi_">

                        {product.name}
                      </h4>
                      <div
                      className="flex items-center justify-between mb-3"
                      data-oid="1y9amx3">

                        <div
                        className="flex items-baseline space-x-1"
                        data-oid="fsvbqqb">

                          <span
                          className="text-success font-bold"
                          data-oid="028hjjw">

                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice &&
                        <span
                          className="text-xs text-neutral-medium-gray line-through"
                          data-oid=":73e0la">

                              {formatPrice(product.originalPrice)}
                            </span>
                        }
                        </div>
                        <div
                        className="flex items-center space-x-1 text-xs"
                        data-oid="d-zqh2c">

                          <svg
                          className="w-3 h-3 text-accent-gold"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="ds32lfl">

                            <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            data-oid="zgc4v6f" />

                          </svg>
                          <span data-oid="_z7olew">{product.rating}</span>
                        </div>
                      </div>
                      <Button
                      size="sm"
                      className="w-full"
                      onClick={() => addRecommendedProduct(product)}
                      data-oid="v1-hwj0">

                        Adicionar
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1" data-oid="zjoievn">
              <div className="sticky top-24" data-oid="rmnnv-q">
                <div
                  className="bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen p-6"
                  data-oid=".7v6clm">

                  <h2
                    className="text-heading text-xl font-semibold mb-6"
                    data-oid="yt_r_o:">

                    Resumo do Pedido
                  </h2>

                  {/* Coupon Code */}
                  <div className="mb-6" data-oid="pzwm.os">
                    <label
                      className="block text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray mb-2"
                      data-oid="mzfymw_">

                      Cupom de Desconto
                    </label>
                    {appliedCoupon ?
                    <div
                      className="flex items-center justify-between p-3 bg-success/10 border border-success rounded-regen"
                      data-oid="m-sgj-3">

                        <div data-oid="3c9hg5w">
                          <span
                          className="text-sm font-medium text-success"
                          data-oid="b6sfs1j">

                            {appliedCoupon.code}
                          </span>
                          <span
                          className="text-xs text-neutral-medium-gray ml-2"
                          data-oid="lzvao.t">

                            -{appliedCoupon.discount}%
                          </span>
                        </div>
                        <button
                        onClick={removeCoupon}
                        className="text-success hover:text-success/80 transition-colors"
                        data-oid="exsxr6y">

                          <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid=":y.k344">

                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                            data-oid="47lwqkg" />

                          </svg>
                        </button>
                      </div> :

                    <div className="flex space-x-2" data-oid="j-1w4tk">
                        <input
                        type="text"
                        value={couponCode}
                        onChange={(e) =>
                        setCouponCode(e.target.value.toUpperCase())
                        }
                        placeholder="Digite o código"
                        className="input-regen flex-1"
                        data-oid="p1besrr" />


                        <Button
                        size="sm"
                        onClick={applyCoupon}
                        disabled={!couponCode.trim()}
                        data-oid="hqjagjh">

                          Aplicar
                        </Button>
                      </div>
                    }
                  </div>

                  {/* Order Details */}
                  <div className="space-y-3 mb-6" data-oid="gpogrqx">
                    <div
                      className="flex items-center justify-between"
                      data-oid="f05rla5">

                      <span className="text-body" data-oid="k.sx1kl">
                        Subtotal
                      </span>
                      <span className="font-medium" data-oid="2ysom:h">
                        {formatPrice(subtotal)}
                      </span>
                    </div>

                    {savings > 0 &&
                    <div
                      className="flex items-center justify-between text-success"
                      data-oid="96.nr7e">

                        <span className="text-body" data-oid="r33ansz">
                          Economia
                        </span>
                        <span className="font-medium" data-oid="t.6ub_i">
                          -{formatPrice(savings)}
                        </span>
                      </div>
                    }

                    {appliedCoupon &&
                    <div
                      className="flex items-center justify-between text-success"
                      data-oid=":gfw.28">

                        <span className="text-body" data-oid=".drh3d_">
                          Desconto ({appliedCoupon.discount}%)
                        </span>
                        <span className="font-medium" data-oid="4:5vmg8">
                          -{formatPrice(couponDiscount)}
                        </span>
                      </div>
                    }

                    <div
                      className="flex items-center justify-between"
                      data-oid="93vni56">

                      <span className="text-body" data-oid="q.c.ga9">
                        Frete
                      </span>
                      <span className="font-medium" data-oid="-8q14rn">
                        {shipping === 0 ?
                        <span className="text-success" data-oid="24c:o80">
                            Grátis
                          </span> :

                        formatPrice(shipping)
                        }
                      </span>
                    </div>

                    {shipping > 0 &&
                    <div
                      className="text-xs text-neutral-medium-gray"
                      data-oid="mf_fkuy">

                        Frete grátis em compras acima de {formatPrice(150)}
                      </div>
                    }
                  </div>

                  <div
                    className="border-t border-neutral-light-gray dark:border-neutral-medium-gray pt-4 mb-6"
                    data-oid="9dhx8_r">

                    <div
                      className="flex items-center justify-between"
                      data-oid="fskgwtu">

                      <span
                        className="text-heading text-lg font-semibold"
                        data-oid="f5.i-46">

                        Total
                      </span>
                      <span
                        className="text-heading text-xl font-bold text-success"
                        data-oid="id-:dwi">

                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>

                  <Link href="/checkout" data-oid="gq2wfi7">
                    <Button
                      size="lg"
                      className="w-full mb-4"
                      data-oid="a3z9m-u">

                      Finalizar Compra
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="ph5053x">

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                          data-oid="sf60h_r" />

                      </svg>
                    </Button>
                  </Link>

                  <div className="text-center" data-oid="6a0yi5-">
                    <div
                      className="flex items-center justify-center space-x-2 text-sm text-neutral-medium-gray mb-2"
                      data-oid="lmpt2mk">

                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="qa7s4ow">

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          data-oid=":m.m8.s" />

                      </svg>
                      <span data-oid="uqn-f1_">Compra 100% segura</span>
                    </div>
                    <div
                      className="flex items-center justify-center space-x-4 text-xs text-neutral-medium-gray"
                      data-oid="j5zoyw4">

                      <span data-oid="m_atjec">🔒 SSL</span>
                      <span data-oid="irrncn-">💳 Pix, Cartão</span>
                      <span data-oid="5n5_1id">📦 Entrega rápida</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer data-oid="lk4m33e" />
    </div>);

}

export default function CartPage() {
  return (
    <ThemeProvider data-oid="ammrhvr">
      <ToastProvider data-oid="h42yngg">
        <CartContent data-oid=".nxmh1c" />
      </ToastProvider>
    </ThemeProvider>);

}