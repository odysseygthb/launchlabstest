import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { db } from '../db/athletesDB';
import type { AthleteFilters, QueryOptions } from '../types';

export function useAthletesCount(filters: AthleteFilters = {}) {
    return useQuery({
        queryKey: ['athletes-count', filters.sport, filters.country, filters.status, filters.gender],
        queryFn: () => db.filterByOptions(filters).length,
        staleTime: Infinity,
    });
}

export function useAthletes({ filters = {}, page = 0, pageSize = 20 }: QueryOptions = {}) {
    return useQuery({
        queryKey: ['athletes', filters.sport, filters.country, filters.status, filters.gender, page, pageSize],
        queryFn: () => {
            const filtered = db.filterByOptions(filters);
            return filtered.slice(page * pageSize, (page + 1) * pageSize);
        },
        staleTime: Infinity,
        placeholderData: keepPreviousData
    });
}
