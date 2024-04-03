import Title from "@/components/@common/Title";
import Recipes from "@/components/recipe/RecipesWrap";
import { PROFILE_DEFAULT_IMG } from "@/libs/constants/defaultImages";
import { useEffect, useState } from "react";
import * as S from "./style";
import { GET } from "@/libs/api";

export default function MasterChiefRecipes() {
  const [recipes, setRecipes] = useState();
  const [filterChief, setFilterChief] = useState(0);

  const getRecipes = async () => {
    try {
      const response = await GET("/master-chief");
      setRecipes(response);
    } catch (error) {
      console.log("🚀 ~ onInfoModify ~ error:", error);
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <Title
        icon={"🏆"}
        title={"마스터 셰프"}
        type={"basic"}
        position={"center"}
      />
      {!recipes ? (
        <S.Wrap>Loading</S.Wrap>
      ) : (
        <S.Wrap>
          <S.UserGroup>
            {recipes?.map((user, index) => (
              <button key={user._id} onClick={() => setFilterChief(index)}>
                <img
                  src={user.profileImageURL || PROFILE_DEFAULT_IMG}
                  alt={user.nickName}
                  onError={(e) => {
                    e.target.src = PROFILE_DEFAULT_IMG;
                  }}
                  width={100}
                />
                <span>{user.nickName}</span>
              </button>
            ))}
          </S.UserGroup>
          {recipes && (
            <Recipes recipes={recipes[filterChief]?.recipes} col={4} />
          )}
        </S.Wrap>
      )}
    </div>
  );
}
