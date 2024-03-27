import Title from "@/components/common/Title";
import { selectAuth } from "@/libs/store/authSlice";
import { useSelector } from "react-redux";
import * as S from "./style";
import { DELETE, POST } from "@/libs/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";
import MESSAGE from "@/libs/constants/message";
import { dateToShortString } from "@/libs/utils";

export default function RecipeInfo(props) {
  const { _id, writer, title, likeUsers, process, createdDate } = props;

  const { user, isAuthenticated } = useSelector(selectAuth);
  const navigate = useNavigate();

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
    <S.Wrap>
      <S.TitleGroup>
        <Title title={title} type={"primary"} />
        <S.Line />
        <S.LikeButton onClick={handleLiked} disabled={!isAuthenticated}>
          <img
            src={`/icons/${liked ? "heart_full" : "heart"}.svg`}
            alt="좋아요 아이콘"
            loading="lazy"
            width="32"
            height="28"
          />
          <span>{likeNumber}</span>
        </S.LikeButton>
      </S.TitleGroup>

      <S.InfoGroup>
        <S.Writer>
          <span>by {writer?.nickName}</span>
          <span>•</span>
          <span className="date">{dateToShortString(createdDate)}</span>
        </S.Writer>

        {writer?._id === user?.userId && (
          <S.EditButtons>
            <Link to={"/recipes/modify"} state={_id}>
              <Button type={"button"} value={"수정"} width={50} />
            </Link>
            <Button
              type={"button"}
              onClick={handleDelete}
              value={"삭제"}
              width={50}
            />
          </S.EditButtons>
        )}
      </S.InfoGroup>

      <S.ProcessGroup>
        <span>요리과정</span>
        <ul>
          {process.map((list, idx) => (
            <li key={list._id}>
              <div>
                <span>{idx + 1}</span>
              </div>
              <p>{list.text}</p>
            </li>
          ))}
        </ul>
      </S.ProcessGroup>
    </S.Wrap>
  );
}
