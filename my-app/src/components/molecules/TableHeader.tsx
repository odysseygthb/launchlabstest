import type { Athlete } from '../../types';
import { TableHeaderCell } from '../atoms/TableHeaderCell';

interface Props {
    columns: { key: keyof Athlete; label: string }[];
}

export function TableHeader({ columns }: Props) {
    return (
        <thead>
            <tr>
                {columns.map(col => (
                    <TableHeaderCell key={col.key} label={col.label} />
                ))}
            </tr>
        </thead>
    );
}
