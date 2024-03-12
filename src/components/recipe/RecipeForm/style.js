import { Flex, RelativeGroup } from "@/styles/common";
import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const RecipeFormWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.PALETTE.mainColor};
  padding: ${theme.FONT_SIZE.hg};
`;

export const ImageBox = styled.div`
  .imageWrap {
    width: 300px;
    height: 300px;
  }
`;
export const ServingBox = styled.div`
  ${RelativeGroup}
`;
export const TypeBox = styled(Flex)``;
export const IngredientBox = styled(Flex)``;

export const IngredientsBox = styled.div`
  border: 1px solid ${theme.PALETTE.mainColor};
  padding: 10px;
  height: 160px;
  overflow-y: auto;
`;

export const Ingredients = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;

  .amount {
    color: ${theme.PALETTE.primary[100]};
    font-size: ${theme.FONT_SIZE.sm};
  }
`;

export const StepBox = styled.div`
  grid-column: 1/3;
`;
