import type { Athlete } from '../../../types';
import { TableRow } from '../atoms/TableRow.tsx';

interface Props {
    athletes: Athlete[];
}

export function TableBody({ athletes }: Props) {
    return (
        <tbody>
            {athletes.map(athlete => (
                <TableRow key={athlete.id} athlete={athlete} />
            ))}
        </tbody>
    );
}
