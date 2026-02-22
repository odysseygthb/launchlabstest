import athletesData from '../../data/FE-Test-Assignment-Athletes.json';
import type { Athlete, AthleteFilters } from '../types';

const athletes = athletesData as Athlete[];

const athletesById = new Map(athletes.map(a => [a.id, a]));

const athleteFullNames = new Map(
    athletes.map(a => [a.id, `${a.firstName} ${a.lastName}`.toLowerCase()])
);

function matchesFilters(a: Athlete, filters: AthleteFilters): boolean {
    const { name, sport, country, status, gender } = filters;
    const nameLower = name?.toLowerCase();
    return (
        (!nameLower || athleteFullNames.get(a.id)!.includes(nameLower)) &&
        (!sport   || a.sport   === sport)   &&
        (!country || a.country === country) &&
        (!status  || a.status  === status)  &&
        (!gender  || a.gender  === gender)
    );
}

function filterById(id: number, filters: AthleteFilters): Athlete[] {
    const athlete = athletesById.get(id);
    if (!athlete) return [];
    return matchesFilters(athlete, filters) ? [athlete] : [];
}

function filterByFields(filters: AthleteFilters): Athlete[] {
    return athletes.filter(a => matchesFilters(a, filters));
}

function filterByOptions(filters: AthleteFilters = {}): Athlete[] {
    return filters?.id
        ? filterById(filters.id, filters)
        : filterByFields(filters);
}

export const db = {
    findAll: () => athletes,
    filterByOptions
};
