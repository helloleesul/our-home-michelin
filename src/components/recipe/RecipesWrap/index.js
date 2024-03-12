import RecipeCard from "../RecipeCard";

export default function RecipesWrap({ recipes, col }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${col ? col : 3}, 1fr)`,
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
