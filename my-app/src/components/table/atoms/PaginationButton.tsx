import styles from './PaginationButton.module.css';

interface Props {
    label: string;
    onClick: () => void;
    disabled: boolean;
}

export function PaginationButton({ label, onClick, disabled }: Props) {
    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
}
