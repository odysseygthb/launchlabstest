import styles from './TableHeaderCell.module.css';

interface Props {
    label: string;
}

export function TableHeaderCell({ label }: Props) {
    return <th className={styles.cell}>{label}</th>;
}
