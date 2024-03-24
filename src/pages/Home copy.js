import Title from "@/components/common/Title";
import RecipesWrap from "@/components/recipe/RecipesWrap";
import { GET } from "@/libs/api";
import { PROFILE_DEFAULT_IMG } from "@/libs/constants/defaultImages";
import { Flex } from "@/styles/common";
import { useEffect, useState } from "react";

export default function Home() {
  const [masterChief, setMasterChief] = useState([]);
  const [filterChief, setFilterChief] = useState(0);
  const [popularRecipes, setPopularRecipes] = useState([]);

  const getMasterChief = async () => {
    try {
      const response = await GET("/master-chief");
      setMasterChief(response);
    } catch (error) {
      console.log("🚀 ~ getRecipes ~ error:", error);
    }
  };
  const getPopularRecipes = async () => {
    try {
      const response = await GET("/recipes?sort=popular&limit=10");
      setPopularRecipes(response);
      // console.log("🚀 ~ getRecipes ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ getRecipes ~ error:", error);
    }
  };

  useEffect(() => {
    getMasterChief();
    getPopularRecipes();
  }, []);

  return (
    <Flex gap={"40"}>
      <Title
        icon={"🏆"}
        title={"마스터 셰프"}
        type={"primary"}
        position={"center"}
      />
      {masterChief && (
        <div>
          {masterChief.map((user, index) => (
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
      )}
      <Title icon={"✨🍳"} title={"베스트 레시피"} type={"basic"} />
      {popularRecipes && (
        <RecipesWrap recipes={popularRecipes.recipes} col={5} />
      )}
    </Flex>
  );
}
