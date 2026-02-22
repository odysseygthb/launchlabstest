import { useState } from 'react';
import { TextInput } from '../atoms/TextInput';
import { sanitiseName } from '../../../helpers/sanitizers';

interface Props {
    onNameChange: (name: string | undefined) => void;
}

export function FilterByNameWrapper({ onNameChange }: Props) {
    const [value, setValue] = useState('');

    function handleChange(name: string) {
        setValue(name);
        onNameChange(sanitiseName(name));
    }

    return (
        <TextInput
            value={value}
            onChange={handleChange}
            label="Name"
            placeholder="First or last name"
        />
    );
}
