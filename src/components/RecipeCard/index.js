import { Link } from "react-router-dom";

export default function RecipeCard(props) {
  console.log(props);
  const { _id, imageUrl, title } = props;
  return (
    <Link to={`/recipes/${_id}`} style={{ background: "red" }}>
      {title}
    </Link>
  );
}
