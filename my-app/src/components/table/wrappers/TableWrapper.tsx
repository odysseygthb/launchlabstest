import { useState } from 'react';
import { useAthletes } from '../../../hooks/useAtheletes';
import { Table } from '../organisms/Table';
import { FilterByIdWrapper } from './FilterByIdWrapper';
import { FilterByNameWrapper } from './FilterByNameWrapper';
import { FilterByOptionsWrapper } from './FilterByOptionsWrapper';
import type { AthleteFilters } from '../../../types';
import styles from './TableWrapper.module.css';

const PAGE_SIZE = 25;

export function TableWrapper() {
    const [page, setPage] = useState(0);
    const [idFilter,      setIdFilter]      = useState<number | undefined>(undefined);
    const [nameFilter,    setNameFilter]    = useState<string | undefined>(undefined);
    const [optionFilters, setOptionFilters] = useState<AthleteFilters>({});

    const filters: AthleteFilters = {
        id:      idFilter,
        name:    nameFilter,
        sport:   optionFilters.sport,
        country: optionFilters.country,
        status:  optionFilters.status,
        gender:  optionFilters.gender,
    };

    const { data = [] } = useAthletes({ filters, page, pageSize: PAGE_SIZE });

    function handleIdChange(id: number | undefined) {
        setIdFilter(id);
        setPage(0);
    }

    function handleNameChange(name: string | undefined) {
        setNameFilter(name);
        setPage(0);
    }

    function handleOptionsChange(next: AthleteFilters) {
        setOptionFilters(next);
        setPage(0);
    }

    return (
        <>
            <div className={styles.filters}>
                <FilterByIdWrapper      onIdChange={handleIdChange} />
                <FilterByNameWrapper    onNameChange={handleNameChange} />
                <FilterByOptionsWrapper onFiltersChange={handleOptionsChange} />
            </div>

            <Table
                athletes={data}
                page={page}
                pageSize={PAGE_SIZE}
                onPrevPage={() => setPage(p => Math.max(0, p - 1))}
                onNextPage={() => setPage(p => p + 1)}
            />
        </>
    );
}
