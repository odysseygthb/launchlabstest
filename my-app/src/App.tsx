import { useState } from 'react'
import './App.css'
import {useAthletes} from "./hooks/useAtheletes.ts";

function App() {

    const [page] = useState(0);
    const [sport] = useState('');

    const { data } = useAthletes({
        filters: { sport: sport || undefined },
        page,
        pageSize: 25,
    });

    console.log(data)

  return (
    <>

    </>
  )
}

export default App
