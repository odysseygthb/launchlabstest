import athletesData from '../../data/FE-Test-Assignment-Athletes.json';
import type { Athlete } from "../types";

const athletes = athletesData as Athlete[];

export const db = {
    findAll: () => athletes,
    findById: (id: number): Athlete | undefined => athletes.find(a => a.id === id),
    filter: (predicate: (a: Athlete) => boolean): Athlete[] => athletes.filter(predicate),
    paginate: (page: number, size: number): Athlete[] =>
        athletes.slice(page * size, (page + 1) * size),
};