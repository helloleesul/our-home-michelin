import React from "react";
import * as S from "./List.style.js"; // Contents 스타일을 모두 가져옴

function List({ foodList }) {
    // const visibleFoods = foodList.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <S.Card>
                <a href='#'>
                    <S.ImgBookmark><div>
                        {/* <S.Img> */}
                        <div className="recipeImg">
                            <img src={'https://t1.daumcdn.net/cfile/tistory/9994024D5BC318BA34'} alt="타이틀" />
                        </div>
                        {/* </S.Img> */}
                        <div className="bookmarks">
                            <button onClick={() => { alert("북마크에 담는 함수"); }}>
                                북마크
                            </button>
                        </div>
                    </div></S.ImgBookmark>
                    <S.RecipeTitle>
                        <p>레시피의 이름이 길어도 말줄임이 들어가도록 만들어봐요</p>
                    </S.RecipeTitle>
                </a>
            </S.Card >
        </>
    );
}

export default List;

