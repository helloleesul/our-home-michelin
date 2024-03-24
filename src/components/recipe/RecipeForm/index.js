/** @jsxImportSource @emotion/react */
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { AbsoluteText, ColGroup, Flex } from "@/styles/common";
import RadioInput from "@/components/common/RadioInput";
import {
  RECIPE_ING_AMOUNT_LIST,
  RECIPE_TYPE_LIST,
} from "@/libs/constants/listItems";
import Select from "@/components/common/Select";
import { Label } from "@/components/common/Input/style";
import { useState } from "react";
import { selectAuth } from "@/libs/store/authSlice";
import { useSelector } from "react-redux";
import * as S from "./style";
import { PATCH, POST } from "@/libs/api";
import MESSAGE from "@/libs/constants/message";
import { useNavigate } from "react-router-dom";
import { RECIPR_UPLOAD_IMG } from "@/libs/constants/defaultImages";
import Title from "@/components/common/Title";
import ImageInput from "@/components/common/ImageInput";

export default function RecipeForm({ modifyRecipe }) {
  const navigate = useNavigate();
  const { user } = useSelector(selectAuth);
  // 레시피 이미지
  const [imageUrl, setImageUrl] = useState(modifyRecipe?.imageUrl || null);
  const [file, setFile] = useState("");
  // 레시피 이름
  const [title, setTitle] = useState(modifyRecipe?.title || "");
  // 요리 종류
  const [recipeType, setRecipeType] = useState(
    modifyRecipe?.recipeType || "korean"
  );
  // 요리 양
  const [recipeServing, setRecipeServing] = useState(
    modifyRecipe?.recipeServing || "1"
  );
  const MIN_VALUE = 1;
  const MAX_VALUE = 99;
  // 식재료
  const [ingredient, setIngredient] = useState({
    name: "",
    amount: "",
    amountType: "",
  });
  // 식재료 리스트
  const [ingredientsList, setIngredientsList] = useState(
    modifyRecipe?.ingredients || []
  );
  // 요리 과정
  const [processSteps, setProcessSteps] = useState(
    modifyRecipe?.process || [{ text: "" }]
  );

  const handleFile = (file) => setFile(file);

  const handleTitle = (e) => setTitle(e.target.value);

  const handleRecipeServing = (e) => {
    const onlyNums = e.target.value;
    if (onlyNums && onlyNums > MAX_VALUE) {
      setRecipeServing(String(MAX_VALUE));
    } else if (onlyNums && onlyNums < MIN_VALUE) {
      setRecipeServing(String(MIN_VALUE));
    } else setRecipeServing(onlyNums);
  };

  const handleIngredient = (e) =>
    setIngredient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleIngredientAmountType = (value) =>
    setIngredient((prev) => ({ ...prev, amountType: value }));
  const ingredientAdd = () => {
    const { name, amount, amountType } = ingredient;
    if (!name || !amount || !amountType) return;
    setIngredientsList((prev) => [
      ...prev,
      {
        name: ingredient.name,
        amount: `${ingredient.amount} ${ingredient.amountType}`,
      },
    ]);
    setIngredient({ name: "", amount: "", amountType: "" });
  };
  const ingredientRemove = (index, id) => {
    const newIngredientList = ingredientsList.filter((item, idx) =>
      item._id ? id !== item._id : idx !== index
    );
    setIngredientsList(newIngredientList);
  };

  const handleStep = (index, value) => {
    const newSteps = [...processSteps];
    newSteps[index].text = value;
    setProcessSteps(newSteps);
  };
  const stepAdd = () => setProcessSteps((prev) => [...prev, { text: "" }]);
  const stepRemove = (index, id) => {
    if (processSteps.length === 1) return;
    const newSteps = processSteps.filter((step, idx) =>
      step._id ? id !== step._id : idx !== index
    );
    setProcessSteps(newSteps);
  };

  const onRecipeSubmit = async (e) => {
    e.preventDefault();

    const stepValid = processSteps.filter((v) => !v.text).length;
    let alertMessage = "";
    if (!title) alertMessage += "레시피 이름, ";
    if (!recipeServing) alertMessage += "요리 양, ";
    if (!ingredientsList.length) alertMessage += "식재료 목록, ";
    if (stepValid) alertMessage += "요리 과정 내용, ";

    if (alertMessage !== "") {
      alert(`${alertMessage.slice(0, -2)}을 모두 입력해 주세요.`);
      return;
    }

    const formData = new FormData(e.target);
    formData.append("recipeType", recipeType);
    formData.append("process", JSON.stringify(processSteps));
    formData.append("ingredients", JSON.stringify(ingredientsList));
    formData.append("writer", user.userId);
    formData.append("uploadRecipeImg", imageUrl && !file ? imageUrl : file);

    try {
      if (!modifyRecipe) {
        const response = await POST("/recipes", formData);
        alert(MESSAGE.RECIPE.COMPLETE);
        navigate(`/recipes/${response._id}`);
      } else {
        const response = await PATCH(`/recipes/${modifyRecipe._id}`, formData);
        alert(MESSAGE.RECIPE.EDITFIN);
        navigate(`/recipes/${response._id}`);
      }
    } catch (error) {
      console.log("🚀 ~ onInfoModify ~ error:", error);
      alert(error.response.data.error);
    }
  };

  return (
    <form onSubmit={onRecipeSubmit}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Title
          icon={"🔥🧾🥣"}
          title={modifyRecipe ? "레시피 수정" : "새 레시피"}
          type={"basic"}
        />
        <Button
          width={"200"}
          type={"submit"}
          value={modifyRecipe ? "수정" : "등록"}
        />
      </div>
      <S.RecipeFormWrap>
        <S.ImageBox>
          <ImageInput
            defaultImage={imageUrl}
            onChange={setImageUrl}
            handleFile={handleFile}
            uploadImage={RECIPR_UPLOAD_IMG}
          />
        </S.ImageBox>
        <Flex gap={"20"}>
          <ColGroup gap={"10"}>
            <Input
              id={"title"}
              label={"레시피"}
              placeholder={"예) 한끼든든 소고기 미역국"}
              onChange={handleTitle}
              value={title}
            />
            <S.ServingBox>
              <Input
                noLabel
                width={"70"}
                type={"number"}
                id={"recipeServing"}
                placeholder={"1"}
                value={recipeServing}
                onChange={handleRecipeServing}
                max={MAX_VALUE}
                min={MIN_VALUE}
              />
              <span css={AbsoluteText}>인분</span>
            </S.ServingBox>
          </ColGroup>
          <S.TypeBox row center>
            <Label>종류</Label>
            <RadioInput
              onChange={setRecipeType}
              defaultSelected={recipeType}
              options={RECIPE_TYPE_LIST}
            />
          </S.TypeBox>
          <S.IngredientBox row gap={"10"}>
            <Input
              type={"text"}
              id={"name"}
              label={"식재료"}
              placeholder={"예) 소고기"}
              value={ingredient.name}
              onChange={handleIngredient}
            />
            <Input
              noLabel
              width={"50"}
              type={"number"}
              placeholder={"300"}
              id={"amount"}
              value={ingredient.amount}
              onChange={handleIngredient}
            />
            <Select
              options={RECIPE_ING_AMOUNT_LIST}
              onChange={handleIngredientAmountType}
              defaultOption={ingredient.amountType}
              defaultMessage={"중량을 선택해주세요."}
            />
            <Button
              width={"50"}
              type={"button"}
              value={"추가"}
              onClick={ingredientAdd}
            />
          </S.IngredientBox>
          <S.IngredientsBox>
            <Flex row wrap="true" gap={"10"}>
              {ingredientsList.map((item, index) => (
                <S.Ingredients key={item._id ? item._id : index}>
                  <span>{item.name}</span>
                  <span className="amount">{item.amount}</span>
                  <Button
                    width={"30"}
                    type={"button"}
                    onClick={() => ingredientRemove(index, item._id)}
                    value={"✕"}
                  />
                </S.Ingredients>
              ))}
            </Flex>
          </S.IngredientsBox>
        </Flex>
        <S.StepBox>
          <Flex gap={"10"}>
            {processSteps.map((step, index) => (
              <ColGroup gap={"10"} key={step._id ? step._id : index}>
                <Input
                  label={`🏃 STEP ${index + 1}`}
                  type={"text"}
                  value={step.text}
                  onChange={(e) => handleStep(index, e.target.value)}
                />
                <Button
                  type={"button"}
                  onClick={() => stepRemove(index, step._id)}
                  value={"✕"}
                  width={"30"}
                />
              </ColGroup>
            ))}
            <Button
              type={"button"}
              onClick={stepAdd}
              value={"요리 과정 추가 ＋"}
            />
          </Flex>
        </S.StepBox>
      </S.RecipeFormWrap>
    </form>
  );
}
