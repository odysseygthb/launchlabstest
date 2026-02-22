import styles from './App.module.css';
import { PageHeader } from './components/common/atoms/PageHeader.tsx';
import { TableWrapper } from './components/table/wrappers/TableWrapper.tsx';

function App() {
    return (
        <div className={styles.app}>
            <PageHeader title="Test by Bohdan Prystupko" />
            <TableWrapper />
        </div>
    );
}

export default App
