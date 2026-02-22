import { useMemo } from 'react';
import { db } from '../db/athletesDB';
import type { DropdownOption } from '../components/table/atoms/Dropdown';

const ALL_OPTION: DropdownOption = { value: '', label: 'All' };

export function useFilterOptions() {
    return useMemo(() => {
        const athletes = db.findAll();

        const sports = Array.from(new Set(athletes.map(a => a.sport)))
            .sort()
            .map(s => ({ value: s, label: s }));

        const countries = Array.from(new Set(athletes.map(a => a.country)))
            .sort()
            .map(c => ({ value: c, label: c }));

        const statuses: DropdownOption[] = [
            { value: 'Active',    label: 'Active' },
            { value: 'Injured',   label: 'Injured' },
            { value: 'Suspended', label: 'Suspended' },
            { value: 'Retired',   label: 'Retired' },
        ];

        const genders: DropdownOption[] = [
            { value: 'Male',   label: 'Male' },
            { value: 'Female', label: 'Female' },
        ];

        return {
            sports:    [ALL_OPTION, ...sports],
            countries: [ALL_OPTION, ...countries],
            statuses:  [ALL_OPTION, ...statuses],
            genders:   [ALL_OPTION, ...genders],
        };
    }, []);
}
