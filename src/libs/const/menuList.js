export const MY_MENU_LIST = [
  { value: "작성한 레시피", to: "/mypage/recipes" },
  { value: "좋아하는 레시피", to: "/mypage/recipes?sort=like" },
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
