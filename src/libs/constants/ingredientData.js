const ingredients = {
  육류: [
    { name: "닭", imgUrl: "🐓" },
    { name: "칠면조", imgUrl: "🦃" },
    { name: "돼지", imgUrl: "🐖" },
    { name: "소", imgUrl: "🐂" },
    { name: "양", imgUrl: "🐑" },
    { name: "오리", imgUrl: "🦆" },
  ],
  해산물: [
    { name: "오징어", imgUrl: "🦑" },
    { name: "문어", imgUrl: "🐙" },
    { name: "고등어", imgUrl: "🐟" },
    { name: "소라", imgUrl: "🐚" },
    { name: "굴", imgUrl: "🦪" },
    { name: "꽃게", imgUrl: "🦀" },
    { name: "바닷가재", imgUrl: "🦞" },
    { name: "새우", imgUrl: "🦐" },
  ],
  채소: [
    { name: "가지", imgUrl: "🍆" },
    { name: "고추", imgUrl: "🌶️" },
    { name: "양파", imgUrl: "🧅" },
    { name: "당근", imgUrl: "🥕" },
    { name: "마늘", imgUrl: "🧄" },
    { name: "배추", imgUrl: "🥬" },
    { name: "브로콜리", imgUrl: "🥦" },
    { name: "오이", imgUrl: "🥒" },
    { name: "피망", imgUrl: "🫑" },
    { name: "아보카도", imgUrl: "🥑" },
    { name: "감자", imgUrl: "🥔" },
    { name: "고구마", imgUrl: "🍠" },
    { name: "옥수수", imgUrl: "🌽" },
    { name: "땅콩", imgUrl: "🥜" },
    { name: "완두콩", imgUrl: "🫛" },
    { name: "버섯", imgUrl: "🍄" },
    { name: "콩", imgUrl: "🫘" },
    { name: "밤", imgUrl: "🌰" },
    { name: "생강", imgUrl: "🫚" },
  ],
  과일: [
    { name: "포도", imgUrl: "🍇" },
    { name: "토마토", imgUrl: "🍅" },
    { name: "멜론", imgUrl: "🍈" },
    { name: "수박", imgUrl: "🍉" },
    { name: "귤", imgUrl: "🍊" },
    { name: "레몬", imgUrl: "🍋" },
    { name: "바나나", imgUrl: "🍌" },
    { name: "파인애플", imgUrl: "🍍" },
    { name: "망고", imgUrl: "🥭" },
    { name: "사과", imgUrl: "🍎" },
    { name: "풋사과", imgUrl: "🍏" },
    { name: "배", imgUrl: "🍐" },
    { name: "복숭아", imgUrl: "🍑" },
    { name: "체리", imgUrl: "🍒" },
    { name: "딸기", imgUrl: "🍓" },
    { name: "블루베리", imgUrl: "🫐" },
    { name: "키위", imgUrl: "🥝" },
    { name: "올리브", imgUrl: "🫒" },
    { name: "코코넛", imgUrl: "🥥" },
  ],
  디저트: [
    { name: "아이스크림", imgUrl: "🍦" },
    { name: "쿠키", imgUrl: "🍪" },
    { name: "초콜렛", imgUrl: "🍫" },
    { name: "사탕", imgUrl: "🍬" },
    { name: "꿀", imgUrl: "🍯" },
  ],
  음식: [
    { name: "식빵", imgUrl: "🍞" },
    { name: "바게트", imgUrl: "🥖" },
    { name: "베이글", imgUrl: "🥯" },
    { name: "치즈", imgUrl: "🧀" },
    { name: "베이컨", imgUrl: "🥓" },
    { name: "햄버거", imgUrl: "🍔" },
    { name: "피자", imgUrl: "🍕" },
    { name: "샌드위치", imgUrl: "🥪" },
    { name: "달걀", imgUrl: "🥚" },
    { name: "샐러드", imgUrl: "🥗" },
    { name: "소금", imgUrl: "🧂" },
    { name: "버터", imgUrl: "🧈" },
    { name: "밥", imgUrl: "🍚" },
    { name: "만두", imgUrl: "🥟" },
    { name: "오뎅", imgUrl: "🍢" },
  ],
  음료: [
    { name: "우유", imgUrl: "🥛" },
    { name: "커피", imgUrl: "☕" },
    { name: "차", imgUrl: "🍵" },
    { name: "와인", imgUrl: "🍷" },
    { name: "맥주", imgUrl: "🍺" },
    { name: "콜라", imgUrl: "🥤" },
    { name: "주스", imgUrl: "🧃" },
  ],
};

const INGREDIENT_DATA = Object.keys(ingredients).map((type) => {
  return {
    type,
    ingredient: ingredients[type].map((ingreValue) => ({
      name: ingreValue.name,
      imgUrl: ingreValue.imgUrl,
      selected: false,
    })),
  };
});

export default INGREDIENT_DATA;
