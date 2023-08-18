// (참고)스타일링 하지 않은 상태입니다.
import React, { useState } from "react";
import axios from "axios"; // 백엔드 api 레시피..
import { v4 as uuidv4 } from "uuid"; // uuid 라이브러리로 레시피 고유 id 생성

function RecipeWrite(props) {
  const [title, setTitle] = useState(""); // 레시피 제목
  const [ingredients, setIngredients] = useState([]); // 레시피 요리 재료 _ 중량도 추가하기로 했는데, 깜박 잊어서 수정 예정입니다...!
  const [newIngredient, setNewIngredient] = useState(""); //추가할 요리 재료 input
  const [recipeSteps, setRecipeSteps] = useState([]); // 요리 과정
  // 레시피 대표 이미지 첨부하기 추가해야함

  const handleRecipeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== "") {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient("");
    } else {
      alert("추가할 재료를 입력해주세요!");
    }
  };

  const handleIngredientChange = (e) => {
    setNewIngredient(e.target.value);
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
    const newRecipeId = uuidv4(); // 랜덤한 고유 id 생성
    const selectedType = document.getElementById("recipe-type-select").value;
    const selectedServing = parseInt(
      document.getElementById("recipe-servings-select").value
    );
    console.log(selectedType);

    const newRecipe = {
      recipeId: newRecipeId,
      title,
      recipeType: selectedType,
      recipeServing: selectedServing,
      ingredients,
      process: recipeSteps,
    };

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
            <input
              value={newIngredient}
              onChange={handleIngredientChange}
              placeholder="예) 미역"
            />
            <button onClick={handleAddIngredient}>추가</button>
          </label>
          <div style={{ display: "flex" }}>
            {/* 추가한 재료들이 나타나는 곳*/}
            {ingredients.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        </div>
        <div>
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
                </li>
              ))}
            </ul>
            <button id="add-step-btn" onClick={handleAddStep}>
              요리 과정 추가
            </button>
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
