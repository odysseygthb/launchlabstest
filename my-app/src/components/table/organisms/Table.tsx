import type { Athlete } from '../../../types';
import { TableHeader } from '../molecules/TableHeader.tsx';
import { TableBody } from '../molecules/TableBody.tsx';
import { Pagination } from '../molecules/Pagination.tsx';
import styles from './Table.module.css';

interface TableProps {
    athletes: Athlete[];
    page: number;
    pageSize: number;
    onPrevPage: () => void;
    onNextPage: () => void;
}

export function Table({ athletes, page, pageSize, onPrevPage, onNextPage }: TableProps) {
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
                hasNextPage={athletes.length === pageSize}
                onPrevPage={onPrevPage}
                onNextPage={onNextPage}
            />
        </>
    );
}
