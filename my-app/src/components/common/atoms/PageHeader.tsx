import styles from './PageHeader.module.css';
import launchLabsLogo from '../../../assets/lauchlabslogo.svg';

interface PageHeaderProps {
    title: string;
}

export const PageHeader = ({ title }: PageHeaderProps) => (
    <div className={styles.header}>
        <img src={launchLabsLogo} className={styles.logo} alt="Launch Labs logo" />
        <h1 className={styles.title}>{title}</h1>
    </div>
);
