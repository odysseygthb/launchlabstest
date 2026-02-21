import type { Athlete } from '../../../types';
import { TableRow } from '../atoms/TableRow.tsx';

interface Props {
    athletes: Athlete[];
    columns: { key: keyof Athlete; label: string }[];
}

export function TableBody({ athletes, columns }: Props) {
    return (
        <tbody>
            {athletes.map(athlete => (
                <TableRow key={athlete.id} athlete={athlete} columns={columns} />
            ))}
        </tbody>
    );
}
