import { RECIPE_TYPE_DEFAULT_IMG } from "@/libs/constants/defaultImages";
import * as S from "./style";

export default function RecipeCard(props) {
  const { _id, imageUrl, title, recipeType, likeUsers } = props;

  return (
    <S.Card to={`/recipes/${_id}`}>
      <S.ImgWrap>
        <img
          src={imageUrl || RECIPE_TYPE_DEFAULT_IMG[recipeType]}
          onError={(e) => {
            e.target.src = RECIPE_TYPE_DEFAULT_IMG[recipeType];
          }}
          alt={title}
        />
      </S.ImgWrap>
      <S.Info>
        <p>{title}</p>
        <S.Like>🧡 {likeUsers.length}</S.Like>
      </S.Info>
    </S.Card>
  );
}
