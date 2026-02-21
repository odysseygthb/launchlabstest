interface Props {
    label: string;
}

export function TableHeaderCell({ label }: Props) {
    return <th>{label}</th>;
}
