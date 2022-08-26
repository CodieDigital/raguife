import * as S from "./styles";

interface PaginationProps {
  pages: number[];
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onSelect(page: number): void;
}

export function PaginationComponent({
  pages,
  currentPage,
  hasNextPage,
  hasPreviousPage,
  onSelect,
}: PaginationProps) {
  if (pages.length === 1) {
    return <div></div>;
  }

  return (
    <S.PaginationStyle>
      {hasPreviousPage && (
        <span
          style={{ display: currentPage == 1 ? "none" : "flex" }}
          className="paragraph-2-bold filson previus"
          onClick={() => onSelect(currentPage - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
          >
            <g>
              <g transform="rotate(-90 4 6)">
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="20"
                  d="M9 3v0L4 9v0l-5-6v0"
                />
              </g>
            </g>
          </svg>
        </span>
      )}

      {pages.map((pageItem) => {
        return (
          <button
            key={`${pageItem}-pagination}`}
            type="button"
            className={`${
              currentPage === pageItem
                ? "paragraph-2-bold filson active"
                : "paragraph-2-bold filson"
            }`}
            onClick={() => onSelect(pageItem)}
          >
            {pageItem}
          </button>
        );
      })}

      {hasNextPage && (
        <span
          style={{
            display: pages[pages.length - 1] == currentPage ? "none" : "flex",
          }}
          className="paragraph-2-bold filson"
          onClick={() => onSelect(currentPage + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
          >
            <g>
              <g transform="rotate(-90 4 6)">
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="20"
                  d="M9 3v0L4 9v0l-5-6v0"
                />
              </g>
            </g>
          </svg>
        </span>
      )}
    </S.PaginationStyle>
  );
}
