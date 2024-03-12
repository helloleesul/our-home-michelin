import { useEffect, useState } from "react";
import * as S from "./style";

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
    <S.ImageWrap>
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
            src={uploadImage}
            alt="Default"
            style={{ width: "100%", height: "100%" }}
          />
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
            alt="profileImage"
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
    </S.ImageWrap>
  );
}
