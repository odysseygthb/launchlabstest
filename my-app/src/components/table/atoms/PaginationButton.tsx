interface Props {
    label: string;
    onClick: () => void;
    disabled: boolean;
}

export function PaginationButton({ label, onClick, disabled }: Props) {
    return (
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
}
