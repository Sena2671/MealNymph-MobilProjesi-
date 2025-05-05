export const RECIPES = [
  {
    id: 1,
    name: 'Avokadolu Tost',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
    category: 'Kahvaltı',
    tags: ['Kahvaltı', 'Vejetaryen'],
    time: '15 dk',
    calories: '350 kcal',
    description: 'Tam buğday ekmeği, avokado, domates ve taze otlarla hazırlanan sağlıklı bir kahvaltı.',
    ingredients: [
      '2 dilim tam buğday ekmeği',
      '1 adet avokado',
      '1 adet domates',
      'Tuz, karabiber',
      'Taze otlar (maydanoz, dereotu vb.)'
    ],
    steps: [
      'Ekmeği kızartın.',
      'Avokadoyu ezin ve ekmeğin üzerine sürün.',
      'Domatesi dilimleyip ekleyin.',
      'Tuz, karabiber ve taze otlarla süsleyin.'
    ]
  },
  {
    id: 2,
    name: 'Kinoa Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'Öğle',
    tags: ['Öğle', 'Protein', 'Glutensiz'],
    time: '25 dk',
    calories: '420 kcal',
    description: 'Kinoa, ızgara tavuk, avokado ve taze sebzelerle hazırlanan besleyici bir öğün.',
    ingredients: [
      '1 su bardağı kinoa',
      '100g ızgara tavuk',
      'Yarım avokado',
      'Karışık taze sebzeler',
      'Zeytinyağı, limon suyu'
    ],
    steps: [
      'Kinoayı haşlayın.',
      'Tavuğu ızgarada pişirin ve dilimleyin.',
      'Sebzeleri doğrayın.',
      'Tüm malzemeleri bir kasede karıştırın ve sos ekleyin.'
    ]
  },
  {
    id: 3,
    name: 'Somon ve Sebze',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
    category: 'Akşam',
    tags: ['Akşam', 'Balık'],
    time: '35 dk',
    calories: '480 kcal',
    description: 'Fırında pişirilmiş somon, kuskus ve ızgara sebzelerle hazırlanan lezzetli bir akşam yemeği.',
    ingredients: [
      '1 dilim somon',
      '1 su bardağı kuskus',
      'Karışık sebzeler (kabak, havuç, biber vb.)',
      'Zeytinyağı, limon, tuz, karabiber'
    ],
    steps: [
      'Sebzeleri doğrayıp fırın tepsisine dizin.',
      'Somonu sebzelerin üzerine yerleştirin.',
      'Zeytinyağı, limon, tuz ve karabiber ekleyin.',
      "Önceden ısıtılmış fırında 200°C'de 25 dakika pişirin."
    ]
  },
  {
    id: 4,
    name: 'Protein Salata',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    category: 'Öğle',
    tags: ['Öğle', 'Salata'],
    time: '20 dk',
    calories: '320 kcal',
    description: 'Yüksek proteinli, taze sebzelerle hazırlanan doyurucu bir salata.',
    ingredients: [
      '1 su bardağı haşlanmış nohut',
      '1/2 su bardağı haşlanmış kinoa',
      '1 avuç roka',
      '1/2 kırmızı biber',
      '1 yemek kaşığı zeytinyağı',
      'Limon suyu, tuz'
    ],
    steps: [
      'Nohut ve kinoayı karıştırın.',
      'Sebzeleri doğrayıp ekleyin.',
      'Zeytinyağı, limon ve tuz ile tatlandırın.'
    ]
  },
  {
    id: 5,
    name: 'Çikolatalı Kek',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    category: 'Tatlı',
    tags: ['Tatlı'],
    time: '45 dk',
    calories: '400 kcal',
    description: 'Yoğun çikolatalı, yumuşak dokulu nefis bir kek.',
    ingredients: [
      '2 su bardağı un',
      '3 yemek kaşığı kakao',
      '1 su bardağı şeker',
      '3 yumurta',
      '1 su bardağı süt',
      '1 paket kabartma tozu',
      'Yarım su bardağı sıvı yağ'
    ],
    steps: [
      'Yumurta ve şekeri çırpın.',
      'Sıvı malzemeleri ekleyin.',
      'Kuru malzemeleri ekleyip karıştırın.',
      '180°C fırında 35-40 dakika pişirin.'
    ]
  },
  {
    id: 6,
    name: 'Sebzeli Omlet',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc',
    category: 'Kahvaltı',
    tags: ['Kahvaltı', 'Vejetaryen'],
    time: '10 dk',
    calories: '220 kcal',
    description: 'Mevsim sebzeleriyle hazırlanan pratik ve sağlıklı omlet.',
    ingredients: [
      '2 yumurta',
      '1/2 kabak',
      '1/2 havuç',
      '1/2 kırmızı biber',
      'Tuz, karabiber',
      '1 tatlı kaşığı zeytinyağı'
    ],
    steps: [
      'Sebzeleri rendeleyin ve tavada soteleyin.',
      'Çırpılmış yumurtayı ekleyin.',
      'Kısık ateşte pişirin.'
    ]
  },
  {
    id: 7,
    name: 'Meyveli Smoothie',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c',
    category: 'İçecekler',
    tags: ['İçecekler', 'Sağlıklı'],
    time: '5 dk',
    calories: '120 kcal',
    description: 'Muz, çilek ve yoğurt ile hazırlanan serinletici smoothie.',
    ingredients: [
      '1 adet muz',
      '5-6 adet çilek',
      '1 su bardağı yoğurt',
      '1 tatlı kaşığı bal'
    ],
    steps: [
      'Tüm malzemeleri blenderda çekin.',
      'Soğuk servis yapın.'
    ]
  },
  {
    id: 8,
    name: 'Glutensiz Kek',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c',
    category: 'Glutensiz',
    tags: ['Glutensiz', 'Tatlı'],
    time: '40 dk',
    calories: '250 kcal',
    description: 'Glutensiz un ile yapılan hafif ve lezzetli kek.',
    ingredients: [
      '2 su bardağı glutensiz un',
      '3 yumurta',
      '1 su bardağı şeker',
      '1 su bardağı süt',
      '1 paket kabartma tozu',
      'Yarım su bardağı sıvı yağ'
    ],
    steps: [
      'Yumurta ve şekeri çırpın.',
      'Sıvı malzemeleri ekleyin.',
      'Kuru malzemeleri ekleyip karıştırın.',
      '180°C fırında 35-40 dakika pişirin.'
    ]
  },
  {
    id: 9,
    name: 'Vejetaryen Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    category: 'Vejetaryen',
    tags: ['Vejetaryen', 'Akşam'],
    time: '30 dk',
    calories: '380 kcal',
    description: 'Sebzelerle zenginleştirilmiş nefis ve hafif pizza.',
    ingredients: [
      '1 hazır pizza tabanı',
      '1/2 su bardağı domates sosu',
      '1/2 kabak',
      '1/2 kırmızı biber',
      '1/2 soğan',
      '1 su bardağı rendelenmiş kaşar',
      'Zeytinyağı, kekik'
    ],
    steps: [
      'Sebzeleri doğrayın.',
      'Pizza tabanına sos sürün ve sebzeleri dizin.',
      'Peynir ve baharat ekleyin.',
      '200°C fırında 15-20 dakika pişirin.'
    ]
  },
  {
    id: 10,
    name: 'Limonata',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0',
    category: 'İçecekler',
    tags: ['İçecekler'],
    time: '10 dk',
    calories: '90 kcal',
    description: 'Ev yapımı ferahlatıcı limonata.',
    ingredients: [
      '3 adet limon',
      '1/2 su bardağı şeker',
      '1 litre su',
      'Nane yaprakları (isteğe bağlı)'
    ],
    steps: [
      'Limonları sıkın.',
      'Şeker ve su ile karıştırın.',
      'Nane ekleyip soğuk servis yapın.'
    ]
  },
  {
    id: 11,
    name: 'Glutensiz Kinoa Salatası',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'Glutensiz',
    tags: ['Glutensiz', 'Sağlıklı'],
    time: '25 dk',
    calories: '320 kcal',
    description: 'Kinoa, taze sebzeler ve avokado ile hazırlanan besleyici bir salata.',
    ingredients: [
      '1 su bardağı kinoa',
      '1 adet avokado',
      '1 adet salatalık',
      '1 adet domates',
      'Zeytinyağı, limon suyu, tuz'
    ],
    steps: [
      'Kinoayı haşlayın ve soğumaya bırakın.',
      'Sebzeleri küp küp doğrayın.',
      'Avokadoyu dilimleyin.',
      'Tüm malzemeleri karıştırın ve sos ekleyin.'
    ]
  },
  {
    id: 12,
    name: 'Akşam Izgara Tavuk',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    category: 'Akşam',
    tags: ['Akşam', 'Protein'],
    time: '30 dk',
    calories: '410 kcal',
    description: 'Izgara tavuk ve sebzelerle hazırlanan hafif akşam yemeği.',
    ingredients: [
      '150g tavuk göğsü',
      '1 adet kabak',
      '1 adet havuç',
      '1 yemek kaşığı zeytinyağı',
      'Tuz, karabiber'
    ],
    steps: [
      'Tavuğu ve sebzeleri doğrayın.',
      'Zeytinyağı ve baharatlarla harmanlayın.',
      'Izgarada pişirin.'
    ]
  },
]; 