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

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --------- NAVIGATION ---------
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-500 urban-font">
              Original Fried Chicken
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );

  // --------- HERO ---------
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

  // --------- MENU CATEGORIES (images fond de carte) ---------
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

  // --------- CONTACT ---------
  const ContactSection = () => (
    <section id="contact" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 urban-font">
            <span className="text-red-500">Contact</span> & Localisation
          </h2>
        </div>
        {/* Ajoute ici tes infos contact, horaires, etc. */}
        <div className="text-gray-200 text-lg">
          <p>Adresse : 4 Rue du Midi, 31270 Frouzins</p>
          <p>Téléphone : 05 67 22 60 55</p>
        </div>
      </div>
    </section>
  );

  // --------- LEGAL ---------
  const LegalSection = () => (
    <section id="legal" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 urban-font">
            Mentions <span className="text-red-500">Légales</span>
          </h2>
        </div>
        <div className="text-gray-200 text-lg">
          <p><strong>Raison sociale :</strong> Original Fried Chicken</p>
          <p><strong>Catégorie :</strong> Restauration rapide</p>
          <p><strong>Adresse :</strong> 4 Rue du Midi, 31270 Frouzins, France</p>
          <p><strong>Téléphone :</strong> 05 67 22 60 55</p>
          <p>Le contenu de ce site web est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
        </div>
      </div>
    </section>
  );

  // --------- FOOTER ---------
  const Footer = () => (
    <footer className="bg-black py-8 border-t border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          © 2024 Original Fried Chicken - Tous droits réservés
        </p>
      </div>
    </footer>
  );

  // --------- RENDER ALL ---------
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <MenuCategoriesSection />
      <ContactSection />
      <LegalSection />
      <Footer />
    </div>
  );
}

export default App;
