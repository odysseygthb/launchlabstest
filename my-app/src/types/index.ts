export type AthleteStatus = 'Active' | 'Injured' | 'Suspended' | 'Retired';
export type AthleteGender = 'Male' | 'Female';

export interface Athlete {
    id: number;
    athleteCode: string;
    firstName: string;
    lastName: string;
    gender: AthleteGender;
    age: number;
    dateOfBirth: string; // YYYY-MM-DD
    country: string;
    sport: string;
    position: string;
    team: string;
    ranking: number;
    medals: number;
    matchesPlayed: number;
    wins: number;
    losses: number;
    winRate: number;
    heightCm: number;
    weightKg: number;
    yearsPro: number;
    salaryUsd: number;
    isOlympian: boolean;
    status: AthleteStatus;
    lastUpdated: string; // ISO-8601 datetime
}

export interface AthleteFilters {
    sport?: string;
    country?: string;
    status?: AthleteStatus;
    gender?: AthleteGender;
}

export interface QueryOptions {
    filters?: AthleteFilters;
    page?: number;
    pageSize?: number;
}