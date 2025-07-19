import React, { useState } from "react";
import './App.css';

const menuCategories = [
  { id: 'viandes', name: 'Viandes & Compositions', img: 'viandes.jpg' },
  { id: 'burgers', name: 'Burgers', img: 'burgers.jpg' },
  { id: 'snacks', name: 'TEX-MEX', img: 'texmex.jpg' },
  { id: 'tacos', name: 'Tacos & Sandwichs', img: 'tacos.jpg' },
  { id: 'salade', name: 'Assiettes & Salades', img: 'salades.jpg' },
  { id: 'famille', name: 'Menus Famille & Offres Groupe', img: 'famille.jpg' },
  { id: 'bowls', name: 'Spécialité Indian Bowls', img: 'indian.jpg' },
  { id: 'boissons', name: 'Boissons & Desserts et menu enfants', img: 'desserts.jpg' }
];

// Les items de menu pour CHAQUE catégorie (repris de tes exemples + à compléter si besoin)
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
    { name: 'Chicken Tandori', price: '10€ (Seul) / 13€ (Menu)', ingredients: 'Cuisse de poulet Tandoori, Salade, Tomates, Olives + Oignons frits' },
    { name: 'KING Chicken Tandori', price: '12€ (Seul) / 15€ (Menu)', ingredients: '2 Cuisse de poulet Tandoori, Salade, Tomates, Olives + Oignons frits' },
    { name: 'Assiette Simple', price: '10€ (Seul) / 12€ (Menu)', ingredients: '1 viande au choix, Tomates, Olives ou Frites+ Oignons frits' },
    { name: 'Assiette Royal', price: '12€ (Seul) / 15€ (Menu)', ingredients: '2 viandes au choix, Tomates, Olives ou Frites + Oignons frits' }, 
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
];function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pressedIdx, setPressedIdx] = useState(null);

  // NAVIGATION
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-red-600/30">
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
        <div className="md:hidden bg-black/85 px-8 py-4 space-y-3 backdrop-blur">
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

  // HERO ACCUEIL
  const HeroSection = () => (
    <section
      className="relative w-full min-h-[55vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(/images/51BBA27D-F11A-4A0E-86CB-2674EBC5E67F.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{background: 'rgba(255,255,255,0.07)'}} />
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

  // CATÉGORIES AVEC EFFET LUMINEUX & CLICK
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
          {menuCategories.map((category, idx) => (
            <button
              key={category.id}
              onMouseDown={() => setPressedIdx(idx)}
              onMouseUp={() => setPressedIdx(null)}
              onMouseLeave={() => setPressedIdx(null)}
              onTouchStart={() => setPressedIdx(idx)}
              onTouchEnd={() => setPressedIdx(null)}
              className={
                "relative rounded-xl overflow-hidden shadow-lg ring-1 ring-white/20 group flex flex-col justify-end min-h-[120px] sm:min-h-[180px] md:min-h-[220px] transition-all duration-150 focus:outline-none"
                + (pressedIdx === idx ? " scale-95 ring-4 ring-yellow-300/60 shadow-yellow-200" : "")
              }
              style={{
                backgroundImage: `url(/images/categories/${category.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div
                className="absolute inset-0 backdrop-blur-md"
                style={{
                  background: 'linear-gradient(to top, rgba(255,255,255,0.13) 55%, rgba(0,0,0,0.03) 100%)'
                }}
              />
              <span className="relative z-10 text-[0.97rem] sm:text-xl font-bold text-white mb-3 sm:mb-6 px-1 sm:px-2 uppercase tracking-wide urban-font drop-shadow-xl text-center"
                style={{textShadow: "0 2px 18px #000, 0 1px 12px #fff8"}}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );

  // Liste des produits d’une catégorie
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
              <div key={i} className="bg-black/50 rounded-xl p-6 shadow flex justify-between items-center">
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
  // CONTACT + horaires + map
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
                <div><strong>Adresse&nbsp;:</strong> 4 Rue du Midi, 31270 Frouzins</div>
                <div><strong>Téléphone&nbsp;:</strong> 05 67 22 60 55</div>
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

  // LEGAL
  const LegalSection = () => (
    <section id="legal" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 urban-font">
            Mentions <span className="text-red-500">Légales</span>
          </h2>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="legal-content space-y-5 text-gray-100">
            <div>
              <strong>Raison sociale&nbsp;:</strong> <span className="ml-1">Original Fried Chicken</span>
            </div>
            <div>
              <strong>Catégorie&nbsp;:</strong> <span className="ml-1">Restauration rapide</span>
            </div>
            <div>
              <strong>Adresse&nbsp;:</strong> <span className="ml-1">4 Rue du Midi, 31270 Frouzins, France</span>
            </div>
            <div>
              <strong>Téléphone&nbsp;:</strong> <span className="ml-1">05 67 22 60 55</span>
            </div>
            <div className="pt-3">
              <strong>Propriété intellectuelle</strong>
              <p>Le contenu de ce site web est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
            </div>
            <div>
              <strong>Protection des données</strong>
              <p>Conformément au RGPD, nous nous engageons à protéger vos données personnelles. Les informations collectées via notre formulaire de contact ne sont utilisées que pour répondre à vos demandes.</p>
            </div>
            <div>
              <strong>Cookies</strong>
              <p>Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de tracking n'est utilisé.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // FOOTER
  const Footer = () => (
    <footer className="bg-black py-8 border-t border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          © 2024 Original Fried Chicken - Tous droits réservés
        </p>
      </div>
    </footer>
  );

  return (
    <div className="App bg-black min-h-screen">
      <Navigation />
      <div style={{ paddingTop: 68 }}></div>
      {!selectedCategory && (
        <>
          <HeroSection />
          <MenuCategoriesSection />
        </>
      )}
      {selectedCategory && <MenuItemsView category={selectedCategory} />}
      <ContactSection />
      <LegalSection />
      <Footer />
    </div>
  );
}

export default App;
