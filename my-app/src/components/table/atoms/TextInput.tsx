import styles from './TextInput.module.css';

interface Props {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
}

export function TextInput({ value, onChange, placeholder, label }: Props) {
    return (
        <div className={styles.wrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                className={styles.input}
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}
