import * as S from "./style";

export default function Pagination({ totalPage, page, onPageChange }) {
  const startPage = Math.floor((page - 1) / 10) * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPage);

  return (
    <S.Wrap>
      {startPage > 1 && (
        <button width={30} onClick={() => onPageChange(startPage - 10)}>
          👈
        </button>
      )}
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <button
          style={{ color: page !== startPage + i && "gray" }}
          width={30}
          onClick={() => onPageChange(startPage + i)}
          key={startPage + i - 1}
        >
          {startPage + i}
        </button>
      ))}
      {endPage < totalPage && (
        <button width={30} onClick={() => onPageChange(endPage + 1)}>
          👉
        </button>
      )}
    </S.Wrap>
  );
}
