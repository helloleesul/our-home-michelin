import RecipeCard from "../RecipeCard";

export default function RecipesWrap({ recipes, col, index }) {
  console.log("🚀 ~ RecipesWrap ~ recipes:", recipes);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${col ? col : 3}, 1fr)`,
        gap: 20,
      }}
    >
      {recipes?.map((card, i) => (
        <RecipeCard key={card._id} index={index && i + 1} {...card} />
      ))}
    </div>
  );
}
