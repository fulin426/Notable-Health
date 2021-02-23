import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import './App.css';

function App() {
  const [data , setData] = useState([]);
  
  useEffect(()=> {
    const getData = async () => {
      const res = await axios.get('/api/data');
      setData(res.data);
    }
    
    getData();
  }, []);

  return (
    <div className="App">
      <Container>
        <h1>Test Names</h1>
        {data.map((item) =>
          <div key={item.id}>
            {item.name} is {item.age} years old
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
