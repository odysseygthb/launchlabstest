import athletesData from '../../data/FE-Test-Assignment-Athletes.json';
import type { Athlete, AthleteFilters } from '../types';

const athletes = athletesData as Athlete[];

const athletesById = new Map(athletes.map(a => [a.id, a]));

const athleteFullNames = new Map(
    athletes.map(a => [a.id, `${a.firstName} ${a.lastName}`.toLowerCase()])
);

function filterById(id: number, filters: AthleteFilters): Athlete[] {
    const athlete = athletesById.get(id);
    if (!athlete) return [];

    const { name, sport, country, status, gender } = filters;
    const nameLower = name?.toLowerCase();
    const matches =
        (!nameLower || athleteFullNames.get(athlete.id)!.includes(nameLower)) &&
        (!sport   || athlete.sport   === sport)   &&
        (!country || athlete.country === country) &&
        (!status  || athlete.status  === status)  &&
        (!gender  || athlete.gender  === gender);

    return matches ? [athlete] : [];
}

function filterByFields(filters: AthleteFilters): Athlete[] {
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

function filterByOptions(filters: AthleteFilters = {}): Athlete[] {
    return filters?.id
        ? filterById(filters.id, filters)
        : filterByFields(filters);
}

export const db = {
    findAll:         () => athletes,
    filterByOptions,
    paginate:        (page: number, size: number) => athletes.slice(page * size, (page + 1) * size),
};
