import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentSection(sectionId);
    setIsMenuOpen(false);
  };

  // Menu categories data
  const menuCategories = [
  { id: 'viandes', name: 'VIANDES & COMPOSITIONS', img: 'viandes.jpg' },
  { id: 'burgers', name: 'BURGERS', img: 'burgers.jpg' },
  { id: 'snacks', name: 'TEX-MEX', img: 'texmex.jpg' },
  { id: 'tacos', name: 'TACOS & SANDWICHES', img: 'tacos.jpg' },
  { id: 'salade', name: 'ASSIETTES & SALADES', img: 'salades.jpg' },
  { id: 'famille', name: 'MENUS FAMILLE & OFFRES GROUPE', img: 'famille.jpg' },
  { id: 'bowls', name: 'SPÉCIALITÉ INDIAN BOWLS', img: 'indian.jpg' },
  { id: 'boissons', name: 'BOISSONS, DESSERTS ET MENU ENFANTS', img: 'desserts.jpg' }
];

  // Real menu items for each category
  const menuItems = {
    viandes: [
      { name: 'Kebab', price: 'Coin Compositions', ingredients: 'Viande Kebab fraîche' },
      { name: 'Chicken Tikka Masala', price: 'Coin Compositions', ingredients: 'Poulet mariné aux épices indiennes' },
      { name: 'Chicken', price: 'Coin Compositions', ingredients: 'Poulet grillé nature' },
      { name: 'Nugget', price: 'Coin Compositions', ingredients: 'Nuggets de poulet croustillants' },
      { name: 'Steak haché', price: 'Coin Compositions', ingredients: 'Steak haché 100% bœuf' },
      { name: 'Falafel', price: 'Coin Compositions', ingredients: 'Boulettes de pois chiches végétariennes' },
      { name: 'Cordon bleu', price: 'Coin Compositions', ingredients: 'Escalope panée jambon-fromage' },
      { name: 'Tenders', price: 'Coin Compositions', ingredients: 'Lamelles de poulet croustillantes' }
    ],
    burgers: [
      { name: 'Cheese Burger', price: '5,50€ (Seul) / 7€ (Menu)', ingredients: 'Steak, Cheddar, Salade, Sauce Biggy' },
      { name: 'Double Cheese', price: '6,50€ (Seul) / 8€ (Menu)', ingredients: 'Double steak, Cheddar, Salade, Sauce Biggy' },
      { name: 'Tenders Burger', price: '6€ (Seul) / 7,50€ (Menu)', ingredients: 'Tenders, Cheddar, Salade, Mayonnaise' },
      { name: 'Tower Burger', price: '7€ (Seul) / 8,50€ (Menu)', ingredients: 'Tenders, galette de pomme de terre, Cheddar, Salade, Mayonnaise' },
      { name: 'Raclette Tower', price: '7,50€ (Seul) / 9€ (Menu)', ingredients: 'Tenders, galette, Raclette, Salade, Sauce Poivre, Sauce Blanche' },
      { name: 'Original Mix', price: '7,50€ (Seul) / 9€ (Menu)', ingredients: 'Steak + 2 Tenders + Bacon + Salade + Sauces Blanche & Poivre' },
      { name: 'Naan Burger', price: '7€ (Seul) / 8,50€ (Menu)', ingredients: 'Viande au choix, pain naan, Salade, Sauce' },
      { name: 'Beef Supreme', price: '7€ (Seul) / 8,50€ (Menu)', ingredients: 'Steak, galette, Cheddar, Salade, Sauce Biggy' },
      { name: 'Hot Dog', price: '5€ (Seul) / 7,50€ (Menu)', ingredients: 'Tenders crispy maison ou Saucisse crispy maison' }
    ],
    snacks: [
      { name: 'Hot Wings', price: '5p 4€ / 10p 7,50€', ingredients: 'Ailes de poulet épicées (Menu 8€)' },
      { name: 'Tenders', price: '3p 3,50€ / 5p 5,50€ / 10 pièces 10,50€', ingredients: 'Lamelles de poulet croustillantes (Menu 9€)' },
      { name: 'Nuggets', price: '5p 3,50€ / 10p 6,50€', ingredients: 'Nuggets de poulet (Menu 7€)' },
      { name: 'Nems maison', price: '4p 5€ / 10p 9,50€', ingredients: 'Nems faits maison aux légumes' },
      { name: 'Bouchées Camembert', price: '5p 4€ / 10p 7€', ingredients: 'Bouchées de camembert panées' },
      { name: 'Onion Rings', price: '5p 3€ / 10p 6€', ingredients: 'Rondelles d\'oignon croustillantes' },
      { name: 'Mozza Sticks', price: '5p 4€ / 10p 6,50€', ingredients: 'Bâtonnets de mozzarella panés' },
      { name: 'Samoussa', price: '2p 3€ / 5p 7€', ingredients: 'Samoussa Maison' },      
    ],
    tacos: [
      { name: 'Tacos Simple', price: '6,50€ (Seul) / 7,50€ (Frites) / 8,50€ (Menu)', ingredients: 'Tacos avec 1 viande au choix' },
      { name: 'Tacos Double', price: '8€ (Seul) / 9,50€ (Frites) / 10,50€ (Menu)', ingredients: 'Tacos avec 2 viandes au choix' },
      { name: 'Tacos XL', price: '10,50€ (Seul) / 11,50€ (Frites) / 12,50€ (Menu)', ingredients: 'Grand tacos avec 3 viandes au choix' },
      { name: 'Sandwich', price: '6€ (Seul) / 7€ (Frites) / 8€ (Menu)', ingredients: 'Sandwich avec viande au choix. Choix de pain : Pain Naan, Pain Naan Fromage, Pain Rond, Galette' }
    ],
    salade: [
      { name: 'Salade Tenders', price: '10€ (Seul) / 13€ (Menu)', ingredients: 'Tenders, Tomates, Olives, Fêta fraîche, Frites + Oignons frits' },
      { name: 'Salade Tikka', price: '10€ (Seul) / 13€ (Menu)', ingredients: 'Poulet Tikka, Tomates, Olives, Fêta fraîche, Frites + Oignons frits' },
      { name: 'Salade Royal', price: '12€ (Seul) / 15€ (Menu)', ingredients: '2 viandes au choix, Tomates, Olives, Fêta fraîche, Frites + Oignons frits' },
      { name: 'Chicken Tandori', price: '10€ (Seul) / 13€ (Menu)', ingredients: 'Cuisse de poulet Tandoori, Salade, Tomates, Olives, Fêta fraîche ou Frites + Oignons frits' },
      { name: 'KING Chicken Tandori', price: '12€ (Seul) / 15€ (Menu)', ingredients: '2 Cuisse de poulet Tandoori, Tomates, Olives, Fêta fraîche ou Frites + Oignons frits' },
      { name: 'Assiette Simple', price: '10€ (Seul) / 12€ (Menu)', ingredients: '1 viande au choix, Tomates, Olives, Fêta fraîche, Frites + Oignons frits' },
      { name: 'Assiette Royal ', price: '12€ (Seul) / 15€ (Menu)', ingredients: '2 viandes au choix, Tomates, Olives, Fêta fraîche ou Frites + Oignons frits' }, 
      { name: 'supplements', price: 'naan ou naan garlic 2,50€' },       
       ],
    famille: [
      { name: 'Family 1', price: '25,90€', ingredients: '35 Wings + 4 Frites + 1,5L boisson' },
      { name: 'Family 2', price: '25,90€', ingredients: '18 Tenders + 15 Wings + 1,5L boisson' },
      { name: 'Family 3', price: '25,90€', ingredients: '10 Tenders + 15 Wings + 4 Frites + 1,5L boisson' },
      { name: 'Bucket 1', price: '20,90€', ingredients: '12 Tenders + 2 Frites + 2 Canettes' },
      { name: 'Bucket 2', price: '20,90€', ingredients: '20 Wings + 2 Frites + 2 Canettes' },
      { name: 'Bucket 3', price: '20,90€', ingredients: '5 Tenders + 10 Wings + 2 Frites + 2 Canettes' },
      { name: 'Party Deal', price: '55€', ingredients: '2 Tenders Burger + 2 Cheese Burger + 2 Tacos Kebab + 8 Tenders + 12 Wings + 6 Frites + 1,5L boisson' }
    ],
    bowls: [
      { name: 'Tacos Bowl', price: '10,90€', ingredients: '1 viande, Sauce fromagère, Oignons frits, Frites' },
      { name: 'Birani Bowl', price: '11,90€', ingredients: 'Riz Pulao + Egg Bhudiya, Cuisson traditionnelle avec riz, ail, oignon, amandes, accompagné de curry de légumes' },
      { name: 'Chicken Curry Bowl', price: '10,90€', ingredients: 'Riz Pulao + Poulet Cuisson traditionnelle en sauce curry, avec amandes, yaourt et crème fraîche' },
      { name: 'Chicken Tikka Masala Bowl', price: '10,90€', ingredients: 'Riz Pulao + Poulet Tikka, Sauce parfumée aux amandes, Légèrement sucrée' },
      { name: 'Butter Chicken Bowl', price: '11,90€', ingredients: 'Riz Pulao + Butter Chicken, Beurre légèrement sucré, sauce à l oignon, amandes, yaourt et crème fraîche' },
      { name: 'Chicken Kurma Bowl', price: '11,90€', ingredients: 'Riz Pulao + Kurma Chicken légèrement sucré, sauce à l oignon, amandes, yaourt et crème fraîche' },
      { name: 'supplements', price: 'naan ou naan garlic 2,50€ / Riz petit 3€/ Riz grand 4,50€' },      
    ],
    boissons: [
      { name: 'Menu Enfant', price: '6,50€', ingredients: 'Cheeseburger ou Nuggets ou 3 Tenders + Frites + Caprisun' },
      { name: 'Boissons 33cl', price: '1,70€', ingredients: 'Coca, Fanta, Sprite, Ice Tea...' },
      { name: 'Boissons 1,5L', price: '3€', ingredients: 'Grande bouteille au choix' },
      { name: 'Tiramisu', price: '3€', ingredients: 'Tiramisu maison' },
      { name: 'Naan Nutella', price: '3€', ingredients: 'Pain naan fourré au Nutella' },
      { name: 'Glace', price: '2,50€', ingredients: 'Glace au choix' },
    ]
  };

  // Our specialties data with new relevant images
  const specialties = [
    {
      name: 'Tenders Croustillants',
      image: 'https://images.unsplash.com/photo-1619019187211-adf2f6119afd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwdGVuZGVyc3xlbnwwfHx8fDE3NTIzNDYwNTV8MA&ixlib=rb-4.1.0&q=85',
      description: 'Lamelles de poulet croustillantes et savoureuses'
    },
    {
      name: 'Burger Gourmet',
      image: 'https://images.unsplash.com/photo-1637710847214-f91d99669e18?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYnVyZ2VyfGVufDB8fHx8MTc1MjM0NjA2Mnww&ixlib=rb-4.1.0&q=85',
      description: 'Notre burger signature au poulet premium'
    },
    {
      name: 'Bowl Indien Curry',
      image: 'https://images.unsplash.com/photo-1708184528306-f75a0a5118ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBjaGlja2VuJTIwYm93bHxlbnwwfHx8fDE3NTIzNDYwNzB8MA&ixlib=rb-4.1.0&q=85',
      description: 'Saveurs authentiques indiennes en bowl'
    },
    {
      name: 'Salade',
      image: 'https://images.unsplash.com/photo-1522251253478-4cae03d93949?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxjaGlja2VuJTIwc2FsYWR8ZW58MHx8fHwxNzUyMzQ2MDc2fDA&ixlib=rb-4.1.0&q=85',
      description: 'Salade gourmande au poulet grillé'
    }
  ];

  // Navigation component
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-500 urban-font">
              Original Fried Chicken
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`nav-link ${currentSection === 'home' ? 'active' : ''}`}
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('menus')}
                className={`nav-link ${currentSection === 'menus' ? 'active' : ''}`}
              >
                Menus
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`nav-link ${currentSection === 'contact' ? 'active' : ''}`}
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('legal')}
                className={`nav-link ${currentSection === 'legal' ? 'active' : ''}`}
              >
                Mentions légales
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-500 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 rounded-lg mt-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block nav-link-mobile"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('menus')}
                className="block nav-link-mobile"
              >
                Menus
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block nav-link-mobile"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('legal')}
                className="block nav-link-mobile"
              >
                Mentions légales
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  // Hero Section
  const HeroSection = () => (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1608855815815-4edc035e39ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGJvd2x8ZW58MHx8fHJlZHwxNzUyMzQ3MTE4fDA&ixlib=rb-4.1.0&q=85"
          alt="Original Chicken - Bols Indiens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 urban-font text-shadow-lg">
          ORIGINAL FRIED
          <span className="block text-red-500 text-shadow-red">CHICKEN</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-medium text-yellow-300">
          Le meilleur chicken street de Frouzins
        </p>
        <button
          onClick={() => scrollToSection('menus')}
          className="cta-button"
        >
          Voir nos menus
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );

  // Specialties Section
  const SpecialtiesSection = () => (
    <section className="py-20 bg-concrete-texture relative">
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 urban-font">
            Nos <span className="text-red-500">Incontournables</span>
          </h2>
          <p className="text-xl text-gray-300">
            Découvrez nos spécialités qui font notre réputation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialty-card group">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={specialty.image}
                  alt={specialty.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 urban-font">
                  {specialty.name}
                </h3>
                <p className="text-gray-400">
                  {specialty.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Indian Bowls Examples Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 urban-font">
              Nos <span className="text-yellow-500">Bowls Indiens</span>
            </h3>
            <p className="text-lg text-gray-300">
              Découvrez nos authentiques bowls aux saveurs de l'Inde
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="specialty-card group max-w-md">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg"
                  alt="Bowl Biryani Indien"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-2 urban-font">
                  Biryani Bowl Exemple
                </h4>
                <p className="text-gray-400 mb-4">
                  Riz parfumé, poulet épicé et légumes authentiques
                </p>
                <button
                  onClick={() => scrollToSection('menus')}
                  className="text-yellow-500 font-semibold hover:text-yellow-400 transition-colors"
                >
                  Voir tous nos bowls →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Menu Categories Section
  const MenuCategoriesSection = () => (
    <section id="menus" className="py-20 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 urban-font">
            Notre <span className="text-red-500">Carte</span>
          </h2>
          <p className="text-xl text-gray-300">
            Explorez toutes nos catégories de délices
          </p>
        </div>

        {!selectedCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="menu-category-card cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 urban-font">
                    {category.name}
                  </h3>
                  <div className="w-16 h-1 bg-red-500 mx-auto group-hover:w-24 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <MenuItemsView category={selectedCategory} />
        )}
      </div>
    </section>
  );

  // Menu Items View
  const MenuItemsView = ({ category }) => {
    const categoryData = menuCategories.find(cat => cat.id === category);
    const items = menuItems[category] || [];

    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex items-center text-red-500 hover:text-red-400 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux catégories
          </button>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-4 urban-font">
            {categoryData?.name}
          </h3>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          
          {/* Add info about sauces and supplements for Viandes category */}
          {category === 'viandes' && (
            <div className="mt-8 text-left max-w-2xl mx-auto">
              <div className="bg-red-900/20 backdrop-blur-md border border-red-500/30 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold text-red-500 mb-3 urban-font">Sauces Gratuites</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Blanche • Ketchup • Algérienne • Mayo • Biggy • Burger • Barbecue • Harissa • Samouraï • Andalouse • Poivre • Thaï Chili
                </p>
              </div>
              <div className="bg-yellow-900/20 backdrop-blur-md border border-yellow-500/30 rounded-lg p-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-3 urban-font">Suppléments (+1€)</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Bacon • Cheddar • Chèvre • Raclette
                </p>
              </div>
            </div>
          )}
          
          {/* Add note for Bowls Indiens */}
          {category === 'bowls' && (
            <div className="mt-6">
              <p className="text-yellow-400 text-sm italic">
                * À la carte uniquement - pas de menu disponible
              </p>
            </div>
          )}
        </div>

        <div className="grid gap-6">
          {items.map((item, index) => (
            <div key={index} className="menu-item-card">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2 urban-font">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.ingredients}
                  </p>
                </div>
                <div className="text-2xl font-bold text-red-500 ml-4">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Contact Section
  const ContactSection = () => (
    <section id="contact" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 urban-font">
            <span className="text-red-500">Contact</span> & Localisation
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="contact-info-card">
              <h3 className="text-2xl font-bold text-white mb-6 urban-font">
                Informations de contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-red-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white">4 Rue du Midi, 31270 Frouzins</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-red-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white">05 67 22 60 55</span>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <h3 className="text-2xl font-bold text-white mb-6 urban-font">
                Horaires d'ouverture
              </h3>
              <div className="space-y-3 text-white">
                <div className="flex justify-between">
                  <span>Lundi</span>
                  <span className="text-red-500">11h00 - 15h00 / 17h30 - 23h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Mardi</span>
                  <span className="text-red-500">11h00 - 15h00 / 17h30 - 23h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Mercredi</span>
                  <span className="text-red-500">11h00 - 15h00 / 17h30 - 23h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Jeudi</span>
                  <span className="text-red-500">11h00 - 15h00 / 17h30 - 23h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Vendredi</span>
                  <span className="text-red-500">11h00 - 15h00 / 17h30 - 00h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="text-red-500">11h00 - 15h00 / 17h30 - 00h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-red-500">17h30 - 00h00</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="contact-info-card">
              <h3 className="text-2xl font-bold text-white mb-6 urban-font">
                Suivez-nous
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="social-link" title="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" title="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" title="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" title="Snapchat">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.088-1.037 2.455-1.548 3.285C9.394 23.815 10.682 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1234567890123!2d1.3333333333333333!3d43.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeb85c44fc7431%3A0x78c208b25c76b3a9!2s4%20Rue%20du%20Midi%2C%2031270%20Frouzins%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Original Fried Chicken Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );

  // Legal Section
  const LegalSection = () => (
    <section id="legal" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 urban-font">
            Mentions <span className="text-red-500">Légales</span>
          </h2>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="legal-content">
            <h3>Informations légales</h3>
            <p><strong>Raison sociale :</strong> Original Fried Chicken</p>
            <p><strong>Catégorie :</strong> Restauration rapide</p>
            <p><strong>Adresse :</strong> 4 Rue du Midi, 31270 Frouzins, France</p>
            <p><strong>Téléphone :</strong> 05 67 22 60 55</p>

            <h3>Propriété intellectuelle</h3>
            <p>Le contenu de ce site web est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>

            <h3>Protection des données</h3>
            <p>Conformément au RGPD, nous nous engageons à protéger vos données personnelles. Les informations collectées via notre formulaire de contact ne sont utilisées que pour répondre à vos demandes.</p>

            <h3>Cookies</h3>
            <p>Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de tracking n'est utilisé.</p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <SpecialtiesSection />
      <MenuCategoriesSection />
      <ContactSection />
      <LegalSection />
      
      {/* Footer */}
      <footer className="bg-black py-8 border-t border-red-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Original Fried Chicken - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;


<section className="py-12 px-6 text-center text-white">
  <h2 className="text-4xl font-bold urban-font mb-4">
    NOTRE <span className="text-red-600">CARTE</span>
  </h2>
  <p className="mb-8 text-gray-300">Explorez toutes nos catégories de délices</p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {menuCategories.map((cat) => (
      <Link
        to={\`/categorie/\${cat.id}\`}
        key={cat.id}
        className="menu-category-card relative bg-cover bg-center text-white h-48 flex items-center justify-center rounded-xl overflow-hidden transition-all duration-300"
        style={{
          backgroundImage: \`url('/images/categories/\${cat.img}')\`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[inherit]"></div>
        <h3 className="relative z-10 text-xl font-bold text-shadow-lg text-center px-2 uppercase tracking-wide urban-font">
          {cat.name}
        </h3>
      </Link>
    ))}
  </div>
</section>
