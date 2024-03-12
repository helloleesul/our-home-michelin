import { RECIPE_TYPE_DEFAULT_IMG } from "@/libs/constants/defaultImages";
import { Link } from "react-router-dom";

export default function RecipeCard(props) {
  const { _id, imageUrl, title, recipeType } = props;

  return (
    <div>
      <Link to={`/recipes/${_id}`} style={{ background: "red" }}>
        <img
          src={imageUrl || RECIPE_TYPE_DEFAULT_IMG[recipeType]}
          onError={(e) => {
            e.target.src = RECIPE_TYPE_DEFAULT_IMG[recipeType];
          }}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          alt=""
        />
        <p>{title}</p>
      </Link>
    </div>
  );
}
