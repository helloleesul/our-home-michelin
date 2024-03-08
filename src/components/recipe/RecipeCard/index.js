import { Link } from "react-router-dom";

export default function RecipeCard(props) {
  console.log(props);
  const { _id, imageUrl, title } = props;
  return (
    <div>
      <Link to={`/recipes/${_id}`} style={{ background: "red" }}>
        <img
          src={imageUrl || "/recipeDefault.png"}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          alt=""
        />
        <p>{title}</p>
      </Link>
    </div>
  );
}
