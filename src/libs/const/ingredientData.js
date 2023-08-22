const ingredientTypes = ["육류", "야채류"];
const ingredients = [
  // 육류
  [
    { name: "닭고기", imgUrl: "chicken.jpg" },
    { name: "돼지고기", imgUrl: "pork.jpg" },
    { name: "소고기", imgUrl: "beef.jpg" },
  ],
  // 야채류
  [
    { name: "가지", imgUrl: "eggplant.jpg" },
    { name: "고추", imgUrl: "pepper.jpg" },
    { name: "양파", imgUrl: "onion.jpg" },
    { name: "가지", imgUrl: "eggplant.jpg" },
    { name: "고추", imgUrl: "pepper.jpg" },
    { name: "양파", imgUrl: "onion.jpg" },
    { name: "가지", imgUrl: "eggplant.jpg" },
    { name: "고추", imgUrl: "pepper.jpg" },
    { name: "양파", imgUrl: "onion.jpg" },
    { name: "가지", imgUrl: "eggplant.jpg" },
    { name: "고추", imgUrl: "pepper.jpg" },
    { name: "양파", imgUrl: "onion.jpg" },
  ],
];

const INGREDIENT_DATA = ingredientTypes.map((type, index) => {
  return {
    type: type,
    ingredient: ingredients[index].map((ingredient) => {
      return {
        name: ingredient.name,
        // selected: false,
        imgUrl: ingredient.imgUrl,
      };
    }),
  };
});

export default INGREDIENT_DATA;
