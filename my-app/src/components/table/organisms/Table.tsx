import type { Athlete } from '../../../types';
import { TableHeader } from '../molecules/TableHeader.tsx';
import { TableBody } from '../molecules/TableBody.tsx';
import { Pagination } from '../molecules/Pagination.tsx';
import styles from './Table.module.css';

interface TableProps {
    athletes: Athlete[];
    page: number;
    totalCount: number;
    pageSize: number;
    onPrevPage: () => void;
    onNextPage: () => void;
}

export function Table({ athletes, page, totalCount, pageSize, onPrevPage, onNextPage }: TableProps) {
    const totalPages = Math.ceil(totalCount / pageSize);
    return (
        <>
            <div className={styles.wrapper}>
                <table className={styles.table}>
                    <TableHeader />
                    <TableBody athletes={athletes} />
                </table>
            </div>

            <Pagination
                page={page}
                totalPages={totalPages}
                totalCount={totalCount}
                onPrevPage={onPrevPage}
                onNextPage={onNextPage}
            />
        </>
    );
}
