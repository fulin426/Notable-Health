import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, Box } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import Physicians from './Components/Physicians';
import './App.css';

const columns = [
  { field: 'id', headerName: '#', width: 50 },
  { field: 'name', headerName: 'Name', width: 160 },
  { field: 'time', headerName: 'Time', width: 130 },
  { field: 'kind', headerName: 'Kind', width: 130 },
];

function App() {
  const [names , setNames] = useState([]);
  const [appointments, setappointments] = useState([]);
  const [currentSchedule, setCurrentSchedule] = useState([]);
  const [selectedNameId, setSelectedNameId] = useState('1');
  const [displayName, setDisplayName] = useState('');
  const [displayEmail, setDisplayEmail] = useState('');

  useEffect(()=> {
    const getNames = async () => {
      const res = await axios.get('/api/data');
      setNames(res.data);
    }

    const getAppointments = async () => {
      const res = await axios.get('/api/appointments');
      setappointments(res.data);
    }
    getNames();
    getAppointments();
  }, []);

  useEffect(() => {
    for (let name of names) {
      if (name.id === selectedNameId) {
        setDisplayName(name.firstName);
        setDisplayEmail(name.email);
      }
    }

    for (let appointment of appointments) {
      if (appointment.id === selectedNameId) {
        console.log(appointment.id)
        console.log(appointment.schedule);
        setCurrentSchedule(appointment.schedule);
      }
    }
  }, [selectedNameId, names, appointments])

  const clickName = (e) => {
    const id = e.currentTarget.dataset.id;
    setSelectedNameId(id);
  }

  return (
    <Container>
      <h1>Notable</h1>
      <Box mt={4} display='flex'>
        <Physicians 
          names={names} 
          clickName={clickName}
          selectedNameId={selectedNameId}
        />
        <Box ml={4}>
          <h1>{displayName}</h1>
          <h4>{displayEmail}</h4>
          <div style={{ height: 400, width: 550 }}>
            <DataGrid 
              rows={currentSchedule} 
              columns={columns} 
              pageSize={5} 
              hideFooterPagination={true} 
            />
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
