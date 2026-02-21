import type { Athlete } from '../../../types';
import { TableHeader } from '../molecules/TableHeader.tsx';
import { TableBody } from '../molecules/TableBody.tsx';
import { Pagination } from '../molecules/Pagination.tsx';

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
                    <TableHeader columns={COLUMNS} />
                    <TableBody athletes={athletes} columns={COLUMNS} />
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
