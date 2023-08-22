// (참고)스타일링 하지 않은 상태입니다.
import React, { useState, useEffect } from "react";
import axios from "axios"; // 백엔드 api 레시피..

function RecipeWrite(props) {
  const [title, setTitle] = useState(""); // 레시피 제목
  const [ingredients, setIngredients] = useState([]);
  // 식재료명+중량
  const [newIngredientName, setNewIngredientName] = useState("");
  const [newIngredientAmount, setNewIngredientAmount] = useState("");
  const [recipeSteps, setRecipeSteps] = useState([]); // 요리 과정
  // 레시피 대표 이미지 첨부하기 추가해야함 -> 피그마에 그린대로는 아니지만 일단 구현함
  const [recipeImg, setRecipeImg] = useState(
    "https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0"
  );

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setRecipeImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  /*
  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setRecipeImg(`url(${imgUrl})`);
    }
    
  };
  */

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
    const newStep = { idx: recipeSteps.length, step: "" };
    setRecipeSteps([...recipeSteps, newStep]);
  };

  const handleStepChange = (event, idx) => {
    // 요리 과정 입력값 변경 시
    const updatedSteps = [...recipeSteps];
    updatedSteps[idx].recipeStep = event.target.value;
    setRecipeSteps(updatedSteps);
  };

  const handleRecipeSubmit = () => {
    // 빈값인 input, textarea가 있다면 레시피 등록 막기
    if (!title || ingredients.length === 0 || recipeSteps.length === 0) {
      alert("레시피 양식에 내용을 빠짐없이 기입해주세요!");
      return;
    }
    const selectedType = document.getElementById("recipe-type-select").value;
    const selectedServing = parseInt(
      document.getElementById("recipe-servings-select").value
    );

    const newRecipe = {
      title,
      recipeType: selectedType,
      recipeServing: selectedServing,
      ingredients,
      process: recipeSteps,
    };
    console.log("newRecipe");
    console.log(newRecipe);

    axios
      .post("/recipe", newRecipe)
      .then((response) => {
        console.log("Recipe created: ", response.data);
      })
      .catch((error) => {
        console.error("Error creating recipe: ", error);
      });
  };

  return (
    <div>
      <h2>레시피 등록</h2>
      <div id="recipe-form">
        <div id="recipe-form-top" style={{ display: "flex" }}>
          <div id="recipe-form-top-left" style={{ width: "70%" }}>
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
                <select name="recipe-types" id="recipe-type-select">
                  <option value="반찬" selected>
                    반찬
                  </option>
                  <option value="국&찌개">국&찌개</option>
                  <option value="메인요리">메인요리</option>
                  <option value="디저트">디저트</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="recipe-servings-select">
                인분수량
                <select name="recipe-serving" id="recipe-servings-select">
                  <option value="0" selected>
                    1인분
                  </option>
                  <option value="1">2인분</option>
                  <option value="2">n인분</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="recipe-ingredient">
                재료
                <br />
                <input
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
              position: "fixed",
              right: "0",
              width: "30%",
            }}
          >
            <form action="/form/submit" method="get">
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
                {recipeSteps.map((stepsObj, idx) => (
                  <li key={idx}>
                    {`Step ${idx + 1}`}
                    <textarea
                      value={stepsObj.recipeStep}
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
              <button id="add-step-btn" onClick={handleAddStep}>
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
