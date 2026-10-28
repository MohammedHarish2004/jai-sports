export const categories = [
  {
    id: "sports",
    name: "Sports",
    slug: "sports",
    description: "High-grade sports equipment for football, cricket, basketball, badminton, tennis and volleyball.",
    image: "/images/categories/sports.jpg",
    comingSoon: false
  },
  {
    id: "trophies",
    name: "Trophies",
    slug: "trophies",
    description: "Championship cups, crystal awards, custom sports medals, wooden plaques and celebration shields.",
    image: "/images/categories/trophies.jpg",
    comingSoon: true
  },
  {
    id: "kids",
    name: "Kids",
    slug: "kids",
    description: "Safe, lightweight and exciting sports sets crafted specifically for budding young athletes.",
    image: "/images/categories/kids.jpg",
    comingSoon: true
  },
  {
    id: "fitness",
    name: "Fitness",
    slug: "fitness",
    description: "Endurance gear, dumbbells, resistance bands, yoga mats, and agility training equipment.",
    image: "/images/categories/fitness.jpg",
    comingSoon: true
  },
  {
    id: "uniforms",
    name: "Uniforms",
    slug: "uniforms",
    description: "Custom printed team jerseys, breathable bibs, athletic shorts, tracksuits, and sports socks.",
    image: "/images/categories/uniforms.jpg",
    comingSoon: true
  },
  {
    id: "music",
    name: "Musical Instruments",
    slug: "musical-instruments",
    description: "School band gear, marching drums, acoustic guitars, brass trumpets, electronic keyboards and rhythm percussion.",
    image: "/images/categories/musical.jpg",
    comingSoon: true
  }
];

export const products = [
  {
    id: "prod-001",
    name: "Professional FIFA Match Football",
    slug: "professional-fifa-match-football",
    categoryId: "sports",
    description: "Thermally bonded PU match ball with aerodynamic panel design for precise flight and superior touch.",
    image: "/images/products/football.svg",
    price: 1899,
    featured: false
  },
  {
    id: "prod-002",
    name: "Grand Championship Trophy Cup",
    slug: "grand-championship-trophy-cup",
    categoryId: "trophies",
    description: "Heavyweight gold-plated victory cup on a polished wooden base, customizable with engraved nameplates.",
    image: "/images/products/championship-trophy.svg",
    price: null,
    featured: false
  },
  {
    id: "prod-003",
    name: "Junior Champion Cricket Starter Kit",
    slug: "junior-champion-cricket-starter-kit",
    categoryId: "kids",
    description: "Complete lightweight junior kit including wooden bat, soft balls, stumps, and a durable carrying bag.",
    image: "/images/products/kids-cricket.svg",
    price: 1450,
    featured: false
  },
  {
    id: "prod-004",
    name: "English Willow Pro Cricket Bat",
    slug: "english-willow-pro-cricket-bat",
    categoryId: "sports",
    description: "Handcrafted Grade 1 English Willow bat with massive edges, exceptional balance, and explosive power.",
    image: "/images/products/cricket-bat.svg",
    price: null,
    featured: false
  },
  {
    id: "prod-005",
    name: "Custom Metallic Sports Medals Set",
    slug: "custom-metallic-sports-medals-set",
    categoryId: "trophies",
    description: "Die-cast gold, silver, and bronze finish medals with customized ribbons for school and club tournaments.",
    image: "/images/products/medals-set.svg",
    price: 250,
    featured: false
  },
  {
    id: "prod-006",
    name: "Carbon Fiber Pro Badminton Racket",
    slug: "carbon-fiber-pro-badminton-racket",
    categoryId: "sports",
    description: "Ultra-lightweight 4U high-modulus graphite racket offering lightning-fast smashes and effortless control.",
    image: "/images/products/ball-badminton.jpg",
    price: 2850,
    featured: true
  },
  {
    id: "prod-007",
    name: "Official Indoor/Outdoor Basketball Size 7",
    slug: "official-basketball-size-7",
    categoryId: "sports",
    description: "Deep-pebble composite leather basketball engineered for superior grip and long-lasting bounce consistency.",
    image: "/images/products/basketball.jpg",
    price: 1250,
    featured: true
  },
  {
    id: "prod-008",
    name: "Executive Crystal Star Award",
    slug: "executive-crystal-star-award",
    categoryId: "trophies",
    description: "Optical crystal award with beveled star top and laser subsurface engraving for corporate & sports honors.",
    image: "/images/products/crystal-award.svg",
    price: null,
    featured: false
  },
  {
    id: "prod-009",
    name: "Kids Colorful Foam Training Football",
    slug: "kids-colorful-foam-training-football",
    categoryId: "kids",
    description: "Soft high-density foam ball designed for safe indoor and backyard play for toddlers and preschoolers.",
    image: "/images/products/kids-football.svg",
    price: 499,
    featured: false
  },
  {
    id: "prod-010",
    name: "Adjustable Cast Iron Hex Dumbbell Pair (10kg)",
    slug: "adjustable-cast-iron-hex-dumbbell-pair",
    categoryId: "fitness",
    description: "Anti-roll rubber encased hex dumbbells with knurled ergonomic chrome handles for strength training.",
    image: "/images/products/dumbbells.svg",
    price: 3200,
    featured: false
  },
  {
    id: "prod-011",
    name: "Breathable Sublimated Team Sports Jersey",
    slug: "breathable-sublimated-team-sports-jersey",
    categoryId: "uniforms",
    description: "Moisture-wicking dry-fit athletic jersey with vibrant custom printing for club teams and tournaments.",
    image: "/images/products/team-jersey.svg",
    price: null,
    featured: false
  },
  {
    id: "prod-012",
    name: "Marching Band Snare Drum with Carrier Harness",
    slug: "marching-band-snare-drum-carrier",
    categoryId: "music",
    description: "Tournament marching snare drum with heavy-duty chrome rims, padded carrier harness, and wooden sticks.",
    image: "/images/products/snare-drum.jpg",
    price: 4850,
    featured: true
  },
  {
    id: "prod-013",
    name: "Tournament Wood Finish Recognition Shield",
    slug: "tournament-wood-finish-recognition-shield",
    categoryId: "trophies",
    description: "Traditional mahogany polished shield featuring central brass crest and annual winner name slots.",
    image: "/images/products/shield-trophy.svg",
    price: null,
    featured: false
  },
  {
    id: "prod-014",
    name: "Kids Mini Basketball Hoop & Stand Set",
    slug: "kids-mini-basketball-hoop-stand-set",
    categoryId: "kids",
    description: "Height-adjustable portable basketball stand with shatterproof backboard and inflatable junior ball.",
    image: "/images/products/kids-basketball.svg",
    price: 2199,
    featured: false
  },
  {
    id: "prod-015",
    name: "Speed Agility Ladder & Cone Training Set",
    slug: "speed-agility-ladder-cone-training-set",
    categoryId: "fitness",
    description: "6-meter flat rung agility ladder with 10 high-visibility marker cones for footwork conditioning.",
    image: "/images/products/agility-ladder.svg",
    price: 899,
    featured: false
  },
  {
    id: "prod-016",
    name: "Classic Cutaway Acoustic Guitar (Natural Spruce)",
    slug: "classic-cutaway-acoustic-guitar",
    categoryId: "music",
    description: "Handcrafted dreadnought acoustic guitar with natural spruce top, warm resonance, and smooth rosewood fretboard.",
    image: "/images/products/acoustic-guitar.jpg",
    price: 3999,
    featured: false
  },
  {
    id: "prod-017",
    name: "Athletic Equipments",
    slug: "athletic-equipments",
    categoryId: "sports",
    description: "Official track and field equipment including relay batons, training hurdles, shot put, discus, javelins, and high-jump crossbars.",
    image: "/images/products/athletic-equipments.jpg",
    price: null,
    featured: true
  },
  {
    id: "prod-018",
    name: "Basketball",
    slug: "basketball",
    categoryId: "sports",
    description: "Official competition match basketballs engineered with deep-channel pebble grip for indoor and outdoor tournament play, rims and nets.",
    image: "/images/products/basketball.jpg",
    price: null,
    featured: true
  },
  {
    id: "prod-019",
    name: "Ball Badminton",
    slug: "ball-badminton",
    categoryId: "sports",
    description: "Competition ball badminton equipment including high-tension string rackets and tournament-certified yellow woollen match balls.",
    image: "/images/products/ball-badminton.jpg",
    price: null,
    featured: false
  },
  {
    id: "prod-020",
    name: "Boxing , Karate and Judo",
    slug: "boxing-karate-and-judo",
    categoryId: "sports",
    description: "Complete combat sports gear featuring heavy punching bags, pro sparring gloves, Karate uniforms (Gi), Judo kits, and martial arts rank belts.",
    image: "/images/products/boxing-karate-judo.jpg",
    price: null,
    featured: true
  },
  {
    id: "prod-021",
    name: "Carrom Boards",
    slug: "carrom-boards",
    categoryId: "sports",
    description: "Championship English birch plywood carrom boards with smooth playing surface, reinforced wooden borders, carrommen coins and pro striker.",
    image: "/images/products/carrom-boards.jpg",
    price: null,
    featured: true
  },
  {
    id: "prod-022",
    name: "Cricket",
    slug: "cricket",
    categoryId: "sports",
    description: "Comprehensive cricket kits, Kashmir and English willow bats, four-piece leather balls, batting pads, gloves, and tournament wooden stumps.",
    image: "/images/products/cricket.svg",
    price: null,
    featured: false
  },
  {
    id: "prod-023",
    name: "Football",
    slug: "football",
    categoryId: "sports",
    description: "Tournament match footballs, thermally bonded training balls, goalkeeper gloves, shin guards, and field agility markers.",
    image: "/images/products/football.svg",
    price: 1350,
    featured: false
  },
  {
    id: "prod-024",
    name: "Hand Ball",
    slug: "hand-ball",
    categoryId: "sports",
    description: "High-grip tournament handballs manufactured with soft-feel composite leather and durable bladder for school and club championships.",
    image: "/images/products/hand-ball.svg",
    price: 1150,
    featured: false
  },
  {
    id: "prod-025",
    name: "Hockey",
    slug: "hockey",
    categoryId: "sports",
    description: "Reinforced composite and wooden field hockey sticks, dimpled match balls, shin guards, and hockey goalkeeper protection gear.",
    image: "/images/products/hockey.svg",
    price: 1850,
    featured: false
  },
  {
    id: "prod-026",
    name: "Net Ball",
    slug: "net-ball",
    categoryId: "sports",
    description: "Regulation multi-ply grip match netballs, durable steel netball rings, all-weather nets, and training court posts.",
    image: "/images/products/net-ball.svg",
    price: 990,
    featured: false
  },
  {
    id: "prod-027",
    name: "Sportswear and Shoes",
    slug: "sportswear-and-shoes",
    categoryId: "sports",
    description: "Dry-fit moisture-wicking team sportswear, sublimated match jerseys, athletic shorts, tracksuits, running spikes, and indoor court shoes.",
    image: "/images/products/sportswear-and-shoes.svg",
    price: null,
    featured: false
  },
  {
    id: "prod-028",
    name: "Swimming",
    slug: "swimming",
    categoryId: "sports",
    description: "Anti-fog UV-shield swimming goggles, 100% silicone swim caps, training kickboards, pull buoys, and swimming ear & nose plugs.",
    image: "/images/products/swimming.svg",
    price: 599,
    featured: false
  },
  {
    id: "prod-029",
    name: "Table Tennis",
    slug: "table-tennis",
    categoryId: "sports",
    description: "ITTF regulation rubber table tennis bats, seamless 3-star ping pong balls, clamp-on tournament nets, and portable TT roll-nets.",
    image: "/images/products/table-tennis.svg",
    price: 1250,
    featured: false
  },
  {
    id: "prod-030",
    name: "Throw Ball",
    slug: "throw-ball",
    categoryId: "sports",
    description: "Official 32-panel laminated composite leather throwballs designed for optimum weight, balanced flight, and firm catch control.",
    image: "/images/products/throw-ball.svg",
    price: 899,
    featured: false
  },
  {
    id: "prod-031",
    name: "Tennis",
    slug: "tennis",
    categoryId: "sports",
    description: "High-performance graphite tennis rackets, pressurised felt tennis balls, tournament nets, grip tapes, and vibration dampeners.",
    image: "/images/products/tennis.svg",
    price: 2499,
    featured: false
  },
  {
    id: "prod-032",
    name: "Tennikoit Ring",
    slug: "tennikoit-ring",
    categoryId: "sports",
    description: "Moulded solid sponge rubber tennikoit rings for inter-school tournaments, agility speed training, and outdoor court games.",
    image: "/images/products/tennikoit-ring.svg",
    price: 199,
    featured: false
  },
  {
    id: "prod-033",
    name: "Volleyball",
    slug: "volleyball",
    categoryId: "sports",
    description: "Official 18-panel laminated PU volleyballs for indoor and beach play, tournament cotton volleyball nets, and antennae.",
    image: "/images/products/volleyball.svg",
    price: 1299,
    featured: false
  },
  {
    id: "prod-034",
    name: "Shuttle Rackets",
    slug: "shuttle-rackets",
    categoryId: "sports",
    description: "Ultra-light high modulus graphite shuttle badminton rackets, goose feather shuttlecock tubes, nylon shuttlecocks, and court net sets.",
    image: "/images/products/shuttle-rackets.svg",
    price: 1599,
    featured: false
  },
  {
    id: "prod-035",
    name: "Skating",
    slug: "skating",
    categoryId: "sports",
    description: "Adjustable inline speed skates and quad roller skates with ABEC-7 high-speed bearings, PU wheels, helmets, knee and elbow guard kits.",
    image: "/images/products/skating.svg",
    price: 2899,
    featured: false
  }
];
