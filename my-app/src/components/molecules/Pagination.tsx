import { PaginationButton } from '../atoms/PaginationButton';

interface Props {
    page: number;
    hasNextPage: boolean;
    onPrevPage: () => void;
    onNextPage: () => void;
}

export function Pagination({ page, hasNextPage, onPrevPage, onNextPage }: Props) {
    return (
        <div className="pagination">
            <PaginationButton label="← Prev" onClick={onPrevPage} disabled={page === 0} />
            <span>Page {page + 1}</span>
            <PaginationButton label="Next →" onClick={onNextPage} disabled={!hasNextPage} />
        </div>
    );
}
