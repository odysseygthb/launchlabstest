import type { Column } from "../types";
import { AthleteColumn, AthleteColumnLabel } from "../types/enums.ts";

export const TABLE_COLUMNS: Column[] = [
    { key: AthleteColumn.athleteCode,   label: AthleteColumnLabel.athleteCode },
    { key: AthleteColumn.firstName,     label: AthleteColumnLabel.firstName },
    { key: AthleteColumn.lastName,      label: AthleteColumnLabel.lastName },
    { key: AthleteColumn.gender,        label: AthleteColumnLabel.gender },
    { key: AthleteColumn.age,           label: AthleteColumnLabel.age },
    { key: AthleteColumn.dateOfBirth,   label: AthleteColumnLabel.dateOfBirth },
    { key: AthleteColumn.country,       label: AthleteColumnLabel.country },
    { key: AthleteColumn.sport,         label: AthleteColumnLabel.sport },
    { key: AthleteColumn.position,      label: AthleteColumnLabel.position },
    { key: AthleteColumn.team,          label: AthleteColumnLabel.team },
    { key: AthleteColumn.ranking,       label: AthleteColumnLabel.ranking },
    { key: AthleteColumn.medals,        label: AthleteColumnLabel.medals },
    { key: AthleteColumn.matchesPlayed, label: AthleteColumnLabel.matchesPlayed },
    { key: AthleteColumn.wins,          label: AthleteColumnLabel.wins },
    { key: AthleteColumn.losses,        label: AthleteColumnLabel.losses },
    { key: AthleteColumn.winRate,       label: AthleteColumnLabel.winRate },
    { key: AthleteColumn.heightCm,      label: AthleteColumnLabel.heightCm },
    { key: AthleteColumn.weightKg,      label: AthleteColumnLabel.weightKg },
    { key: AthleteColumn.yearsPro,      label: AthleteColumnLabel.yearsPro },
    { key: AthleteColumn.salaryUsd,     label: AthleteColumnLabel.salaryUsd },
    { key: AthleteColumn.isOlympian,    label: AthleteColumnLabel.isOlympian },
    { key: AthleteColumn.status,        label: AthleteColumnLabel.status },
    { key: AthleteColumn.lastUpdated,   label: AthleteColumnLabel.lastUpdated },
];