import type { Athlete, AthleteStatus } from '../types';

interface TableProps {
    athletes: Athlete[];
    page: number;
    pageSize: number;
    onPrevPage: () => void;
    onNextPage: () => void;
}

const STATUS_CLASS: Record<AthleteStatus, string> = {
    Active: 'badge badge--active',
    Injured: 'badge badge--injured',
    Suspended: 'badge badge--suspended',
    Retired: 'badge badge--retired',
};

export function Table({ athletes, page, pageSize, onPrevPage, onNextPage }: TableProps) {
    return (
        <>
            <div className="table-wrapper">
                <table className="athletes-table">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Country</th>
                            <th>Sport</th>
                            <th>Team</th>
                            <th>Position</th>
                            <th>Ranking</th>
                            <th>Medals</th>
                            <th>Win Rate</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {athletes.map(athlete => (
                            <tr key={athlete.id}>
                                <td className="mono">{athlete.athleteCode}</td>
                                <td>{athlete.firstName} {athlete.lastName}</td>
                                <td>{athlete.gender}</td>
                                <td>{athlete.age}</td>
                                <td>{athlete.country}</td>
                                <td>{athlete.sport}</td>
                                <td>{athlete.team}</td>
                                <td>{athlete.position}</td>
                                <td className="text-center">{athlete.ranking}</td>
                                <td className="text-center">{athlete.medals}</td>
                                <td className="text-center">{(athlete.winRate * 100).toFixed(1)}%</td>
                                <td>
                                    <span className={STATUS_CLASS[athlete.status]}>
                                        {athlete.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <button onClick={onPrevPage} disabled={page === 0}>
                    ← Prev
                </button>
                <span>Page {page + 1}</span>
                <button onClick={onNextPage} disabled={athletes.length < pageSize}>
                    Next →
                </button>
            </div>
        </>
    );
}
