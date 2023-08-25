import React from "react";
import * as S from "./List.style.js"; // Contents 스타일을 모두 가져옴

function List({ foodList, startIndex, itemsPerPage }) {
    // const visibleFoods = foodList.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <S.Card><div>
                <S.ImgBookmark><div>
                    {/* <S.Img> */}
                    <div className="imgs">
                        <img src={'https://t1.daumcdn.net/cfile/tistory/9994024D5BC318BA34'} alt="타이틀" />
                    </div>
                    {/* </S.Img> */}
                    <div className="bookmarks">
                        <button onClick={() => { alert('북마크에 담아요~') }}>
                            북마크
                        </button>
                    </div>
                </div></S.ImgBookmark>
                <S.RecipeTitle>
                    <p>레시피의 이름이 길어도 말줄임이 들어가도록 만들어봐요</p>
                </S.RecipeTitle>
            </div></S.Card>
        </>
    );
}

export default List;

