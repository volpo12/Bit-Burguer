/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  Zap, 
  Truck, 
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { useState, useEffect } from 'react';

const MENU_CATEGORIES = [
  { id: 'artesanais', name: 'Artesanais' },
  { id: 'classicos', name: 'Clássicos' },
  { id: 'hotdogs', name: 'Hot Dogs' },
  { id: 'crepes', name: 'Crepes' },
  { id: 'acai', name: 'Açaí' },
  { id: 'sides', name: 'Extras' },
  { id: 'drinks', name: 'Bebidas' },
];

const MENU_ITEMS = [
  // --- ARTESANAIS ---
  {
    id: 'a1',
    category: 'artesanais',
    name: 'BIT-ANGUS',
    description: 'Pão australiano, hambúrguer angus de 150g, queijo cheddar, bacon, cebola caramelizada e tomate. Combo: R$ 48,00',
    price: 'R$ 38,59',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a2',
    category: 'artesanais',
    name: 'BIT-MONSTRO',
    description: 'Pão australiano, hambúrguer angus de 200g, queijo cheddar e bacon. Combo: R$ 51,00',
    price: 'R$ 41,59',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a3',
    category: 'artesanais',
    name: 'Duplo Cheddar',
    description: 'Pão brioche, 02 blends artesanais de 130g, cheddar e salada. Combo: R$ 43,00',
    price: 'R$ 32,79',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a4',
    category: 'artesanais',
    name: 'Big Brutão',
    description: 'Pão brioche, 02 blends de 130g, queijo mussarela, bacon, ovo, cebola e salada. Combo: R$ 46,00',
    price: 'R$ 35,79',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a5',
    category: 'artesanais',
    name: 'X-Gaúcho',
    description: 'Pão brioche, blend de 130g, queijo mussarela, ovo, bacon e salada. Combo: R$ 41,00',
    price: 'R$ 31,79',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a6',
    category: 'artesanais',
    name: 'Cheddar Gourmet',
    description: 'Pão brioche, blend de 130g, cheddar, bacon, cebola caramelizada e salada. Combo: R$ 41,00',
    price: 'R$ 31,79',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a7',
    category: 'artesanais',
    name: 'Cheddar Bacon',
    description: 'Pão brioche, blend de 130g, bacon, cheddar e salada. Combo: R$ 40,00',
    price: 'R$ 30,79',
    image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a8',
    category: 'artesanais',
    name: 'Triplo Cheddar',
    description: 'Pão brioche, 03 blends de 130g, cheddar e salada. Combo: R$ 47,00',
    price: 'R$ 37,79',
    image: 'https://images.unsplash.com/photo-1547584385-8cd4275b28ce?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a9',
    category: 'artesanais',
    name: 'X-Candango',
    description: 'Pão brioche, blend de 130g, queijo mussarela, bacon e salada. Combo: R$ 36,00',
    price: 'R$ 26,79',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a10',
    category: 'artesanais',
    name: 'Oklahoma',
    description: 'Pão brioche, blend de 130g, queijo mussarela e cebola caramelizada. Combo: R$ 31,00',
    price: 'R$ 21,79',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a11',
    category: 'artesanais',
    name: 'Filezão',
    description: 'Pão brioche, filé mignon, queijo mussarela, bacon, milho salsicha, presunto, ovo e salada. Combo: R$ 47,00',
    price: 'R$ 37,79',
    image: 'https://images.unsplash.com/photo-1603064752734-4c489251071b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a12',
    category: 'artesanais',
    name: 'Filé Bacon',
    description: 'Pão brioche, filé mignon, queijo mussarela, bacon e salada. Combo: R$ 45,00',
    price: 'R$ 35,79',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a13',
    category: 'artesanais',
    name: 'Filé Gullas',
    description: 'Pão brioche, filé mignon, queijo mussarela, bacon, ovo e salada. Combo: R$ 46,00',
    price: 'R$ 36,79',
    image: 'https://images.unsplash.com/photo-1547584385-8cd4275b28ce?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a14',
    category: 'artesanais',
    name: 'X-Filé',
    description: 'Pão brioche, filé mignon e queijo mussarela. Combo: R$ 35,00',
    price: 'R$ 25,79',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a15',
    category: 'artesanais',
    name: 'Galo de Briga',
    description: 'Pão brioche, frango, queijo mussarela, milho, salsicha, presunto, bacon, ovo e salada. Combo: R$ 38,00',
    price: 'R$ 28,79',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d029cb5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a16',
    category: 'artesanais',
    name: 'Frango Atômico',
    description: 'Pão brioche, frango, queijo mussarela, salsicha, presunto, ovo e salada. Combo: R$ 36,00',
    price: 'R$ 26,79',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a17',
    category: 'artesanais',
    name: 'Big Frango',
    description: 'Pão brioche, frango, queijo mussarela, ovo, bacon e salada. Combo: R$ 36,00',
    price: 'R$ 26,79',
    image: 'https://images.unsplash.com/photo-1626776878841-db49658e8071?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a18',
    category: 'artesanais',
    name: 'Frango Salada',
    description: 'Pão brioche, frango, queijo mussarela e salada. Combo: R$ 31,00',
    price: 'R$ 21,79',
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&q=80&w=800'
  },

  // --- CLÁSSICOS ---
  {
    id: 'c1',
    category: 'classicos',
    name: 'Bomba Atômica',
    description: 'Pão brioche, hambúrguer, queijo, salsicha, presunto, ovo e salada + Copo de Coca. Combo: R$ 25,00',
    price: 'R$ 16,00',
    tag: 'Destaque',
    image: 'https://images.unsplash.com/photo-1547584385-8cd4275b28ce?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c2',
    category: 'classicos',
    name: 'Big Gullas',
    description: 'Pão brioche, 2 hambúrgueres, queijo, presunto, ovo, bacon e salada. Combo: R$ 31,00',
    price: 'R$ 22,00',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c3',
    category: 'classicos',
    name: 'X-Tudo',
    description: 'Pão brioche, hambúrguer, queijo, presunto, salsicha, ovo, bacon, milho e salada. Combo: R$ 30,00',
    price: 'R$ 21,00',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c4',
    category: 'classicos',
    name: 'Goianão',
    description: 'Pão brioche, hambúrguer, queijo, bacon e salada. Combo: R$ 27,00',
    price: 'R$ 18,00',
    image: 'https://images.unsplash.com/photo-1603064752734-4c489251071b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c5',
    category: 'classicos',
    name: 'Tropical',
    description: 'Pão brioche, hambúrguer, queijo, ovo e salada. Combo: R$ 25,00',
    price: 'R$ 14,00',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c6',
    category: 'classicos',
    name: 'X-Bacon Duplo',
    description: 'Pão brioche, 2 hambúrgueres, duplo de queijo e bacon. Combo: R$ 35,00',
    price: 'R$ 24,00',
    image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c7',
    category: 'classicos',
    name: 'X-Salada',
    description: 'Pão brioche, hambúrguer, queijo e salada. Combo: R$ 23,00',
    price: 'R$ 14,00',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c8',
    category: 'classicos',
    name: 'X-Burger',
    description: 'Pão brioche, hambúrguer e queijo. Combo: R$ 24,00',
    price: 'R$ 13,00',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800'
  },

  // --- HOT DOGS ---
  {
    id: 'h1',
    category: 'hotdogs',
    name: 'Dog na Chapa',
    description: 'Pão de leite ninho, salsicha, queijo, presunto, milho e batata palha. Combo: R$ 26,00',
    price: 'R$ 17,00',
    image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'h2',
    category: 'hotdogs',
    name: 'Hot-Bacon',
    description: 'Pão de leite ninho, salsicha, queijo, presunto, milho, batata palha e bacon. Combo: R$ 28,00',
    price: 'R$ 19,00',
    image: 'https://images.unsplash.com/photo-1591216503881-229ef58a2f4c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'h3',
    category: 'hotdogs',
    name: 'Hot-Frango',
    description: 'Pão de leite ninho, frango desfiado, catupiry, milho, batata palha. Combo: R$ 32,00',
    price: 'R$ 23,00',
    image: 'https://images.unsplash.com/photo-1532768350204-7bc6f24687bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'h4',
    category: 'hotdogs',
    name: 'Hot-Bit',
    description: 'Pão, carne de sol desfiada, queijo mussarela, milho e batata palha. Combo: R$ 35,00',
    price: 'R$ 26,00',
    tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800'
  },

  // --- CREPES ---
  {
    id: 'cr1',
    category: 'crepes',
    name: 'Crepe Frango & Catupiry',
    description: 'Frango, milho, catupiry e orégano.',
    price: 'R$ 27,90',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cr2',
    category: 'crepes',
    name: 'Crepe Frango e Bacon',
    description: 'Frango, tomate, bacon, milho, queijo e orégano.',
    price: 'R$ 29,90',
    image: 'https://images.unsplash.com/photo-1541288097918-86ed21174006?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cr3',
    category: 'crepes',
    name: 'Crepe Presunto & Queijo',
    description: 'Presunto, queijo, bacon e milho.',
    price: 'R$ 25,90',
    image: 'https://images.unsplash.com/photo-1621303848335-8fac0c80d046?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cr4',
    category: 'crepes',
    name: 'Crepe Carne de Sol',
    description: 'Carne de sol desfiada, catupiry e bacon.',
    price: 'R$ 31,90',
    image: 'https://images.unsplash.com/photo-1541288097918-86ed21174006?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cr5',
    category: 'crepes',
    name: 'Crepe Chocolate & Banana',
    description: 'Crepe doce com chocolate, banana e queijo mussarela.',
    price: 'R$ 28,90',
    tag: 'Sobremesa',
    image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5855?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cr6',
    category: 'crepes',
    name: 'Crepe Banana e Canela',
    description: 'Banana com canela e queijo mussarela.',
    price: 'R$ 25,90',
    image: 'https://images.unsplash.com/photo-1533550824982-f67d4fc8654c?auto=format&fit=crop&q=80&w=800'
  },

  // --- AÇAÍ ---
  {
    id: 'ac1',
    category: 'acai',
    name: 'Açaí na Tigela (500ml)',
    description: 'Açaí cremoso servido na tigela.',
    price: 'R$ 24,00',
    image: 'https://images.unsplash.com/photo-1594950159473-b3f572706034?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ac2',
    category: 'acai',
    name: 'Vitamina de Açaí (500ml)',
    description: 'Vitamina batida na hora.',
    price: 'R$ 19,00',
    image: 'https://images.unsplash.com/photo-1623065426102-30a21bd36149?auto=format&fit=crop&q=80&w=800'
  },

  // --- SIDES ---
  {
    id: 's1',
    category: 'sides',
    name: 'Batata Cheddar e Bacon',
    description: 'Batata frita coberta com cheddar e bacon crocante.',
    price: 'R$ 30,00',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's2',
    category: 'sides',
    name: 'Anéis de Cebola (G)',
    description: 'Porção grande de anéis de cebola crocantes.',
    price: 'R$ 32,00',
    image: 'https://images.unsplash.com/photo-1639024471283-035188835118?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's3',
    category: 'sides',
    name: 'Mini Chicken (G)',
    description: 'Porção grande de mini chicken crocantes.',
    price: 'R$ 34,00',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's4',
    category: 'sides',
    name: 'Batata Palito Pequena',
    description: 'A porção clássica que todo mundo adora.',
    price: 'R$ 11,00',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&q=80&w=800'
  },

  // --- DRINKS ---
  {
    id: 'd1',
    category: 'drinks',
    name: 'Milk Shake (500ml)',
    description: 'Milk shake geladinho vários sabores.',
    price: 'R$ 18,99',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'd2',
    category: 'drinks',
    name: 'Coca-Cola 2L',
    description: 'Refrigerante garrafa 2 litros.',
    price: 'R$ 15,00',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'd3',
    category: 'drinks',
    name: 'Heineken Long Neck',
    description: 'Cerveja long neck bem gelada.',
    price: 'R$ 11,99',
    image: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?auto=format&fit=crop&q=80&w=800'
  },
];

const REVIEWS = [
  {
    name: 'Ana Souza',
    rating: 5,
    text: 'Atendimento excelente, lanche gostoso, em boa porção e a preço justo.',
    date: '18 dias atrás'
  },
  {
    name: 'Carlos Lima',
    rating: 5,
    text: 'Sanduíches e hambúrgueres muito saborosos, e com excelentes promoções de combos.',
    date: 'Mês passado'
  },
  {
    name: 'Mariana Duarte',
    rating: 4,
    text: 'Ambiente muito bacana e o Burger com bacon é sensacional. Recomendo!',
    date: '2 meses atrás'
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('artesanais');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-bg-dark/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center font-display font-bold text-xl">B</div>
            <span className="font-display font-bold text-xl tracking-tighter uppercase sm:block hidden">
              BIT <span className="text-brand">BURGER</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Início', 'Cardápio', 'Avaliações', 'Contato'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace('í', 'i'))}
                className="text-sm font-medium hover:text-brand transition-colors uppercase tracking-wider"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/5561996527949" 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand hover:bg-brand-light text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">PEÇA AGORA</span>
            </a>
            <button 
              className="md:hidden text-white" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg-dark pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {['Início', 'Cardápio', 'Avaliações', 'Contato'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().replace('í', 'i'))}
                  className="text-2xl font-display font-bold hover:text-brand transition-colors uppercase"
                >
                  {item}
                </button>
              ))}
              <div className="mt-8 flex gap-6">
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://wa.me/5561996527949" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-brand transition-colors">
                  <Phone size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/80 to-transparent z-10" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20" 
               style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
          
          {/* Decorative Grid */}
          <div className="absolute inset-0 z-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <img 
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=2000" 
            alt="Delicious burger"
            className="w-full h-full object-cover grayscale-[20%] brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4 bg-brand/20 border border-brand/30 px-3 py-1 rounded-full w-fit">
              <Zap size={14} className="text-brand fill-brand" />
              <span className="text-xs font-bold text-brand uppercase tracking-widest">O Melhor do Cruzeiro</span>
            </div>
            <h1 className="font-display font-bold text-6xl md:text-8xl leading-[0.9] uppercase tracking-tighter mb-6">
              SABOR QUE <br /> 
              <span className="text-brand text-glow">CONECTA</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-lg leading-relaxed">
              Hambúrgueres artesanais feitos com paixão, ingredientes frescos e aquele toque especial que você só encontra no Cruzeiro.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollTo('cardapio')}
                className="bg-brand hover:bg-brand-light text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all group"
              >
                VER CARDÁPIO
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('contato')}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all"
              >
                ONDE ESTAMOS
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 opacity-30"
          >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-10 bg-white" />
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-bg-offset py-12 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <ShoppingBag size={32} />, title: 'Refeição no local', desc: 'Ambiente descontraído para curtir com amigos.' },
              { icon: <Truck size={32} />, title: 'Para Viagem', desc: 'Peça e retire seu lanche quentinho em minutos.' },
              { icon: <Zap size={32} />, title: 'Entrega Rápida', desc: 'Levamos o melhor burger até o seu conforto.' },
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-4">
                <div className="text-brand bg-brand/10 p-3 rounded-2xl">{feature.icon}</div>
                <div>
                  <h3 className="font-display font-bold text-lg uppercase">{feature.title}</h3>
                  <p className="text-sm text-white/50">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="cardapio" className="py-24 bg-bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight mb-4">
              NOSSO <span className="text-brand">CARDÁPIO</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Dos clássicos aos autorais, cada mordida é uma nova experiência. Escolha sua categoria favorita.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all border ${
                  activeCategory === cat.id 
                    ? 'bg-brand border-brand text-white shadow-lg shadow-brand/20' 
                    : 'bg-white/5 border-white/10 text-white/70 hover:border-brand/50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-bg-offset rounded-3xl overflow-hidden group border border-white/5 hover:border-brand/30 transition-all flex flex-col"
                >
                  <div className="h-64 overflow-hidden relative">
                    {item.tag && (
                      <div className="absolute top-4 left-4 z-10 bg-brand text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        {item.tag}
                      </div>
                    )}
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-display font-bold text-xl uppercase leading-tight">{item.name}</h3>
                      <span className="text-brand font-display font-bold text-lg whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1 italic">
                      "{item.description}"
                    </p>
                    <a 
                      href={`https://wa.me/5561996527949?text=Olá! Gostaria de pedir o ${item.name}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-4 bg-white/5 hover:bg-brand text-center rounded-xl font-bold transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      PEDIR VIA WHATSAPP
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="avaliacoes" className="py-24 bg-bg-offset">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight mb-4">
                O QUE <span className="text-brand">DIZEM POR AQUI</span>
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <div className="flex text-brand">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <span className="font-bold text-xl">4.2</span>
                <span className="text-white/40 text-sm uppercase tracking-widest italic">Google Maps</span>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/place/BIT+BURGER+Cruzeiro" 
              target="_blank" 
              rel="noreferrer"
              className="text-brand font-bold flex items-center gap-2 hover:underline uppercase text-sm"
            >
              Ver todas as 175 avaliações
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg-dark p-10 rounded-3xl border border-white/5 relative"
              >
                <div className="absolute top-8 right-8 text-white/5">
                  <Star size={64} fill="currentColor" />
                </div>
                <div className="flex gap-1 text-brand mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-lg mb-8 leading-relaxed italic text-white/90">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-white/50">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm tracking-widest">{review.name}</h4>
                    <span className="text-[10px] text-white/30 uppercase">{review.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contato" className="py-24 bg-bg-dark border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight mb-8">
                  VEM PRO <span className="text-brand">BIT</span>
                </h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-8">
                  Estamos localizados no coração do Cruzeiro Novo. Venha provar o burger que está conquistando Brasília.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white/5 rounded-2xl text-brand group-hover:bg-brand group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase tracking-widest text-sm mb-2">Endereço</h3>
                    <p className="text-white/50 text-base">Cruzeiro Novo Qd 1101 - Cruzeiro Novo, Brasília - DF, 70655-775</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white/5 rounded-2xl text-brand group-hover:bg-brand group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase tracking-widest text-sm mb-2">WhatsApp</h3>
                    <p className="text-white/50 text-base">(61) 99652-7949</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white/5 rounded-2xl text-brand group-hover:bg-brand group-hover:text-white transition-all">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase tracking-widest text-sm mb-2">Horário</h3>
                    <p className="text-white/50 text-base">Terça a Domingo: 18:00 – 23:30</p>
                    <p className="text-brand text-xs font-bold mt-1 uppercase animate-pulse">Aberto Agora</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a 
                  href="https://wa.me/5561996527949" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 bg-brand hover:bg-brand-light text-white py-4 rounded-2xl font-bold text-center uppercase tracking-widest transition-all"
                >
                  Pedir no WhatsApp
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-brand/30 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.11!2d-47.9!3d-15.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTVzNDInMDAuMCJTIDQ3wrA1NCcwMC4wIlc!5e0!3m2!1sen!2sbr!4v1630000000000!5m2!1sen!2sbr" 
                  className="w-full h-full grayscale border-0"
                  allowFullScreen={true} 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-bg-dark border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center font-display font-bold text-base">B</div>
              <span className="font-display font-bold text-xl tracking-tighter uppercase">
                BIT <span className="text-brand">BURGER</span>
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {['Início', 'Cardápio', 'Avaliações', 'Contato'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().replace('í', 'i'))}
                  className="text-[10px] font-bold text-white/40 hover:text-white uppercase tracking-[0.2em] transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex gap-6">
              <Instagram size={20} className="text-white/40 hover:text-brand cursor-pointer transition-colors" />
              <ShoppingBag size={20} className="text-white/40 hover:text-brand cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20">
            <p>© 2024 BIT BURGER Cruzeiro. Todos os direitos reservados.</p>
            <p>Brasília, DF - O Coração do Cruzeiro</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
