/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { ButtonLink, LinkStyle } from "@/styles/common";

import { useDispatch, useSelector } from "react-redux";
import { asyncLogout, selectAuth } from "@/libs/store/authSlice";
import { useNavigate } from "react-router-dom";
import { PROFILE_DEFAULT_IMG } from "@/libs/constants/defaultImages";

export default function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(selectAuth);
  const navigate = useNavigate();

  const onLogout = async () => {
    dispatch(asyncLogout());
    navigate("/");
  };

  return (
    <S.Header>
      <S.Container>
        <S.Title to="/">
          🏠 우리집 <span>냉슐랭</span> 🍚🍒🥐🍋
        </S.Title>
        <S.UserLink>
          {isAuthenticated ? (
            <>
              <ButtonLink to="/kitchen">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    color: "inherit",
                  }}
                >
                  <img
                    src={user.profileImageURL || PROFILE_DEFAULT_IMG}
                    alt={user.nickName}
                    onError={(e) => {
                      e.target.src = PROFILE_DEFAULT_IMG;
                    }}
                    width={30}
                  />
                  <span style={{ color: "inherit" }}>{user.nickName}</span>
                </div>
              </ButtonLink>
              <button css={LinkStyle} onClick={onLogout}>
                로그아웃
              </button>
            </>
          ) : (
            <>
              <ButtonLink to="/login">로그인</ButtonLink>
              <ButtonLink to="/join">회원가입</ButtonLink>
            </>
          )}
        </S.UserLink>
      </S.Container>
    </S.Header>
  );
}
