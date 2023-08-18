import React from "react";
import styled from "@emotion/styled";
import { Container } from "../components/common/Layout";
import Contents from "../components/pages/home/Contents";
import mainRefrigerator from "../assets/img/mainRefrigerator.png";


const MainRefrigerator = styled.img`
  width: 100px; /* 이미지 너비 설정 */
  height: auto; /* 높이는 자동으로 조절됩니다 */
`;

const RefrigeratorContainer = styled.div`
  width: 30%;
  height: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p span{
    font-weight: 800;
    font-size: 1.2rem;
    color: #F7411F;
  }
`;

const Editor = styled.img`
  width: 124px; /* 이미지 너비 설정 */
  height: 124px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const editorsData = [
  { id: 1, name: "커비", profileImage: "https://i.namu.wiki/i/ijg40CIiHx5-Ihr3ksIJUm4cQQDEnek8xMEmJaQqGR5U13DKOZnCkzwPx1L5rcEX2-xxFYAyQO7XTcyqQ2BGEw.webp" },
  { id: 2, name: "꼬부기", profileImage: "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg" },
  { id: 3, name: "젤리", profileImage: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2fG8/image/0zK7e-97apnyANk-UBEszLQuLF0.jpg" },
  { id: 4, name: "고양이", profileImage: "https://blog.kakaocdn.net/dn/dKCK2U/btqUekxdPc8/obYkOupRiOMIBY7CUDShk0/img.jpg" },
  { id: 5, name: "강아지", profileImage: "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-small-brown-puppy-is-seen-looking-at-the-camera-image_2580991.png" },
  { id: 6, name: "꼬북이", profileImage: "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg" },
];

const Food = styled.img`
  width: 176px; /* 이미지 너비 설정 */
  height: 132px;
  margin-bottom: 10px;
`;

const foodsData = [
  { id: 1, name: "커비", profileImage: "https://i.namu.wiki/i/ijg40CIiHx5-Ihr3ksIJUm4cQQDEnek8xMEmJaQqGR5U13DKOZnCkzwPx1L5rcEX2-xxFYAyQO7XTcyqQ2BGEw.webp" },
  { id: 2, name: "꼬부기", profileImage: "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg" },
  { id: 3, name: "젤리", profileImage: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2fG8/image/0zK7e-97apnyANk-UBEszLQuLF0.jpg" },
  { id: 4, name: "고양이", profileImage: "https://blog.kakaocdn.net/dn/dKCK2U/btqUekxdPc8/obYkOupRiOMIBY7CUDShk0/img.jpg" },
  { id: 5, name: "강아지", profileImage: "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-small-brown-puppy-is-seen-looking-at-the-camera-image_2580991.png" },
  { id: 6, name: "꼬북이", profileImage: "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg" },
  { id: 7, name: "고양이", profileImage: "https://blog.kakaocdn.net/dn/dKCK2U/btqUekxdPc8/obYkOupRiOMIBY7CUDShk0/img.jpg" },
  { id: 8, name: "강아지", profileImage: "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-small-brown-puppy-is-seen-looking-at-the-camera-image_2580991.png" },
  { id: 9, name: "꼬북이", profileImage: "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg" },
  { id: 10, name: "커비", profileImage: "https://i.namu.wiki/i/ijg40CIiHx5-Ihr3ksIJUm4cQQDEnek8xMEmJaQqGR5U13DKOZnCkzwPx1L5rcEX2-xxFYAyQO7XTcyqQ2BGEw.webp" },
  { id: 11, name: "커비", profileImage: "https://i.namu.wiki/i/ijg40CIiHx5-Ihr3ksIJUm4cQQDEnek8xMEmJaQqGR5U13DKOZnCkzwPx1L5rcEX2-xxFYAyQO7XTcyqQ2BGEw.webp" },
  { id: 12, name: "꼬부기", profileImage: "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg" },
  { id: 13, name: "젤리", profileImage: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2fG8/image/0zK7e-97apnyANk-UBEszLQuLF0.jpg" },
  { id: 14, name: "고양이", profileImage: "https://blog.kakaocdn.net/dn/dKCK2U/btqUekxdPc8/obYkOupRiOMIBY7CUDShk0/img.jpg" },
  { id: 15, name: "강아지", profileImage: "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-small-brown-puppy-is-seen-looking-at-the-camera-image_2580991.png" },
  { id: 16, name: "고양이", profileImage: "https://blog.kakaocdn.net/dn/dKCK2U/btqUekxdPc8/obYkOupRiOMIBY7CUDShk0/img.jpg" },
  { id: 17, name: "강아지", profileImage: "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-small-brown-puppy-is-seen-looking-at-the-camera-image_2580991.png" },
];


function Home(props) {

  const renderEditors = () => {
    return editorsData.slice(0, 6).map((editor) => (
        <div key={editor.id}>
          <Editor src={editor.profileImage} alt={editor.name} />
          <p>{editor.name}</p>
        </div>
    ));
  };

  const renderFoods = () => {
    const chunkSize = 5;
    const totalChunks = 3;
    const chunks = Array.from({ length: totalChunks }, (_, index) => (
      <React.Fragment key={index}>
        {foodsData.slice(index * chunkSize, (index + 1) * chunkSize).map((food) => (
          <div key={food.id}>
            <Food src={food.profileImage} alt={food.name} />
            <p>{food.name}</p>
          </div>
        ))}
      </React.Fragment>
    ));
  
    return chunks;
  };

  const renderBestFoods = () => {
    return foodsData.slice(0, 5).map((food) => (
        <div key={food.id}>
          <Food src={food.profileImage} alt={food.name} />
          <p>{food.name}</p>
        </div>
    ));
  };

  return (
    <nav>
        <Container>
          <RefrigeratorContainer>
            <MainRefrigerator src={mainRefrigerator} alt="mainRefrigerator" />
            <p>냉장고에 <span>김치, 돼지고기...</span>가 있어요.<br/>
            더 채우러 갈까요?</p>
          </RefrigeratorContainer>
        </Container>
        <Container>
          <Contents
            title={{
              before: "올해의 ",
              highlight: "에디터",
              after: "",}}
            renderContent={renderEditors()}
          />
          <Contents
            title={{
              before: "",
              highlight: "인기 ",
              after: "레시피",}}
            renderContent={renderBestFoods()}
          />
          <Contents
            title={{
              before: "",
              highlight: "전체 ",
              after: "레시피",}}
            renderContent={renderFoods()}
          />
        </Container>
    </nav>
  );
}

export default Home;
