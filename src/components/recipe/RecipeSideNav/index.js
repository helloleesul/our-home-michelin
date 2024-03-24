import Title from "@/components/common/Title";
import * as S from "./style";
import {
  PROFILE_DEFAULT_IMG,
  RECIPE_TYPE_DEFAULT_IMG,
} from "@/libs/constants/defaultImages";

export default function RecipeSideNav(props) {
  const { title, imageUrl, recipeType, writer } = props;

  return (
    <S.Wrap>
      <div>
        <img
          src={imageUrl || RECIPE_TYPE_DEFAULT_IMG[recipeType]}
          onError={(e) => {
            e.target.src = RECIPE_TYPE_DEFAULT_IMG[recipeType];
          }}
          style={{
            height: "300px",
            width: "100%",
            objectFit: "cover",
          }}
          alt={title}
        />

        <Title title={title} position={"left"} type={"basic"} />
      </div>
      <S.WriterBox>
        <S.ProfileImg>
          <img
            src={writer?.profileImageURL || PROFILE_DEFAULT_IMG}
            onError={(e) => {
              e.target.src = PROFILE_DEFAULT_IMG;
            }}
            alt={writer?.nickName}
          />
        </S.ProfileImg>
        <span>{writer?.nickName}</span>
      </S.WriterBox>
    </S.Wrap>
  );
}
