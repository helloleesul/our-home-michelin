import { useParams } from "react-router-dom";
import Title from "../components/common/Title";
import Split from "../components/layout/Split";
import { GET } from "../libs/api";
import { useEffect, useState } from "react";

export default function RecipeDetail() {
  const { detail } = useParams();
  const [recipe, setRecipe] = useState({});

  const {
    title,
    createdDate,
    imageUrl,
    ingredients,
    likeCount,
    process,
    recipeServing,
    recipeType,
    writer,
  } = recipe;

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await GET(`/recipes/${detail}`);
        setRecipe(response);
        console.log(response);
      } catch (error) {
        alert(error.response.data.error);
      }
    };
    getRecipe();
  }, [detail]);

  return (
    <Split
      left={<SideNav imageUrl={imageUrl} />}
      right={
        <>
          <div style={{ position: "sticky", top: 100 }}>
            <div style={{ display: "flex" }}>
              <Title icon={"🍔"} title={title} />
            </div>
          </div>
          <div style={{ height: 1000 }}></div>
        </>
      }
      size={[2, 4]}
    />
  );
}

function SideNav(props) {
  const { imageUrl } = props;
  return (
    <div style={{ position: "sticky", top: 100, textAlign: "center" }}>
      {/* <WidthBox width={"50"}> */}
      {/* </WidthBox> */}
      <img
        src={imageUrl}
        onError={(e) => {
          e.target.src = "/recipeDefault.png";
        }}
        alt=""
        width={300}
        height={300}
      />
    </div>
  );
}
