import React from "react";
import * as S from "./List.style.js"; // Contents 스타일을 모두 가져옴

function List({ foodList }) {


    return (
        <>
            <S.Card>
                <a href={'#'}>
                    <S.ImgBookmark>
                        <div className="recipeImg">
                            <img src={'https://cdn.imweb.me/upload/S20221027856cf802b7932/e790a103cdc42.jpg'} alt={"해당 레시피의 제목"} />
                        </div>
                        <div className="bookmarks">
                            <button onClick={() => { alert("북마크에 담음용") }}>
                                북마크
                            </button>
                        </div>
                    </S.ImgBookmark>
                    <S.RecipeTitle>
                        레시피의 이름이 길어도 말줄임이 들어가도록 만들어봅시다 웹킷을 사용
                    </S.RecipeTitle>
                </a>
            </S.Card >
        </>
    );
}

export default List;

