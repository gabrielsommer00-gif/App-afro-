import { useEffect, useMemo, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { AfroHairDetailModal } from './components/AfroHairDetailModal';
import { AfroHairSection } from './components/AfroHairSection';
import { CartDrawer } from './components/CartDrawer';
import { CategoriesSection } from './components/CategoriesSection';
import { ChannelNoticeModal, PendingChannelNotice } from './components/ChannelNoticeModal';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchDrawer } from './components/SearchDrawer';
import { ServicesSection } from './components/ServicesSection';
import { TextileDivider } from './components/TextileDivider';
import { buildWhatsAppLink } from './config/brand';
import { AfroHairService, CartItem, Product, ProductColorVariant } from './types/catalog';

export default function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('todos');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [activeAfroHairService, setActiveAfroHairService] = useState<AfroHairService | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [channelNotice, setChannelNotice] = useState<PendingChannelNotice | null>(null);

  const hasAnyOverlayOpen = Boolean(
    channelNotice ||
      activeProduct ||
      activeAfroHairService ||
      isCartOpen ||
      isSearchOpen ||
      isMobileMenuOpen
  );

  useEffect(() => {
    if (!hasAnyOverlayOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [hasAnyOverlayOpen]);

  useEffect(() => {
    if (!hasAnyOverlayOpen) return;

    const handleEscapeTopLayer = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      // Fecha apenas a camada superior ativa por ordem estrita de prioridade
      if (channelNotice) {
        setChannelNotice(null);
      } else if (activeProduct) {
        setActiveProduct(null);
      } else if (activeAfroHairService) {
        setActiveAfroHairService(null);
      } else if (isCartOpen) {
        setIsCartOpen(false);
      } else if (isSearchOpen) {
        setIsSearchOpen(false);
      } else if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscapeTopLayer);
    return () => window.removeEventListener('keydown', handleEscapeTopLayer);
  }, [
    hasAnyOverlayOpen,
    channelNotice,
    activeProduct,
    activeAfroHairService,
    isCartOpen,
    isSearchOpen,
    isMobileMenuOpen,
  ]);

  const totalCartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const handleAddToCart = (
    product: Product,
    size?: string,
    color?: ProductColorVariant
  ) => {
    const cartItemId = `${product.id}__${size ?? 'default'}__${color?.id ?? 'default'}`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          product,
          selectedSize: size,
          selectedColor: color,
          quantity: 1,
        },
      ];
    });
  };

  const handleUpdateCartQuantity = (cartItemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveCartItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleWhatsAppTrigger = (
    message = 'Olá! Gostaria de falar com a equipe da Cris Vieira Moda Africana.'
  ) => {
    const directUrl = buildWhatsAppLink(message);
    if (directUrl) {
      const anchor = document.createElement('a');
      anchor.href = directUrl;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.click();
      return;
    }
    setChannelNotice({ type: 'whatsapp', message });
  };

  const handleServiceInquiry = (serviceTitle: string) => {
    handleWhatsAppTrigger(
      `Olá! Gostaria de obter informações sobre atendimento na área de serviços (${serviceTitle}) da Cris Vieira Moda Africana.`
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3EB] text-[#2B1D16]">
      <Header
        cartCount={totalCartCount}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuOpenChange={setIsMobileMenuOpen}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onWhatsAppClick={handleWhatsAppTrigger}
      />

      <main className="flex-1">
        <Hero />
        <TextileDivider variant="bridge" />
        <CategoriesSection
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={setSelectedCategoryId}
        />
        <TextileDivider variant="bridge" />
        <FeaturedProducts
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={setSelectedCategoryId}
          onViewProduct={setActiveProduct}
        />
        <TextileDivider variant="bridge" />
        <AfroHairSection
          onSelectService={setActiveAfroHairService}
          onWhatsAppInquiry={(msg) => handleWhatsAppTrigger(msg)}
        />
        <TextileDivider variant="bridge" tone="dark-bottom" />
        <ServicesSection onServiceInquiry={handleServiceInquiry} />
        <TextileDivider variant="bridge" tone="dark-top" />
        <AboutSection />
        <InstagramSection />
        <TextileDivider variant="bridge" />
        <LocationSection
          onDirectionsPending={() => setChannelNotice({ type: 'location' })}
        />
      </main>

      <Footer onWhatsAppClick={handleWhatsAppTrigger} />

      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onAddToCart={handleAddToCart}
        onWhatsAppInquiry={(msg) => handleWhatsAppTrigger(msg)}
      />

      <AfroHairDetailModal
        service={activeAfroHairService}
        onClose={() => setActiveAfroHairService(null)}
        onWhatsAppInquiry={(msg) => handleWhatsAppTrigger(msg)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onWhatsAppCheckoutPreview={(msg) => handleWhatsAppTrigger(msg)}
      />

      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCategory={setSelectedCategoryId}
        onSelectProduct={setActiveProduct}
        onSelectAfroHairService={setActiveAfroHairService}
      />

      <ChannelNoticeModal
        notice={channelNotice}
        onClose={() => setChannelNotice(null)}
      />
    </div>
  );
}
