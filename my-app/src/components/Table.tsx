import type { Athlete } from '../types';
import { TableRow } from './atoms/TableRow';
import { TableHeaderCell } from './atoms/TableHeaderCell';
import { PaginationButton } from './atoms/PaginationButton';

interface TableProps {
    athletes: Athlete[];
    page: number;
    pageSize: number;
    onPrevPage: () => void;
    onNextPage: () => void;
}

const COLUMNS: { key: keyof Athlete; label: string }[] = [
    { key: 'athleteCode',   label: 'Code' },
    { key: 'firstName',     label: 'First Name' },
    { key: 'lastName',      label: 'Last Name' },
    { key: 'gender',        label: 'Gender' },
    { key: 'age',           label: 'Age' },
    { key: 'dateOfBirth',   label: 'Date of Birth' },
    { key: 'country',       label: 'Country' },
    { key: 'sport',         label: 'Sport' },
    { key: 'position',      label: 'Position' },
    { key: 'team',          label: 'Team' },
    { key: 'ranking',       label: 'Ranking' },
    { key: 'medals',        label: 'Medals' },
    { key: 'matchesPlayed', label: 'Matches' },
    { key: 'wins',          label: 'Wins' },
    { key: 'losses',        label: 'Losses' },
    { key: 'winRate',       label: 'Win Rate' },
    { key: 'heightCm',      label: 'Height (cm)' },
    { key: 'weightKg',      label: 'Weight (kg)' },
    { key: 'yearsPro',      label: 'Years Pro' },
    { key: 'salaryUsd',     label: 'Salary (USD)' },
    { key: 'isOlympian',    label: 'Olympian' },
    { key: 'status',        label: 'Status' },
    { key: 'lastUpdated',   label: 'Last Updated' },
];

export function Table({ athletes, page, pageSize, onPrevPage, onNextPage }: TableProps) {
    return (
        <>
            <div className="table-wrapper">
                <table className="athletes-table">
                    <thead>
                        <tr>
                            {COLUMNS.map(col => (
                                <TableHeaderCell key={col.key} label={col.label} />
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {athletes.map(athlete => (
                            <TableRow key={athlete.id} athlete={athlete} columns={COLUMNS} />
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <PaginationButton label="← Prev" onClick={onPrevPage} disabled={page === 0} />
                <span>Page {page + 1}</span>
                <PaginationButton label="Next →" onClick={onNextPage} disabled={athletes.length < pageSize} />
            </div>
        </>
    );
}
