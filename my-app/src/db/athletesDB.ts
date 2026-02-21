import athletesData from '../../data/FE-Test-Assignment-Athletes.json';
import type { Athlete, AthleteFilters } from '../types';

const athletes = athletesData as Athlete[];

const athletesById = new Map(athletes.map(a => [a.id, a]));

function filterByOptions(filters: AthleteFilters = {}): Athlete[] {
    const { sport, country, status, gender } = filters;
    return athletes.filter(a =>
        (!sport   || a.sport   === sport)   &&
        (!country || a.country === country) &&
        (!status  || a.status  === status)  &&
        (!gender  || a.gender  === gender),
    );
}

export const db = {
    findAll:         () => athletes,
    findById:        (id: number) => athletesById.get(id),
    filter:          (predicate: (a: Athlete) => boolean) => athletes.filter(predicate),
    filterByOptions,
    paginate:        (page: number, size: number) => athletes.slice(page * size, (page + 1) * size),
};
