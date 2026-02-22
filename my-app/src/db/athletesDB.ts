import athletesData from '../../data/FE-Test-Assignment-Athletes.json';
import type { Athlete, AthleteFilters } from '../types';

const athletes = athletesData as Athlete[];

const athletesById = new Map(athletes.map(a => [a.id, a]));

const athleteFullNames = new Map(
    athletes.map(a => [a.id, `${a.firstName} ${a.lastName}`.toLowerCase()])
);

function filterByOptions(filters: AthleteFilters = {}): Athlete[] {
    const { name, sport, country, status, gender } = filters;
    const nameLower = name?.toLowerCase();
    return athletes.filter(a =>
        (!nameLower || athleteFullNames.get(a.id)!.includes(nameLower)) &&
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
