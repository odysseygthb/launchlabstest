import { PaginationButton } from '../atoms/PaginationButton.tsx';
import styles from './Pagination.module.css';

interface Props {
    page: number;
    hasNextPage: boolean;
    onPrevPage: () => void;
    onNextPage: () => void;
}

export function Pagination({ page, hasNextPage, onPrevPage, onNextPage }: Props) {
    return (
        <div className={styles.pagination}>
            <PaginationButton label="← Prev" onClick={onPrevPage} disabled={page === 0} />
            <span className={styles.page}>Page {page + 1}</span>
            <PaginationButton label="Next →" onClick={onNextPage} disabled={!hasNextPage} />
        </div>
    );
}
