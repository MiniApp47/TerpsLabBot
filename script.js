// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener("DOMContentLoaded", function () {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#2c2c2e");
  tg.setBackgroundColor("#1c1c1d");

  // --- CONFIGURATION DES LIENS DE CONTACT ---
  const contactLinks = [
    {
      name: "TELEGRAM PRINCIPAL 🥇",
      url: "https://t.me/+QcSnntDwGQM2NGI0",
      icon: "#icon-telegram",
      id: "telegram-main",
      className: "telegram-main",
      text: "TELEGRAM PRINCIPAL 🥇",
    },
    {
      name: "POTATO PRINCIPAL 🥔",
      url: "https://tutuduanyu.org/TERPSLAB33",
      icon: "#icon-potato",
      id: "potato-main",
      className: "potato-main",
      text: "POTATO PRINCIPAL 🥔",
    },
    {
      name: "PAGE INSTAGRAM 📸",
      url: "https://www.instagram.com/terps.lab?igsh=eGF6aTV2dTlrbGxi&utm_source=qr",
      icon: "#icon-instagram",
      id: "insta-main",
      className: "insta-main",
      text: "PAGE INSTAGRAM 📸",
    },
    {
      name: "SNAPCHAT 👻",
      url: "https://snapchat.com/t/M9TLDs9L",
      icon: "#icon-snapchat",
      id: "snap-main",
      className: "snap-main",
      text: "SNAPCHAT 👻",
    },
  ];

  // --- DONNÉES DE L'APPLICATION ---
  const appData = [
    {
      id: "PACK PROMO🎁",
      name: "PACK PROMO🎁",
      type: "PACK PROMO🎁",
      quality: "PACK PROMO🎁",
      image: "CategPromo.png",
      farms: [
        {
          id: "Pack Eco 🥉",
          name: "Pack Eco 🥉",
          products: [
            {
              id: "PromoBronze",
              name: "🎁 25G 90u + 10G FreshFrozen + 10G Cali 🎁",
              farm: "TheLabSelection 🐪",
              promoEligible: true,
              type: "Promo",
              description:
                "🥉 LA PORTE D'ENTRÉE DU LAB 🥉\n\nUne sélection équilibrée pour découvrir nos trois univers : la puissance du 90u, la pureté du FreshFrozen et la saveur authentique de notre Cali. Le meilleur rapport qualité/prix pour vos sessions.",
              tarifs: [{ weight: "Pack", price: 240.0 }],
            },
          ],
        },
        {
          id: "PACK PREMIUM 🥈",
          name: "PACK PREMIUM 🥈",
          products: [
            {
              id: "PromoArgente",
              name: "🎁 15G FreshFrozen + 15G PlasmaStatic + 15G Cali 🎁",
              farm: "TheLabSelection 🐪",
              promoEligible: true,
              type: "Promo",
              description:
                "🥈 LE CHOIX DES CONNAISSEURS 🥈\n\nMonte d'un cran avec ce pack Premium. Plus de matière, plus de terps. Une alliance parfaite entre le PlasmaStatic pour l'intensité et une sélection Cali/Frozen pour le plaisir gustatif.",
              tarifs: [{ weight: "Pack", price: 380.0 }],
            },
          ],
        },
        {
          id: "PACK DE LUXE 🥇",
          name: "PACK DE LUXE 🥇",
          products: [
            {
              id: "PromoArgPromoOrente",
              name: "🎁 25G FreshFrozen + 25G PlasmaStatic + 25G Cali 🎁",
              farm: "TheLabSelection 🐪",
              promoEligible: true,
              type: "Promo",
              description:
                "🥇 L'EXPÉRIENCE ULTIME TERPS LAB 🥇\n\nLe sommet de notre menu. Une quantité massive des produits les plus prestigieux de la farm. Idéal pour les stocks sérieux ou les événements.\n\n🎁 + PLEIN DE CADEAUX À VOUS OFFRIR 🎁",
              tarifs: [{ weight: "Pack", price: 600.0 }],
            },
          ],
        },
      ],
    },
    {
      id: "HASH",
      name: "🍫 Hash 🍫",
      type: "Hash",
      quality: " 🍫 Hash 🍫",
      image: "CategHash.png",
      farms: [
        {
          id: "The Gaz SÉLECTION🇲🇦",
          name: "The Gaz SÉLECTION 🇲🇦",
          products: [
            // --- 🔮 PLASMA STATIC 🔮 ---
            {
              id: "CALIPPO x FORBIDDEN FRUIT 🍇🍒",
              name: "CALIPPO x FORBIDDEN FRUIT 🍇🍒",
              farm: "The Gaz SÉLECTION 🇲🇦",
              type: "🔮 Plasma Static 🔮",
              image: "Product24.png",
              video: "Video24.mp4",
              description:
                "🔮 TECHNOLOGIE PLASMA STATIC 🔮\n\nL'or pur de notre sélection. Un profil terpénique intense avec des notes d'agrumes sucrées et une puissance de frappe colossale.\n\n⚠️ Réservé aux amateurs avertis.",
              tarifs: [
                { weight: "5g", price: 80.0 },
                { weight: "10g", price: 140.0 },
                { weight: "25g", price: 300.0 },
                { weight: "50g", price: 500.0 },
                { weight: "100g", price: 900.0 },
              ],
            },

            // --- 🏅 120u ---
            {
              id: "120u BUDDHA LEMON 🍋",
              name: "120u BUDDHA LEMON 🍋",
              farm: "The Gaz SÉLECTION 🇲🇦",
              type: "120u 🏅",
              image: "ProductBU.png",
              video: "VideoBU.mp4",
              description:
                "🏅 DRY-SIFT 120u PREMIUM 🏅\n\nTexture sableuse et profil ultra-citronné. Une fraîcheur de Buddha Lemon qui réveille les papilles.",
              tarifs: [
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 150.0 },
                { weight: "50g", price: 250.0 },
                { weight: "100g", price: 480.0 },
                { weight: "200g", price: 900.0 },
              ],
            },
            {
              id: "120u PURPLE PUNCH 🥊",
              name: "120u PURPLE PUNCH 🥊",
              farm: "The Gaz SÉLECTION 🇲🇦",
              type: "120u 🏅",
              image: "ProductPP.png",
              video: "VideoPP.mp4",
              description:
                "🏅 DRY-SIFT 120u PREMIUM 🏅\n\nUne frappe lourde aux notes de raisin sucré et de baies. Un effet corporel profond.",
              tarifs: [
                { weight: "10g", price: 80.0 },
                { weight: "25g", price: 150.0 },
                { weight: "50g", price: 250.0 },
                { weight: "100g", price: 480.0 },
                { weight: "200g", price: 900.0 },
              ],
            },
            /*   {
                            id: '120u PARMESAN COOKIES 🍪',
                            name: '120u PARMESAN COOKIES 🍪',
                            farm: 'The Gaz SÉLECTION 🇲🇦',
                            type: '120u 🏅',
                            image: 'ProductCook.jpg',
                            video: 'VideoCook.mp4',
                            description: '🏅 DRY-SIFT 120u PREMIUM 🏅\n\nUn goût crémeux unique avec une puissance de frappe exceptionnelle.',
                            tarifs: [
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 150.00 },
                                { weight: '50g', price: 250.00 },
                                { weight: '100g', price: 480.00 }
                            ]
                        }, */

            // --- 🍓 90u ---
            {
              id: "90u APPLE BANANA 🍎🍌",
              name: "90u APPLE BANANA 🍎🍌",
              farm: "The Gaz SÉLECTION 🇲🇦",
              type: "90u 🍓",
              image: "ProductApp.png",
              video: "VideoApp.mp4",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\nUn profil terpénique explosif : pomme acidulée et banane crémeuse avec une texture mousseuse incroyable.",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 130.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500G", price: 1700.0 },
              ],
            },
            {
              id: "90u GUSHER MINTZ 🍬",
              name: "90u GUSHER MINTZ 🍬",
              farm: "The Gaz SÉLECTION 🇲🇦",
              type: "90u 🍓",
              image: "ProductGuu.png",
              video: "VideoGuu.mp4",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\nNotes sucrées de bonbon Gusher avec une touche de menthe rafraîchissante en fin de bouche.",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 130.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500G", price: 1700.0 },
              ],
            },
            {
              id: "90u APRICOT 🍑",
              name: "90u APRICOT 🍑",
              farm: "The Gaz SÉLECTION 🇲🇦",
              type: "90u 🍓",
              image: "ProductAp.png",
              video: "VideoAp.mp4",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\nUn goût profond d'abricot mûr avec une extraction propre et extrêmement grasse.",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 130.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500G", price: 1700.0 },
              ],
            },
            {
              id: "90u SourDiesel ⛽️",
              name: "90u SourDiesel ⛽️",
              farm: "The Gaz SÉLECTION 🇲🇦",
              type: "90u 🍓",
              image: "ProductSour.png",
              video: "VideoSour.mp4",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\nLa légende du gaz débarque ! ⛽️\n\nTexture sableuse parfaite et odeur de carburant ultra-prononcée. 🧪💨",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 130.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500G", price: 1700.0 },
              ],
            },

            // --- 💎 FRESH FROZEN (Séparés par Strain) 💎 ---
            {
              id: "TROPICAL ODV 🌴",
              name: "TROPICAL ODV 🌴",
              farm: "The Gaz SÉLECTION 🇲🇦",
              promoEligible: true,
              type: "💎 Fresh Frozen 💎",
              image: "ProductFroz.jpg",
              video: "VideoFroz.mov",
              description:
                "💎 QUALITÉ FRESH FROZEN 💎\n\nPRODUIT SEC ET CASSANT ⭐️⭐️⭐️⭐️⭐️\n\nNotes exotiques et tropicales intenses. \n\n NEW DROP 2026/27 ✨✨",
              tarifs: [
                { weight: "5g", price: 60.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 220.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 800.0 },
                { weight: "200g", price: 1500.0 },
              ],
            },
            {
              id: "FF GRAPE GASOLINE 🍇",
              name: "GRAPE GASOLINE 🍇",
              farm: "The Gaz SÉLECTION 🇲🇦",
              promoEligible: true,
              type: "💎 Fresh Frozen 💎",
              image: "ProductGG.png", // Tu pourras changer l'image plus tard
              video: "VideoGG.mp4",
              description:
                "💎 QUALITÉ FRESH FROZEN 💎\n\nPRODUIT SEC ET CASSANT ⭐️⭐️⭐️⭐️⭐️\n\nUn fond de raisin fermenté couplé à un gaz lourd et persistant. \n\n NEW DROP 2026/27 ✨✨",
              tarifs: [
                { weight: "5g", price: 60.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 220.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 800.0 },
                { weight: "200g", price: 1500.0 },
              ],
            },
            {
              id: "FF FORBIDDEN FRUIT x FRUIT JOY 🍓",
              name: "FORBIDDEN x FRUIT JOY 🍓",
              farm: "The Gaz SÉLECTION 🇲🇦",
              promoEligible: true,
              type: "💎 Fresh Frozen 💎",
              image: "ProductFF.png",
              video: "VideoFF.mov",
              description:
                "💎 QUALITÉ FRESH FROZEN 💎\n\nPRODUIT SEC ET CASSANT ⭐️⭐️⭐️⭐️⭐️\n\nCocktail ultime de fruits rouges et de baies sauvages. \n\n NEW DROP 2026/27 ✨✨",
              tarifs: [
                { weight: "5g", price: 60.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 220.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 800.0 },
                { weight: "200g", price: 1500.0 },
              ],
            },
          ],
        },
        {
          id: "FULLMELT FARM",
          name: "👨‍🌾 FULLMELT FARM 👨‍🌾",
          products: [
            {
              id: "GAZOLINA ⛽️",
              name: "GAZOLINA ⛽️",
              farm: "FULLMELTFARM 🍶",
              type: "90u 🍓",
              image: "Product90.jpg",
              video: "Video90.mov",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\nUn concentré de gaz pur. Une extraction ultra-grasse qui libère des arômes de carburant intense dès l'ouverture.",
              tarifs: [
                { weight: "10g", price: 60.0 },
                { weight: "25g", price: 120.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500g", price: 1700.0 },
              ],
            },
            {
              id: "FRUITY 🍉",
              name: "FRUITY 🍉",
              farm: "FULLMELTFARM 🍶",
              type: "90u 🍓",
              image: "Product90.jpg",
              video: "Video90.mov",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\nUne explosion de fruits rouges et de pastèque juteuse. Texture crémeuse et profil terpénique extrêmement gourmand.",
              tarifs: [
                { weight: "10g", price: 60.0 },
                { weight: "25g", price: 120.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500g", price: 1700.0 },
              ],
            },
            {
              id: "PAPAYA 🥭",
              name: "PAPAYA 🥭",
              farm: "FULLMELTFARM 🍶",
              type: "90u 🍓",
              image: "Product90.jpg",
              video: "Video90.mov",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\nLe roi du tropical ! Une odeur puissante de mangue et papaye mûre. Texture collante parfaite pour vos sessions.",
              tarifs: [
                { weight: "10g", price: 60.0 },
                { weight: "25g", price: 120.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500g", price: 1700.0 },
              ],
            },
            {
              id: "90u PREMIUM ✨",
              name: "90u PREMIUM ✨",
              farm: "🧈 Golden Plants",
              type: "90u 🍓",
              image: "ProductGP.jpg",
              video: "VideoGP.mp4",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\STRAIN DISPONIBLE : \n\n - YellowRuntz 🍋 \n - Onionz 🧅 \n - BerryCake 🫐",
              tarifs: [
                { weight: "10g", price: 60.0 },
                { weight: "25g", price: 120.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 370.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500g", price: 1700.0 },
              ],
            },
            /*  {
              id: "BERRY CAKE 🎂🫐",
              name: "BERRY CAKE 🎂🫐",
              farm: "FULLMELTFARM 🍶",
              type: "90u 🍓",
              image: "ProductBc.png",
              video: "VideoBc.MP4",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\nExtraction grasse et ultra-chargée en terpènes. Douceur crémeuse et fruitée.",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 120.0 },
                { weight: "50g", price: 220.0 },
                { weight: "100g", price: 380.0, oldPrice: 400.0 },
              ],
            },
            {
              id: "COBRA CHI 🐍",
              name: "COBRA CHI 🐍",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "90u 🍓",
              image: "ProductChi.png",
              video: "VideoChi.mp4",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\nUne extraction propre, grasse et ultra-chargée en terpènes. Puissance terreuse et incisive.",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 120.0 },
                { weight: "50g", price: 220.0 },
                { weight: "100g", price: 380.0, oldPrice: 400.0 },
              ],
            },
            {
              id: "TANGERINE CITRUS 🍋",
              name: "TANGERINE CITRUS 🍋",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "90u 🍓",
              image: "ProductCitrus.png",
              video: "VideoCitrus.mp4",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\nUne extraction propre, grasse et ultra-chargée en terpènes. Explosion d'agrumes frais.",
              tarifs: [
                { weight: "10g", price: 70.0 },
                { weight: "25g", price: 120.0 },
                { weight: "50g", price: 220.0 },
                { weight: "100g", price: 380.0, oldPrice: 400.0 },
              ],
            }, */
            // --- 💎 Fresh Frozen 💎 (Séparés par Strain) 💎 ---
            {
              id: "FROSTED ACAI 🍋",
              name: "FROSTED ACAI 🍋",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "💎 Fresh Frozen 💎",
              image: "ProductFF.jpg",
              video: "VideoFFF.mov",
              description:
                  "💎 QUALITÉ FRESH FROZEN 💎\n\nPRODUIT SEC ET CASSANT ⭐️⭐️⭐️⭐️⭐️\n\nUne vague d'açaï glacé, de fruits noirs et de citron frais. Un profil crémeux, acidulé et parfaitement équilibré.\n\nNEW DROP 2026/27 ✨✨",
              tarifs: [
                { weight: "5g", price: 50.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 210.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 700.0 },
                { weight: "200g", price: 1350.0 },
              ],
            },
            {
              id: "ORANG’Z MILK 🍊🥛",
              name: "ORANG’Z MILK 🍊🥛",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "💎 Fresh Frozen 💎",
              image: "ProductFF.jpg",
              video: "VideoFFF.mov",
              description:
                 "💎 QUALITÉ FRESH FROZEN 💎\n\nPRODUIT SEC ET CASSANT ⭐️⭐️⭐️⭐️⭐️\n\nDes zestes d'orange fraîche accompagnés d'une crème vanillée et lactée. Un mélange fruité et gourmand avec une rondeur exceptionnelle.\n\nNEW DROP 2026/27 ✨✨",
              tarifs: [
                { weight: "5g", price: 50.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 210.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 700.0 },
                { weight: "200g", price: 1350.0 },
              ],
            },
            {
              id: "RAIMBOW GOUMMI 🍭🍰",
              name: "RAIMBOW GOUMMI 🍭🍰",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "💎 Fresh Frozen 💎",
              image: "ProductFF.jpg",
              video: "VideoFFF.mov",
              description:
                 "💎 QUALITÉ FRESH FROZEN 💎\n\nPRODUIT SEC ET CASSANT ⭐️⭐️⭐️⭐️⭐️\n\nUn véritable sachet de bonbons multicolores : fruits rouges, agrumes sucrés et petite finale pâtissière ultra-gourmande.\n\nNEW DROP 2026/27 ✨✨",
              tarifs: [
                { weight: "5g", price: 50.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 210.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 700.0 },
                { weight: "200g", price: 1350.0 },
              ],
            },
            {
              id: "PEACH TSUNAMI 🍑🌊",
              name: "PEACH TSUNAMI 🍑🌊",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "💎 Fresh Frozen 💎",
              image: "ProductFF.jpg",
              video: "VideoFFF.mov",
              description:
                  "💎 QUALITÉ FRESH FROZEN 💎\n\nPRODUIT SEC ET CASSANT ⭐️⭐️⭐️⭐️⭐️\n\nUne vague massive de pêche mûre et de nectarine, accompagnée d'une douceur candy et d'une finale tropicale persistante.\n\nNEW DROP 2026/27 ✨✨",
              tarifs: [
                { weight: "5g", price: 50.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 210.0 },
                { weight: "50g", price: 350.0 },
                { weight: "100g", price: 700.0 },
                { weight: "200g", price: 1350.0 },
              ],
            },
            // --- ⚡️ DOUBLE STATIC (Séparés par Strain) ⚡️ ---
            {
              id: "BLACK PAPAYA 🥭🍩",
              name: "BLACK PAPAYA 🥭🍩",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "⚡️ Double Static ⚡️",
              image: "ProductDS.jpg",
              video: "VideoDS.mov",
              description:   "⚡️ DOUBLE STATIC PREMIUM ⚡️\n\nUne extraction fine et ultra-propre aux notes de papaye mûre, de mangue fermentée et de pâtisserie sucrée. Un profil profond, gras et exotique.\n\n💎 FULLMELTFARM SELECTION 💎",
              tarifs: [
                { weight: "5g", price: 60.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 220.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 750.0 },
              ],
            },
            {
              id: "LIMOSA BX 🫐✨",
              name: "LIMOSA BX 🫐✨",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "⚡️ Double Static ⚡️",
              image: "ProductDS.jpg",
              video: "VideoDS.mov",
              description:   "⚡️ DOUBLE STATIC PREMIUM ⚡️\n\nUn cocktail pétillant de myrtille et d'agrumes frais, relevé par une pointe sucrée et gazeuse. Un profil vif, fruité et lumineux.\n\n💎 FULLMELTFARM SELECTION 💎",
              tarifs: [
                { weight: "5g", price: 60.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 220.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 750.0 },
              ],
            },
            {
              id: "PINEAPPLE 🍍",
              name: "PINEAPPLE 🍍",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "⚡️ Double Static ⚡️",
              image: "ProductDS.jpg",
              video: "VideoDS.mov",
              description:   "⚡️ DOUBLE STATIC PREMIUM ⚡️\n\nUne explosion d'ananas confit et de jus tropical avec une légère touche acidulée. Un profil franc, gourmand et extrêmement persistant.\n\n💎 FULLMELTFARM SELECTION 💎",
              tarifs: [
                { weight: "5g", price: 60.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 220.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 750.0 },
              ],
            },
            {
              id: "CHERRY 🍒",
              name: "CHERRY 🍒",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "⚡️ Double Static ⚡️",
              image: "ProductDS.jpg",
              video: "VideoDS.mov",
              description:   "⚡️ DOUBLE STATIC PREMIUM ⚡️\n\nDes notes intenses de cerise noire et de bonbon acidulé, accompagnées d'un fond crémeux. Un profil sucré, puissant et ultra-gourmand.\n\n💎 FULLMELTFARM SELECTION 💎",
              tarifs: [
                { weight: "5g", price: 60.0 },
                { weight: "10g", price: 100.0 },
                { weight: "25g", price: 220.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 750.0 },
              ],
            },
            // --- 🔮 PLASMA STATIC (Séparés par Strain) 🔮 ---
            {
              id: "PLASMA RUNTZ 🧬",
              name: "RUNTZ 🧬",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "🔮 Plasma Static 🔮",
              image: "ProductPS.jpg",
              video: "VideoPS.mov",
              description:
                "🔮 TECHNOLOGIE PLASMA STATIC 🔮\n\nFormat 50g. La célèbre Runtz sublimée par la technologie Plasma. Un mélange sucré et gazeux foudroyant.\n\n⚠️ Pas pour les amateurs de fume ⛔️",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 130.0 },
                { weight: "25g", price: 260.0 },
                { weight: "50g", price: 500.0 },
                { weight: "100g", price: 950.0 },
                { weight: "200g", price: 1850.0 },
              ],
            },
            {
              id: "PLASMA BISCOTIE 🍪",
              name: "BISCOTIE 🍪",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "🔮 Plasma Static 🔮",
              image: "ProductPS.jpg",
              video: "VideoPS.mov",
              description:
                "🔮 TECHNOLOGIE PLASMA STATIC 🔮\n\nFormat 50g. Un profil umami et biscuité extrêmement lourd. Une sédation profonde et immédiate.\n\n⚠️ Pas pour les amateurs de fume ⛔️",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 130.0 },
                { weight: "25g", price: 260.0 },
                { weight: "50g", price: 500.0 },
                { weight: "100g", price: 950.0 },
                { weight: "200g", price: 1850.0 },
              ],
            },
            {
              id: "PLASMA GARLIC COCKTAIL 🍸🍭",
              name: "GARLIC COCKTAIL 🍸🍭",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "🔮 Plasma Static 🔮",
              image: "ProductPS.jpg",
              video: "VideoPS.mov",
              description:
                "🔮 TECHNOLOGIE PLASMA STATIC 🔮\n\nFormat 50g. Le croisement parfait entre le funky de l'ail et la douceur sucrée. Un profil atypique et puissant.\n\n⚠️ Pas pour les amateurs de fume ⛔️",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 130.0 },
                { weight: "25g", price: 260.0 },
                { weight: "50g", price: 500.0 },
                { weight: "100g", price: 950.0 },
                { weight: "200g", price: 1850.0 },
              ],
            },
            {
              id: "PLASMA MANGO KUSH 🥭⚡️",
              name: "MANGO KUSH 🥭⚡️",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "🔮 Plasma Static 🔮",
              image: "ProductPS.jpg",
              video: "VideoPS.mov",
              description:
                "🔮 TECHNOLOGIE PLASMA STATIC 🔮\n\nFormat 50g. Un concentré tropical percutant. L'alliance de la mangue fraîche et de l'effet dévastateur du Plasma.\n\n⚠️ Pas pour les amateurs de fume ⛔️",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 130.0 },
                { weight: "25g", price: 260.0 },
                { weight: "50g", price: 500.0 },
                { weight: "100g", price: 950.0 },
                { weight: "200g", price: 1850.0 },
              ],
            },
            {
              id: "PLASMA PERMANENT MARKER 🍩",
              name: "PERMANENT MARKER 🍩",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "🔮 Plasma Static 🔮",
              image: "ProductPS.jpg",
              video: "VideoPS.mov",
              description:
                "🔮 TECHNOLOGIE PLASMA STATIC 🔮\n\nUn profil terpénique floral, savonneux et gazeux. Une claque cérébrale instantanée.\n\n⚠️ Pas pour les amateurs de fume ⛔️",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 130.0 },
                { weight: "25g", price: 260.0 },
                { weight: "50g", price: 500.0 },
                { weight: "100g", price: 950.0 },
                { weight: "200g", price: 1850.0 },
              ],
            },
            {
              id: "PLASMA SPRITZER 🍋‍🟩",
              name: "SPRITZER 🍋‍🟩",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "🔮 Plasma Static 🔮",
              image: "ProductPS.jpg",
              video: "VideoPS.mov",
              description:
                "🔮 TECHNOLOGIE PLASMA STATIC 🔮\n\nNotes pétillantes et citronnées rappelant un soda frais. Pureté chirurgicale et effet électrique.\n\n⚠️ Pas pour les amateurs de fume ⛔️",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 130.0 },
                { weight: "25g", price: 260.0 },
                { weight: "50g", price: 500.0 },
                { weight: "100g", price: 950.0 },
                { weight: "200g", price: 1850.0 },
              ],
            },
            {
              id: "PLASMA MOTORS BREATH 🏍️🔥",
              name: "MOTORS BREATH 🏍️🔥",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "🔮 Plasma Static 🔮",
              image: "ProductPS.jpg",
              video: "VideoPS.mov",
              description:
                "🔮 TECHNOLOGIE PLASMA STATIC 🔮\n\nUn gaz lourd, terreux et piquant. Une puissance sédative qui ne pardonne pas.\n\n⚠️ Pas pour les amateurs de fume ⛔️",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 130.0 },
                { weight: "25g", price: 260.0 },
                { weight: "50g", price: 500.0 },
                { weight: "100g", price: 950.0 },
                { weight: "200g", price: 1850.0 },
              ],
            },
            {
              id: "PLASMA RUNTZ MUFFIN 🧬🧁",
              name: "RUNTZ MUFFIN 🧬🧁",
              farm: "FULLMELTFARM 🍶",
              promoEligible: true,
              type: "🔮 Plasma Static 🔮",
              image: "ProductPS.jpg",
              video: "VideoPS.mov",
              description:
                "🔮 TECHNOLOGIE PLASMA STATIC 🔮\n\nLa gourmandise à l'état pur. Des notes de pâtisserie crémeuse infusées aux fruits rouges.\n\n⚠️ Pas pour les amateurs de fume ⛔️",
              tarifs: [
                { weight: "5g", price: 70.0 },
                { weight: "10g", price: 130.0 },
                { weight: "25g", price: 260.0 },
                { weight: "50g", price: 500.0 },
                { weight: "100g", price: 950.0 },
                { weight: "200g", price: 1850.0 },
              ],
            },
          ],
        },
       /*  {
          id: "🇺🇸 DROP USA 🇺🇸",
          name: "🇺🇸 DROP USA 🇺🇸",
          products: [
            {
              id: "PERMANENT GAZ 🥶⛽️",
              name: "PERMANENT GAZ 🥶⛽️",
              farm: "🇺🇸 SAHA TERPS 🧪",
              type: "🔍 Static Sift 🔍",
              image: "ProductPG.png",
              video: "VideoPG.mov",
              description:
                "🔍 STATIC SIFT USA 🔍\n\nUn gaz glacial et percutant venu tout droit des meilleures cultures californiennes. Profil floral et carburant.\n\n⚠️ A CONSOMMER AVEC MODÉRATION ⚠️",
              tarifs: [
                { weight: "1g", price: 40.0 },
                { weight: "2g", price: 70.0 },
                { weight: "5g", price: 170.0 },
                { weight: "10g", price: 320.0 },
              ],
            },
            {
              id: "HASH BURGER 🍔💎",
              name: "HASH BURGER 🍔💎",
              farm: "🇺🇸 WESTCOAST STATIC ⚡️",
              type: "🔍 Static Sift 🔍",
              image: "ProductHH.png",
              video: "VideoHH.mov",
              description:
                "🔍 STATIC SIFT USA 🔍\n\nUn profil umami, épicé et incroyablement lourd. L'essence même du Hash américain sédatif.\n\n⚠️ A CONSOMMER AVEC MODÉRATION ⚠️",
              tarifs: [
                { weight: "1g", price: 50.0 },
                { weight: "2g", price: 90.0 },
                { weight: "5g", price: 180.0 },
                { weight: "10g", price: 340.0 },
              ],
            },
            {
              id: "WeFlips x Terps 🔌",
              name: "WeFlips x Terps 🔌",
              farm: "🇺🇸 WE FLIPS FARMZ 🥶",
              type: "🔍 Static Sift 🔍",
              image: "ProductWT.png",
              video: "VideoWT.mov",
              description:
                "⚠️A CONSOMMER AVEC MODÉRATION PRODUIT DE GRANDE ENVERGURE ⚠️ \n\n STRAIN DISPONIBLE : \n\n - JEALOUSY 🥝 \n - ESTATHE 🧃",
              tarifs: [
                { weight: "1g", price: 50.0 },
                { weight: "2g", price: 90.0 },
                { weight: "5g", price: 180.0 },
                { weight: "10g", price: 340.0 },
              ],
            },
          ],
        }, */
        /* {
          id: "ATHENA FARMS 🧪",
          name: "ATHENA FARMS 🧪",
          products: [
            {
              id: "GAZ GRAPE X MANGOZ 🥭🍇⛽️",
              name: "GAZ GRAPE X MANGOZ 🥭🍇⛽️",
              farm: "ATHENA FARMS 🧪",
              type: "FRESH FROZEN 🥶",
              image: "ProductGGM.png",
              video: "VideoGGM.mov",
              description:
                "🥶 FRESH FROZEN PREMIUM 🥶\n\nL'alliance redoutable du raisin gazeux et de la mangue tropicale. Une texture sablée et des terps explosifs.",
              tarifs: [
                { weight: "5g", price: 60.0 },
                { weight: "10g", price: 110.0 },
                { weight: "25g", price: 210.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 760.0 },
                { weight: "200g", price: 1400.0 },
              ],
            },
            {
              id: "FRUIT JOY X GARLLIC COCKTAIL 🍓🥭🍒",
              name: "FRUIT JOY X GARLLIC COCKTAIL 🍓🥭🍒",
              farm: "ATHENA FARMS 🧪",
              type: "FRESH FROZEN 🥶",
              image: "ProductFJJ.png",
              video: "VideoFJJ.mov",
              description:
                "🥶 FRESH FROZEN PREMIUM 🥶\n\nUn contraste fascinant : l'avalanche de fruits rouges percutée par les notes aillées et épicées du Garlic Cocktail.",
              tarifs: [
                { weight: "5g", price: 60.0 },
                { weight: "10g", price: 110.0 },
                { weight: "25g", price: 210.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 760.0 },
                { weight: "200g", price: 1400.0 },
              ],
            },
            {
              id: "SUPER BOOF CHERRY OG 🍒⚜️",
              name: "SUPER BOOF CHERRY OG 🍒⚜️",
              farm: "ATHENA FARMS 🧪",
              type: "FRESH FROZEN 🥶",
              image: "ProductSBC.png",
              video: "VideoSBC.mov",
              description:
                "🥶 FRESH FROZEN PREMIUM 🥶\n\nUne dominance massive de cerise noire et d'agrumes, soutenue par la puissance terreuse de l'OG. Incontournable.",
              tarifs: [
                { weight: "5g", price: 60.0 },
                { weight: "10g", price: 110.0 },
                { weight: "25g", price: 210.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 760.0 },
                { weight: "200g", price: 1400.0 },
              ],
            },
            {
              id: "ZANGRIA 🍇 🌴",
              name: "ZANGRIA 🍇🌴",
              farm: "ATHENA FARMS 🧪",
              type: "FRESH FROZEN 🥶",
              image: "ProductGRR.png",
              video: "VideoGRR.mov",
              description:
                "🥶 FRESH FROZEN PREMIUM 🥶\n\nUn cocktail estival. Des arômes de fruits rouges macérés et d'anis, pour une session rafraîchissante et puissante.",
              tarifs: [
                { weight: "5g", price: 60.0 },
                { weight: "10g", price: 110.0 },
                { weight: "25g", price: 210.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 760.0 },
                { weight: "200g", price: 1400.0 },
              ],
            },
            {
              id: "CALIPO X FORBIDEN FRUIT 🍇 🥝",
              name: "CALIPO X FORBIDEN FRUIT 🍇 🥝",
              farm: "ATHENA FARMS 🧪",
              type: "FRESH FROZEN 🥶",
              image: "ProductCFF.png",
              video: "VideoCFF.mov",
              description:
                "🥶 FRESH FROZEN PREMIUM 🥶\n\nUn véritable sorbet aux fruits. Notes d'agrumes givrés mélangées à la douceur des fruits de la passion.",
              tarifs: [
                { weight: "5g", price: 60.0 },
                { weight: "10g", price: 110.0 },
                { weight: "25g", price: 210.0 },
                { weight: "50g", price: 400.0 },
                { weight: "100g", price: 760.0 },
                { weight: "200g", price: 1400.0 },
              ],
            },
          ],
        }, */
        {
          id: "OperaTerps 🇲🇦",
          name: "OperaTerps 🇲🇦",
          products: [
            {
              id: "BANANA PUNCH 🍌🔥",
              name: "BANANA PUNCH 🍌🔥",
              farm: "OperaTerps 🇲🇦",
              type: "90u 🍓",
              image: "ProductOP.jpg",
              video: "VideoOP.mov",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\nL'alliance parfaite entre la rondeur d'une banane bien mûre et un fond épicé percutant. Texture onctueuse et montée cérébrale immédiate.",
              tarifs: [
                { weight: "10g", price: 60.0 },
                { weight: "25g", price: 120.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500g", price: 1700.0 },
              ],
            },
            {
              id: "CÉRÉALE MILK 🌾🥛",
              name: "CÉRÉALE MILK 🌾🥛",
              farm: "OperaTerps 🇲🇦",
              type: "90u 🍓",
              image: "ProductOP.jpg",
              video: "VideoOP.mov",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\nUn profil terpénique ultra-gourmand rappelant un bol de céréales fruitées baignant dans du lait vanillé. Résine très grasse et effet profondément apaisant.",
              tarifs: [
                { weight: "10g", price: 60.0 },
                { weight: "25g", price: 120.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500g", price: 1700.0 },
              ],
            },
            {
              id: "CHERRY PIE 🍒",
              name: "CHERRY PIE 🍒",
              farm: "OperaTerps 🇲🇦",
              type: "90u 🍓",
              image: "ProductOP.jpg",
              video: "VideoOP.mov",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\nDes arômes envoûtants de tarte aux cerises tout juste sortie du four. L'équilibre idéal entre la douceur fruitée et une légère note acidulée.",
              tarifs: [
                { weight: "10g", price: 60.0 },
                { weight: "25g", price: 120.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500g", price: 1700.0 },
              ],
            },
            {
              id: "STRAWBERRY CAKE 🍓🍰",
              name: "STRAWBERRY CAKE 🍓🍰",
              farm: "OperaTerps 🇲🇦",
              type: "90u 🍓",
              image: "ProductOP.jpg",
              video: "VideoOP.mov",
              description:
                "🍓 SÉLECTION 90u PREMIUM 🍓\n\nUne véritable pâtisserie en bouche. Des notes intenses de fraises fraîches enrobées d'une crème sucrée. Un délice absolu pour les chasseurs de terps.",
              tarifs: [
                { weight: "10g", price: 60.0 },
                { weight: "25g", price: 120.0 },
                { weight: "50g", price: 200.0 },
                { weight: "100g", price: 380.0 },
                { weight: "200g", price: 700.0 },
                { weight: "500g", price: 1700.0 },
              ],
            },
          ],
        },
      ],
    },
   /*  {
      id: "WEED",
      name: " 🕯 Weed 🕯",
      type: "Weed",
      image: "CategWeed.png",
      products: [
        {
          id: "LemonC herry Gelato 🌅",
          name: "LemonCherryGelato🍋🍒",
          farm: "CALI NO BRAND ™️©️",
          promoEligible: true,
          type: "Weed",
          image: "ProductShe.jpg",
          video: "VideoShe.mp4",
          description:
            "🇨🇦 CALI CANADA IMPORT 🇨🇦\n\nUn classique moderne incontournable. Des buds ultra-denses, givrées de trichomes et parfaitement manucurées.\n\n🍋🍒 Saveur : Le mariage parfait entre l'acidité du citron, la douceur de la cerise et la rondeur crémeuse de la famille Gelato.\n🧠 Effet : Profonde relaxation corporelle avec un high cérébral euphorique.",
          tarifs: [
            { weight: "10g", price: 70.0 },
            { weight: "25g", price: 150.0 },
            { weight: "50g", price: 280.0 },
            { weight: "100g", price: 500.0 },
          ],
        },
        {
          id: "Candy Cake 🍬",
          name: "Candy Cake 🍬",
          farm: "CALI NO BRAND ™️©️",
          promoEligible: true,
          type: "Weed",
          image: "ProductSun.jpg",
          video: "VideoSun.mov",
          description:
            '🇨🇦 CALI CANADA IMPORT 🇨🇦\n\nDirectement issue de notre nouveau drop 2026/27. Des buds denses, givrées et une manucure parfaite.\n🍬 Candy Cake : Profil sucré, type "bakery" ultra-gourmand.',
          tarifs: [
            { weight: "10g", price: 70.0 },
            { weight: "25g", price: 150.0 },
            { weight: "50g", price: 280.0 },
            { weight: "100g", price: 500.0 },
          ],
        },
        {
          id: "PAPAYA_CHERRY_GELATO",
          name: "Alien Gushers 👽",
          farm: "CALI NO BRAND ™️©️",
          type: "Weed",
          image: "ProductGush.png",
          video: "VideoGush.mp4",
          description:
            "Le mariage de la Papaye et de la Cerise Gelato. Très fruité.\n\n 🍒 LA FOLIE 🤪 ‼️ Buds magnifiques.",
          tarifs: [
            { weight: "10g", price: 70.0, oldPrice: 80.0 },
            { weight: "25g", price: 160.0, oldPrice: 180.0 },
            { weight: "50g", price: 290.0, oldPrice: 350.0 },
            { weight: "100g", price: 560.0, oldPrice: 600.0 },
          ],
        },
      ],
    }, */
  ];

  // --- VARIABLES D'ÉTAT ---
  let cart = [];
  let currentFilters = {
    searchTerm: "",
    quality: "all",
    farm: "all",
  };
  let currentView = "categories";
  let currentCategoryId = null;
  let currentFarmId = null;
  let appliedPromo = null;
  let paymentMethod = "Espèce";

  // --- DÉFINIS TES CODES PROMO ICI ---
  const validPromoCodes = {
    ACTUPLUG33: {
      type: "fixed",
      value: 10,
      appliesTo: "eligible",
    },
  };

  // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
  const pages = document.querySelectorAll(".page");
  const productListContainer = document.getElementById("product-list");
  const loaderPage = document.getElementById("page-loader");

  const filterContainer = document.querySelector(".filters");

  // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
  const searchFilterWrapper =
    document.getElementById("search-filter").parentElement;
  const qualityFilterWrapper =
    document.getElementById("quality-filter").parentElement;
  const farmFilterWrapper =
    document.getElementById("farm-filter").parentElement;

  // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
  function getProductById(productId) {
    for (const category of appData) {
      if (category.products) {
        const product = category.products.find((p) => p.id === productId);
        if (product) return product;
      }
      if (category.farms) {
        for (const farm of category.farms) {
          if (farm.products) {
            const product = farm.products.find((p) => p.id === productId);
            if (product) return product;
          }
        }
      }
    }
    return undefined;
  }

  // --- NAVIGATION ---
  function showPage(pageId) {
    document.querySelectorAll("video").forEach((video) => {
      video.pause();
    });

    pages.forEach((p) => p.classList.remove("active"));
    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add("active");
    }

    const homeNav = document.getElementById("nav-menu");
    const infoNav = document.getElementById("nav-info");
    const contactNav = document.getElementById("nav-contact");

    if (homeNav) homeNav.classList.remove("active");
    if (infoNav) infoNav.classList.remove("active");
    if (contactNav) contactNav.classList.remove("active");

    if (pageId === "page-contact") {
      if (contactNav) contactNav.classList.add("active");
    } else if (pageId === "page-info") {
      if (infoNav) infoNav.classList.add("active");
    } else {
      if (homeNav) homeNav.classList.add("active");
    }
  }

  // --- LOGIQUE D'AFFICHAGE ---

  function renderFarmList(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    const farms = category.farms;

    productListContainer.innerHTML = "";
    if (!farms || farms.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune sous-catégorie disponible.</p>';
      return;
    }

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "sub-categories-container";

    farms.forEach((farm) => {
      const button = document.createElement("button");
      button.className = "sub-category-btn";
      button.dataset.farmId = farm.id;

      if (farm.clickable === false) {
        button.style.opacity = "0.6";
        button.style.cursor = "not-allowed";
      }

      const productCount = farm.products ? farm.products.length : 0;
      const badgeTextContent =
        productCount > 0
          ? `${productCount} produit${productCount > 1 ? "s" : ""}`
          : farm.badgeText || "";

      button.innerHTML = `
            <span>${farm.name}</span>
            ${badgeTextContent ? `<span class="sub-btn-badge">${badgeTextContent}</span>` : ""}
        `;

      buttonsContainer.appendChild(button);
    });

    productListContainer.appendChild(buttonsContainer);
  }

  function renderHomePage() {
    filterContainer.style.display = "flex";

    const existingBackBtnCat = filterContainer.querySelector(
      ".back-to-categories-btn",
    );
    if (existingBackBtnCat) existingBackBtnCat.remove();
    const existingBackBtnFarm =
      filterContainer.querySelector(".back-to-farms-btn");
    if (existingBackBtnFarm) existingBackBtnFarm.remove();

    if (currentView === "categories") {
      renderCategoryList();
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "flex";
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
    } else if (currentView === "farms") {
      renderFarmList(currentCategoryId);
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "none";
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";

      const category = appData.find((c) => c.id === currentCategoryId);
      if (category) {
        const backButton = document.createElement("button");
        backButton.className = "back-to-categories-btn";
        backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
        backButton.style.cssText = `background: linear-gradient(180deg, black, transparent); border-bottom: 2px solid #f78900; border-top: none; border-left: none; border-right: none; color: white; padding: 10px 15px; border-radius: 10px; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh; font-family: Copperplate;`;
        filterContainer.prepend(backButton);
      }
    } else if (currentView === "products") {
      renderProductList(currentCategoryId);
      searchFilterWrapper.style.display = "flex";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "none";
      productListContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
    }
  }

  function renderCategoryList() {
    const filteredCategories = appData.filter((category) => {
      const searchMatch = category.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      const qualityMatch =
        currentFilters.quality === "all" ||
        category.quality === currentFilters.quality;
      return searchMatch && qualityMatch;
    });

    productListContainer.innerHTML = "";
    if (filteredCategories.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
      return;
    }

    filteredCategories.forEach((category) => {
      const card = document.createElement("div");
      card.className = "category-card";
      card.dataset.categoryId = category.id;

      card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
            `;
      productListContainer.appendChild(card);
    });
  }

  function renderProductList(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    const oldBackButtons = filterContainer.querySelectorAll(
      ".back-to-categories-btn, .back-to-farms-btn",
    );
    oldBackButtons.forEach((btn) => btn.remove());

    let allProducts = [];

    if (category.products) {
      allProducts = category.products;
    } else if (category.farms) {
      if (currentFarmId) {
        const selectedFarm = category.farms.find((f) => f.id === currentFarmId);
        if (selectedFarm && selectedFarm.products)
          allProducts = selectedFarm.products;
      } else {
        allProducts = category.farms.flatMap((farm) => farm.products || []);
      }
    }

    const backButton = document.createElement("button");
    backButton.className = "back-to-categories-btn";
    backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
    backButton.style.cssText = `background: linear-gradient(180deg, black, transparent); border-bottom: 2px solid #f78900; border-top: none; border-left: none; border-right: none; color: white; padding: 10px 15px; border-radius: 10px; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh; font-family: Copperplate;`;
    filterContainer.prepend(backButton);

    if (!allProducts || allProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit trouvé.</p>';
      return;
    }

    const filteredProducts = allProducts.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      const farmMatch = currentFarmId
        ? true
        : currentFilters.farm === "all" || product.farm === currentFilters.farm;
      return searchMatch && farmMatch;
    });

    productListContainer.innerHTML = "";
    let lastType = "";

    filteredProducts.forEach((product) => {
      if (
        (currentFarmId === "FULLMELT FARM" ||
          currentFarmId === "The Gaz SÉLECTION🇲🇦") &&
        product.type !== lastType &&
        product.type !== "Promo"
      ) {
        const separator = document.createElement("div");
        separator.className = "product-separator";
        separator.innerHTML = `<span>${product.type}</span>`;
        separator.style.cssText = `grid-column: 1 / -1; text-align: center; padding: 20px 0 10px 0; color: #f78900; font-family: 'Impact', sans-serif; font-size: 1.4rem; text-transform: uppercase; border-bottom: 1px solid rgba(247, 137, 0, 0.3); margin-bottom: 10px; width: 100%;`;
        productListContainer.appendChild(separator);
        lastType = product.type;
      }

      const card = document.createElement("div");
      card.dataset.productId = product.id;

      if (product.type === "Promo") {
        card.className = "product-card product-item-card promo-card";
        card.innerHTML = `
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="farm">${product.farm}</div>
                        <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                    </div>
                `;
      } else {
        card.className = "product-card product-item-card";
        let flagHTML = product.flag
          ? `<span class="product-flag">${product.flag}</span>`
          : "";
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

  function renderProductPage(productId) {
    const product = getProductById(productId);
    if (!product) return;

    // --- 1. UNIFICATION DES MÉDIAS ---
    let mediaItems = [];

    // Ajout de l'image principale
    if (product.image) mediaItems.push({ type: "image", src: product.image });
    // Ajout des images secondaires
    if (product.images && product.images.length > 0) {
      product.images.forEach((img) =>
        mediaItems.push({ type: "image", src: img }),
      );
    }

    // Ajout de la vidéo principale
    if (product.video) mediaItems.push({ type: "video", src: product.video });
    // Ajout des vidéos secondaires
    if (product.videos && product.videos.length > 0) {
      product.videos.forEach((vid) =>
        mediaItems.push({ type: "video", src: vid }),
      );
    }

    // --- 2. CRÉATION DU HTML (Carrousel Dynamique) ---
    let mediaHTML = "";

    if (mediaItems.length > 1) {
      const slides = mediaItems
        .map((media) => {
          if (media.type === "image") {
            return `
                    <div class="carousel-slide">
                        <img src="${media.src}" alt="${product.name}">
                    </div>`;
          } else {
            return `
                    <div class="carousel-slide">
                        <video src="${media.src}" controls></video>
                    </div>`;
          }
        })
        .join("");

      mediaHTML = `
            <div class="carousel-container">
                ${slides}
            </div>
            <div class="carousel-hint">↔️ Swipe pour voir la suite</div>
            `;
    } else if (mediaItems.length === 1) {
      // Affichage unique si un seul média
      if (mediaItems[0].type === "image") {
        mediaHTML = `<img src="${mediaItems[0].src}" alt="${product.name}" class="product-video" style="object-fit: cover;">`;
      } else {
        mediaHTML = `<video class="product-video" src="${mediaItems[0].src}" controls></video>`;
      }
    }

    document.getElementById("product-page-title").innerText = product.name;

    const detailsContainer = document.getElementById("product-details-content");

    const weightStyle = product.useSmallText
      ? "font-size: 12px; line-height: 1.2;"
      : "";

    let tarifsHTML = product.tarifs
      .map((tarif) => {
        const oldPriceHTML = tarif.oldPrice
          ? `<span style="text-decoration: line-through; color: #ff3b30; font-size: 0.8em; margin-top: -25px; display: block;">${tarif.oldPrice.toFixed(2)}€</span>`
          : "";

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
      })
      .join("");

    let descriptionHTML = "";
    if (product.description) {
      descriptionHTML = `<div class="product-description">${product.description.replace(/\n/g, "<br>")}</div>`;
    }

    const pageContent = document.querySelector("#page-product .page-content");
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
    showPage("page-product");
  }

  function renderCart() {
    const cartContainer = document.getElementById("cart-items-container");
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
      document.getElementById("cart-total-price").innerText = "0.00€";
      updateCartCount();
      return;
    }

    cartContainer.innerHTML = cart
      .map(
        (item) => `
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
        `,
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    document.getElementById("cart-total-price").innerText =
      `${total.toFixed(2)}€`;
    updateCartCount();
  }

  function renderConfirmation() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];

      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }

      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }

    if (discount > subTotal) {
      discount = subTotal;
    }

    const totalPrice = subTotal - discount;

    document.getElementById("confirmation-items-count").innerText =
      `${totalItems} article${totalItems > 1 ? "s" : ""}`;
    document.getElementById("confirmation-total-price").innerText =
      `${totalPrice.toFixed(2)}€`;

    const itemsList = document.getElementById("confirmation-items-list");
    itemsList.innerHTML = cart
      .map(
        (item, index) => `
             <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div>${index + 1}. ${item.name}</div>
                    <div>Quantité: ${item.quantity}x ${item.weight}</div>
                    <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
                </div>
            </div>
        `,
      )
      .join("");

    const promoInputContainer = document.getElementById(
      "promo-input-container",
    );
    const promoAppliedContainer = document.getElementById(
      "promo-applied-container",
    );
    if (appliedPromo) {
      promoInputContainer.style.display = "none";
      promoAppliedContainer.style.display = "flex";
      document.getElementById("promo-applied-text").innerText =
        `Code "${appliedPromo}" appliqué !`;
    } else {
      promoInputContainer.style.display = "flex";
      promoAppliedContainer.style.display = "none";
      document.getElementById("promo-code-input").value = "";
    }

    document.querySelectorAll(".payment-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.method === paymentMethod);
    });

    const summaryContainer = document.getElementById("confirmation-summary");
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

    showPage("page-confirmation");
  }

  function renderContactPage() {
    const linksContainer = document.getElementById("contact-links-container");
    linksContainer.innerHTML = contactLinks
      .map(
        (link) => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        <svg width="24" height="24"><use href="${link.icon}"/></svg>
            <span>${link.text}</span>
        </a>
        `,
      )
      .join("");
  }

  function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll(".cart-count");
    cartCountElements.forEach((el) => {
      el.innerText = count;
      el.style.display = count > 0 ? "flex" : "none";
    });
  }

  function populateFilters() {
    const searchFilter = document.getElementById("search-filter");
    const qualityFilter = document.getElementById("quality-filter");
    const farmFilter = document.getElementById("farm-filter");

    const allNestedProducts = appData.flatMap((category) => {
      const fromFarms = category.farms
        ? category.farms.flatMap((f) => f.products || [])
        : [];
      const fromDirect = category.products || [];
      return [...fromFarms, ...fromDirect];
    });

    const categoryQualities = appData.map((c) => c.quality).filter((q) => q);
    const qualities = ["all", ...new Set(categoryQualities)];

    const productFarms = allNestedProducts.map((p) => p.farm).filter((f) => f);
    const farms = ["all", ...new Set(productFarms)];

    qualityFilter.innerHTML = qualities
      .map(
        (q) => `<option value="${q}">${q === "all" ? "CATEGORIE" : q}</option>`,
      )
      .join("");
    farmFilter.innerHTML = farms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "LES FARM" : farm}</option>`,
      )
      .join("");

    searchFilter.addEventListener("input", (e) => {
      currentFilters.searchTerm = e.target.value;
      renderHomePage();
    });

    qualityFilter.addEventListener("change", (e) => {
      currentFilters.quality = e.target.value;
      renderHomePage();
    });

    farmFilter.addEventListener("change", (e) => {
      currentFilters.farm = e.target.value;
      renderHomePage();
    });
  }

  let notificationTimeout;
  function showNotification(message) {
    const notification = document.getElementById("notification-toast");
    if (!notification) return;

    clearTimeout(notificationTimeout);
    notification.classList.remove("show");
    void notification.offsetWidth;

    notification.innerText = message;
    notification.classList.add("show");

    notificationTimeout = setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }

  function addToCart(productId, weight, price) {
    const cartItemId = `${productId}-${weight}`;
    const existingItem = cart.find((item) => item.id === cartItemId);
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
        totalPrice: price,
      });
    }
    renderCart();
    tg.HapticFeedback.notificationOccurred("success");
    showNotification("✅ Produit ajouté au panier !");
  }

  function updateQuantity(cartItemId, action) {
    const item = cart.find((i) => i.id === cartItemId);
    if (!item) return;

    if (action === "increase") {
      item.quantity++;
    } else if (action === "decrease") {
      item.quantity--;
    }

    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== cartItemId);
    } else {
      item.totalPrice = item.quantity * item.unitPrice;
    }
    renderCart();
  }

  function formatOrderMessage() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      let discountableAmount = 0;
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;

    const date = new Date();
    const formattedDate = `${date.getDate()} ${date.toLocaleString("fr-FR", { month: "long" })} ${date.getFullYear()} a ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;

    let message = "NOUVELLE COMMANDE\n\n";
    message += "====================\n";
    message += "RESUME:\n";
    message += `- ${totalItems} article${totalItems > 1 ? "s" : ""} commande\n`;
    message += `- Méthode de paiement: ${paymentMethod}\n`;
    message += "====================\n";
    message += `DETAIL DES ARTICLES:\n`;

    cart.forEach((item) => {
      message += `\n- ${item.id}`;
      message += `\n  Quantite: ${item.quantity}x ${item.weight}`;
      message += `\n  Prix unitaire: ${item.unitPrice.toFixed(2)}e`;
      message += `\n  Sous-total: ${item.totalPrice.toFixed(2)} EUR`;
    });

    message += `\n\n====================\n`;
    message += `\nSOUS-TOTAL: ${subTotal.toFixed(2)} EUR`;
    if (discount > 0) {
      message += `\nREDUCTION (${appliedPromo}): -${discount.toFixed(2)} EUR`;
    }
    message += `\nTOTAL FINAL: ${totalPrice.toFixed(2)} EUR`;
    message += " \n-LIVRAISON: A convenir\n";
    message += " \n-CONTACT: Merci de confirmer cette commande\n";
    message += ` \n-Commande passee le: ${formattedDate}\n`;
    return message;
  }

  // --- GESTION DES ÉVÉNEMENTS ---
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const pageId = item.dataset.page;
      if (!pageId) return;

      if (pageId === "page-contact") {
        renderContactPage();
      }

      if (pageId === "page-home") {
        currentView = "categories";
        currentCategoryId = null;
        currentFilters.searchTerm = "";
        currentFilters.quality = "all";
        currentFilters.farm = "all";
        document.getElementById("search-filter").value = "";
        document.getElementById("quality-filter").value = "all";
        document.getElementById("farm-filter").value = "all";

        renderHomePage();
      }

      showPage(pageId);
    });
  });

  document.body.addEventListener("click", function (e) {
    const target = e.target;

    if (target.closest("#copy-order-btn")) {
      let message = formatOrderMessage();
      message = message.replace(/\*/g, "");

      const copyBtn = document.getElementById("copy-order-btn");
      const contactBtn = document.getElementById("confirm-order-button");

      copyBtn.classList.remove("main-action-btn");
      copyBtn.classList.add("secondary-action-btn");

      contactBtn.classList.remove("secondary-action-btn");
      contactBtn.classList.add("main-action-btn");
      contactBtn.disabled = false;
      return;
    }

    const categoryCard = target.closest(".category-card");
    if (categoryCard) {
      const categoryId = categoryCard.dataset.categoryId;
      const category = appData.find((c) => c.id === categoryId);

      currentCategoryId = categoryId;

      if (category.products) {
        currentView = "products";
      } else {
        currentView = "farms";
      }

      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    const accordionHeader = target.closest(".accordion-header");
    if (accordionHeader) {
      const accordionItem = accordionHeader.parentElement;

      document
        .querySelectorAll("#page-info .accordion-item.active")
        .forEach((item) => {
          if (item !== accordionItem) {
            item.classList.remove("active");
          }
        });

      accordionItem.classList.toggle("active");
      return;
    }

    const subCategoryBtn = target.closest(".sub-category-btn");
    if (subCategoryBtn) {
      if (subCategoryBtn.style.cursor === "not-allowed") return;

      currentView = "products";
      currentFarmId = subCategoryBtn.dataset.farmId;

      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    const productCard = target.closest(".product-item-card");
    if (productCard) {
      const productId = productCard.dataset.productId;
      const product = getProductById(productId);

      if (product.type === "Promo") {
        return;
      }

      renderProductPage(productId);
      return;
    }

    if (target.closest(".back-to-categories-btn")) {
      currentView = "categories";
      currentCategoryId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    if (target.closest(".back-to-farms-btn")) {
      currentView = "farms";
      currentFarmId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    if (target.closest("#apply-promo-btn")) {
      const input = document.getElementById("promo-code-input");
      const code = input.value.toUpperCase();

      if (validPromoCodes[code]) {
        appliedPromo = code;
        tg.HapticFeedback.notificationOccurred("success");
        showNotification("✅ Code promo appliqué !");
      } else {
        appliedPromo = null;
        tg.HapticFeedback.notificationOccurred("error");
        showNotification("❌ Code promo invalide.");
      }
      renderConfirmation();
    }

    if (target.closest("#remove-promo-btn")) {
      appliedPromo = null;
      showNotification("Code promo retiré.");
      renderConfirmation();
    }

    if (target.closest(".payment-btn")) {
      paymentMethod = target.closest(".payment-btn").dataset.method;
      document.querySelectorAll(".payment-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.method === paymentMethod);
      });
    }

    if (target.closest(".add-to-cart-btn")) {
      const btn = target.closest(".add-to-cart-btn");
      addToCart(
        btn.dataset.productId,
        btn.dataset.weight,
        parseFloat(btn.dataset.price),
      );
    }

    if (target.closest(".quantity-btn")) {
      const btn = target.closest(".quantity-btn");
      updateQuantity(btn.dataset.id, btn.dataset.action);
    }

    if (target.closest(".close-button")) {
      showPage("page-home");
    }

    if (target.closest("#cart-continue-shopping")) {
      showPage("page-home");
    }

    if (target.closest(".back-button")) {
      showPage("page-home");
    }

    if (target.closest("#home-cart-button")) {
      renderCart();
      showPage("page-cart");
    }

    if (target.closest("#checkout-button")) {
      renderConfirmation();
    }

    if (target.closest("#confirmation-modify-order")) {
      showPage("page-cart");
    }

    if (target.closest("#confirm-order-button")) {
      const targetUsername = "THEGAZCOMMANDE";
      let message = formatOrderMessage();
      message = message.replace(/\*/g, "");

      const encodedMessage = encodeURIComponent(message);
      const telegramUrl = `https://t.me/${targetUsername}?text=${encodedMessage}`;

      tg.openLink(telegramUrl);
    }
  });

  // --- INITIALISATION DE L'APP ---
  function init() {
    setTimeout(() => {
      populateFilters();
      renderHomePage();
      updateCartCount();
      showPage("page-home");
    }, 1500);
  }

  init();
});
