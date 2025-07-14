import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentSection(sectionId);
    setIsMenuOpen(false);
  };

  const menuCategories = [
    { id: 'viandes', name: 'Viandes & Compositions', icon: '🍗' },
    { id: 'burgers', name: 'Burgers', icon: '🍔' },
    { id: 'texmex', name: 'TEX-MEX', icon: '🍟' },
    { id: 'tacos', name: 'Tacos & Sandwichs', icon: '🌮' },
    { id: 'salades', name: 'Salade et Assiettes', icon: '🥗' },
    { id: 'famille', name: 'Menus Famille & Offres Groupe', icon: '👨‍👩‍👧‍👦' },
    { id: 'bowls', name: 'Bowls Indiens', icon: '🍛' },
    { id: 'boissons', name: 'Boissons, Desserts et Menu Enfant', icon: '🥤' }
  ];

  const menuItems = {
    
    viandes: [...],
    burgers: [...],
    texmex: [
      { name: 'Hot Wings', price: '5 pièces 4€ / 10 pièces 7,50€', ingredients: 'Ailes de poulet épicées (Menu 8€)' },
      { name: 'Tenders', price: '5 pièces 5,50€ / 10 pièces 10,50€', ingredients: 'Lamelles de poulet croustillantes (Menu 9€)' },
      { name: 'Nuggets', price: '5 pièces 3,50€ / 10 pièces 6,50€', ingredients: 'Nuggets de poulet (Menu 7€)' },
      { name: 'Nems', price: '4p. 5€ / 10p. 9,50€', ingredients: 'Nems faits maison aux légumes 🍴' },
      { name: 'Samoussas', price: '2p. 3€ / 5p. 7€', ingredients: 'Samoussas faits maison croustillants aux légumes 🍴' },
      { name: 'Chicken solo', price: '8,50€', ingredients: 'Pièce de poulet signature' },
      { name: 'Bouchées Camembert', price: '5p. 4€ / 10p. 7€', ingredients: 'Bouchées de camembert panées' },
      { name: 'Onion Rings', price: '5p. 3€ / 10p. 6€', ingredients: "Rondelles d'oignon croustillantes" },
      { name: 'Mozza Sticks', price: '5p. 4€ / 10p. 6,50€', ingredients: 'Bâtonnets de mozzarella panés' }
    ],
    tacos: [
      { name: 'Sandwich', price: '6€ (Seul) / 7€ (Frites) / 8€ (Menu)', ingredients: 'Sandwich avec viande au choix. Choix de pain : Pain Naan, Pain Naan Fromage, Pain Rond, Galette' },...],
    salade: [
      { name: 'Salade Tenders', price: '10€ (Seul) / 13€ (Menu)', ingredients: 'Tenders, Tomates, Olives, Fêta fraîche, Frites + Oignons frits' },
      { name: 'Salade Tikka', price: '10€ (Seul) / 13€ (Menu)', ingredients: 'Poulet Tikka, Tomates, Olives, Fêta fraîche, Frites + Oignons frits' },
      { name: 'Salade Royal', price: '12€ (Seul) / 15€ (Menu)', ingredients: '2 viandes au choix, Tomates, Olives, Fêta fraîche, Frites + Oignons frits' }
    ],
    famille: [...],
    bowls: [...],
    boissons: [...]
  };

  const horaires = [
    { jour: 'Lundi', heures: '11h00 - 15h00 / 17h30 - 23h00' },
    { jour: 'Mardi', heures: '11h00 - 15h00 / 17h30 - 23h00' },
    { jour: 'Mercredi', heures: '11h00 - 15h00 / 17h30 - 23h00' },
    { jour: 'Jeudi', heures: '11h00 - 15h00 / 17h30 - 23h00' },
    { jour: 'Vendredi', heures: '11h00 - 15h00 / 17h30 - 00h00' },
    { jour: 'Samedi', heures: '11h00 - 15h00 / 17h30 - 00h00' },
    { jour: 'Dimanche', heures: '17h30 - 00h00' }
  ];

  return (
    <div className="App">
      {/* Navigation, HeroSection, SpecialtiesSection, MenuCategoriesSection */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 urban-font">
              <span className="text-red-500">Contact</span> & Localisation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="contact-info-card">
                <h3 className="text-2xl font-bold text-white mb-6 urban-font">
                  Informations de contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-white">4 Rue du Midi, 31270 Frouzins</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-white">05 67 22 60 55</span>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <h3 className="text-2xl font-bold text-white mb-6 urban-font">
                  Horaires d'ouverture
                </h3>
                <div className="space-y-3 text-white">
                  {horaires.map(({ jour, heures }, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{jour}</span>
                      <span className="text-red-500">{heures}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LegalSection et autres composants */}
    </div>
  );
};

export default App;
