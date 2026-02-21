import { TableHeaderCell } from '../atoms/TableHeaderCell.tsx';
import { TABLE_COLUMNS } from '../../../constants';

export function TableHeader() {
    return (
        <thead>
            <tr>
                {TABLE_COLUMNS.map(col => (
                    <TableHeaderCell key={col.key} label={col.label} />
                ))}
            </tr>
        </thead>
    );
}
