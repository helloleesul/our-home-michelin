import Button from "../Button";
import * as S from "./style";

export default function Pagination({ totalPage, page, onPageChange }) {
  const startPage = Math.floor((page - 1) / 10) * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPage);

  return (
    <S.Wrap>
      {startPage > 1 && (
        <Button width={30} onClick={() => onPageChange(startPage - 10)}>
          👈
        </Button>
      )}
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <Button
          disabled={page === startPage + i}
          width={30}
          onClick={() => onPageChange(startPage + i)}
          key={startPage + i - 1}
        >
          {startPage + i}
        </Button>
      ))}
      {endPage < totalPage && (
        <Button width={30} onClick={() => onPageChange(endPage + 1)}>
          👉
        </Button>
      )}
    </S.Wrap>
  );
}
