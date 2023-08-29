// (참고)스타일링 하지 않은 상태입니다.
import React, { useEffect, useState } from "react";
import CloseIcon from "../assets/CloseIcon.js";
import requestApi from "../libs/const/api.js";
import * as S from "./RecipeWrite.style";
import Layout from "../components/common/Layout";
import axios from "axios";

function useLayoutAuth() {
  const [authResponse, setAuthResponse] = useState(false);
  const getUserAuth = async () => {
    const response = await requestApi("get", "/check-login");
    setAuthResponse(response);
  };

  useEffect(() => {
    getUserAuth();
  }, []);

  return { authResponse };
}

function RecipeWrite(props) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredientName, setNewIngredientName] = useState("");
  const [newIngredientAmount, setNewIngredientAmount] = useState("");
  const [recipeSteps, setRecipeSteps] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedType, setSelectedType] = useState("간단한 요리");
  const [selectedServing, setSelectedServing] = useState(1);
  const [recipeImg, setRecipeImg] = useState("");
  const [stateFile, setStateFile] = useState(null);
  //
  const [isIngr, setIsIngr] = useState(false);
  const [isRecipeSteps, setIsRecipeSteps] = useState(false);

  useEffect(() => {
    console.log("stateFile:", stateFile);
    console.log("recipeImg:", recipeImg);
  }, [stateFile, recipeImg]);

  console.log(">> ingredients.length");
  console.log(ingredients.length);
  console.log(">> recipeSteps.length");
  console.log(recipeSteps.length);

  const { authResponse } = useLayoutAuth();

  const defaultRecipeImgUrl = require("../assets/img/recipeDefaultImg.png");
  const plzUploadImgUrl = require("../assets/img/plzUploadImg.png");

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStateFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setRecipeImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
    // setRecipeImg(stateFile);
    setRecipeImg("");
  };

  const handleDeleteIngredient = (idx) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(idx, 1);
    setIngredients(updatedIngredients);
  };
  const handleDeleteStep = (idx) => {
    const updatedSteps = [...recipeSteps];
    updatedSteps.splice(idx, 1);
    setRecipeSteps(updatedSteps);
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
    setRecipeSteps([...recipeSteps, ""]);
  };

  const handleStepChange = (event, idx) => {
    const updatedSteps = [...recipeSteps];
    updatedSteps[idx] = event.target.value;
    setRecipeSteps(updatedSteps);
  };

  useEffect(() => {
    ingredients.length !== 0 ? setIsIngr(true) : setIsIngr(false);
  }, [isIngr]);
  useEffect(() => {
    recipeSteps.length !== 0 ? setIsRecipeSteps(true) : setIsRecipeSteps(false);
  }, [isRecipeSteps]);

  const handleRecipeSubmit = async () => {
    // 빈값인 input, textarea가 있다면 레시피 등록 막기
    if (!title || ingredients.length === 0 || recipeSteps.length === 0) {
      alert("레시피 양식에 내용을 빠짐없이 기입해주세요!");
      return;
    }

    // 작성자가 이미지 파일 미업로드로 레시피 등록하는 경우, 'defaultRecipeImgUrl'로 레시피 대표 이미지 처리
    let imageUrl = defaultRecipeImgUrl;

    // if(stateFile !== "") { 이 내가 원하는 구현 흐름인데, 일단 이렇게 하면 400에러 떠서 ===로 바꿔둠
    if (stateFile !== null) {
      try {
        imageUrl = await fetchData(stateFile);
        console.log(">> try - imageUrl");
        console.log(imageUrl);
      } catch (err) {
        console.error("Error uploading recipe main image: ", err);
        return;
      }
    } else {
      imageUrl = defaultRecipeImgUrl;
    }

    const newRecipe = {
      title,
      recipeType: selectedType,
      recipeServing: selectedServing,
      ingredients,
      process: recipeSteps,
      imageUrl,
      writer: authResponse.user._id,
    };

    try {
      const response = await requestApi("post", "/recipes", newRecipe);
      console.log("Recipe created: ", response);
      alert("레시피가 성공적으로 등록되었습니다!");
    } catch (err) {
      console.error("Error creating recipe: ", err);
    }
  };

  async function fetchData(file) {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const response = await axios.post(
        "/api/recipes/upload-image",
        formData,
        config
      );
      return response.data.imageUrl;
    } catch (err) {
      console.error("Error uploading recipe image: ", err);
    }
  }

  return (
    <S.Wrap>
      <S.Title>레시피 등록</S.Title>
      {/*<S.RecipeFormContainer>*/}{" "}
      {/*<S.RecipeForm> == <div id="recipe-form">*/}
      <S.RecipeForm>
        <S.RecipeFormTop>
          {/* <S.RecipeFormTop> == <div id="recipe-form-top" style={{ display: "flex" }} > */}
          <S.RecipeFormTopLeft>
            {/* <S.RecipeFormAttribute> == <label htmlFor="recipe-title"> */}
            <S.RecipeFormAttribute>
              <S.RecipeFormAttributeLabel>
                <div>레시피 제목</div>
                <input
                  type="text"
                  id="recipe-title"
                  placeholder="예) 한끼든든 소고기 미역국 레시피"
                  onChange={handleRecipeTitle}
                />
              </S.RecipeFormAttributeLabel>
            </S.RecipeFormAttribute>
            <S.RecipeFormAttribute>
              {/* <S.RecipeFormAttributeLabel> == <label htmlFor="recipe-type-select"> */}
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
              {/* <S.RecipeFormAttributeLabel> == <label htmlFor="recipe-servings-select"> */}
              <S.RecipeFormAttributeLabel>
                <div>인분수량</div>
                <select
                  name="recipe-serving"
                  id="recipe-servings-select"
                  value={selectedServing}
                  onChange={(e) => setSelectedServing(parseInt(e.target.value))}
                >
                  <option value="1">1인분</option>
                  <option value="2">2인분</option>
                  <option value="3">3인분 이상</option>
                </select>
              </S.RecipeFormAttributeLabel>
            </S.RecipeFormAttribute>
            <S.RecipeFormAttribute>
              {/* <S.RecipeFormAttributeLabel> == <label htmlFor="recipe-ingredient"> */}
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
          {/* <S.RecipeFormTopRight> == <div id="recipe-form-top-right" style={{ right: "0", width: "30%", }} > */}
          <S.RecipeFormTopRight>
            <div
              id="upload-img-container"
              style={{
                position: "sticky",
                top: "-9000px",
                width: "200px",
                height: "200px",
                backgroundImage: `url(${plzUploadImgUrl})`,
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
                    backgroundImage: `url(${recipeImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
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
          <text>
            <p>요리의 맛이 좌우될 수 있는 중요한 내용은 빠짐없이 적어주세요!</p>
            <p>예) 10분간 익혀주세요. &rarr; 10분간 약한 불로 익혀주세요.</p>
            <p>
              꿀을 조금 넣어주세요. &rarr; 꿀이 없는 경우 설탕 1스푼으로 대체
              가능합니다.
            </p>
          </text>
          {recipeSteps.length > 0 && (
            <S.RecipeAddBox>
              <ul>
                {recipeSteps.map((step, idx) => (
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
          {/* <button id="add-step-btn" onClick={handleAddStep} > */}
          <S.Button onClick={handleAddStep}>요리 과정 추가</S.Button>
        </S.RecipeFormBottom>
        <S.SubmitButton onClick={handleRecipeSubmit}>등록</S.SubmitButton>
      </S.RecipeForm>
      {/*</S.RecipeFormContainer>*/}
    </S.Wrap>
  );
}

export default RecipeWrite;
