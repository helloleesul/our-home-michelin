export const MY_MENU_LIST = [
  { value: "작성한 레시피", to: "/mypage/myRecipes" },
  { value: "좋아하는 레시피", to: "/mypage/likeRecipes" },
  { value: "정보 수정", to: "/mypage/info" },
];

export const RECIPE_LIST = [
  { value: "최신 레시피", to: "/recipes?category=all" },
  { value: "인기 레시피", to: "/recipes?category=popular" },
];

export const NAV_LIST = [
  { value: ["HOME", "홈"], to: "/" },
  { value: ["RECIPE LIST", "레시피"], to: RECIPE_LIST[0].to },
  { value: ["NEW RECIPE", "레시피 만들기"], to: "/new-recipe" },
];

export const RECIPE_TYPE_LIST = [
  { label: "한식", value: "korean" },
  { label: "중식", value: "chinese" },
  { label: "양식", value: "western" },
  { label: "일식", value: "japanese" },
  { label: "동남아식", value: "southeast_asian" },
  { label: "반찬", value: "side_dish" },
  { label: "간식", value: "snack" },
  { label: "퓨전", value: "fusion" },
];

export const RECIPE_ING_AMOUNT_LIST = [
  { label: "큰술", value: "15ml" },
  { label: "작은술", value: "5ml" },
  { label: "컵", value: "200ml" },
  { label: "종이컵", value: "180ml" },
  { label: "oz", value: "28.3g" },
  { label: "파운드", value: "0.453kg" },
  { label: "갤런", value: "3.78l" },
  { label: "꼬집", value: "2g" },
  { label: "주먹", value: "100g" },
  { label: "토막", value: "2~3cm" },
  { label: "근", value: "600g" },
  { label: "봉지", value: "200g" },
];
