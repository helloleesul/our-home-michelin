const ingredientTypes = ["육류", "야채", "곡물", "유제품", "과일", "해산물"];
const ingredients = [
  // 육류
  [
    { name: "닭고기", imgUrl: "chicken.jpg" },
    { name: "돼지고기", imgUrl: "pork.jpg" },
    { name: "소고기", imgUrl: "beef.jpg" },
    { name: "양고기", imgUrl: "beef.jpg" },
    { name: "오리고기", imgUrl: "beef.jpg" },
  ],
  // 야채
  [
    { name: "가지", imgUrl: "eggplant.jpg" },
    { name: "고추", imgUrl: "pepper.jpg" },
    { name: "양파", imgUrl: "onion.jpg" },
    { name: "김치", imgUrl: "eggplant.jpg" },
    { name: "깻잎", imgUrl: "pepper.jpg" },
    { name: "당근", imgUrl: "onion.jpg" },
    { name: "대파", imgUrl: "eggplant.jpg" },
    { name: "마늘", imgUrl: "pepper.jpg" },
    { name: "무", imgUrl: "onion.jpg" },
    { name: "배추", imgUrl: "eggplant.jpg" },
    { name: "브로콜리", imgUrl: "pepper.jpg" },
    { name: "애호박", imgUrl: "onion.jpg" },
    { name: "상추", imgUrl: "onion.jpg" },
    { name: "샐러리", imgUrl: "onion.jpg" },
    { name: "시금치", imgUrl: "onion.jpg" },
    { name: "양배추", imgUrl: "onion.jpg" },
    { name: "양송이버섯", imgUrl: "onion.jpg" },
    { name: "열무", imgUrl: "onion.jpg" },
    { name: "오이", imgUrl: "onion.jpg" },
    { name: "콩나물", imgUrl: "onion.jpg" },
    { name: "토마토", imgUrl: "onion.jpg" },
    { name: "파프리카", imgUrl: "onion.jpg" },
    { name: "팽이버섯", imgUrl: "onion.jpg" },
    { name: "표고버섯", imgUrl: "onion.jpg" },
    { name: "호박", imgUrl: "onion.jpg" },
  ],
  // 곡물
  [
    { name: "감자", imgUrl: "chicken.jpg" },
    { name: "고구마", imgUrl: "chicken.jpg" },
    { name: "귀리", imgUrl: "chicken.jpg" },
    { name: "쌀", imgUrl: "chicken.jpg" },
    { name: "통밀", imgUrl: "chicken.jpg" },
    { name: "밀가루", imgUrl: "chicken.jpg" },
    { name: "옥수수", imgUrl: "chicken.jpg" },
  ],
  // 유제품
  [
    { name: "계란", imgUrl: "chicken.jpg" },
    { name: "치즈", imgUrl: "chicken.jpg" },
    { name: "요거트", imgUrl: "chicken.jpg" },
  ],
  // 과일
  [
    { name: "감", imgUrl: "chicken.jpg" },
    { name: "건포도", imgUrl: "chicken.jpg" },
    { name: "귤", imgUrl: "chicken.jpg" },
    { name: "딸기", imgUrl: "chicken.jpg" },
    { name: "라임", imgUrl: "chicken.jpg" },
    { name: "레몬", imgUrl: "chicken.jpg" },
    { name: "망고", imgUrl: "chicken.jpg" },
    { name: "메론", imgUrl: "chicken.jpg" },
    { name: "바나나", imgUrl: "chicken.jpg" },
    { name: "배", imgUrl: "chicken.jpg" },
    { name: "복숭아", imgUrl: "chicken.jpg" },
    { name: "블루베리", imgUrl: "chicken.jpg" },
    { name: "사과", imgUrl: "chicken.jpg" },
    { name: "수박", imgUrl: "chicken.jpg" },
    { name: "아보카도", imgUrl: "chicken.jpg" },
    { name: "오렌지", imgUrl: "chicken.jpg" },
    { name: "자두", imgUrl: "chicken.jpg" },
    { name: "체리", imgUrl: "chicken.jpg" },
    { name: "키위", imgUrl: "chicken.jpg" },
    { name: "파인애플", imgUrl: "chicken.jpg" },
    { name: "포도", imgUrl: "chicken.jpg" },
  ],
  // 해산물
  [
    { name: "새우", imgUrl: "chicken.jpg" },
    { name: "고등어", imgUrl: "chicken.jpg" },
    { name: "게맛살", imgUrl: "chicken.jpg" },
    { name: "골뱅이", imgUrl: "chicken.jpg" },
    { name: "굴", imgUrl: "chicken.jpg" },
    { name: "꼬막", imgUrl: "chicken.jpg" },
    { name: "꽁치", imgUrl: "chicken.jpg" },
    { name: "꽃게", imgUrl: "chicken.jpg" },
    { name: "낙지", imgUrl: "chicken.jpg" },
    { name: "다시마", imgUrl: "chicken.jpg" },
    { name: "동태", imgUrl: "chicken.jpg" },
    { name: "명태", imgUrl: "chicken.jpg" },
    { name: "멸치", imgUrl: "chicken.jpg" },
    { name: "문어", imgUrl: "chicken.jpg" },
    { name: "소라", imgUrl: "chicken.jpg" },
    { name: "연어", imgUrl: "chicken.jpg" },
    { name: "어묵", imgUrl: "chicken.jpg" },
    { name: "오징어", imgUrl: "chicken.jpg" },
    { name: "조개", imgUrl: "chicken.jpg" },
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
