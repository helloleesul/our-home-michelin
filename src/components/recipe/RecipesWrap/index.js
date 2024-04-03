import Pagination from "@/components/@common/Pagination";
import RecipeCard from "../RecipeCard";

export default function Recipes(props) {
  const { recipes, col, index, totalPage, page, onPageChange } = props;

  return recipes?.length > 0 ? (
    <div style={{ position: "relative", paddingBottom: 50 }}>
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
      {/* {totalPage > 1 && ( */}
      <Pagination
        totalPage={totalPage}
        page={page}
        onPageChange={onPageChange}
      />
      {/* )} */}
    </div>
  ) : (
    <p>레시피가 없습니다.</p>
  );
}
