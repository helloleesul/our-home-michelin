import { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Title from "../components/common/Title";
import { Flex, Form, WidthBox } from "../styles/common";
import RadioInput from "../components/common/RadioInput";
import {
  RECIPE_ING_AMOUNT_LIST,
  RECIPE_TYPE_LIST,
} from "../libs/constants/listItems";
import Select from "../components/common/Select";

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
            <Flex gap={"20"}>
              <div style={{ display: "flex", gap: 20, alignItems: "start" }}>
                <div style={{ width: 300, height: 300, position: "relative" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      background: "orange",
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
                </div>
                <Flex gap={"20"} style={{ flex: 1 }}>
                  <Input
                    id={"title"}
                    label={"레시피 이름"}
                    placeholder={"예) 한끼든든 소고기 미역국 "}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                  <RadioInput
                    onChange={setRecipeType}
                    defaultSelected={recipeType}
                    options={RECIPE_TYPE_LIST}
                  />
                  <Flex row center>
                    <Input
                      type={"number"}
                      id={"recipeServing"}
                      label={"요리 양"}
                      value={recipeServing}
                      onChange={(e) => setRecipeServing(e.target.value)}
                    />
                    <span>인분</span>
                  </Flex>
                  <Flex row center>
                    <div>
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
                      <Flex row center>
                        <Input
                          type={"number"}
                          id={"ingredientAmount"}
                          label={""}
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
                          type={"button"}
                          value={"추가"}
                          onClick={addIngredient}
                        />
                      </Flex>
                    </div>
                  </Flex>
                  {ingredientsList.map((item, index) => (
                    <div key={item._id ? item._id : index}>
                      {item.name} {item.amount}
                      <Button
                        type={"button"}
                        onClick={(e) => removeIngredient(e, index, item._id)}
                        value={"삭제"}
                      />
                    </div>
                  ))}
                </Flex>
              </div>
              <Flex gap={"20"}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h3>요리 과정</h3>
                  <Button
                    type={"button"}
                    onClick={addStep}
                    value={"요리 과정 추가 +"}
                    width={"200"}
                  />
                </div>
                {processSteps.map((step, index) => (
                  <Flex row center key={step._id ? step._id : index}>
                    <Input
                      label={`과정 ${index + 1}.`}
                      type={"text"}
                      value={step.text}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                    <Button
                      type={"button"}
                      onClick={(e) => removeStep(e, index, step._id)}
                      value={"삭제"}
                    />
                  </Flex>
                ))}
              </Flex>
              <Button type={"submit"} value={"레시피 등록"} />
            </Flex>
          </Form>
        </Flex>
      </WidthBox>
    </Flex>
  );
}
