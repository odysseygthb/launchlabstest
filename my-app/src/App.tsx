import { useState } from 'react'
import './App.css'
import { useAthletes } from "./hooks/useAtheletes.ts";
import type { AthleteStatus } from './types';

const STATUS_CLASS: Record<AthleteStatus, string> = {
    Active: 'badge badge--active',
    Injured: 'badge badge--injured',
    Suspended: 'badge badge--suspended',
    Retired: 'badge badge--retired',
};

function App() {
    const [page, setPage] = useState(0);
    const [sport] = useState('');
    const pageSize = 25;

    const { data = [] } = useAthletes({
        filters: { sport: sport || undefined },
        page,
        pageSize,
    });

    return (
        <div className="app">
            <h1 className="app-title">Athletes</h1>

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
                        {data.map(athlete => (
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
                                <td><span className={STATUS_CLASS[athlete.status]}>{athlete.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}>
                    Prev
                </button>
                <span>Page {page + 1}</span>
                <button onClick={() => setPage(p => p + 1)} disabled={data.length < pageSize}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default App
