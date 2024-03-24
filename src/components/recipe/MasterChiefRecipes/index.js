import Title from "@/components/common/Title";
import RecipesWrap from "@/components/recipe/RecipesWrap";
import { PROFILE_DEFAULT_IMG } from "@/libs/constants/defaultImages";
import { useState } from "react";

export default function MasterChiefRecipes({ recipes }) {
  const [filterChief, setFilterChief] = useState(0);
  return (
    <>
      <Title
        icon={"🏆"}
        title={"마스터 셰프"}
        type={"basic"}
        position={"center"}
      />
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
          {user.nickName}
        </button>
      ))}
      <RecipesWrap recipes={recipes[filterChief]?.recipes} col={4} />
    </>
  );
}
