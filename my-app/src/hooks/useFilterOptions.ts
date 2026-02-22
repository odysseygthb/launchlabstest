import { useMemo } from 'react';
import { db } from '../db/athletesDB';
import type { DropdownOption } from '../components/table/atoms/Dropdown';
import { STATUS_OPTIONS, GENDER_OPTIONS } from '../constants';

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

        return {
            sports:    [ALL_OPTION, ...sports],
            countries: [ALL_OPTION, ...countries],
            statuses:  [ALL_OPTION, ...STATUS_OPTIONS],
            genders:   [ALL_OPTION, ...GENDER_OPTIONS],
        };
    }, []);
}
