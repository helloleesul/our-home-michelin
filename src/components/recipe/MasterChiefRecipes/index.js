import Title from "@/components/common/Title";
import RecipesWrap from "@/components/recipe/RecipesWrap";
import { PROFILE_DEFAULT_IMG } from "@/libs/constants/defaultImages";
import { useState } from "react";
import * as S from "./style";

export default function MasterChiefRecipes({ recipes }) {
  const [filterChief, setFilterChief] = useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <Title
        icon={"🏆"}
        title={"마스터 셰프"}
        type={"basic"}
        position={"center"}
      />
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
        <RecipesWrap recipes={recipes[filterChief]?.recipes} col={4} />
      </S.Wrap>
    </div>
  );
}
