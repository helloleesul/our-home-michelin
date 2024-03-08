import Title from "@/components/common/Title";
import { selectAuth } from "@/libs/store/authSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function RecipeInfo(props) {
  const {
    _id,
    title,
    writer,
    createdDate,
    recipeType,
    recipeServing,
    likeUsers,
    ingredients,
    process,
  } = props;

  const { user } = useSelector(selectAuth);
  return (
    <>
      <div style={{ position: "sticky", top: 100 }}>
        <Title icon={"🍔"} title={title} />
        <div>
          {writer._id === user?.userId && (
            <>
              <Link to={"/recipes/modify"} state={_id}>
                수정
              </Link>
              <button>삭제</button>
            </>
          )}
        </div>
      </div>
      <div style={{ height: 1000 }}>
        <p>{new Date(createdDate).toLocaleString()}</p>
        <p>종류: {recipeType}</p>
        <p>양: {recipeServing} 인분</p>
        <p>북마크: {likeUsers.length}</p>
        <ul>
          <li>식재료:</li>
          {ingredients.map((list) => (
            <li key={list._id}>
              {list.name} - {list.amount}
            </li>
          ))}
        </ul>
        <ul>
          <li>요리과정:</li>
          {process.map((list, idx) => (
            <li key={list._id}>
              {idx + 1}. {list.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
