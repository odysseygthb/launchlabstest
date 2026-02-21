export interface Athlete {
    id: number;
    athleteCode: string;
    firstName: string;
    lastName: string;
    gender: string;
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
    status: string;
    lastUpdated: string; // ISO-8601 datetime
}