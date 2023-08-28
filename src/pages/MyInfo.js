import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../components/pages/UserAccessForm/UserAccessForm.style";
import Input from "../components/pages/myInfo/MyInfoInputInput";
import chef1 from "../assets/img/chef1.png";
import PortalModal from "../components/common/PortalModal";
import ModalBox from "../components/common/ModalBox";

function MyInfo(props) {
  const [showModal, setShowModal] = useState(false);
  const [nickname, setNickname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/myinfo");
        console.log(response.data);
        setNickname(response.data.nickName);
        setUserEmail(response.data.email);
      } catch (error) {
        console.log(error.response.data.error);
      }
    })();
  }, []);
  const closeModal = () => {
    setShowModal(false);
  };
  const handleSaveClick = async () => {
    if (nickname.length < 2) {
      alert("닉네임은 2글자 이상이어야 합니다.");
      return;
    }
    if (password.length < 6) {
      alert("비밀번호는 6글자 이상이어야 합니다.");
      return;
    }
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    const saveConfrim = window.confirm("저장 하시겠습니까?");
    if (!saveConfrim) {
      return;
    }
    const userData = {
      nickName: nickname,
      email: userEmail,
      password: password,
    };

    try {
      const response = await axios.put("/api/myinfo", userData);
      if (response.data) {
        alert("회원정보 수정 완료");
        navigate("/mypage");
      }
    } catch (error) {
      console.error("에러", error);
      console.log(error.response.data.message);
    }
  };
  const handlePasswordClick = () => {
    setShowConfirmPassword(true);
  };

  return (
    <>
      <PortalModal handleShowModal={showModal} size={"35%"}>
        <ModalBox closeModal={closeModal} text="회원탈퇴"></ModalBox>
      </PortalModal>
      <S.Container>
        <S.ChefImage src={chef1} alt="요리사캐릭터" />
        <S.InputContainer>
          <S.Text style={{ cursor: "auto" }}>회원정보 수정</S.Text>
          <Input
            text="닉네임"
            type="text"
            showBtn
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            placeholder="닉네임은 2글자 이상이어야 합니다."
            readOnly={true}
          ></Input>
          <Input
            text="이메일"
            type="text"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
            readOnly={true}
          />
          <Input
            text="비밀번호"
            type="password"
            showBtn
            onChange={(event) => setPassword(event.target.value)}
            placeholder="비밀번호는 6글자 이상 입력해주세요."
            onBtnClick={handlePasswordClick}
            readOnly={true}
          />
          {showConfirmPassword && (
            <Input
              text="비밀번호 확인"
              type="password"
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="비밀번호는 6글자 이상 입력해주세요."
              readOnly={false}
            />
          )}
          <S.Text></S.Text>
          <S.Btn onClick={handleSaveClick}>저장</S.Btn>
          <S.Text fontSize="13px" onClick={() => setShowModal(true)}>
            회원탈퇴
          </S.Text>
        </S.InputContainer>
      </S.Container>
    </>
  );
}

export default MyInfo;
