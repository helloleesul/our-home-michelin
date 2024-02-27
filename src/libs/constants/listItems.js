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
