import { RECIPE_TYPE_DEFAULT_IMG } from "@/libs/constants/defaultImages";
import * as S from "./style";

export default function RecipeCard(props) {
  const { _id, imageUrl, title, recipeType, likeUsers, index } = props;

  return (
    <S.Card to={`/recipes/${_id}`}>
      <S.ImgWrap>
        {index && (
          <S.Count>
            <span>{index}</span>
          </S.Count>
        )}
        <img
          className="recipe_img"
          src={imageUrl || RECIPE_TYPE_DEFAULT_IMG[recipeType]}
          onError={(e) => {
            e.target.src = RECIPE_TYPE_DEFAULT_IMG[recipeType];
          }}
          alt={title}
        />
      </S.ImgWrap>
      <S.Info>
        <p className="recipe_title">{title}</p>
        <S.Like>
          <img
            src="/icons/heart_full.svg"
            alt="좋아요 아이콘"
            loading="lazy"
            width="16"
            height="14"
          />
          <span>{likeUsers.length}</span>
        </S.Like>
      </S.Info>
    </S.Card>
  );
}
