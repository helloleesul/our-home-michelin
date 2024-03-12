import { useEffect, useState } from "react";
import * as S from "./style";
import Button from "../Button";

export default function ImageInput({
  onChange,
  defaultImage,
  handleFile,
  uploadImage,
}) {
  const [imageUrl, setImageUrl] = useState(defaultImage);

  useEffect(() => {
    setImageUrl(defaultImage);
  }, [defaultImage]);

  // 이미지 변경 시 미리보기 업데이트
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);

      setImageUrl(newImageUrl);
      onChange(newImageUrl);
      handleFile(file);
    }
  };

  // 기본 이미지로 변경
  const handleImageReset = () => {
    setImageUrl("");
    onChange("");
    handleFile("");
  };

  return (
    <S.ImageWrap className="imageWrap">
      {/* 이미지 업로드 */}
      {!imageUrl && (
        <>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <img src={uploadImage} alt="upload" />
        </>
      )}
      {/* 이미지 미리보기 */}
      {imageUrl && (
        <>
          <img
            src={imageUrl}
            onError={(e) => {
              e.target.src = uploadImage;
              setImageUrl("");
            }}
            alt="preview"
          />
          <Button
            width={"30"}
            type={"button"}
            onClick={handleImageReset}
            value={"✕"}
          />
        </>
      )}
    </S.ImageWrap>
  );
}
