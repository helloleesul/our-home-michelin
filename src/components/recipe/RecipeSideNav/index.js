import * as S from "./style";
import { RECIPE_TYPE_DEFAULT_IMG } from "@/libs/constants/defaultImages";
import { RECIPE_TYPE_LIST } from "@/libs/constants/listItems";

export default function RecipeSideNav(props) {
  const { title, imageUrl, ingredients, recipeType, recipeServing } = props;

  const type = RECIPE_TYPE_LIST.find((item) => item.value === recipeType);

  return (
    <S.Wrap>
      <S.ImgGroup>
        <img
          src={imageUrl || RECIPE_TYPE_DEFAULT_IMG[recipeType]}
          onError={(e) => {
            e.target.src = RECIPE_TYPE_DEFAULT_IMG[recipeType];
          }}
          alt={title}
        />
      </S.ImgGroup>

      <S.TitleGroup>
        <span>재료 준비</span>
        <div>
          <span>{recipeServing} 인분</span>
          <span>/</span>
          <span>{type.label}</span>
        </div>
      </S.TitleGroup>

      <S.Ingredients>
        {ingredients.map((list) => (
          <li key={list._id}>
            <span>{list.name}</span>
            <span className="amount">{list.amount}</span>
          </li>
        ))}
      </S.Ingredients>
    </S.Wrap>
  );
}
