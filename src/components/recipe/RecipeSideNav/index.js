export default function RecipeSideNav(props) {
  const { imageUrl, writer } = props;
  return (
    <div style={{ position: "sticky", top: 100, textAlign: "center" }}>
      {/* <WidthBox width={"50"}> */}
      {/* </WidthBox> */}
      <img
        src={imageUrl}
        onError={(e) => {
          e.target.src = "/recipeDefault.png";
        }}
        alt=""
        width={300}
        height={300}
      />
      <img src={writer?.profileImageURL} alt="" />
      <p>{writer?.nickName}</p>
    </div>
  );
}
