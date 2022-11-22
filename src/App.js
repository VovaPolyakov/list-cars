
import { useEffect, useState } from 'react';
import './App.css';
import ListCars from './components/ListCars'

const url = 'https://mocki.io/v1/03d57db2-2828-4b8d-af8b-10cfa6c537fc';

function App() {

  const [data,setData] = useState([])

  const fetchData = async (url) => {
    const res = await fetch(url)
    const result = await res.json()

    setData(result)
  }

  useEffect(() => {
    fetchData(url);
  },[])
  return (
    <div className="App">
      <ListCars data={data}/> 
    </div>
  );
}

export default App;
