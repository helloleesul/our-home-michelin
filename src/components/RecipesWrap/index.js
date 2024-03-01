import RecipeCard from "../RecipeCard";

export default function RecipesWrap({ recipes }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
        gridAutoRows: 200,
      }}
    >
      {recipes?.map((card) => (
        <RecipeCard key={card._id} {...card} />
      ))}
    </div>
  );
}
