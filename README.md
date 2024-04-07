<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/helloleesul/our-home-michelin">
    <img src="https://github.com/helloleesul/our-home-michelin/blob/main/public/android-chrome-512x512.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">우리집 냉슐랭(Our Home Michelin)</h3>

  <p align="center">
    냉장고에 있는 재료로 만들 수 있는 요리 레시피를 찾아드립니다.
    <br />
    <br />
    <a href="https://web-our-home-michelin-client-dc9c2nlsyjdgqj.sel5.cloudtype.app">데모 사이트</a>
    ·
    <a href="https://github.com/helloleesul/our-home-michelin/issues">버그 신고하기</a>
    ·
    <a href="https://github.com/helloleesul/our-home-michelin/issues">기능 요청하기</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## 프로젝트 소개

[![Product Name Screen Shot][product-screenshot]](https://web-our-home-michelin-client-dc9c2nlsyjdgqj.sel5.cloudtype.app)

**◼️ 목적**

현재 냉장고에 남아있는 재료를 활용하여 요리할 수 있는 레시피를 발견할 수 있고, 다양한 레시피를 요리 종류별로 확인할 수 있는 서비스를 제공합니다.   
이를 통해 음식물 쓰레기와 배달음식을 줄이며 일회용 포장용기 사용을 최소화하여 환경을 보호하는 의식을 함께 실천하고자 합니다. 또한 창의적인 레시피를 직접 등록하고 북마크하여 나만의 레시피북을 간직할 수 있습니다.

**◼️ 목표**

- 나의 냉장고에 식재료를 등록하면, 해당 식재료를 기반으로 만든 레시피를 검색할 수 있습니다.
- 사용자들이 직접 요리 과정과 재료, 사진을 포함한 레시피를 업로드하여 북마크하고 공유할 수 있는 기능을 제공합니다.
- 가장 많은 북마크를 보유한 유저에게 마스터셰프라는 역할을 부여하고 해당 유저의 레시피들을 확인할 수 있습니다.



### 기술 스택

[![React.js]][React-url] [![JavaScript]][JavaScript-url] [![Redux]][Redux-url] [![ReactRouter]][ReactRouter-url] [![Axios]][Axios-url] [![AmazonS3]][AmazonS3-url] [![Emotion]][Emotion-url]   
[![Node.js]][Node-url] [![Nodemon]][Nodemon-url] [![Express.js]][Express-url] [![MongoDB]][MongoDB-url] [![Mongoose]][Mongoose-url] [![Passport.js]][Passport-url]

### 기능 목록
[우리집 냉슐랭 API 명세서](https://helloleesul.notion.site/21e11ad7553544439b23568f2a96e72f)
| 화면 | 설명 |
| --- | --- |
| 나의 냉장고 | 식재료(조회, 추가, 수정, 삭제), 유통기한(수정), 식재료 전체 삭제 |
| 레시피 목록 | 레시피 목록(조회), 요리 종류별 필터링, 인기/최신 필터링 |
| 레시피 상세 | 레시피 상세(조회), 좋아요 |
| 레시피 작성/수정 | 요리 대표 이미지, 이름, 양, 종류, 식재료 목록(이름/중량), 과정 목록 |
| 홈 | 인기 레시피 목록(조회), 마스터셰프 목록(조회) |
| 로그인 | 일반 로그인 |
| 회원가입 | 일반 회원가입, `nodemailer` 이메일 인증 |
| 마이페이지 | 프로필 이미지 및 계정 정보 관리(수정), 회원 탈퇴(삭제), 작성한 레시피 목록(조회), 좋아요한 레시피 목록(조회), 비밀번호로 본인 확인 |

<!-- GETTING STARTED -->
## 설치 방법
다음은 프로젝트를 로컬로 설정하는 방법에 대한 지침을 제공하는 예시입니다. 로컬 복사본을 실행하려면 다음의 간단한 예시 단계를 따라주세요.    

1. 실행에 필요한 환경을 미리 준비합니다.   
    - 프론트엔드
      - AWS S3 버킷 (버킷 리전)
      - AWS IAM 사용자 - 보안 자격 증명 액세스 키
    - 백엔드
      - JWT 시크릿 키
      - `nodemailer` 이메일 인증에 필요한 메일 계정 (네이버)
      - MongoDB URI
2. 리포지토리를 Clone합니다.
   ```sh
   // 프론트엔드
   git clone https://github.com/helloleesul/our-home-michelin.git
   // 백엔드
   git clone https://github.com/helloleesul/our-home-michelin-BE.git
   ```
3. NPM 패키지를 설치합니다.
   ```sh
   npm install
   ```
4. 최상위 경로에 `.env`파일을 생성해 환경 변수를 작성합니다.
   ```sh
    // 프론트엔드 폴더
    REACT_APP_API_URL = "http://localhost:3000"
    REACT_APP_REGION = "XXXXXXXXXX"
    REACT_APP_ACCESS_KEY_ID = "XXXXXXXXXX"
    REACT_APP_SECRET_ACCESS_KEY = "XXXXXXXXXX"
   ```

   ```sh
    // 백엔드 폴더
    PORT = 3001  
    JWT_SECRET = "XXXXXXXXXX"
    EMAIL_USER = "XXX@naver.com"
    EMAIL_PASSWORD = "XXXXXXXXXX"
    MONGODB = "mongodb+srv://XXX:XXX@XXX"
    ORIGIN = "http://localhost:3000"
   ```






<!-- USAGE EXAMPLES -->
## 사용법

### 테스트 계정
| 아이디 | 비밀번호 |
| --- | --- |
| test@test.com | test123! |

#### 냉장고 
![ezgif-5-bf00f3bae4](https://github.com/helloleesul/our-home-michelin/assets/55569192/61ecf2c1-8c55-4c65-8e78-0d2c1f2a3a88)
  - 왼쪽 하단의 냉장고 버튼🗄️을 눌러 내 냉장고 재료를 확인합니다.
  - 추가할 재료가 필요하다면 하단 오른쪽에 '냉장고 재료 담기' 버튼을 클릭하거나 재료를 직접 작성해 추가합니다.
  - 재료의 유통기한 날짜를 클릭하면 유통기한을 수정할 수 있습니다.
  - 이미 유통기한이 지난 재료들은 따로 분류해 보여줍니다.
  - '냉장고 재료 담기' 버튼을 클릭하면 미리 제공된 식재료를 선택해 추가할 수 있습니다.


#### 레시피
![ezgif-5-db6066e4ce](https://github.com/helloleesul/our-home-michelin/assets/55569192/322c428f-d604-4498-8bd4-7990a896f6fe)
![ezgif-5-457b853de1](https://github.com/helloleesul/our-home-michelin/assets/55569192/41b74ef5-1f9b-48d2-a823-1d8a3f45c0ec)
  - 회원 사용자는 레시피를 직접 작성하거나 수정, 삭제할 수 있습니다.
  - 레시피 메뉴에서 모든 레시피를 요리 종류별로 확인할 수 있습니다.
  - 오른쪽 상단의 '냉장고 재료'를 클릭해 현재 내 냉장고 재료가 포함된 레시피만 확인할 수 있게 필터링합니다.
  - 또는 어떤 경로에서든 내 냉장고에서 '레시피 찾기'를 클릭하면 같은 기능을 사용할 수 있습니다.

<!-- CONTRIBUTING -->
## 기여 방법

기여는 오픈 소스 커뮤니티를 배우고, 영감을 얻고, 창조할 수 있는 놀라운 공간으로 만들어 줍니다.    
더 나은 방향으로 개선할 수 있는 제안이 있다면 리포지토리를 Fork하고 Pull Request를 만들어 주세요. `enhancement(개선)` 태그를 사용하여 이슈를 열 수도 있습니다.    
모든 기여에 진심으로 감사드립니다.

1. 프로젝트를 Fork합니다.
2. 새로운 기능 브랜치를 만듭니다. (`git checkout -b feature/AmazingFeature`)
3. 변경한 코드를 커밋합니다. (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치를 Push합니다. (`git push origin feature/AmazingFeature`)
5. 새로운 Pull Request를 생성합니다.




<!-- CONTACT -->
## 연락처

이슬 [@helloleesul](https://github.com/helloleesul) - suerish.e@gmail.com

프로젝트 링크: [https://github.com/helloleesul/our-home-michelin](https://github.com/helloleesul/our-home-michelin)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/helloleesul/our-home-michelin.svg?style=for-the-badge
[contributors-url]: https://github.com/helloleesul/our-home-michelin/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/helloleesul/our-home-michelin.svg?style=for-the-badge
[forks-url]: https://github.com/helloleesul/our-home-michelin/network/members
[stars-shield]: https://img.shields.io/github/stars/helloleesul/our-home-michelin.svg?style=for-the-badge
[stars-url]: https://github.com/helloleesul/our-home-michelin/stargazers
[issues-shield]: https://img.shields.io/github/issues/helloleesul/our-home-michelin.svg?style=for-the-badge
[issues-url]: https://github.com/helloleesul/our-home-michelin/issues
[license-shield]: https://img.shields.io/github/license/helloleesul/our-home-michelin.svg?style=for-the-badge
[license-url]: https://github.com/helloleesul/our-home-michelin/blob/main/LICENSE.txt

[product-screenshot]: https://imgur.com/NDMSjlw.png

[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Nodemon]: https://img.shields.io/badge/nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white
[Nodemon-url]: https://www.npmjs.com/package/nodemon
[Express.js]: https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com
[MongoDB]: https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/ko-kr
[Mongoose]: https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white
[Mongoose-url]: https://mongoosejs.com
[Passport.js]: https://img.shields.io/badge/passport.js-34E27A?style=for-the-badge&logo=passport&logoColor=white
[Passport-url]: https://www.passportjs.org

[React.js]: https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=20232A
[React-url]: https://reactjs.org/
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=20232A
[JavaScript-url]: https://developer.mozilla.org/ko/docs/Web/JavaScript
[Emotion]: https://img.shields.io/badge/emotion-C43BAD?style=for-the-badge&logo=emotion&logoColor=white
[Emotion-url]: https://emotion.sh/docs/introduction
[ReactRouter]: https://img.shields.io/badge/react%20router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white
[ReactRouter-url]: https://reactrouter.com/en/main
[Redux]: https://img.shields.io/badge/redux%20toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux-toolkit.js.org/
[Axios]: https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/kr/docs/intro
[AmazonS3]: https://img.shields.io/badge/amazon%20s3-569A31?style=for-the-badge&logo=amazons3&logoColor=white
[AmazonS3-url]: https://aws.amazon.com/ko/s3
