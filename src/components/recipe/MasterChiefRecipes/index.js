import Title from "@/components/common/Title";
import Recipes from "@/components/recipe/RecipesWrap";
import { PROFILE_DEFAULT_IMG } from "@/libs/constants/defaultImages";
import { useMemo, useState } from "react";
import { apiSlice } from "@/libs/store/apiSlice";
import * as S from "./style";

export default function MasterChiefRecipes() {
  const { data: recipes, isLoading } = apiSlice.useGetMasterChiefQuery();
  const [selectedChief, setSelectedChief] = useState(0);

  const filteredRecipes = useMemo(() => {
    return recipes && recipes[selectedChief]?.recipes;
  }, [recipes, selectedChief]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <Title
        icon={"🏆"}
        title={"마스터 셰프"}
        type={"basic"}
        position={"center"}
      />
      {isLoading ? (
        <S.Wrap>loading</S.Wrap>
      ) : (
        <S.Wrap>
          <S.UserGroup>
            {recipes?.map((user, index) => (
              <button key={user._id} onClick={() => setSelectedChief(index)}>
                <img
                  src={user.profileImageURL || PROFILE_DEFAULT_IMG}
                  alt={user.nickName}
                  width={100}
                  height={100}
                />
                <span>{user.nickName}</span>
              </button>
            ))}
          </S.UserGroup>
          <Recipes recipes={filteredRecipes} col={4} />
        </S.Wrap>
      )}
    </div>
  );
}
