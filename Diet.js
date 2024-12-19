const diets = [
  {
    id: 1,
    name: 'Gluten Free',
    description:
      'Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross-contaminated).',
    image: 'https://img.freepik.com/premium-photo/salmon-steak-plate-top-view-isolated-white-background_9493-19995.jpg'
  },
  {
    id: 2,
    name: 'Ketogenic',
    description:
      'The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.',
    image: 'https://media.istockphoto.com/id/1174567728/photo/ketogenic-diet-keto-brunch-boiled-egg-pork-steak-and-olives-cucumber-spinach-brie-cheese-nuts.jpg?s=612x612&w=0&k=20&c=f59X5n1LpERJm9y1QD4w4D2OagWs7K2IZC2j6ZVyKVQ='
  },
  {
    id: 3,
    name: 'Vegetarian',
    description:
      'No ingredients may contain meat or meat by-products, such as bones or gelatin.',
    image: 'https://img.freepik.com/premium-photo/veg-sabji-black-bowl-top-view-isolated-white-background-generative-ai_802140-415.jpg'
  },
  {
    id: 4,
    name: 'Lacto-Vegetarian',
    description:
      'All ingredients must be vegetarian and none of the ingredients can be or contain egg.',
    image: 'https://myblacktree.com/cdn/shop/files/paneer-butter-masala-recipe-removebg-preview.png?v=1691158494'
  },
  {
    id: 5,
    name: 'Ovo-Vegetarian',
    description:
      'All ingredients must be vegetarian and none of the ingredients can be or contain dairy.',
    image: 'https://img.freepik.com/premium-photo/photo-background-white-backgroundimg-jpghd-item-white-plant-color-texture-2024-stock-ima_873925-283268.jpg'
  },
  {
    id: 6,
    name: 'Vegan',
    description:
      'No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.',
    image: 'https://img.freepik.com/premium-photo/lentil-soup-closeup_941097-166645.jpg'
  },
  {
    id: 7,
    name: 'Pescetarian',
    description:
      'Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.',
    image: 'https://media.istockphoto.com/id/1348318884/photo/plate-of-mexican-food-tacos.jpg?s=612x612&w=0&k=20&c=Vt8vi4-sCaum6YrzAiAkH7lUJK5mtp2zYT3uYw1M7iA='
  },
  {
    id: 8,
    name: 'Paleo',
    description:
      'Allowed ingredients include meat (especially grass-fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_wnGeqMpE2fJaX_p4LSnjq2BcJqM_LuGeQ&s'
  },
  {
    id: 9,
    name: 'Primal',
    description:
      'Very similar to Paleo, except dairy is allowed - think raw and full-fat milk, butter, ghee, etc.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnGEENVM6sKSjo4sqamvVq2EBCVNq_on7yQ&s'
  },
  {
    id: 10,
    name: 'Low FODMAP',
    description:
      "FODMAP stands for 'fermentable oligo-, di-, mono-saccharides and polyols'. Our ontology knows which foods are considered high in these types of carbohydrates (e.g. legumes, wheat, and dairy products).",
    image: 'https://static.vecteezy.com/system/resources/previews/036/498/035/non_2x/ai-generated-bowl-of-hearty-chicken-and-wild-rice-soup-on-transparent-background-free-png.png'
  },
  {
    id: 11,
    name: 'Whole30',
    description:
      'Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.',
    image: 'https://static.vecteezy.com/system/resources/previews/029/558/574/non_2x/top-view-grilled-chicken-with-vegetables-isolated-on-white-background-free-photo.jpg'
  }
];

export default diets;
