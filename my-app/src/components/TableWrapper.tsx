import { useState } from 'react';
import { useAthletes } from '../hooks/useAtheletes';
import { Table } from './Table';

const PAGE_SIZE = 25;

export function TableWrapper() {
    const [page, setPage] = useState(0);

    const { data = [] } = useAthletes({ page, pageSize: PAGE_SIZE });

    return (
        <Table
            athletes={data}
            page={page}
            pageSize={PAGE_SIZE}
            onPrevPage={() => setPage(p => Math.max(0, p - 1))}
            onNextPage={() => setPage(p => p + 1)}
        />
    );
}
