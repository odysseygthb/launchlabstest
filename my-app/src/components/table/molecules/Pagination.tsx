import { PaginationButton } from '../atoms/PaginationButton.tsx';
import styles from './Pagination.module.css';

interface Props {
    page: number;
    totalPages: number;
    totalCount: number;
    onPrevPage: () => void;
    onNextPage: () => void;
}

export function Pagination({ page, totalPages, totalCount, onPrevPage, onNextPage }: Props) {
    return (
        <div className={styles.pagination}>
            <PaginationButton label="← Prev" onClick={onPrevPage} disabled={page === 0} />
            <span className={styles.page}>Page {page + 1} of {totalPages} ({totalCount} results)</span>
            <PaginationButton label="Next →" onClick={onNextPage} disabled={page + 1 >= totalPages} />
        </div>
    );
}
