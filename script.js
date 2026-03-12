// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#2c2c2e');
    tg.setBackgroundColor('#1c1c1d');

    // --- CONFIGURATION DES LIENS DE CONTACT ---
    const contactLinks = [
        {
            name: 'TELEGRAM PRINCIPAL 🥇',
            url: 'https://t.me/+k4OTSjxCjyNjOWNk',
            icon: '#icon-telegram',
            id: 'telegram-main',
            className: 'telegram-main', // Référence le CSS Bleu
            text: "TELEGRAM PRINCIPAL 🥇"
        },
        {
            name: 'POTATO PRINCIPAL 🥔',
            url: 'https://duanym138.org/TERPSLAB33',
            icon: '#icon-potato',
            id: 'potato-main',
            className: 'potato-main', // Référence le CSS Marron/Doré
            text: "POTATO PRINCIPAL 🥔"
        },
        {
            name: 'PAGE INSTAGRAM 📸',
            url: 'https://www.instagram.com/terps.lab?igsh=eGF6aTV2dTlrbGxi&utm_source=qr', // <--- Pense à mettre ton vrai lien Insta ici !
            icon: '#icon-instagram',
            id: 'insta-main',
            className: 'insta-main', // Référence le CSS Sunset
            text: "PAGE INSTAGRAM 📸"
        }, 
        {
            name: 'SNAPCHAT 👻',
            url: 'https://snapchat.com/t/M9TLDs9L',
            icon: '#icon-snapchat', // J'utilise l'icone signal car Luffa n'a pas d'icone dédiée
            id: 'snap-main',
            className: 'snap-main', // Référence le CSS Violet
            text: "SNAPCHAT 👻"
        }/*,
        {
            name: 'TELEGRAM DE SECOURS 🛟',
            url: '',
            icon: '#icon-telegram',
            id: 'telegram-secours',
            className: 'telegram-secours', // Référence le CSS Bleu
            text: "TELEGRAM DE SECOURS 🛟"
        } */
    ];

    // --- DONNÉES DE L'APPLICATION (NOUVELLE STRUCTURE) ---
    const appData = [

        {
            id: 'PACK PROMO🎁',
            name: 'PACK PROMO🎁',
            farm: '',
            type: 'PACK PROMO🎁',
            quality: 'PACK PROMO🎁',
            image: 'CategPromo.png',

            farms: [
                {
                    id: 'Pack Eco 🥉',
                    name: 'Pack Eco 🥉',
                    image: '',
                    badgeText: '0 produits',
                    clickable: true,
                    products: [

                        {
                            id: 'PromoBronze',
                            name: '🎁 25G 90u + 10G Frozen + 10G Cali 🎁',
                            farm: 'TheLabSelection 🐪',
                            promoEligible: true,
                            type: 'Promo', // Important pour le CSS
                            image: '', // Pas besoin d'image
                            video: '',
                            description: '',
                            clickable: true, // On met à TRUE pour que le curseur change
                            tarifs: [
                                { weight: 'Pack', price: 260.00 },
                            ]
                        }
                    ]
                },
                {
                    id: 'PACK PREMIUM 🥈',
                    name: 'PACK PREMIUM 🥈',
                    image: '',
                    badgeText: '0 produits',
                    clickable: true,
                    products: [

                        {
                            id: 'PromoArgente',
                            name: '🎁 10G Frozen + 5G PlasmaStatic + 15G Cali  🎁',
                            farm: 'TheLabSelection 🐪',
                            promoEligible: true,
                            type: 'Promo', // Important pour le CSS
                            image: '', // Pas besoin d'image
                            video: '',
                            description: '',
                            clickable: true, // On met à TRUE pour que le curseur change
                            tarifs: [
                                { weight: 'Pack', price: 240.00 },
                            ]
                        }
                    ]
                },
                {
                    id: 'PACK DE LUXE 🥇',
                    name: 'PACK DE LUXE 🥇',
                    image: '',
                    badgeText: '0 produits',
                    clickable: true,
                    products: [

                        {
                            id: 'PromoArgPromoOrente',
                            name: '🎁 -1 Olive (10g) PlasmaStatic + 10g Cali + PLEIN DE CADEAUX À VOUS OFFRIR  🎁',
                            farm: 'TheLabSelection 🐪',
                            promoEligible: true,
                            type: 'Promo', // Important pour le CSS
                            image: '', // Pas besoin d'image
                            video: '',
                            description: '',
                            clickable: true, // On met à TRUE pour que le curseur change
                            tarifs: [
                                { weight: 'Pack', price: 210.00 },
                            ]
                        }
                    ]
                }
            ]
        },
        // --- Catégorie 1: HASH ---
        {
            id: 'HASH',
            name: '🍫 Hash 🍫',
            farm: '',
            type: 'Hash',
            quality: ' 🍫 Hash 🍫',
            image: 'CategHash.png', // Image de la catégorie

            // La catégorie contient maintenant des "farms"
            farms: [
                {
                    id: 'The Gaz SÉLECTION🇲🇦',
                    name: 'The Gaz SÉLECTION 🇲🇦',
                    image: '', // Mets une image de farm si tu veux
                    badgeText: '5 produits',
                    products: [
                        {
                            id: '120u PARMESAN COOKIES 🍪',
                            //  flag: '🇺🇸',
                            name: '120u PARMESAN COOKIES 🍪',
                            farm: 'The Gaz SÉLECTION 🇲🇦',
                            promoEligible: true,
                            type: 'thegaz',
                            image: 'ProductCook.jpg',
                            video: 'VideoCook.mp4',
                            description: '🥧 DRY-SIFT 120u PREMIUM 🥧',
                            tarifs: [
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 150.00 },
                                { weight: '50g', price: 250.00 },
                                { weight: '100g', price: 480.00 },
                            ]
                        },
                        {
                            id: '120u HAWAIAN RAIN🥥',
                            //  flag: '🇺🇸',
                            name: '120u HAWAIAN RAIN🥥',
                            farm: 'The Gaz SÉLECTION 🇲🇦',
                            promoEligible: true,
                            type: 'thegaz',
                            image: 'ProductRain.jpg',
                            video: 'VideoRain.mp4',
                            description: '🥧 DRY-SIFT 120u PREMIUM 🥧',
                            tarifs: [
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 150.00 },
                                { weight: '50g', price: 250.00 },
                                { weight: '100g', price: 480.00 },
                            ]
                        },
                        {
                            id: '90u MANDARINA 🍊',
                            //  flag: '🇺🇸',
                            name: '90u MANDARINA 🍊',
                            farm: 'The Gaz SÉLECTION 🇲🇦',
                            promoEligible: true,
                            type: 'thegaz',
                            image: 'ProductMand.jpg',
                            video: 'VideoMand.mp4',
                            description: '💎 DRY-SIFT 90u PREMIUM 💎\n\nUne explosion d\'agrumes ! 🍊💨\n\nCe 90u Mandarina se distingue par son arôme de clémentine fraîche et sa texture mousseuse ultra-propre. Un régal pour les amateurs de terps fruités.\n\n🧠 Effet : Énergisant et créatif au début, puis relaxation douce.\n👅 Goût : Mandarine sucrée et zeste d\'orange.',
                            tarifs: [
                                { weight: '5g', price: 40.00 },
                                { weight: '10g', price: 70.00 },
                                { weight: '20g', price: 120.00 },
                                { weight: '50g', price: 250.00 },
                                { weight: '100g', price: 400.00 },
                            ]
                        },
                        {
                            id: '90u PAPAYA 🥭',
                            //  flag: '🇺🇸',
                            name: '90u PAPAYA 🥭',
                            farm: 'The Gaz SÉLECTION 🇲🇦',
                            promoEligible: true,
                            type: 'thegaz',
                            image: 'ProductPapaya.jpg',
                            video: 'VideoPapaya.mp4',
                            description: '💎 DRY-SIFT 90u PREMIUM 💎\n\nLe Roi du Tropique ! 🥭 tropical\n\nTexture grasse et collante, typique d\'une extraction de qualité. Une odeur de mangue mûre et de papaye qui envahit la pièce dès l\'ouverture. 🏝️🔥\n\n🧠 Effet : Puissant, apaisant, idéal pour déconnecter.\n👅 Goût : Fruits tropicaux exotiques et note crémeuse.',
                            tarifs: [
                                { weight: '5g', price: 40.00 },
                                { weight: '10g', price: 70.00 },
                                { weight: '20g', price: 120.00 },
                                { weight: '50g', price: 250.00 },
                                { weight: '100g', price: 400.00 },
                            ]
                        },
                        {
                            id: '90u GOLDEN CHERRY 🍒',
                            //  flag: '🇺🇸',
                            name: '90u GOLDEN CHERRY 🍒',
                            farm: 'The Gaz SÉLECTION 🇲🇦',
                            promoEligible: true,
                            type: 'thegaz',
                            image: 'ProductCherry.jpg',
                            video: 'VideoCherry.mp4',
                            description: '💎 DRY-SIFT 90u PREMIUM 💎\n\nLa Cerise sur le gâteau ! 🍒✨\n\nUn profil "Golden" rare avec des reflets ambrés. Le mariage parfait entre le sucre de la cerise et la puissance du Dry-Sift haut de gamme. 🍭🌬️\n\n🧠 Effet : Équilibré, parfait pour une consommation tout au long de la journée.\n👅 Goût : Cerise griotte et bonbon acidulé.',
                            tarifs: [
                                { weight: '5g', price: 40.00 },
                                { weight: '10g', price: 70.00 },
                                { weight: '20g', price: 120.00 },
                                { weight: '50g', price: 250.00 },
                                { weight: '100g', price: 400.00 },
                            ]
                        },
                        {
                            id: '90u SourDiesel ⛽️',
                            //  flag: '🇺🇸',
                            name: '90u SourDiesel ⛽️',
                            farm: 'The Gaz SÉLECTION 🇲🇦',
                            promoEligible: true,
                            type: 'thegaz',
                            image: 'ProductSour.png',
                            video: 'VideoSour.mp4',
                            description: '💎 DRY-SIFT 90u PREMIUM 💎\n\nLa légende du gaz débarque ! ⛽️\n\nUn Sour Diesel d\'exception sélectionné par nos soins. Texture sableuse parfaite et odeur de carburant ultra-prononcée. 🧪💨\n\n🧠 Effet : Montée cérébrale puissante.\n👅 Goût : Citron acide et Gaz authentique.',
                            tarifs: [
                                { weight: '5g', price: 40.00 },
                                { weight: '10g', price: 70.00 },
                                { weight: '20g', price: 120.00 },
                                { weight: '50g', price: 250.00 },
                                { weight: '100g', price: 400.00 },
                            ]
                        }

                    ]
                },
                {
                    id: 'FULLMELT FARM',
                    name: '👨‍🌾 FULLMELT FARM 👨‍🌾',
                    image: '', // Mets une image de farm si tu veux
                    badgeText: '5 produits',
                    products: [
                        {
                            id: 'BERRY CAKE 🎂🫐',
                            //  flag: '🇺🇸',
                            name: 'BERRY CAKE 🎂🫐',
                            farm: 'FULLMELTFARM 🍶',
                            promoEligible: true,
                            type: '90u 🍓',
                            image: 'ProductBc.jpg',
                            video: 'VideoBc.mov',
                            description: '',
                            tarifs: [
                                { weight: '25g', price: 110.00, oldPrice: 120.00 },
                                { weight: '50g', price: 200.00, oldPrice: 220.00 },
                                { weight: '100g', price: 370.00, oldPrice: 400.00 },
                                { weight: '200g', price: 740.00, oldPrice: 760.00 },
                            ]
                        },
                        {
                            id: 'COBRA CHI 🐍',
                            //  flag: '🇺🇸',
                            name: 'COBRA CHI 🐍',
                            farm: 'FULLMELTFARM 🍶',
                            promoEligible: true,
                            type: '90u 🍓',
                            image: 'ProductChi.jpg',
                            video: 'VideoChi.mov',
                            description: '',
                            tarifs: [
                                { weight: '25g', price: 110.00, oldPrice: 120.00 },
                                { weight: '50g', price: 200.00, oldPrice: 220.00 },
                                { weight: '100g', price: 370.00, oldPrice: 400.00 },
                                { weight: '200g', price: 740.00, oldPrice: 760.00 },
                            ]
                        },
                        {
                            id: 'TANGERINE CITRUS 🍋',
                            //  flag: '🇺🇸',
                            name: 'TANGERINE CITRUS 🍋',
                            farm: 'FULLMELTFARM 🍶',
                            promoEligible: true,
                            type: '90u 🍓',
                            image: 'ProductCitrus.jpg',
                            video: 'VideoCitrus.mov',
                            description: '',
                            tarifs: [
                                { weight: '25g', price: 110.00, oldPrice: 120.00 },
                                { weight: '50g', price: 200.00, oldPrice: 220.00 },
                                { weight: '100g', price: 370.00, oldPrice: 400.00 },
                                { weight: '200g', price: 740.00, oldPrice: 760.00 },
                            ]
                        },

                        {
                            id: 'OLIVE 🧬',
                            //  flag: '🇺🇸',
                            name: 'OLIVE 🧬',
                            farm: 'FULLMELTFARM 🍶',
                            promoEligible: true,
                            type: '🔮 Plasma Static 🔮',
                            image: 'ProductOlive.png',
                            video: 'VideoOlive.mov',
                            description: '🎨 STRAIN DISPO 🎨\n\n FORBIDEN FRUIT 🍇 \n RAIMBOW BELTS 🦠 \n BANANA SKITLEZ 🍌',
                            tarifs: [
                                { weight: '5g', price: 90.00, oldPrice: 100.00 },
                                { weight: '10g', price: 170.00, oldPrice: 180.00 },
                                { weight: '20g', price: 300.00, oldPrice: 350.00 },
                                { weight: '50g', price: 600.00, oldPrice: 650.00 },
                                { weight: '100g', price: 1100.00, oldPrice: 1250.00 },
                            ]
                        },


                        {
                            id: 'GRAPE GAZ 🍇',
                            //  flag: '🇺🇸',
                            name: 'GRAPE GAZ 🍇',
                            farm: 'FULLMELTFARM 🍶',
                            promoEligible: true,
                            type: '💎 Fresh Frozen 💎',
                            image: 'ProductFrozen2.jpg',
                            video: 'VideoFrozen2.mov',
                            description: 'PRODUIT SEC ET CASSANT ⭐️⭐️⭐️⭐️⭐️ ',
                            tarifs: [
                                { weight: '5g', price: 70.00, oldPrice: 80.00 },
                                { weight: '10g', price: 120.00, oldPrice: 140.00 },
                                { weight: '20g', price: 200.00, oldPrice: 220.00 },
                                { weight: '50g', price: 400.00, oldPrice: 450.00 },
                                { weight: '100g', price: 750.00, oldPrice: 800.00 },
                            ]
                        },
                        {
                            id: 'FRUIT JOY 🥭',
                            //  flag: '🇺🇸',
                            name: 'FRUIT JOY 🥭',
                            farm: 'FULLMELTFARM 🍶',
                            promoEligible: true,
                            type: '💎 Fresh Frozen 💎',
                            image: 'ProductFrozen1.jpg',
                            video: 'VideoFrozen1.mov',
                            description: 'PRODUIT SEC ET CASSANT ⭐️⭐️⭐️⭐️⭐️',
                            tarifs: [
                                { weight: '5g', price: 70.00, oldPrice: 80.00 },
                                { weight: '10g', price: 120.00, oldPrice: 140.00 },
                                { weight: '20g', price: 200.00, oldPrice: 220.00 },
                                { weight: '50g', price: 400.00, oldPrice: 450.00 },
                                { weight: '100g', price: 750.00, oldPrice: 800.00 },
                            ]
                        },
                        {
                            id: 'GARLIC COOKIES 🍪',
                            //  flag: '🇺🇸',
                            name: 'GARLIC COOKIES 🍪',
                            farm: 'FULLMELTFARM 🍶',
                            promoEligible: true,
                            type: '💎 Fresh Frozen 💎',
                            image: 'ProductFrozen3.jpg',
                            video: 'VideoFrozen3.mov',
                            description: 'PRODUIT SEC ET CASSANT ⭐️⭐️⭐️⭐️⭐️',
                            tarifs: [
                                { weight: '5g', price: 70.00, oldPrice: 80.00 },
                                { weight: '10g', price: 120.00, oldPrice: 140.00 },
                                { weight: '20g', price: 200.00, oldPrice: 220.00 },
                                { weight: '50g', price: 400.00, oldPrice: 450.00 },
                                { weight: '100g', price: 750.00, oldPrice: 800.00 },
                            ]
                        }

                    ]
                }
            ]
        },

        // --- Catégorie 2: BEUH ---
        {
            id: 'WEED',
            name: ' 🕯 Weed 🕯',
            type: 'Weed',
            image: 'CategWeed.png', 
            // On supprime le tableau "farms" et on met "products" direct ici
            products: [
                {
                    id: 'PAPAYA_CHERRY_GELATO',
                    name: 'PAPAYA x CHERRY GELATO 🍒 🥭',
                    farm: 'CALI NO BRAND ™️©️',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductGush.jpg',
                    video: 'VideoGush.mp4',
                    description: 'Le mariage de la Papaye et de la Cerise Gelato. Très fruité. \n\n 🍒 LA FOLIE 🤪 ‼️ Goût intense et buds magnifiques.',
                    tarifs: [
                        { weight: '10g', price: 60.00, oldPrice: 80.00 },
                        { weight: '25g', price: 150.00, oldPrice: 180.00 },
                        { weight: '50g', price: 290.00, oldPrice: 350.00 },
                        { weight: '100g', price: 550.00, oldPrice: 600.00 },
                    ]
                }   
            ]
        },
        // --- Catégorie 3:      Extraction

        /*  {
             id: 'Extraction',
             name: '⛏️ Extraction ⛏️',
             farm: '',
             type: 'Extraction',
             quality: '⛏️ Extraction ⛏️',
             image: 'CategExtraction.jpg',
 
             farms: [
                 {
                 id: 'VAPE',
                     name: '😶‍🌫️ VAPE 😶‍🌫️',
                     image: 'CategHash.png', 
                     badgeText: '0 produits',
                     clickable: true,  
                     products: [
 
                         {
                             id: 'VAPE THC',
                             // flag: '🇺🇸',
                             name: 'VAPE THC 💨',
                             farm: 'JUNGLE BOYS 🇺🇸 & DABWOODS 🇺🇸',
                             promoEligible: true,
                             type: 'Vape',
                             image: 'ProductVape.jpg',
                             video: 'ProductVape.jpg',
                             description: '🎯 Pur à 87%-95%THC  | Delta-9 \n ⚡ Effet ultra rapide & intense \n 💎 Qualité distillat premium • Sans coupe',
                             useSmallText: true,
                             tarifs: [
                                 { weight: '1 VAPE 🍃', price: 60.00 },
                                 { weight: '3 VAPE 🍃', price: 150.00 },
                                 { weight: '10 VAPE 🍃', price: 450.00 },
                             ]
                         }
                     ]
                 },
                 {
                     id: 'SERINGUE WAX',
                         name: '💉 SERINGUE WAX 💉',
                         image: 'CategHash.png', 
                         badgeText: '0 produits',
                         clickable: true,  
                         products: [
     
                             {
                                 id: 'SERINGUE THC',
                                 // flag: '🇺🇸',
                                 name: 'SERINGUE THC 💨',
                                 farm: 'DELTA CORP ®️ 🇺🇸',
                                 promoEligible: true,
                                 type: 'Vape',
                                 image: 'ProductSer.png',
                                 images: [
                                     'ProductSer1.jpg',  // Photo 1
                                     'ProductSer2.jpg', // Photo 2 (Assure-toi d'avoir uploadé ce fichier !)
                                     'ProductSer3.jpg',  // Photo 3 (Assure-toi d'avoir uploadé ce fichier !)
                                     'ProductSer4.jpg', // Photo 2 (Assure-toi d'avoir uploadé ce fichier !)
                                     'ProductSer5.jpg'  // Photo 3 (Assure-toi d'avoir uploadé ce fichier !)
 
                                 ],
                             
                                 video: '', // Pas de vidéo pour celui-là
                                 description: '🎯 Pur à 91%THC  | THC \n ⚡ Effet ultra rapide & intense \n 💎 Qualité distillat premium • Sans coupe \n\n ℹ️ A mettre au tour du join ou meme dedans ℹ️',
                                 tarifs: [
                                     { weight: '1 💉', price: 60.00 },
                                     { weight: '3 💉 ', price: 150.00 },
                                     { weight: '10 💉', price: 450.00 },
                                 ]
                             }
                         ]
                     }
             ]
         }, 
*/
        // PACK NOEL 


       
    ];

    // --- VARIABLES D'ÉTAT ---
    let cart = [];
    let currentFilters = {
        searchTerm: '',
        quality: 'all',
        farm: 'all'
    };
    let currentView = 'categories'; // 'categories', 'farms', ou 'products'
    let currentCategoryId = null; // Garde en mémoire la catégorie sélectionnée
    let currentFarmId = null; // Garde en mémoire la farm sélectionnée
    let appliedPromo = null; // Pour suivre le code promo
    let paymentMethod = 'Espèce'; // Méthode de paiement par défaut

    // --- DÉFINIS TES CODES PROMO ICI ---
    const validPromoCodes = {
        "ACTUPLUG33": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible' // 'eligible' (articles marqués) ou 'all' (tout le panier)
        },
        /*  "WELCOME5": {
             type: 'percent',   // 20%
             value: 20,        // 20%
             appliesTo: 'all' // S'applique à tout
         } */
        // Ajoute d'autres codes ici

        // ADD CUMULABLE FONCTION POUR PLUTARD
    };


    // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const loaderPage = document.getElementById('page-loader');

    const filterContainer = document.querySelector('.filters');

    // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
    const searchFilterWrapper = document.getElementById('search-filter').parentElement;
    const qualityFilterWrapper = document.getElementById('quality-filter').parentElement;
    const farmFilterWrapper = document.getElementById('farm-filter').parentElement;
    // --- FIN NOUVEAUX SÉLECTEURS ---

// --- HELPER : TROUVER UN PRODUIT PAR SON ID (Version Correcte) ---
function getProductById(productId) {
    for (const category of appData) {
        // Cas 1 : La catégorie a des produits en direct (comme ta nouvelle structure Weed)
        if (category.products) {
            const product = category.products.find(p => p.id === productId);
            if (product) return product;
        }
        
        // Cas 2 : La catégorie a des sous-catégories/farms (comme Hash)
        if (category.farms) {
            for (const farm of category.farms) {
                if (farm.products) {
                    const product = farm.products.find(p => p.id === productId);
                    if (product) return product;
                }
            }
        }
    }
    return undefined;
}

    // --- NAVIGATION ---
    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        // S'assure que la page existe avant de l'activer
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('active');
        }

        // --- GESTION AUTOMATIQUE DES BOUTONS NAV ---
        const homeNav = document.getElementById('nav-menu');
        const infoNav = document.getElementById('nav-info'); // On ajoute l'info
        const contactNav = document.getElementById('nav-contact');

        // On reset tout
        homeNav.classList.remove('active');
        infoNav.classList.remove('active');
        contactNav.classList.remove('active');

        // On active le bon
        if (pageId === 'page-contact') {
            contactNav.classList.add('active');
        } else if (pageId === 'page-info') {
            infoNav.classList.add('active');
        } else {
            // Pour page-home, page-produit, panier, etc.
            homeNav.classList.add('active');
        }
    }

    // --- LOGIQUE D'AFFICHAGE ---

    // --- MODIFIÉ ( sans sous categorie ): renderHomePage ---

    // --- NOUVELLE FONCTION renderFarmList (Version Boutons) ---
    function renderFarmList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }

        const farms = category.farms;

        productListContainer.innerHTML = '';
        if (farms.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune sous-catégorie disponible.</p>';
            return;
        }

        // 1. Créer un conteneur pour les boutons
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'sub-categories-container';

        farms.forEach(farm => {
            // 2. Au lieu d'une 'div.farm-card', on crée un 'button.sub-category-btn'
            const button = document.createElement('button');
            button.className = 'sub-category-btn';
            button.dataset.farmId = farm.id; // Important pour le clic

            if (farm.clickable === false) {
                button.style.opacity = '0.6';
                button.style.cursor = 'not-allowed';
            }

            const productCount = farm.products.length;
            // Le texte du badge (ex: "5 produits" ou le texte personnalisé)
            const badgeTextContent = productCount > 0 ? `${productCount} produit${productCount > 1 ? 's' : ''}` : (farm.badgeText || '');

            // 3. Le contenu du bouton : juste le nom et le badge (plus d'image géante)
            button.innerHTML = `
            <span>${farm.name}</span>
            ${badgeTextContent ? `<span class="sub-btn-badge">${badgeTextContent}</span>` : ''}
        `;

            // Ajoute le bouton au conteneur
            buttonsContainer.appendChild(button);
        });

        // Ajoute le conteneur à la page
        productListContainer.appendChild(buttonsContainer);
    }


    // --- NOUVELLE FONCTION ---
    // Affiche la liste des FARMS pour une catégorie
    /*  function renderFarmList(categoryId) {
         const category = appData.find(c => c.id === categoryId);
         if (!category) {
             productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
             return;
         }
 
         const farms = category.farms; // Pas de filtres ici pour l'instant
 
         productListContainer.innerHTML = '';
         if (farms.length === 0) {
             productListContainer.innerHTML = '<p class="no-results">Aucune farm trouvée pour cette catégorie.</p>';
             return;
         }
 
         farms.forEach(farm => {
             const card = document.createElement('div');
             card.className = 'farm-card'; // NOUVELLE CLASSE
             card.dataset.farmId = farm.id; // DATASET IMPORTANT
 
             if (farm.clickable === false) {
                 card.classList.add('unclickable');
             }
 
             const productCount = farm.products.length;
 
             let badgeHTML = '';
             if (farm.badgeText) {
                 badgeHTML = `<div class="card-badge">${farm.badgeText}</div>`;
             }
 
             card.innerHTML = `
             <div class="card-badge">${productCount > 0 ? productCount + ' produit' + (productCount > 1 ? 's' : '') : farm.badgeText || ''}</div>
             
             <img src="${farm.image}" alt="${farm.name}">
            
         `;
             productListContainer.appendChild(card);
         });
     } */

    function renderHomePage() {
        // Toujours afficher le conteneur principal des filtres
        filterContainer.style.display = 'flex';

        // On enlève les anciens boutons "retour"
        const existingBackBtnCat = filterContainer.querySelector('.back-to-categories-btn');
        if (existingBackBtnCat) existingBackBtnCat.remove();
        const existingBackBtnFarm = filterContainer.querySelector('.back-to-farms-btn');
        if (existingBackBtnFarm) existingBackBtnFarm.remove();


        if (currentView === 'categories') {
            renderCategoryList();

            // --- GESTION DES FILTRES (Vue Catégorie) ---
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'flex'; // On montre QUE la qualité

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

        } else if (currentView === 'farms') {
            // --- MIS EN COMMENTAIRE COMME DEMANDÉ ---

            renderFarmList(currentCategoryId);

            // --- GESTION DES FILTRES (Vue Farms) ---
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'none';

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

            // --- AJOUT BOUTON RETOUR (vers Catégories) ---
            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn';
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
            backButton.style.cssText = `background: linear-gradient(180deg, black, transparent); 
            border-bottom: 2px solid #f78900;
            border-top: none;
            border-left: none;
            border-right: none;
        color: white; padding: 10px 15px; 
        border-radius: 10px; font-size: 1.1rem; 
        font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh;    font-family: Copperplate;
        `;
            filterContainer.prepend(backButton);

            // --- FIN DU BLOC COMMENTÉ ---

        } else if (currentView === 'products') {
            // On appelle la fonction de rendu qui gère déjà son propre bouton
            renderProductList(currentCategoryId);

            // GESTION DES FILTRES ET DE LA GRILLE
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; 
        }
    }

    // --- MODIFIÉ : renderCategoryList ---
    // Prend en compte le filtre qualité
    function renderCategoryList() {
        const filteredCategories = appData.filter(category => {
            const searchMatch = category.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            // --- AJOUT ---
            const qualityMatch = currentFilters.quality === 'all' || category.quality === currentFilters.quality;
            return searchMatch && qualityMatch;
            // --- FIN AJOUT ---
        });

        productListContainer.innerHTML = '';
        if (filteredCategories.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
            return;
        }

        filteredCategories.forEach(category => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.categoryId = category.id;

            card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
              
            `;
            productListContainer.appendChild(card);
        });
    }

    function renderProductList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }
    
        // --- 1. NETTOYAGE DES BOUTONS PRÉCÉDENTS ---
        const oldBackButtons = filterContainer.querySelectorAll('.back-to-categories-btn, .back-to-farms-btn');
        oldBackButtons.forEach(btn => btn.remove());
    
        let allProducts = [];
    
        // --- 2. RÉCUPÉRATION DES PRODUITS ---
        if (category.products) {
            allProducts = category.products;
        } 
        else if (category.farms) {
            if (currentFarmId) {
                const selectedFarm = category.farms.find(f => f.id === currentFarmId);
                if (selectedFarm) allProducts = selectedFarm.products;
            } else {
                allProducts = category.farms.flatMap(farm => farm.products);
            }
        }
    
        // --- 3. CRÉATION DU BOUTON RETOUR UNIQUE ---
        const backButton = document.createElement('button');
        backButton.className = 'back-to-categories-btn';
        backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
        backButton.style.cssText = `background: linear-gradient(180deg, black, transparent); border-bottom: 2px solid #f78900; border-top: none; border-left: none; border-right: none; color: white; padding: 10px 15px; border-radius: 10px; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh; font-family: Copperplate;`;
        filterContainer.prepend(backButton);
    
        // --- 4. FILTRAGE ET AFFICHAGE ---
        if (!allProducts || allProducts.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit trouvé.</p>';
            return;
        }
    
        const filteredProducts = allProducts.filter(product => {
            const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            const farmMatch = currentFarmId ? true : (currentFilters.farm === 'all' || product.farm === currentFilters.farm);
            return searchMatch && farmMatch;
        });
    
        productListContainer.innerHTML = '';
        let lastType = ''; 
    
        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.dataset.productId = product.id;
        
            // SI C'EST UN PACK PROMO : Design spécial sans image
            if (product.type === 'Promo') {
                card.className = 'product-card product-item-card promo-card';
                card.innerHTML = `
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="farm">${product.farm}</div>
                        <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                    </div>
                `;
            } else {
                // DESIGN NORMAL : Pour les autres produits avec image
                card.className = 'product-card product-item-card';
                let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="info">
                        <div class="name">${product.name} ${flagHTML}</div>
                        <div class="farm">${product.farm}</div>
                        <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                    </div>
                `;
            }
            productListContainer.appendChild(card);
        });
    }

    // --- FONCTION MODIFIÉE POUR GÉRER LE CARROUSEL ---
    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;

        // 1. On récupère la zone où s'affiche l'image/vidéo
        // (Note: dans ton HTML actuel c'est une balise <video>, on va peut-être devoir la remplacer)
        const mediaContainer = document.querySelector('#page-product .page-content');

        // On cherche si on a déjà créé un wrapper média, sinon on nettoie le haut
        // Pour faire simple avec ton code actuel, on va reconstruire le haut de la page produit dynamiquement

        // --- CONSTRUCTION DU MÉDIA (Vidéo ou Carrousel) ---
        let mediaHTML = '';

        if (product.images && product.images.length > 0) {
            // CAS 1 : C'est un CARROUSEL (Seringue)
            const slides = product.images.map(img => `
            <div class="carousel-slide">
                <img src="${img}" alt="${product.name}">
            </div>
        `).join('');

            mediaHTML = `
            <div class="carousel-container">
                ${slides}
            </div>
            <div class="carousel-hint">↔️ Swipe pour voir les photos</div>
        `;
        } else {
            // CAS 2 : C'est une VIDÉO ou une IMAGE UNIQUE (Les autres produits)
            // On garde ta logique actuelle avec la vidéo
            mediaHTML = `
            <video class="product-video" poster="${product.image}" src="${product.video || ''}" ${product.video ? 'controls' : ''}></video>
        `;
        }

        document.getElementById('product-page-title').innerText = product.name;
        const detailsContainer = document.getElementById('product-details-content');

        // --- GESTION DES TARIFS ---
        // (On garde ta logique pour le petit texte)
        const weightStyle = product.useSmallText ? 'font-size: 12px; line-height: 1.2;' : '';

        let tarifsHTML = product.tarifs.map(tarif => {
            // Si un ancien prix existe, on crée le HTML pour l'afficher barré
            const oldPriceHTML = tarif.oldPrice 
                ? `<span style="text-decoration: line-through; color: #ff3b30; font-size: 0.8em; margin-top: -25px; display: block;">${tarif.oldPrice.toFixed(2)}€</span>` 
                : '';
        
            return `
            <div class="tarif-item">
                <div class="box-tarif">
                    <div class="tarif-wieght" style="${weightStyle}">${tarif.weight}</div>
                    <div class="tarif-price">
                        ${oldPriceHTML}
                        <span style="font-size: 1.2em; color: #ffffff; font-weight: bold;">${tarif.price.toFixed(2)}€</span>
                    </div>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                    <svg width="20" height="20"><use href="#icon-cart"/></svg>
                </button>
            </div>
            `;
        }).join('');
        let descriptionHTML = '';
        if (product.description) {
            descriptionHTML = `<div class="product-description">${product.description}</div>`;
        }

        // --- ON INJECTE TOUT DANS LA PAGE ---
        // Attention : On modifie légèrement la structure HTML via JS pour insérer le média au bon endroit
        // On vide le contenu précédent pour éviter les doublons
        const pageContent = document.querySelector('#page-product .page-content');

        // On reconstruit le contenu de la page produit proprement
        pageContent.innerHTML = `
        ${mediaHTML}
        <div id="product-details-content" class="product-details">
            <div class="name">${product.name}</div>
            <div class="farm">${product.farm}</div>
            ${descriptionHTML} 
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">
                ${tarifsHTML}
            </div>
        </div>
    `;

        showPage('page-product');
    }
    // Met à jour l'affichage du panier (inchangé)
    function renderCart() {
        const cartContainer = document.getElementById('cart-items-container');
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
            document.getElementById('cart-total-price').innerText = '0.00€';
            updateCartCount();
            return;
        }

        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        document.getElementById('cart-total-price').innerText = `${total.toFixed(2)}€`;
        updateCartCount();
    }

    // Affiche la page de confirmation et gere les codes promo
    function renderConfirmation() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        // --- Logique de calcul des prix ---
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        let discountableAmount = 0;

        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];

            if (promo.appliesTo === 'eligible') {
                // Calcul sur les articles éligibles
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) {
                        discountableAmount += item.totalPrice;
                    }
                });
            } else {
                // Calcul sur tout le panier
                discountableAmount = subTotal;
            }

            if (promo.type === 'percent') {
                discount = (discountableAmount * promo.value) / 100;
            } else { // 'fixed'
                discount = promo.value;
            }
        }

        // Assure que la réduc ne dépasse pas le montant
        if (discount > subTotal) {
            discount = subTotal;
        }

        const totalPrice = subTotal - discount;
        // --- Fin de la logique de calcul ---

        // Mise à jour du résumé (panier en haut)
        document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
        document.getElementById('confirmation-total-price').innerText = `${totalPrice.toFixed(2)}€`;

        // Remplissage de la liste des articles (inchangé)
        const itemsList = document.getElementById('confirmation-items-list');
        itemsList.innerHTML = cart.map((item, index) => `
             <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div>${index + 1}. ${item.name}</div>
                    <div>Quantité: ${item.quantity}x ${item.weight}</div>
                    <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
                </div>
            </div>
        `).join('');

        // Mise à jour de l'UI Promo
        const promoInputContainer = document.getElementById('promo-input-container');
        const promoAppliedContainer = document.getElementById('promo-applied-container');
        if (appliedPromo) {
            promoInputContainer.style.display = 'none';
            promoAppliedContainer.style.display = 'flex';
            document.getElementById('promo-applied-text').innerText = `Code "${appliedPromo}" appliqué !`;
        } else {
            promoInputContainer.style.display = 'flex';
            promoAppliedContainer.style.display = 'none';
            document.getElementById('promo-code-input').value = ''; // Reset l'input
        }

        // Mise à jour de l'UI Paiement
        document.querySelectorAll('.payment-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.method === paymentMethod);
        });

        // Mise à jour du résumé final
        const summaryContainer = document.getElementById('confirmation-summary');
        let summaryHTML = `
            <div class="summary-line">
                <span>Sous-total:</span>
                <span>${subTotal.toFixed(2)}€</span>
            </div>
        `;
        if (discount > 0) {
            summaryHTML += `
            <div class="summary-line discount">
                <span>Réduction:</span>
                <span>-${discount.toFixed(2)}€</span>
            </div>
            `;
        }
        summaryHTML += `
            <div class="summary-line total">
                <span>💰 Total final:</span>
                <span>${totalPrice.toFixed(2)}€</span>
            </div>
        `;
        summaryContainer.innerHTML = summaryHTML;

        /* const copyBtn = document.getElementById('copy-order-btn');
        const contactBtn = document.getElementById('confirm-order-button');

        // État initial: Copier = Rouge (main), Contacter = Gris (secondary/disabled)
        copyBtn.classList.add('main-action-btn');
        copyBtn.classList.remove('secondary-action-btn');

        contactBtn.classList.add('secondary-action-btn');
        contactBtn.classList.remove('main-action-btn');
        contactBtn.disabled = true; // On le re-verrouille */

        showPage('page-confirmation');
    }
    // Affiche la page de contact (inchangé)
    function renderContactPage() {
        const linksContainer = document.getElementById('contact-links-container');
        linksContainer.innerHTML = contactLinks.map(link => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        <svg width="24" height="24"><use href="${link.icon}"/></svg>
            <span>${link.text}</span>
        </a>
        `).join('');
    }

    // Met à jour le compteur du panier (inchangé)
    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    // --- MODIFIÉ : populateFilters ---
    // Prend les données des catégories ET des produits
    function populateFilters() {
        const searchFilter = document.getElementById('search-filter');
        const qualityFilter = document.getElementById('quality-filter');
        const farmFilter = document.getElementById('farm-filter');

const allNestedProducts = appData.flatMap(category => {
    const fromFarms = category.farms ? category.farms.flatMap(f => f.products) : [];
    const fromDirect = category.products || [];
    return [...fromFarms, ...fromDirect];
});
        // --- MODIFICATION ---
        /*    const categoryQualities = appData.map(c => c.quality);
                const productQualities = allNestedProducts.map(p => p.quality);
                const qualities = ['all', ...new Set([...categoryQualities, ...productQualities])];
        
                const categoryFarms = appData.map(c => c.farm);
                const productFarms = allNestedProducts.map(p => p.farm);
                const farms = ['all', ...new Set([...categoryFarms, ...productFarms])]; */
        // --- FIN MODIFICATION ---

        // On ne prend les "qualities" QUE des catégories
        const categoryQualities = appData.map(c => c.quality);
        const qualities = ['all', ...new Set(categoryQualities)];

        // On ne prend les "farms" QUE des produits (c'est ce que tu filtres)
        const productFarms = allNestedProducts.map(p => p.farm);
        const farms = ['all', ...new Set(productFarms)];

        qualityFilter.innerHTML = qualities.map(q => `<option value="${q}">${q === 'all' ? 'CATEGORIE' : q}</option>`).join('');
        farmFilter.innerHTML = farms.map(farm => `<option value="${farm}">${farm === 'all' ? 'LES FARM' : farm}</option>`).join('');

        searchFilter.addEventListener('input', (e) => {
            currentFilters.searchTerm = e.target.value;
            renderHomePage();
        });

        qualityFilter.addEventListener('change', (e) => {
            currentFilters.quality = e.target.value;
            renderHomePage();
        });

        farmFilter.addEventListener('change', (e) => {
            currentFilters.farm = e.target.value;
            renderHomePage();
        });
    }

    // --- NOTIFICATION (inchangé) ---
    let notificationTimeout;
    function showNotification(message) {
        const notification = document.getElementById('notification-toast');
        if (!notification) return;

        clearTimeout(notificationTimeout);
        notification.classList.remove('show');
        void notification.offsetWidth;

        notification.innerText = message;
        notification.classList.add('show');

        notificationTimeout = setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // --- LOGIQUE DU PANIER ---

    function addToCart(productId, weight, price) {
        const cartItemId = `${productId}-${weight}`;
        const existingItem = cart.find(item => item.id === cartItemId);

        const product = getProductById(productId);

        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId,
                productId: productId,
                name: product.name,
                image: product.image,
                weight: weight,
                quantity: 1,
                unitPrice: price,
                totalPrice: price
            });
        }
        renderCart();
        tg.HapticFeedback.notificationOccurred('success');
        showNotification('✅ Produit ajouté au panier !');
    }

    // updateQuantity (inchangé)
    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;

        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease') {
            item.quantity--;
        }

        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== cartItemId);
        } else {
            item.totalPrice = item.quantity * item.unitPrice;
        }
        renderCart();
    }

    // --- FORMATAGE DU MESSAGE DE COMMANDE (pour gere les promo) ---
    function formatOrderMessage() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        // Recalcul des prix pour le message
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            let discountableAmount = 0;
            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) {
                        discountableAmount += item.totalPrice;
                    }
                });
            } else {
                discountableAmount = subTotal;
            }
            if (promo.type === 'percent') {
                discount = (discountableAmount * promo.value) / 100;
            } else {
                discount = promo.value;
            }
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount;
        // Fin recalcul

        const date = new Date();
        const formattedDate = `${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()} a ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

        let message = "NOUVELLE COMMANDE\n\n";
        message += "====================\n";
        message += "RESUME:\n";
        message += `- ${totalItems} article${totalItems > 1 ? 's' : ''} commande\n`;
        message += `- Méthode de paiement: ${paymentMethod}\n`; // AJOUT
        message += "====================\n";
        message += `DETAIL DES ARTICLES:\n`;

        cart.forEach((item) => {
            message += `\n- ${item.id}`;
            message += `\n  Quantite: ${item.quantity}x ${item.weight}`;
            message += `\n  Prix unitaire: ${item.unitPrice.toFixed(2)}e`;
            message += `\n  Sous-total: ${item.totalPrice.toFixed(2)} EUR`;
        });

        message += `\n\n====================\n`;
        message += `\nSOUS-TOTAL: ${subTotal.toFixed(2)} EUR`;
        if (discount > 0) {
            message += `\nREDUCTION (${appliedPromo}): -${discount.toFixed(2)} EUR`; // AJOUT
        }
        message += `\nTOTAL FINAL: ${totalPrice.toFixed(2)} EUR`; // AJOUT
        message += " \n-LIVRAISON: A convenir\n";
        message += " \n-CONTACT: Merci de confirmer cette commande\n";
        message += ` \n-Commande passee le: ${formattedDate}\n`;
        return message;
    }

    // --- NOUVELLE FONCTION POUR COPIER DANS LE PRESSE-PAPIERS ---
    /*    function copyToClipboard(text) {
           if (navigator.clipboard) { // API moderne et sécurisée
               navigator.clipboard.writeText(text).then(() => {
                   showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                   tg.HapticFeedback.notificationOccurred('success');
               }, (err) => {
                   showNotification('❌ Erreur en copiant le message');
               });
           } else { // Ancien fallback (pour certains navigateurs)
               const textArea = document.createElement('textarea');
               textArea.value = text;
               textArea.style.position = 'fixed'; // Hors de l'écran
               document.body.appendChild(textArea);
               textArea.focus();
               textArea.select();
               try {
                   document.execCommand('copy');
                   showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                   tg.HapticFeedback.notificationOccurred('success');
               } catch (err) {
                   showNotification('❌ Erreur en copiant le message');
               }
               document.body.removeChild(textArea);
           }
       }
    */
    // --- GESTION DES ÉVÉNEMENTS ---

    // Clics sur la barre de navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;

            // Les lignes gérant la classe 'active' ont été supprimées
            // showPage(pageId) s'en occupe maintenant.

            if (pageId === 'page-contact') {
                renderContactPage();
            }

            if (pageId === 'page-home') {
                currentView = 'categories';
                currentCategoryId = null;
                // On reset TOUS les filtres
                currentFilters.searchTerm = '';
                currentFilters.quality = 'all';
                currentFilters.farm = 'all';
                document.getElementById('search-filter').value = '';
                document.getElementById('quality-filter').value = 'all';
                document.getElementById('farm-filter').value = 'all';

                renderHomePage();
            }

            showPage(pageId);
        });
    });

    // Clics sur le reste de la page
    document.body.addEventListener('click', function (e) {
        const target = e.target;

        if (target.closest('#copy-order-btn')) {
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');


            // --- AJOUT : Inverser les styles des boutons ---
            const copyBtn = document.getElementById('copy-order-btn');
            const contactBtn = document.getElementById('confirm-order-button');

            // Copier devient Gris (secondary)
            copyBtn.classList.remove('main-action-btn');
            copyBtn.classList.add('secondary-action-btn');

            // Contacter devient Rouge (main) et est activé
            contactBtn.classList.remove('secondary-action-btn');
            contactBtn.classList.add('main-action-btn');
            contactBtn.disabled = false; // <-- ON DÉVERROUILLE LE BOUTON
            return; // On s'arrête là
        }

        // 1. Clic sur une carte CATÉGORIE
        const categoryCard = target.closest('.category-card');
        if (categoryCard) {
            const categoryId = categoryCard.dataset.categoryId;
            const category = appData.find(c => c.id === categoryId);
        
            currentCategoryId = categoryId;
            
            // SI LA CATÉGORIE A DES PRODUITS DIRECTS (WEED)
            if (category.products) {
                currentView = 'products';
            } else {
                currentView = 'farms'; // POUR HASH (QUI A DES SOUS-CATÉGORIES)
            }
            
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }


        // Gère l'accordéon sur la page contact
        const accordionHeader = target.closest('.accordion-header');
        if (accordionHeader) {
            const accordionItem = accordionHeader.parentElement;

            // On ferme les autres items
            document.querySelectorAll('#page-info .accordion-item.active').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });

            // On ouvre/ferme l'item cliqué
            accordionItem.classList.toggle('active');
            return; // On arrête là pour ne pas déclencher d'autres clics
        }


        // 2. NOUVEAU : Clic sur une carte FARM (MIS EN COMMENTAIRE)
        /*   const farmCard = target.closest('.farm-card');
         if (farmCard) {
 
             if (farmCard.classList.contains('unclickable')) {
                 return;
             }
 
             currentView = 'products'; // On va à la vue "products"
             currentFarmId = farmCard.dataset.farmId;
             // On reset les filtres
             currentFilters.searchTerm = '';
             document.getElementById('search-filter').value = '';
             renderHomePage();
             return;
         } 
*/

        // 2. Clic sur un BOUTON SOUS-CATÉGORIE (Modifié)
        // AVANT C'ÉTAIT : const farmCard = target.closest('.farm-card');
        // MAINTENANT C'EST :
        const subCategoryBtn = target.closest('.sub-category-btn');

        if (subCategoryBtn) { // Si on a cliqué sur un bouton

            // Vérif si c'est cliquable (optionnel selon tes data)
            if (subCategoryBtn.style.cursor === 'not-allowed') return;

            currentView = 'products';
            // On récupère l'ID via le dataset du bouton
            currentFarmId = subCategoryBtn.dataset.farmId;

            // On reset les filtres
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 3. Clic sur une carte PRODUIT
        const productCard = target.closest('.product-item-card');
if (productCard) {
    const productId = productCard.dataset.productId;
    const product = getProductById(productId);

    // Si c'est un pack, on ne fait rien (juste l'affichage)
    if (product.type === 'Promo') {
        return; 
    }
    
    // Sinon, on ouvre la page normalement
    renderProductPage(productId);
    return;
}

        // 4. NOUVEAU : Clic sur le bouton "Retour" (vers Catégories)
        if (target.closest('.back-to-categories-btn')) {
            currentView = 'categories';
            currentCategoryId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 5. NOUVEAU : Clic sur le bouton "Retour" (vers Farms)
        if (target.closest('.back-to-farms-btn')) {
            currentView = 'farms';
            currentFarmId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // Clic sur "Appliquer" le code promo
        if (target.closest('#apply-promo-btn')) {
            const input = document.getElementById('promo-code-input');
            const code = input.value.toUpperCase(); // Mets en majuscule

            if (validPromoCodes[code]) {
                appliedPromo = code;
                tg.HapticFeedback.notificationOccurred('success');
                showNotification('✅ Code promo appliqué !');
            } else {
                appliedPromo = null; // Reset au cas où
                tg.HapticFeedback.notificationOccurred('error');
                showNotification('❌ Code promo invalide.');
            }
            renderConfirmation(); // Met à jour la page de confirmation
        }

        // Clic sur "Supprimer" le code promo
        if (target.closest('#remove-promo-btn')) {
            appliedPromo = null;
            showNotification('Code promo retiré.');
            renderConfirmation(); // Met à jour la page
        }

        // Clic sur un bouton de paiement
        if (target.closest('.payment-btn')) {
            paymentMethod = target.closest('.payment-btn').dataset.method;
            // Pas besoin de rafraîchir toute la page, juste les boutons
            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.method === paymentMethod);
            });
        }

        // Clic sur "Ajouter au panier"
        if (target.closest('.add-to-cart-btn')) {
            const btn = target.closest('.add-to-cart-btn');
            addToCart(btn.dataset.productId, btn.dataset.weight, parseFloat(btn.dataset.price));
        }

        // Clic sur les boutons de quantité
        if (target.closest('.quantity-btn')) {
            const btn = target.closest('.quantity-btn');
            updateQuantity(btn.dataset.id, btn.dataset.action);
        }

        // Clic sur le bouton "fermer"
        if (target.closest('.close-button')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur "Continuer les achats"
        if (target.closest('#cart-continue-shopping')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur les boutons "retour" (des pages produits, panier...)
        if (target.closest('.back-button')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur le bouton du panier
        if (target.closest('#home-cart-button')) {
            renderCart();
            showPage('page-cart');
        }

        // Clic sur "Commander"
        if (target.closest('#checkout-button')) {
            renderConfirmation();
        }

        // Clic sur "Modifier"
        if (target.closest('#confirmation-modify-order')) {
            showPage('page-cart');
        }

        // Clic sur "Confirmer la commande" (VERSION POTATO)
        /*    if (target.closest('#confirm-order-button')) {
               // 1. Remplace 'TON_PSEUDO_POTATO' par ton VRAI pseudo Potato.
               const targetPotatoUser = 'BPDiSPENSARY';
   
               let message = formatOrderMessage();
               message = message.replace(//g, '');
               const encodedMessage = encodeURIComponent(message);
   
              // 2. On construit le lien Potato.  https://dympt.org/ - `https://potato.im/p/u/${targetPotatoUser}?text=${encodedMessage}`;
   
               // (Utilise 'p/u/' pour un compte utilisateur, ou 'p/s/' pour un bot)
               //const potatoUrl = `https://dympt.org/${targetPotatoUser}?text=${encodedMessage}`;
               const potatoUrl = `https://dympt.org/${targetPotatoUser}`;
   
               // 3. On utilise la même fonction pour ouvrir le lien
               tg.openLink(potatoUrl);
           } */

        // Clic sur "Confirmer la commande" (VERSION COPIER/COLLER - LA SEULE FIABLE)
        if (target.closest('#confirm-order-button')) {

            // 1. TON PSEUDO TELEGRAM
            const targetUsername = 'THEGAZCOMMANDE';

            // 2. On prépare le message
            let message = formatOrderMessage();
            message = message.replace(/\*/g, ''); // On nettoie

            // 3. (Optionnel mais cool) On copie quand même dans le presse-papier en backup
            // copyToClipboard(message);

            // 4. On encode et on ouvre le lien
            const encodedMessage = encodeURIComponent(message);
            const telegramUrl = `https://t.me/${targetUsername}?text=${encodedMessage}`;

            tg.openLink(telegramUrl);
        }

    });

    // --- INITIALISATION DE L'APP ---
    function init() {
        setTimeout(() => {
            populateFilters();
            renderHomePage(); // Affiche les catégories au début
            updateCartCount();
            showPage('page-home');
        }, 1500);
    }

    init();
});