import React, { useState } from "react";
import './App.css';

// --- 1. Catégories avec images
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

// --- 2. Produits (raccourci ici, mets ta liste complète)
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
  // ... Ajoute ici toutes les autres catégories (burgers, snacks, etc.) comme avant ...
};

const saucesGratuites = [
  "Blanche", "Ketchup", "Algérienne", "Mayo", "Biggy Burger", "Curry", "Barbecue", "Harissa", "Samouraï", "Andalouse", "Poivre", "Thaï Chili"
];
const supplements = [
  "Bacon", "Cheddar", "Chèvre", "Raclette"
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // --- NAVIGATION responsive
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-lg sm:text-2xl font-bold text-red-500 urban-font">Original Fried Chicken</h1>
        <div className="hidden md:flex space-x-6">
          <button
            className="text-white hover:text-red-400"
            onClick={() => {
              setSelectedCategory(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Accueil
          </button>
          <a className="text-white hover:text-red-400" href="#menus">Carte</a>
          <a className="text-white hover:text-red-400" href="#contact">Contact</a>
          <a className="text-white hover:text-red-400" href="#legal">Mentions légales</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-black/95 px-8 py-4 space-y-3">
          <button
            onClick={() => {
              setSelectedCategory(null);
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block w-full text-white text-lg text-left"
          >
            Accueil
          </button>
          <a href="#menus" className="block w-full text-white text-lg" onClick={()=>setMenuOpen(false)}>Carte</a>
          <a href="#contact" className="block w-full text-white text-lg" onClick={()=>setMenuOpen(false)}>Contact</a>
          <a href="#legal" className="block w-full text-white text-lg" onClick={()=>setMenuOpen(false)}>Mentions légales</a>
        </div>
      )}
    </nav>
  );

  // --- HERO ACCUEIL
  const HeroSection = () => (
    <section
      className="relative w-full min-h-[55vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(/images/51BBA27D-F11A-4A0E-86CB-2674EBC5E67F.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{background: 'rgba(0,0,0,0.08)'}} />
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center py-12">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold urban-font mb-4 drop-shadow-lg">
          <span className="block text-white tracking-widest" style={{letterSpacing: '.06em', textShadow: '0 2px 12px rgba(0,0,0,0.13)'}}>ORIGINAL FRIED</span>
          <span className="block text-red-500 tracking-widest" style={{letterSpacing: '.08em', textShadow: '0 2px 14px rgba(0,0,0,0.15)'}}>CHICKEN</span>
        </h1>
        <p className="text-lg sm:text-2xl mb-6 font-semibold text-yellow-300 drop-shadow" style={{textShadow: '0 1px 10px rgba(0,0,0,0.15)'}}>
          Le meilleur chicken street de Frouzins
        </p>
        <a
          href="#menus"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold rounded px-7 py-3 shadow-lg transition-colors text-lg"
          style={{letterSpacing: '.03em'}}
        >
          Voir nos menus
        </a>
      </div>
    </section>
  );

  // --- CATÉGORIES
  const MenuCategoriesSection = () => (
    <section id="menus" className="py-12 px-2 sm:px-4 md:py-20 bg-gray-900 relative mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3 urban-font">
            Notre <span className="text-red-500">Carte</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300">
            Explorez toutes nos catégories de délices
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className="relative rounded-xl overflow-hidden shadow-lg group flex flex-col justify-end min-h-[120px] sm:min-h-[180px] md:min-h-[220px] transition-all duration-300 focus:outline-none"
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
                  background: 'linear-gradient(to top, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.03) 100%)'
                }}
              />
              <span className="relative z-10 text-[0.95rem] sm:text-xl font-bold text-white mb-3 sm:mb-6 px-1 sm:px-2 uppercase tracking-wide urban-font drop-shadow-lg text-center">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );

  // --- LISTE PRODUITS D’UNE CATÉGORIE
  const MenuItemsView = ({ category }) => {
    const items = menuItems[category] || [];
    return (
      <section className="py-20 bg-gray-900 min-h-[60vh] mt-16">
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

  // --- CONTACT + horaires + map
  const ContactSection = () => (
    <section id="contact" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 urban-font">
            <span className="text-red-500">Contact</span> & Localisation
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 urban-font">
                Informations de contact
              </h3>
              <div className="space-y-4 text-gray-200 text-lg">
                <div>Adresse : 4 Rue du Midi, 31270 Frouzins</div>
                <div>Téléphone : 05 67 22 60 55</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 urban-font">
                Horaires d'ouverture
              </h3>
              <div className="space-y-2 text-white text-base">
                <div className="flex justify-between"><span>Lundi</span><span className="text-red-500">11h-15h / 17h30-23h</span></div>
                <div className="flex justify-between"><span>Mardi</span><span className="text-red-500">11h-15h / 17h30-23h</span></div>
                <div className="flex justify-between"><span>Mercredi</span><span className="text-red-500">11h-15h / 17h30-23h</span></div>
                <div className="flex justify-between"><span>Jeudi</span><span className="text-red-500">11h-15h / 17h30-23h</span></div>
                <div className="flex justify-between"><span>Vendredi</span><span className="text-red-500">11h-15h / 17h30-00h</span></div>
                <div className="flex justify-between"><span>Samedi</span><span className="text-red-500">11h-15h / 17h30-00h</span></div>
                <div className="flex justify-between"><span>Dimanche</span><span className="text-red-500">17h30-00h</span></div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 urban-font">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-red-500 text-2xl" title="Instagram">📸</a>
                <a href="#" className="text-gray-300 hover:text-red-500 text-2xl" title="Facebook">👍</a>
                <a href="#" className="text-gray-300 hover:text-red-500 text-2xl" title="Snapchat">👻</a>
              </div>
            </div>
          </div>
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

  // --- MENTIONS LÉGALES (espacement++ version)
  const LegalSection = () => (
    <section id="legal" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 urban-font">
            Mentions <span className="text-red-500">Légales</span>
          </h2>
        </div>
        <div className="prose prose-invert max-w-none text-gray-200 text-lg space-y-8">
          <div className="space-y-4">
            <h3>Informations légales</h3>
            <p><strong>Raison sociale :</strong><br/>Original Fried Chicken</p>
            <p><strong>Catégorie :</strong><br/>Restauration rapide</p>
            <p><strong>Adresse :</strong><br/>4 Rue du Midi, 31270 Frouzins, France</p>
            <p><strong>Téléphone :</strong><br/>05 67 22 60 55</p>
          </div>
          <div className="space-y-4">
                        <h3>Propriété intellectuelle</h3>
            <p>
              Le contenu de ce site web est protégé par le droit d'auteur.
              Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </div>
          <div className="space-y-4">
            <h3>Protection des données</h3>
            <p>
              Conformément au RGPD, nous nous engageons à protéger vos données personnelles.
              Les informations collectées via notre formulaire de contact ne sont utilisées que pour répondre à vos demandes.
            </p>
          </div>
          <div className="space-y-4">
            <h3>Cookies</h3>
            <p>
              Ce site utilise des cookies techniques nécessaires à son bon fonctionnement.
              Aucun cookie de tracking n'est utilisé.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // --- FOOTER
  const Footer = () => (
    <footer className="bg-black py-8 border-t border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          © 2024 Original Fried Chicken - Tous droits réservés
        </p>
      </div>
    </footer>
  );

  // --- RENDER FINAL
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      {!selectedCategory ? (
        <MenuCategoriesSection />
      ) : (
        <MenuItemsView category={selectedCategory} />
      )}
      <ContactSection />
      <LegalSection />
      <Footer />
    </div>
  );
}

export default App;
