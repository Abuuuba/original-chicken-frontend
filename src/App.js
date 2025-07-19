import React, { useState } from "react";
import './App.css';

// Données catégories ET produits
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

// Produits par catégorie
const menuItems = {
  viandes: [
    { name: 'Kebab', price: '6,50€', ingredients: 'Viande Kebab fraîche' },
    { name: 'Chicken Tikka Masala', price: '7,50€', ingredients: 'Poulet mariné aux épices indiennes' },
    { name: 'Nugget', price: '5,50€', ingredients: 'Nuggets de poulet croustillants' },
    { name: 'Steak haché', price: '7,00€', ingredients: 'Steak haché 100% bœuf' },
    { name: 'Falafel', price: '6,00€', ingredients: 'Boulettes de pois chiches végétariennes' },
    { name: 'Cordon bleu', price: '7,00€', ingredients: 'Escalope panée jambon-fromage' },
    { name: 'Tenders', price: '6,50€', ingredients: 'Lamelles de poulet croustillantes' },
  ],
  burgers: [
    { name: 'Cheese Burger', price: '5,50€', ingredients: 'Steak, Cheddar, Salade, Sauce Biggy' },
    { name: 'Double Cheese', price: '6,50€', ingredients: 'Double steak, Cheddar, Salade, Sauce Biggy' },
    { name: 'Tenders Burger', price: '6€', ingredients: 'Tenders, Cheddar, Salade, Mayonnaise' },
    { name: 'Tower Burger', price: '7€', ingredients: 'Tenders, galette de pomme de terre, Cheddar, Salade, Mayonnaise' },
  ],
  // ... (mets ici les autres catégories avec leurs produits)
};

// Sauces & suppléments pour Viandes
const saucesGratuites = [
  "Blanche", "Ketchup", "Algérienne", "Mayo", "Biggy Burger", "Curry", "Barbecue", "Harissa", "Samouraï", "Andalouse", "Poivre", "Thaï Chili"
];
const supplements = [
  "Bacon", "Cheddar", "Chèvre", "Raclette"
];

// ------ Composant App ------
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // NAVIGATION + HERO
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-red-500 urban-font">
            Original Fried Chicken
          </h1>
        </div>
      </div>
    </nav>
  );

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

  // -------- Grille Catégories / Images --------
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

  // -------- Liste des produits d'une catégorie --------
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

          {/* Affiche sauces et suppléments seulement pour Viandes */}
          {category === 'viandes' && (
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-900/30 rounded-lg p-5">
                <h4 className="text-xl font-bold text-red-400 mb-2">Sauces Gratuites</h4>
                <div className="text-gray-200 text-sm">{saucesGratuites.join(' • ')}</div>
              </div>
              <div className="bg-yellow-900/20 rounded-lg p-5">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">Suppléments (+1€)</h4>
                <div className="text-gray-200 text-sm">{supplements.join(' • ')}</div>
              </div>
            </div>
          )}

          <div className="grid gap-6">
            {items.map((item, i) => (
              <div key={i} className="bg-black/70 rounded-xl p-6 shadow flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold text-white">{item.name}</h4>
                  <p className="text-gray-400 text-sm">{item.ingredients}</p>
                </div>
                <span className="text-xl font-bold text-red-400">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // -------- Footer --------
  const Footer = () => (
    <footer className="bg-black py-8 border-t border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          © 2024 Original Fried Chicken - Tous droits réservés
        </p>
      </div>
    </footer>
  );

  // -------- RENDER --------
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      {!selectedCategory ? (
        <MenuCategoriesSection />
      ) : (
        <MenuItemsView category={selectedCategory} />
      )}
      <Footer />
    </div>
  );
}

export default App;
