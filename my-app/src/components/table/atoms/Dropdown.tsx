import { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css';

export interface DropdownOption {
    value: string;
    label: string;
}

interface Props {
    value: string;
    options: DropdownOption[];
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
}

export function Dropdown({ value, options, onChange, placeholder = 'Select...', label }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const selectedLabel = options.find(o => o.value === value)?.label;

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    function handleSelect(optionValue: string) {
        onChange(optionValue);
        setIsOpen(false);
    }

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            {label && <span className={styles.label}>{label}</span>}
            <div
                className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ''}`}
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                tabIndex={0}
                onClick={() => setIsOpen(o => !o)}
                onKeyDown={e => e.key === 'Enter' || e.key === ' ' ? setIsOpen(o => !o) : undefined}
            >
                <span className={selectedLabel ? undefined : styles.placeholder}>
                    {selectedLabel ?? placeholder}
                </span>
                <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>▼</span>
            </div>

            {isOpen && (
                <div className={styles.menu} role="listbox">
                    {options.map(option => (
                        <div
                            key={option.value}
                            className={`${styles.option} ${option.value === value ? styles.optionSelected : ''}`}
                            role="option"
                            aria-selected={option.value === value}
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
