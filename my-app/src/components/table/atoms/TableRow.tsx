import type { Athlete, } from '../../../types';
import { AthleteColumn } from '../../../types/enums';
import { STATUS_CLASS, TABLE_COLUMNS } from "../../../constants";

interface Props {
    athlete: Athlete;
}

function renderCell(athlete: Athlete, fieldKey: AthleteColumn) {
    switch (fieldKey) {
        case AthleteColumn.athleteCode:
            return <td key={fieldKey} className="mono">{athlete.athleteCode}</td>;
        case AthleteColumn.winRate:
            return <td key={fieldKey} className="text-center">{(athlete.winRate * 100).toFixed(1)}%</td>;
        case AthleteColumn.status:
            return (
                <td key={fieldKey}>
                    <span className={STATUS_CLASS[athlete.status]}>{athlete.status}</span>
                </td>
            );
        case AthleteColumn.isOlympian:
            return <td key={fieldKey} className="text-center">{athlete.isOlympian ? 'Yes' : 'No'}</td>;
        case AthleteColumn.ranking:
        case AthleteColumn.medals:
        case AthleteColumn.matchesPlayed:
        case AthleteColumn.wins:
        case AthleteColumn.losses:
            return <td key={fieldKey} className="text-center">{athlete[fieldKey]}</td>;
        default:
            return <td key={fieldKey}>{String(athlete[fieldKey as keyof Athlete])}</td>;
    }
}

export function TableRow({ athlete }: Props) {
    return (
        <tr>
            { TABLE_COLUMNS.map(col => renderCell(athlete, col.key)) }
        </tr>
    );
}
