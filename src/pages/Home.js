import Title from "@/components/common/Title";
import RecipesWrap from "@/components/recipe/RecipesWrap";
import { PROFILE_DEFAULT_IMG } from "@/libs/constants/defaultImages";
import { Contents, Flex } from "@/styles/common";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const { masterChief, popularRecipes } = useLoaderData();
  const [filterChief, setFilterChief] = useState(0);

  return (
    <Contents>
      <Flex gap={"40"}>
        <Title
          icon={"🏆"}
          title={"마스터 셰프"}
          type={"primary"}
          position={"center"}
        />
        <div>
          {masterChief?.map((user, index) => (
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
          <RecipesWrap recipes={masterChief[filterChief]?.recipes} col={4} />
        </div>
        <Title icon={"✨🍳"} title={"베스트 레시피"} type={"basic"} />
        <RecipesWrap recipes={popularRecipes?.recipes} col={5} />
      </Flex>
    </Contents>
  );
}
