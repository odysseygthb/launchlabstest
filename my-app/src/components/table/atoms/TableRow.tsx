import type { Athlete, AthleteStatus } from '../../../types';
import { AthleteColumn } from '../../../types/enums';
import { TABLE_COLUMNS } from '../../../constants';
import styles from './TableRow.module.css';

type BadgeClass = 'badgeActive' | 'badgeInjured' | 'badgeSuspended' | 'badgeRetired';

const STATUS_BADGE: Record<AthleteStatus, BadgeClass> = {
    Active:    'badgeActive',
    Injured:   'badgeInjured',
    Suspended: 'badgeSuspended',
    Retired:   'badgeRetired',
};

interface Props {
    athlete: Athlete;
}

function renderCell(athlete: Athlete, fieldKey: AthleteColumn) {
    switch (fieldKey) {
        case AthleteColumn.athleteCode:
            return <td key={fieldKey} className={styles.cellMono}>{athlete.athleteCode}</td>;
        case AthleteColumn.winRate:
            return <td key={fieldKey} className={styles.cellCenter}>{(athlete.winRate * 100).toFixed(1)}%</td>;
        case AthleteColumn.status:
            return (
                <td key={fieldKey} className={styles.cell}>
                    <span className={styles[STATUS_BADGE[athlete.status]]}>{athlete.status}</span>
                </td>
            );
        case AthleteColumn.isOlympian:
            return <td key={fieldKey} className={styles.cellCenter}>{athlete.isOlympian ? 'Yes' : 'No'}</td>;
        case AthleteColumn.ranking:
        case AthleteColumn.medals:
        case AthleteColumn.matchesPlayed:
        case AthleteColumn.wins:
        case AthleteColumn.losses:
            return <td key={fieldKey} className={styles.cellCenter}>{athlete[fieldKey]}</td>;
        default:
            return <td key={fieldKey} className={styles.cell}>{String(athlete[fieldKey as keyof Athlete])}</td>;
    }
}

export function TableRow({ athlete }: Props) {
    return (
        <tr className={styles.row}>
            {TABLE_COLUMNS.map(col => renderCell(athlete, col.key))}
        </tr>
    );
}
