import React, { useState } from "react";
import './App.css';

const menuCategories = [
  { id: 'viandes', name: 'Viandes & Compositions', img: 'viandes.jpg' },
  { id: 'burgers', name: 'Burgers', img: 'burgers.jpg' },
  { id: 'snacks', name: 'TEX-MEX', img: 'texmex.jpg' },
  { id: 'tacos', name: 'Tacos & Sandwichs', img: 'tacos.jpg' },
  { id: 'salade', name: 'Assiettes & Salades', img: 'salades.jpg' },
  { id: 'famille', name: 'Menus Famille & Offres Groupe', img: 'famille.jpg' },
  { id: 'bowls', name: 'Bowls Indiens', img: 'indian.jpg' },
  { id: 'boissons', name: 'Boissons & Desserts et menu enfants', img: 'desserts.jpg' }
];

const menuItems = {
  viandes: [
    { name: 'Kebab', price: 'Coin Compositions', ingredients: 'Viande Kebab fraîche' },
    { name: 'Chicken Tikka Masala', price: 'Coin Compositions', ingredients: 'Poulet mariné aux épices indiennes' },
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
    { name: 'Tenders', price: '3p 3,50€ / 5p 5,50€ / 10 pièces 10,50€', ingredients: 'Poulet croustillant Maison (Menu 9€)' },
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
    { name: 'Tacos Bowl', price: '10,90€', ingredients: '1 viande, Sauce fromagère, Oignons frits, Frites' },      
    { name: 'Tacos XL', price: '10,50€ (Seul) / 11,50€ (Frites) / 12,50€ (Menu)', ingredients: 'Grand tacos avec 3 viandes au choix' },
    { name: 'Sandwich', price: '6,50€ (Seul) / 7,50€ (Frites) / 8,50€ (Menu)', ingredients: 'Sandwich avec viande au choix. Choix de pain : Pain Naan, Pain Naan Fromage, Pain Rond, Galette, Panini' }
  ],
  salade: [
    { name: 'Salade Tenders', price: '10€ (Seul) / 13€ (Menu)', ingredients: 'Tenders, Tomates, Olives, Frites + Oignons frits' },
    { name: 'Salade Tikka', price: '10€ (Seul) / 13€ (Menu)', ingredients: 'Poulet Tikka, Tomates, Olives, Frites + Oignons frits' },
    { name: 'Chicken Tandori (Spécialité de Grillades cuit au Four TANDOOR)' , price: '10€ (Seul) / 13€ (Menu)', ingredients: 'Cuisse de poulet Tandoori, Salade, Tomates, Olives + Oignons frits' },
    { name: 'KING Chicken Tandori (Spécialité de Grillades cuit au Four TANDOOR)', price: '12€ (Seul) / 15€ (Menu)', ingredients: '2 Cuisse de poulet Tandoori, Salade, Tomates, Olives + Oignons frits' },
    { name: 'Assiette Simple', price: '10€ (Seul) / 12€ (Menu)', ingredients: '1 viande au choix, Tomates, Olives ou Frites+ Oignons frits' },
    { name: 'Assiette Royal ', price: '12€ (Seul) / 15€ (Menu)', ingredients: '2 viandes au choix, Tomates, Olives ou Frites + Oignons frits' }, 
    { name: 'supplements', price: 'naan ou naan garlic 2,50€' },       
  ],
  famille: [
    { name: 'Family 1', price: '25,90€', ingredients: '35 Wings + 4 Frites + 1,5L boisson' },
    { name: 'Family 2', price: '25,90€', ingredients: '18 Tenders + 4 Frites + 1,5L boisson' },
    { name: 'Family 3', price: '25,90€', ingredients: '10 Tenders + 15 Wings + 4 Frites + 1,5L boisson' },
    { name: 'Bucket 1', price: '20,90€', ingredients: '12 Tenders + 2 Frites + 2 Canettes' },
    { name: 'Bucket 2', price: '20,90€', ingredients: '20 Wings + 2 Frites + 2 Canettes' },
    { name: 'Bucket 3', price: '20,90€', ingredients: '5 Tenders + 10 Wings + 2 Frites + 2 Canettes' },
    { name: 'Party Deal', price: '55€', ingredients: '2 Tenders Burger + 2 Cheese Burger + 2 Tacos Kebab + 8 Tenders + 12 Wings + 6 Frites + 1,5L boisson' }
  ],
  bowls: [
    { name: 'Chicken Birani Bowl', price: '11,90€', ingredients: 'Riz Pulao + Egg Bhudiya, Cuisson traditionnelle avec riz, ail, oignon, amandes, accompagné de curry de légumes' },
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

const saucesGratuites = [
  "Blanche", "Ketchup", "Algérienne", "Mayo", "Biggy Burger", "Curry", "Barbecue", "Harissa", "Samouraï", "Andalouse", "Poivre", "Thaï Chili"
];
const supplements = [
  "Bacon", "Cheddar", "Chèvre", "Raclette"
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // NAVIGATION
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-red-500 urban-font">
            Original Fried Chicken
          </h1>
          <div className="space-x-6">
            <button className="text-white hover:text-red-400" onClick={() => setSelectedCategory(null)}>Accueil</button>
            <a className="text-white hover:text-red-400" href="#menus">Carte</a>
            <a className="text-white hover:text-red-400" href="#contact">Contact</a>
            <a className="text-white hover:text-red-400" href="#legal">Mentions légales</a>
          </div>
        </div>
      </div>
    </nav>
  );

  // HERO
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
      </div>
    </section>
  );

  // GRILLE CATEGORIES
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group flex items-end justify-center min-h-[220px] transition-all duration-300"
              style={{
                backgroundImage: `url(/images/categories/${category.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.15) 100%)'
                }}
              />
              <h3 className="relative z-10 text-xl font-bold text-white mb-6 px-2 uppercase tracking-wide urban-font drop-shadow-lg text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // LISTE PRODUITS D’UNE CATÉGORIE
  const MenuItemsView = ({ category }) => {
    const items = menuItems[category] || [];
    return (
      <section className="py-20 bg-gray-900 min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className="mb-8 flex items-center text-red-500 hover:text-red-400 transition-colors font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux catégories
          </button>
          <h3 className="text-4xl font-bold text-white mb-6 urban-font text-center">
            {menuCategories.find(cat => cat.id === category)?.name}
          </h3>
          {category === 'viandes' && (
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <
