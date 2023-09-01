import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CloseIcon from "../assets/CloseIcon.js";
import requestApi from "../libs/const/api.js";
import axios from "axios";
import useAuthStatus from "../libs/hooks/useAuthStatus.js";
import * as S from "./RecipeWrite.style";

function RecipeWrite(props) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredientName, setNewIngredientName] = useState("");
  const [newIngredientAmount, setNewIngredientAmount] = useState("");
  const [process, setProcess] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedType, setSelectedType] = useState("간단한 요리");
  const [selectedServing, setSelectedServing] = useState(1);
  const [recipeImg, setRecipeImg] = useState("");
  const [stateFile, setStateFile] = useState(null);

  const location = useLocation();
  const updateRecipeData = location.state?.recipe;
  const [isEditMode, setIsEditMode] = useState();
  const { isAuth, isAuthUser } = useAuthStatus();
  const inputRef = useRef();
  const [prevImg, setPrevImg] = useState();

  useEffect(() => {
    if (updateRecipeData) {
      setTitle(updateRecipeData.title);
      setSelectedType(updateRecipeData.recipeType);
      setSelectedServing(updateRecipeData.recipeServing);
      setIngredients(updateRecipeData.ingredients);
      setProcess(updateRecipeData.process);
      // setRecipeImg(updateRecipeData.imageUrl);
      setRecipeImg(
        updateRecipeData.imageUrl?.startsWith("/")
          ? updateRecipeData.imageUrl
          : "/" + updateRecipeData.imageUrl
      );
      setIsEditMode(true);
      setPrevImg(true);
      if (updateRecipeData.imageUrl) {
        const recipeImgUrl = updateRecipeData.imageUrl;
        setRecipeImg(recipeImgUrl);
      }
    } else {
      setIsEditMode(false);
    }
  }, []);

  useEffect(() => {
    // console.log("stateFile:", stateFile);
    // console.log("recipeImg:", recipeImg);
  }, [stateFile, recipeImg]);

  const navigate = useNavigate();

  const defaultRecipeImgUrl = require("../assets/img/recipeDefaultImg.png");
  const plzUploadImgUrl = require("../assets/img/plzUploadImg.png");

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    setStateFile(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      setRecipeImg(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImgDelete = () => {
    setRecipeImg("");
    stateFile(null);
  };

  const handleDeleteIngredient = (idx) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(idx, 1);
    setIngredients(updatedIngredients);
  };
  const handleDeleteStep = (idx) => {
    const updatedSteps = [...process];
    updatedSteps.splice(idx, 1);
    setProcess(updatedSteps);
  };

  const handleAddIngredient = () => {
    if (newIngredientName.trim() !== "" && newIngredientAmount.trim() !== "") {
      const newIngredient = {
        name: newIngredientName,
        amount: newIngredientAmount,
      };
      setIngredients([...ingredients, newIngredient]);
      setNewIngredientName("");
      setNewIngredientAmount("");
    } else {
      alert("식재료명과 중량을 입력해주세요!");
    }
  };

  const handleIngredientNameChange = (e) => {
    setNewIngredientName(e.target.value);
  };

  const handleIngredientAmountChange = (e) => {
    setNewIngredientAmount(e.target.value);
  };

  const handleRecipeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAddStep = () => {
    setProcess([...process, ""]);
  };

  const handleStepChange = (event, idx) => {
    const updatedSteps = [...process];
    updatedSteps[idx] = event.target.value;
    setProcess(updatedSteps);
  };

  const handleRecipeSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("recipeType", selectedType);
      formData.append("recipeServing", selectedServing);
      formData.append("ingredients", JSON.stringify([...ingredients]));
      formData.append("process", JSON.stringify(process));
      formData.append("writer", isAuthUser._id);

      if (stateFile !== null) {
        formData.append("uploadRecipeImg", stateFile);
      } else {
        const confirmDefaultImg = window.confirm(
          "레시피 이미지 미업로드 경우, 냉슐랭 기본 이미지 파일로 대체하여 저장됩니다. 레시피 등록을 계속하시겠습니까?"
        );
        if (!confirmDefaultImg) {
          return;
        } else {
          formData.append("imageUrl", defaultRecipeImgUrl);
        }
      }

      if (title.trim() === "") {
        alert("레시피 제목을 입력해주세요!");
        return;
      }
      if (ingredients.length === 0) {
        alert("적어도 하나 이상의 요리 재료를 입력해주세요!");
        return;
      }
      if (process.length === 0) {
        alert("적어도 하나 이상의 요리 과정을 입력해주세요!");
        return;
      }

      if (isEditMode) {
        const response = await requestApi(
          "patch",
          `/recipes/${updateRecipeData._id}`,
          formData
        );
        alert("레시피가 성공적으로 수정되었습니다!");
      } else {
        const response = await requestApi("post", "/recipes", formData);
        alert("레시피가 성공적으로 등록되었습니다!");
      }
      navigate("/");
    } catch (err) {
      console.error("Error creating recipe:", err);
    }
  };

  return (
    <S.Wrap>
      {isAuth && (
        <>
          <S.Title>{isEditMode ? "레시피 수정" : "레시피 등록"}</S.Title>
          <S.RecipeForm>
            <S.RecipeFormTop>
              <S.RecipeFormTopLeft>
                <S.RecipeFormAttribute>
                  <S.RecipeFormAttributeLabel>
                    <div>레시피 제목</div>
                    <input
                      type="text"
                      id="recipe-title"
                      value={title}
                      placeholder="예) 한끼든든 소고기 미역국 레시피"
                      onChange={handleRecipeTitle}
                    />
                  </S.RecipeFormAttributeLabel>
                </S.RecipeFormAttribute>
                <S.RecipeFormAttribute>
                  <S.RecipeFormAttributeLabel>
                    <div>요리 종류</div>
                    <select
                      name="recipe-types"
                      id="recipe-type-select"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      <option value="메인요리">메인요리</option>
                      <option value="국&찌개">국&찌개</option>
                      <option value="반찬">반찬</option>
                      <option value="간단한 요리">간단한 요리</option>
                      <option value="디저트">디저트</option>
                    </select>
                  </S.RecipeFormAttributeLabel>
                </S.RecipeFormAttribute>
                <S.RecipeFormAttribute>
                  <S.RecipeFormAttributeLabel>
                    <div>인분수량</div>
                    <select
                      name="recipe-serving"
                      id="recipe-servings-select"
                      value={selectedServing}
                      onChange={(e) =>
                        setSelectedServing(parseInt(e.target.value))
                      }
                    >
                      <option value="1">1인분</option>
                      <option value="2">2인분</option>
                      <option value="3">3인분 이상</option>
                    </select>
                  </S.RecipeFormAttributeLabel>
                </S.RecipeFormAttribute>
                <S.RecipeFormAttribute>
                  <S.RecipeFormAttributeLabel>
                    <span>재료</span>
                    <br />
                    <input
                      id="recipe-ingredient"
                      value={newIngredientName}
                      onChange={handleIngredientNameChange}
                      placeholder="식재료명"
                    />
                    <input
                      value={newIngredientAmount}
                      onChange={handleIngredientAmountChange}
                      placeholder="중량"
                    />
                    <S.Button onClick={handleAddIngredient}>추가</S.Button>
                  </S.RecipeFormAttributeLabel>
                  <div>
                    {/* 추가한 재료들이 나타나는 곳*/}
                    {ingredients.length > 0 && (
                      <S.RecipeAddBox>
                        {ingredients.map((ingredient, idx) => (
                          <div key={idx}>
                            {ingredient.name} - {ingredient.amount} &nbsp;
                            <S.DeleteButton
                              onClick={() => handleDeleteIngredient(idx)}
                            >
                              X
                            </S.DeleteButton>
                          </div>
                        ))}
                      </S.RecipeAddBox>
                    )}
                  </div>
                </S.RecipeFormAttribute>
              </S.RecipeFormTopLeft>
              <S.RecipeFormTopRight>
                {/* div id: "upload-img-container의 background-image = `url(${plzUploadImgUrl})` 적용하고 있었음!*/}
                <div
                  id="upload-img-container"
                  style={{
                    position: "sticky",
                    top: "-1000px",
                    width: "200px",
                    height: "200px",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div style={{ position: "relative" }}>
                    {recipeImg !== "" && isHovered && (
                      <div
                        onClick={handleImgDelete}
                        style={{
                          position: "absolute",
                          right: "0",
                          padding: "3px",
                          borderRadius: "2px",
                          cursor: "pointer",
                          backgroundColor: "rgba(0,0,0,0.7)",
                        }}
                      >
                        <CloseIcon color={"#fff"} />
                      </div>
                    )}
                  </div>
                  <form
                    action="/recipes"
                    method="POST"
                    encType="multipart/form-data"
                    onSubmit={handleRecipeSubmit}
                  >
                    <div
                      id="recipe-img-container"
                      style={{
                        width: "200px",
                        height: "200px",
                        // backgroundImage: recipeImg
                        //   ? "url(" + recipeImg + ")"
                        //   : "url(" + plzUploadImgUrl + ")",
                        // backgroundSize: "cover",
                        // backgroundPosition: "center",
                      }}
                    >
                      {isEditMode ? (
                        <>
                          <img
                            onClick={() => {
                              inputRef.current.click();
                              setPrevImg(false);
                            }}
                            src={recipeImg ? recipeImg : plzUploadImgUrl}
                            alt="recipeImg"
                            onError={(e) => {
                              e.target.src = recipeImg
                                ? recipeImg.startsWith("/")
                                  ? recipeImg
                                  : `/${recipeImg}`
                                : plzUploadImgUrl;
                            }}
                          />
                          {prevImg && (
                            <img
                              src={
                                recipeImg
                                  ? recipeImg.startsWith("/")
                                    ? recipeImg
                                    : `/${recipeImg}`
                                  : plzUploadImgUrl
                              }
                              alt="recipeImg"
                            />
                          )}
                        </>
                      ) : (
                        <img
                          onClick={() => inputRef.current.click()}
                          src={recipeImg ? recipeImg : plzUploadImgUrl}
                          alt="recipeImg"
                        />
                      )}
                      <label
                        htmlFor="fileInput"
                        className="label"
                        style={{
                          width: "inherit",
                          height: "inherit",
                          cursor: "pointer",
                          display: "inline-block",
                        }}
                      >
                        <input
                          ref={inputRef}
                          style={{ position: "absolute", top: "-1000px" }}
                          id="fileInput"
                          type="file"
                          name="uploadRecipeImg"
                          accept="image/*"
                          // onChange={handleImgUpload}
                          onChange={handleImgChange}
                        />
                      </label>
                    </div>
                  </form>
                </div>
              </S.RecipeFormTopRight>
            </S.RecipeFormTop>
            <S.RecipeFormBottom>
              <p>요리 과정</p>
              {/* article tag 대신 다른 거 찾아보기 - 급해서 일단 적은 태그였음 */}
              <article>
                <p>
                  요리의 맛이 좌우될 수 있는 중요한 내용은 빠짐없이 적어주세요!
                </p>
                <p>
                  예) 10분간 익혀주세요. &rarr; 10분간 약한 불로 익혀주세요.
                </p>
                <p>
                  꿀을 조금 넣어주세요. &rarr; 꿀이 없는 경우 설탕 1스푼으로
                  대체 가능합니다.
                </p>
              </article>
              {/*{recipeSteps.length > 0 && (*/}
              {process.length > 0 && (
                <S.RecipeAddBox>
                  <ul>
                    {/* {recipeSteps.map((step, idx) => ( */}
                    {process.map((step, idx) => (
                      <li key={idx}>
                        {`Step ${idx + 1}`}
                        <textarea
                          value={step}
                          onChange={(e) => {
                            handleStepChange(e, idx);
                          }}
                          placeholder="요리 과정을 단계별로 작성해주세요!"
                        />
                        <S.DeleteButton
                          onClick={() => {
                            handleDeleteStep(idx);
                          }}
                        >
                          X
                        </S.DeleteButton>
                      </li>
                    ))}
                  </ul>
                </S.RecipeAddBox>
              )}
              <S.Button onClick={handleAddStep}>요리 과정 추가</S.Button>
            </S.RecipeFormBottom>
            <S.SubmitButton onClick={handleRecipeSubmit}>저장</S.SubmitButton>
          </S.RecipeForm>
        </>
      )}
    </S.Wrap>
  );
}

export default RecipeWrite;
