import type { Column, FilterConfig } from "../types";
import type { DropdownOption } from "../components/table/atoms/Dropdown";
import { AthleteColumn, AthleteColumnLabel, AthleteStatus, AthleteGender, FilterKeys, FilterLabel, FilterPlaceholder, FilterOptionsKey } from "../types/enums.ts";

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

export const FILTER_CONFIGS: FilterConfig[] = [
    { key: FilterKeys.SPORT,   label: FilterLabel.SPORT,   placeholder: FilterPlaceholder.SPORT,   optionsKey: FilterOptionsKey.SPORT },
    { key: FilterKeys.COUNTRY, label: FilterLabel.COUNTRY, placeholder: FilterPlaceholder.COUNTRY, optionsKey: FilterOptionsKey.COUNTRY },
    { key: FilterKeys.STATUS,  label: FilterLabel.STATUS,  placeholder: FilterPlaceholder.STATUS,  optionsKey: FilterOptionsKey.STATUS },
    { key: FilterKeys.GENDER,  label: FilterLabel.GENDER,  placeholder: FilterPlaceholder.GENDER,  optionsKey: FilterOptionsKey.GENDER },
];

export const STATUS_OPTIONS: DropdownOption[] = [
    { value: AthleteStatus.Active,    label: AthleteStatus.Active },
    { value: AthleteStatus.Injured,   label: AthleteStatus.Injured },
    { value: AthleteStatus.Suspended, label: AthleteStatus.Suspended },
    { value: AthleteStatus.Retired,   label: AthleteStatus.Retired },
];

export const GENDER_OPTIONS: DropdownOption[] = [
    { value: AthleteGender.Male,   label: AthleteGender.Male },
    { value: AthleteGender.Female, label: AthleteGender.Female },
];

export const PAGE_SIZE = 10;