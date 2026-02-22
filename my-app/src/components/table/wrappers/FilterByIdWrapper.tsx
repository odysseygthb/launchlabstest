import { useState } from 'react';
import { TextInput } from '../atoms/TextInput';
import { sanitiseId } from "../../../helpers/sanitizers.ts";

interface Props {
    onIdChange: (id: number | undefined) => void;
}

export function FilterByIdWrapper({ onIdChange }: Props) {
    const [raw, setRaw] = useState('');

    function handleChange(value: string) {
        setRaw(value);
        onIdChange(sanitiseId(value));
    }

    return (
        <TextInput
            value={raw}
            onChange={handleChange}
            label="ID"
            placeholder="e.g. 42"
        />
    );
}
