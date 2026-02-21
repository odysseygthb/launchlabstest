import type { Athlete, AthleteStatus } from '../../../types';

interface Props {
    athlete: Athlete;
    columns: { key: keyof Athlete; label: string }[];
}

const STATUS_CLASS: Record<AthleteStatus, string> = {
    Active: 'badge badge--active',
    Injured: 'badge badge--injured',
    Suspended: 'badge badge--suspended',
    Retired: 'badge badge--retired',
};

function renderCell(athlete: Athlete, fieldKey: keyof Athlete) {
    switch (fieldKey) {
        case 'athleteCode':
            return <td key={fieldKey} className="mono">{athlete.athleteCode}</td>;
        case 'winRate':
            return <td key={fieldKey} className="text-center">{(athlete.winRate * 100).toFixed(1)}%</td>;
        case 'status':
            return (
                <td key={fieldKey}>
                    <span className={STATUS_CLASS[athlete.status]}>{athlete.status}</span>
                </td>
            );
        case 'isOlympian':
            return <td key={fieldKey} className="text-center">{athlete.isOlympian ? 'Yes' : 'No'}</td>;
        case 'ranking':
        case 'medals':
        case 'matchesPlayed':
        case 'wins':
        case 'losses':
            return <td key={fieldKey} className="text-center">{athlete[fieldKey]}</td>;
        default:
            return <td key={fieldKey}>{String(athlete[fieldKey])}</td>;
    }
}

export function TableRow({ athlete, columns }: Props) {
    return (
        <tr>
            {columns.map(col => renderCell(athlete, col.key))}
        </tr>
    );
}
