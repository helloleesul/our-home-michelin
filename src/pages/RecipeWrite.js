/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Title from "../components/common/Title";
import {
  AbsoluteText,
  ColGroup,
  Flex,
  Form,
  RelativeGroup,
  WidthBox,
} from "../styles/common";
import RadioInput from "../components/common/RadioInput";
import {
  RECIPE_ING_AMOUNT_LIST,
  RECIPE_TYPE_LIST,
} from "../libs/constants/listItems";
import Select from "../components/common/Select";
import { Label } from "../components/common/Input/style";
import { css } from "@emotion/react";
import theme from "../styles/theme";

export default function RecipeWrite() {
  // 레시피 이미지
  const [imageUrl, setImageUrl] = useState(null);
  // 레시피 이름
  const [title, setTitle] = useState("");
  // 요리 종류
  const [recipeType, setRecipeType] = useState("korean");
  // 요리 양
  const [recipeServing, setRecipeServing] = useState("");
  // 식재료
  const [ingredient, setIngredient] = useState({
    name: "",
    amount: "",
    amountType: "",
  });
  // 식재료 리스트
  const [ingredientsList, setIngredientsList] = useState([]);
  // 요리 과정
  const [processSteps, setProcessSteps] = useState([{ text: "" }]);

  // 레시피 데이터
  const RECIPE_DATA = {
    title,
    recipeType,
    recipeServing,
    process: processSteps,
    ingredients: ingredientsList,
    imageUrl,
    writer: "useId",
  };

  const handleInputChange = (index, value) => {
    const newSteps = [...processSteps];
    newSteps[index].text = value;
    setProcessSteps(newSteps);
  };

  const addIngredient = (e) => {
    e.preventDefault();
    setIngredientsList((prev) => [
      ...prev,
      {
        name: ingredient.name,
        amount: `${ingredient.amount} ${ingredient.amountType}`,
      },
    ]);
  };

  const removeIngredient = (e, index, id) => {
    e.preventDefault();
    const newIngredients = ingredientsList.filter((item, idx) =>
      item._id ? id !== item._id : idx !== index
    );
    setIngredientsList(newIngredients);
  };

  const addStep = (e) => {
    e.preventDefault();
    setProcessSteps((prev) => [...prev, { text: "" }]);
  };

  const removeStep = (e, index, id) => {
    e.preventDefault();
    const newSteps = processSteps.filter((step, idx) =>
      step._id ? id !== step._id : idx !== index
    );
    setProcessSteps(newSteps);
  };

  const handleIngAmountChange = (label) => {
    setIngredient((prev) => ({ ...prev, amountType: label }));
  };

  // 이미지 변경 시 미리보기 업데이트
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // 기본 이미지로 변경
  const handleImageReset = () => {
    setImageUrl(null);
  };

  return (
    <Flex gap={"30"} center>
      <Title icon={"📝"} title={"새 레시피"} />
      <WidthBox width={"70"}>
        <Flex center>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(RECIPE_DATA);
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "300px auto",
                gap: 20,
              }}
            >
              {/* 이미지 */}
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  textAlign: "center",
                  background: "orange",
                  position: "relative",
                }}
              >
                {/* 이미지 업로드 */}
                {!imageUrl && (
                  <>
                    <input
                      style={{
                        opacity: 0,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                        left: 0,
                        top: 0,
                      }}
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <img
                      src="/favicon.png"
                      alt="Default"
                      style={{ maxWidth: "200px" }}
                    />
                  </>
                )}
                {/* 이미지 미리보기 */}
                {imageUrl && (
                  <>
                    <img
                      src={imageUrl}
                      alt="Preview"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleImageReset}
                      style={{ position: "absolute", top: 0, right: 0 }}
                    >
                      X
                    </button>
                  </>
                )}
              </div>
              {/* 레시피 이름, 종류, 양, 식재료 */}
              <Flex gap={"20"}>
                <ColGroup gap={"10"}>
                  {/* 레시피 이름 */}
                  <Input
                    id={"title"}
                    label={"레시피"}
                    placeholder={"예) 한끼든든 소고기 미역국 "}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                  {/* 요리 양 */}
                  <div css={RelativeGroup}>
                    <Input
                      noLabel
                      width={"70"}
                      type={"number"}
                      id={"recipeServing"}
                      placeholder={"1"}
                      value={recipeServing}
                      onChange={(e) => setRecipeServing(e.target.value)}
                    />
                    <span css={AbsoluteText}>인분</span>
                  </div>
                </ColGroup>
                {/* 요리 종류 */}
                <Flex row>
                  <Label>종류</Label>
                  <RadioInput
                    onChange={setRecipeType}
                    defaultSelected={recipeType}
                    options={RECIPE_TYPE_LIST}
                  />
                </Flex>
                {/* 식재료 추가 */}
                <Flex row gap={"10"}>
                  <Input
                    type={"text"}
                    id={"ingredientName"}
                    label={"식재료"}
                    placeholder={"예) 소고기"}
                    value={ingredient.name}
                    onChange={(e) =>
                      setIngredient((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                  <Input
                    noLabel
                    width={"50"}
                    type={"number"}
                    placeholder={"300"}
                    id={"ingredientAmount"}
                    value={ingredient.amount}
                    onChange={(e) =>
                      setIngredient((prev) => ({
                        ...prev,
                        amount: e.target.value,
                      }))
                    }
                  />
                  <Select
                    options={RECIPE_ING_AMOUNT_LIST}
                    onChange={handleIngAmountChange}
                    defaultMessage={"중량을 선택해주세요."}
                  />
                  <Button
                    width={"auto"}
                    type={"button"}
                    value={"➕"}
                    onClick={addIngredient}
                  />
                </Flex>
                {/* 식재료 목록 */}
                <div
                  style={{
                    border: "1px solid",
                    padding: 10,
                    height: 140,
                    overflow: "scroll",
                  }}
                >
                  <Flex row wrap="true" gap={"10"}>
                    {ingredientsList.map((item, index) => (
                      <div key={item._id ? item._id : index}>
                        <span>{item.name}, </span>
                        <span>{item.amount} </span>
                        <Button
                          width={"auto"}
                          type={"button"}
                          onClick={(e) => removeIngredient(e, index, item._id)}
                          value={"❌"}
                        />
                      </div>
                    ))}
                  </Flex>
                </div>
              </Flex>
              {/* 요리과정 */}
              <div style={{ gridColumn: "1/3" }}>
                <Flex gap={"10"}>
                  {/* 요리과정 추가 */}
                  <Button
                    type={"button"}
                    onClick={addStep}
                    value={"과정 추가 +"}
                    width={"100"}
                  />
                  {/* 요리과정 목록 */}
                  {processSteps.map((step, index) => (
                    <ColGroup gap={"10"} key={step._id ? step._id : index}>
                      <Input
                        label={`🏃 STEP ${index + 1}`}
                        type={"text"}
                        value={step.text}
                        onChange={(e) =>
                          handleInputChange(index, e.target.value)
                        }
                      />
                      <Button
                        type={"button"}
                        onClick={(e) => removeStep(e, index, step._id)}
                        value={"삭제"}
                        width={"auto"}
                      />
                    </ColGroup>
                  ))}
                  <Button type={"submit"} value={"레시피 등록"} />
                </Flex>
              </div>
            </div>
          </Form>
        </Flex>
      </WidthBox>
    </Flex>
  );
}
