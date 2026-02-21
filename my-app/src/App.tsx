import styles from './App.module.css';
import { TableWrapper } from './components/table/wrappers/TableWrapper.tsx';

function App() {
    return (
        <div className={styles.app}>
            <h1 className={styles.title}>Athletes</h1>
            <TableWrapper />
        </div>
    );
}

export default App
