import React, { useEffect, useState } from "react";
import * as S from "./Home.style"
import { Container } from "../components/common/Layout";
import Contents from "../components/pages/home/Contents";
import mainRefrigerator from "../assets/img/mainRefrigerator.png";
import MyFridgeButton from "../components/common/MyFridgeButton"



const foodsData = [
  {
    id: 1,
    name: "커비",
    profileImage:
      "https://i.namu.wiki/i/ijg40CIiHx5-Ihr3ksIJUm4cQQDEnek8xMEmJaQqGR5U13DKOZnCkzwPx1L5rcEX2-xxFYAyQO7XTcyqQ2BGEw.webp",
  },
  {
    id: 2,
    name: "꼬부기",
    profileImage:
      "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg",
  },
  {
    id: 3,
    name: "젤리",
    profileImage:
      "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2fG8/image/0zK7e-97apnyANk-UBEszLQuLF0.jpg",
  },
  {
    id: 4,
    name: "고양이",
    profileImage:
      "https://blog.kakaocdn.net/dn/dKCK2U/btqUekxdPc8/obYkOupRiOMIBY7CUDShk0/img.jpg",
  },
  {
    id: 5,
    name: "강아지",
    profileImage:
      "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-small-brown-puppy-is-seen-looking-at-the-camera-image_2580991.png",
  },
  {
    id: 6,
    name: "꼬북이",
    profileImage:
      "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg",
  },
  {
    id: 7,
    name: "고양이",
    profileImage:
      "https://blog.kakaocdn.net/dn/dKCK2U/btqUekxdPc8/obYkOupRiOMIBY7CUDShk0/img.jpg",
  },
  {
    id: 8,
    name: "강아지",
    profileImage:
      "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-small-brown-puppy-is-seen-looking-at-the-camera-image_2580991.png",
  },
  {
    id: 9,
    name: "꼬북이",
    profileImage:
      "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg",
  },
  {
    id: 10,
    name: "커비",
    profileImage:
      "https://i.namu.wiki/i/ijg40CIiHx5-Ihr3ksIJUm4cQQDEnek8xMEmJaQqGR5U13DKOZnCkzwPx1L5rcEX2-xxFYAyQO7XTcyqQ2BGEw.webp",
  },
  {
    id: 11,
    name: "커비",
    profileImage:
      "https://i.namu.wiki/i/ijg40CIiHx5-Ihr3ksIJUm4cQQDEnek8xMEmJaQqGR5U13DKOZnCkzwPx1L5rcEX2-xxFYAyQO7XTcyqQ2BGEw.webp",
  },
  {
    id: 12,
    name: "꼬부기",
    profileImage:
      "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg",
  },
  {
    id: 13,
    name: "젤리",
    profileImage:
      "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2fG8/image/0zK7e-97apnyANk-UBEszLQuLF0.jpg",
  },
  {
    id: 14,
    name: "고양이",
    profileImage:
      "https://blog.kakaocdn.net/dn/dKCK2U/btqUekxdPc8/obYkOupRiOMIBY7CUDShk0/img.jpg",
  },

];

const renderBestFoods = (foodsData) => {
  return foodsData.slice(0, 5).map((food) => (
    <div key={food.id}>
      <a><S.Food src={food.profileImage} alt={food.name} /></a>
      <p>{food.name}</p>
    </div>
  ));
};

const renderEditors = (foodsData) => {
  return foodsData.slice(0, 6).map((foods) => (
    <div key={foods.id}>
      <a><S.Editor src={foods.profileImage} alt={foods.name} /></a>
      <p>{foods.name}</p>
    </div>
  ));
};

const getFoodComponents = (foodsData) => {
  const chunkSize = 5;
  const totalChunks = 2;

  const chunks = Array.from({ length: totalChunks }, (_, index) => (
    <React.Fragment key={index}>
      {foodsData
        .slice(index * chunkSize, (index + 1) * chunkSize)
        .map((food) => (
          <div key={`Food-${index}`}>
            <a><S.Food src={food.profileImage} alt={food.name} /></a>
            <p style={{marginTop: '10px'}}>{food.name}</p>
          </div>
        ))}
    </React.Fragment>
  ));

  return chunks;
};
const CONTENT_LENGTH = 3;
const CONTENT_TITLES = [
  {
    before: "올해의 ",
    highlight: "에디터",
    after: "",
  },
  {
    before: "",
    highlight: "인기 ",
    after: "레시피",
  },
  {
    before: "",
    highlight: "전체 ",
    after: "레시피",
  },
];

const CONTENT_ITEMS = [
  (editorsData) => renderEditors(editorsData),
  (foodsData) => renderBestFoods(foodsData),
  (foodsData) => getFoodComponents(foodsData),
];

// 1) 가져와야될 3개 컨텐츠 데이터를 promise(병렬)로 호출(api 통신);
// 2) 상태 저장(setMainDatas)
// 3) return ( mainDatas 렌더링 )

function Home(props) {
  // const [foods, setFoods] = useState([]); // [[length: 5] [length: 5] [length: 5]]
  // const [mainDatas, setMainDatas] = useState([]);

  // const fetchMainData = async () => {
  //   const mainDatas = await Promise.all([
  //     axios.get("/foods1-api"),
  //     axios.get("/foods2-api"),
  //     axios.get("/editor1-api"),
  //   ]);
  //   setMainDatas(mainDatas);
  // };

  // useEffect(() => {
  //   // Home 컴포넌트가 처음 딱 한번 마운트 되는 순간.
  //   fetchMainData();
  // }, []);

  return (
    <nav>
      <Container>
        <S.RefrigeratorContainer>
          <S.MainRefrigerator src={mainRefrigerator} alt="mainRefrigerator" />
          <p>
            냉장고에 <span>김치, 돼지고기...</span>가 있어요.
            <br />더 채우러 갈까요?
          </p>
        </S.RefrigeratorContainer>
      </Container>
      <Container>
        {Array.from({ length: CONTENT_LENGTH }, (_, index) => (
          <Contents
            key={`Content-Section-${index}`}
            title={CONTENT_TITLES[index]}
            renderContent={CONTENT_ITEMS[index](foodsData)}
          />
        ))}
        <MyFridgeButton/>
      </Container>
    </nav>
  );
}

export default Home;
