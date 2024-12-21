const cuisines = [
  {
    id: 1,
    name: 'African',
    image: 'https://feastwithsafiya.com/wp-content/uploads/2021/11/creamy-tomato-soup-2.jpg'
  },
  {
    id: 2,
    name: 'Asian',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAoseXWizW53EeKvEbsrk4Be_VyCZWk9xA9g&s'
  },
  {
    id: 3,
    name: 'American',
    image: 'https://t3.ftcdn.net/jpg/07/54/04/66/360_F_754046676_EUe1K1ZYznZwGkhLbzkin0Ky86mYuEkq.jpg'
  },
  {
    id: 4,
    name: 'British',
    image: 'https://img.freepik.com/premium-photo/top-view-vegan-lentil-shepherds-pie-white-round-plate-white-background-generative-ai_918839-7154.jpg'
  },
  {
    id: 5,
    name: 'Cajun',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7bDvyEN0jM515k7JDKb4lfOAwRovyo71cQ&s'
  },
  {
    id: 6,
    name: 'Caribbean',
    image: 'https://www.ambitiouskitchen.com/wp-content/uploads/2020/08/Sazon-Grilled-Chicken-Thighs-3-594x594.jpg'
  },
  {
    id: 7,
    name: 'Chinese',
    image: 'https://media.istockphoto.com/id/1252605665/photo/chilli-garlic-hakka-noodles-in-black-bowl-isolated-on-white-background-indo-chinese.jpg?s=612x612&w=0&k=20&c=lesS8Wt5JVauAqjVh9uPfoiGr1ZjsnjHWZyKw3zLg2E='
  },
  {
    id: 8,
    name: 'Eastern European',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQi_M9ARlcuxaoTtuRVG931_Y_v23nj-xnUA&s'
  },
  {
    id: 9,
    name: 'European',
    image: 'https://www.shutterstock.com/image-photo/plate-grilled-salmon-steak-potato-600nw-2141539785.jpg'
  },
  {
    id: 10,
    name: 'French',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwJiPzvRoXe52yLVMnW5KremXvIqyqQdoeuSVDusxwOX9dBGP-RX_8XzX8On48uVfYPE&usqp=CAU'
  },
  {
    id: 11,
    name: 'German',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG1mlILSY0aYzgmyE0gtQioXFr9JSAjN44sA&s'
  },
  {
    id: 12,
    name: 'Greek',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlpbO-BHk_idmiIcN19pQv3lWfFLADmukgw&s'
  },
  {
    id: 13,
    name: 'Indian',
    image: 'https://www.shutterstock.com/image-photo/chole-bhature-north-indian-food-600nw-2241211611.jpg'
  },
  {
    id: 14,
    name: 'Irish',
    image: 'https://img.freepik.com/premium-photo/sliced-corned-beef-with-cabbage-potatoes-plate-traditional-irish-meal-white-background_862489-13971.jpg'
  },
  {
    id: 15,
    name: 'Italian',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPWNHT7d9RL22yfONXfvILVWOYXtlKxl6Og&s'
  },
  {
    id: 16,
    name: 'Japanese',
    image: 'https://png.pngtree.com/png-vector/20231018/ourlarge/pngtree-sushi-on-black-plate-aerial-view-generative-ai-technology-png-image_10205067.png'
  },
  {
    id: 17,
    name: 'Korean',
    image: 'https://img.freepik.com/premium-photo/bowl-korean-food-plate-bowl-top-view-white-background_951562-72831.jpg'
  },
  {
    id: 18,
    name: 'Latin American',
    image: 'https://img.freepik.com/premium-photo/typical-latin-america-salchipapa-sausages-with-fries-ketchup-mustard-mayo-isolated-white-surface-top-view_123827-4038.jpg?w=360'
  },
  {
    id: 19,
    name: 'Mediterranean',
    image: 'https://www.shutterstock.com/image-photo/top-view-plate-fettuccine-alfredo-260nw-2498764063.jpg'
  },
  {
    id: 20,
    name: 'Mexican',
    image: 'https://media.istockphoto.com/id/1348318884/photo/plate-of-mexican-food-tacos.jpg?s=612x612&w=0&k=20&c=Vt8vi4-sCaum6YrzAiAkH7lUJK5mtp2zYT3uYw1M7iA='
  },
  {
    id: 21,
    name: 'Middle Eastern',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRconGKsGVAurwaUjH9x1FVHCd1YUWghWp96A&s'
  },
  {
    id: 22,
    name: 'Nordic',
    image: 'https://thumbs.dreamstime.com/b/poppy-seed-rolls-cardamom-buns-traditional-nordic-baked-sweet-breads-wooden-board-white-background-top-view-265974475.jpg'
  },
  {
    id: 23,
    name: 'Southern',
    image: 'https://img.freepik.com/premium-photo/tuna-salad-with-egg-vegetables-corn-white-bowl-white-background-top-view-generative-ai_1259709-87173.jpg'
  },
  {
    id: 24,
    name: 'Spanish',
    image: 'https://img.freepik.com/premium-photo/seafood-paella-top-view-white-background_951562-73411.jpg'
  },
  {
    id: 25,
    name: 'Thai',
    image: 'https://media.istockphoto.com/id/878876758/photo/roast-chicken-nuggets-and-vegetables.jpg?s=612x612&w=0&k=20&c=OlYAJ9mxjb2gIZBo2KjC74WxiWAdcY3jJZC9UGfsQAs='
  },
  {
    id: 26,
    name: 'Vietnamese',
    image: 'https://img.freepik.com/premium-photo/pho-bo-vietnamese-soup-with-beef-rice-noodles-white-background-top-view-close-up_233226-570.jpg'
  }
]

export default cuisines
