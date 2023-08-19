import styled from "@emotion/styled";
import React from "react";
import { Container } from "../../common/Layout";

const CenterBox = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;

const BackgroundBox = styled.div`
  width: 85%;
  height: 800px;
  background-color: #FFE9E4;
  border-radius: 30px;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
`;

const FlexBox = styled.div`
  width: 90%;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  padding: 50px 0;

  p{
    padding-top: 10px;
  }
`;
const EditorImage = styled.img`
  width: 160px;
  height: 112px;
`;

function EditorRecipe(editor) {
  return(
    <Container>
      <CenterBox>
        <BackgroundBox>
          <FlexBox>
            <Box>
              <EditorImage src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfMTgy/MDAxNjEyNDA5MDAwMTQ5.xAL2IL0PLx1GEkteQW9hO0VQQ5hp6G_KW51CDSesCOIg.ptpcPrdvUq9uhozgN0_nUHssItIl3BhLOqabQuy1A8gg.JPEG.sunny_side_up12/1612312679152%EF%BC%8D3.jpg?type=w800" alt={editor.name} />
              <p>{editor.name}aa</p>
            </Box>
            <Box>
              <EditorImage src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfMTgy/MDAxNjEyNDA5MDAwMTQ5.xAL2IL0PLx1GEkteQW9hO0VQQ5hp6G_KW51CDSesCOIg.ptpcPrdvUq9uhozgN0_nUHssItIl3BhLOqabQuy1A8gg.JPEG.sunny_side_up12/1612312679152%EF%BC%8D3.jpg?type=w800" alt={editor.name} />
              <p>{editor.name}aa</p>
            </Box>
            <Box>
              <EditorImage src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfMTgy/MDAxNjEyNDA5MDAwMTQ5.xAL2IL0PLx1GEkteQW9hO0VQQ5hp6G_KW51CDSesCOIg.ptpcPrdvUq9uhozgN0_nUHssItIl3BhLOqabQuy1A8gg.JPEG.sunny_side_up12/1612312679152%EF%BC%8D3.jpg?type=w800" alt={editor.name} />
              <p>{editor.name}aa</p>
            </Box>
            <Box>
              <EditorImage src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfMTgy/MDAxNjEyNDA5MDAwMTQ5.xAL2IL0PLx1GEkteQW9hO0VQQ5hp6G_KW51CDSesCOIg.ptpcPrdvUq9uhozgN0_nUHssItIl3BhLOqabQuy1A8gg.JPEG.sunny_side_up12/1612312679152%EF%BC%8D3.jpg?type=w800" alt={editor.name} />
              <p>{editor.name}aa</p>
            </Box>
            <Box>
              <EditorImage src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfMTgy/MDAxNjEyNDA5MDAwMTQ5.xAL2IL0PLx1GEkteQW9hO0VQQ5hp6G_KW51CDSesCOIg.ptpcPrdvUq9uhozgN0_nUHssItIl3BhLOqabQuy1A8gg.JPEG.sunny_side_up12/1612312679152%EF%BC%8D3.jpg?type=w800" alt={editor.name} />
              <p>{editor.name}aa</p>
            </Box>
          </FlexBox>
        </BackgroundBox>
      </CenterBox>
    </Container>
  );
}

export default EditorRecipe;