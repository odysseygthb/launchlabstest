import { useQuery } from '@tanstack/react-query';
import { db } from '../db/athletesDB';
import type {QueryOptions} from "../types";


export function useAthletes({ filters = {}, page = 0, pageSize = 20 }: QueryOptions = {}) {
    return useQuery({
        queryKey: ['athletes', { filters, page, pageSize }],
        queryFn: () => {
            const filtered = db.filter(a =>
                (!filters.sport   || a.sport   === filters.sport)   &&
                (!filters.country || a.country === filters.country) &&
                (!filters.status  || a.status  === filters.status)  &&
                (!filters.gender  || a.gender  === filters.gender),
            );

            return {
                data: filtered.slice(page * pageSize, (page + 1) * pageSize),
                total: filtered.length,
                totalPages: Math.ceil(filtered.length / pageSize),
            };
        },
        staleTime: Infinity,
    });
}