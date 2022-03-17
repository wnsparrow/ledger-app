import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar'
import { useState, useEffect } from 'react'

function App() {
  const [policies, setData] = useState([])

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch('http://127.0.0.1:8000/api/policies/');
      const data = await response.json();

      setData(data.results);
    }
  }, [])

  return (
    <div className="App">
      <NavbarComp data={policies} />
    </div>
  );
}

export default App;

// <Home data={policies} />
