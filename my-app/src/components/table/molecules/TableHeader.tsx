import { TableHeaderCell } from '../atoms/TableHeaderCell.tsx';
import { TABLE_COLUMNS } from '../../../constants';
import styles from './TableHeader.module.css';

export function TableHeader() {
    return (
        <thead className={styles.head}>
            <tr>
                {TABLE_COLUMNS.map(col => (
                    <TableHeaderCell key={col.key} label={col.label} />
                ))}
            </tr>
        </thead>
    );
}
