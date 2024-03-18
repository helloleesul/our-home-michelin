import Title from "@/components/common/Title";
import { selectAuth } from "@/libs/store/authSlice";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import { RECIPE_TYPE_LIST } from "@/libs/constants/listItems";
import { DELETE, POST } from "@/libs/api";
import { useState } from "react";
import MESSAGE from "@/libs/constants/message";
import { dateToLongString } from "@/libs/utils";

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
  const navigate = useNavigate();
  const type = RECIPE_TYPE_LIST.find((item) => item.value === recipeType);

  const [likeNumber, setLikeNumber] = useState(likeUsers.length);
  const [liked, setLiked] = useState(likeUsers.find((v) => v === user?.userId));

  const handleLiked = async () => {
    try {
      const response = await POST("/toggleLikeRecipes", {
        recipeId: _id,
      });
      if (!response.success) {
        console.log(response);
        return;
      }
      setLiked((prev) => !prev);
      setLikeNumber(response.likeNumber);
    } catch (error) {
      console.log("🚀 ~ getRecipe ~ error:", error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm(MESSAGE.RECIPE.DELETE)) {
      try {
        const response = await DELETE(`/recipes/${_id}`, {});
        alert(response.message);
        navigate(-1);
      } catch (error) {
        console.log("🚀 ~ getRecipe ~ error:", error);
      }
    }
  };

  return (
    <>
      <S.TitleBox>
        <Title title={title} position={"left"} type={"primary"} />
        <S.Line />
        <S.Type>{type.label}</S.Type>
      </S.TitleBox>
      <S.SubTitleBox>
        <span>{dateToLongString(createdDate)}</span>
        {writer?._id === user?.userId && (
          <div>
            <Link to={"/recipes/modify"} state={_id}>
              수정
            </Link>
            <button onClick={handleDelete}>삭제</button>
          </div>
        )}
      </S.SubTitleBox>

      <div>
        <p>양: {recipeServing} 인분</p>
        <p>좋아요 수: {likeNumber}</p>
        <button onClick={handleLiked}>좋아요 {liked ? "y" : "n"}</button>
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
