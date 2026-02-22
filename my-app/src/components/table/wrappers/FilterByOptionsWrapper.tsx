import {useCallback, useState} from 'react';
import { Dropdown } from '../atoms/Dropdown';
import { useFilterOptions } from '../../../hooks/useFilterOptions';
import type { AthleteFilters, AthleteStatus, AthleteGender } from '../../../types';
import type { FilterKeys } from "../../../types/enums.ts";
import {FILTER_CONFIGS} from "../../../constants";

const INITIAL_STATE: Record<FilterKeys, string> = {
    sport: '', country: '', status: '', gender: '',
};

interface Props {
    onFiltersChange: (filters: AthleteFilters) => void;
}

export function FilterByOptionsWrapper({ onFiltersChange }: Props) {
    const filterOptions = useFilterOptions();
    const [values, setValues] = useState(INITIAL_STATE);

    const handleChange = useCallback((key: FilterKeys, value: string) => {
        const next = { ...values, [key]: value };
        setValues(next);
        onFiltersChange({
            sport:   next.sport   || undefined,
            country: next.country || undefined,
            status:  (next.status  || undefined) as AthleteStatus | undefined,
            gender:  (next.gender  || undefined) as AthleteGender | undefined,
        });
    }, [values, onFiltersChange]);

    return (
        <>
            {FILTER_CONFIGS.map(config => (
                <Dropdown
                    key={config.key}
                    value={values[config.key]}
                    options={filterOptions[config.optionsKey]}
                    onChange={v => handleChange(config.key, v)}
                    label={config.label}
                    placeholder={config.placeholder}
                />
            ))}
        </>
    );
}
