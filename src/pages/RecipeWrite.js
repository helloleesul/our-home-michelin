// (참고)스타일링 하지 않은 상태입니다.
import React, { useEffect, useState } from "react";
import CloseIcon from "../assets/CloseIcon.js";
import requestApi from "../libs/const/api.js";
import Layout from "../components/common/Layout";

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
  const [recipeImg, setRecipeImg] = useState("");
  const [stateFile, setStateFile] = useState(null);

  const { authResponse } = useLayoutAuth();

  const defaultRecipeImgUrl = require("../assets/img/recipeDefaultImg.png");
  const plzUploadImgUrl = require("../assets/img/plzUploadImg.png");

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // setStateFile(reader.result);
        // setRecipeImg(stateFile); // 화면에 업로드한 이미지 미리보기 X
        // setRecipeImg(reader.result);
        setRecipeImg((current) => {
          current = reader.result;
        });
        setStateFile((current) => {
          current = reader.result;
        });
      };
      reader.readAsDataURL(file);
    }
    console.log(stateFile);
    console.log(recipeImg);
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

  const handleRecipeSubmit = async () => {
    // 빈값인 input, textarea가 있다면 레시피 등록 막기
    if (!title || ingredients.length === 0 || recipeSteps.length === 0) {
      alert("레시피 양식에 내용을 빠짐없이 기입해주세요!");
      return;
    }
    const selectedType = document.getElementById("recipe-type-select").value;
    const selectedServing = parseInt(
      document.getElementById("recipe-servings-select").value
    );

    // 작성자가 이미지 파일 미업로드로 레시피 등록하는 경우, 'defaultRecipeImgUrl'로 레시피 대표 이미지 처리
    let imageUrl = defaultRecipeImgUrl;

    // if(stateFile !== "") { 이 내가 원하는 구현 흐름인데, 일단 이렇게 하면 400에러 떠서 ===로 바꿔둠
    if (stateFile === "") {
      try {
        imageUrl = await fetchData();
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

  async function fetchData() {
    try {
      const formData = new FormData();
      formData.append("image", stateFile);
      const response = await requestApi(
        "post",
        "/recipes/upload-image",
        formData
      );
      return response.data;
    } catch (err) {
      console.error("Error uploading recipe image: ", err);
    }
  }

  return (
    <div>
      <h2>레시피 등록</h2>
      <div id="recipe-form">
        <div
          id="recipe-form-top"
          style={{ display: "flex" }}
        >
          <div
            id="recipe-form-top-left"
            style={{ width: "70%" }}
          >
            <div>
              <label htmlFor="recipe-title">
                레시피 제목
                <input
                  type="text"
                  id="recipe-title"
                  placeholder="예) 한끼든든 소고기 미역국 레시피"
                  onChange={handleRecipeTitle}
                />
              </label>
            </div>
            <div>
              <label htmlFor="recipe-type-select">
                {/* 요리 종류 _ 저장 방식에 대한 고민 발생 (월요일 백오피스아워 시간에 질문 예정) 요리 종류 */}
                // 코드리뷰 반영하기!
                <select
                  name="recipe-types"
                  id="recipe-type-select"
                  defaultValue="간단한 요리"
                >
                  <option value="메인요리">메인요리</option>
                  <option value="국&찌개">국&찌개</option>
                  <option value="반찬">반찬</option>
                  <option value="간단한 요리">간단한 요리</option>
                  <option value="디저트">디저트</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="recipe-servings-select">
                인분수량
                <select
                  name="recipe-serving"
                  id="recipe-servings-select"
                  defaultValue="1"
                >
                  <option value="1">1인분</option>
                  <option value="2">2인분</option>
                  <option value="3">3인분 이상</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="recipe-ingredient">
                재료
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
                <button onClick={handleAddIngredient}>추가</button>
              </label>
              <div>
                {/* 추가한 재료들이 나타나는 곳*/}
                {ingredients.map((ingredient, idx) => (
                  <div key={idx}>
                    {ingredient.name} - {ingredient.amount}
                    <button
                      id="delete-ingredient-btn"
                      onClick={() => handleDeleteIngredient(idx)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            id="recipe-form-top-right"
            style={{
              right: "0",
              width: "30%",
            }}
          >
            <div
              id="upload-img-container"
              style={{
                position: "relative",
                width: "200px",
                height: "200px",
                backgroundImage: `url(${plzUploadImgUrl})`,
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
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
              <form
                action="/recipes"
                method="post"
                encType="multipart/form-data"
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
                      accept="image/*"
                      onChange={handleImgUpload}
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <div id="recipe-form-bottom">
            <div>
              <p>요리 과정</p>
              <p>
                요리의 맛이 좌우될 수 있는 중요한 내용은 빠짐없이 적어주세요!
                <br />
                예) 10분간 익혀주세요. &rarr; 10분간 약한 불로 익혀주세요.
                <br />
                꿀을 조금 넣어주세요. &rarr; 꿀이 없는 경우 설탕 1스푼으로 대체
                가능합니다.
              </p>
              <ul id="recipe-step-list">
                {recipeSteps.map((step, idx) => (
                  <li key={idx}>
                    {`Step ${idx + 1}`}
                    <textarea
                      // value={stepsObj.recipeStep}
                      value={step}
                      onChange={(e) => handleStepChange(e, idx)}
                      placeholder="요리 과정을 단계별로 작성해주세요!"
                    />
                    <button
                      id="delete-step-btn"
                      onClick={() => handleDeleteStep(idx)}
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
              <button
                id="add-step-btn"
                onClick={handleAddStep}
              >
                요리 과정 추가
              </button>
            </div>
          </div>
        </div>
        <div>
          <button>취소</button>
          <button onClick={handleRecipeSubmit}>등록</button>
        </div>
      </div>
    </div>
  );
}

export default RecipeWrite;
