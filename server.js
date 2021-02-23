const express = require('express');

const app = express();

app.get('/api/data', (req, res) => {
  const data = [
    {id: '1', firstName:'Julius', lastName: 'Hibbert', email:'Julius@email.com'},
    {id: '2', firstName:'Algernoppo', lastName: 'Karen', email:'Karen@email.com'},
    {id: '3', firstName:'Bob', lastName: 'Taylor', email:'Julius@email.com'},
  ];
  res.json(data);
});

app.get('/api/appointments', (req, res) => {
  const data = [
    {id: '1', 
    schedule: [
      {id: 1, name: 'Sterling Archer', time: '8:00am', kind:'Follow-Up'},
      {id: 2, name: 'Enrique West', time: '9:00am', kind:'New Patient'},
      {id: 3, name: 'Ellie Osborne', time: '10:00am', kind:'New Patient'},
      {id: 4,name: 'Kierra Gentry', time: '12:00pm', kind:'New Patient'},
      {id: 5,name: 'Pierre Cox', time: '4:00pm', kind:'New Patient'},
    ]},
    {id: '2', 
    schedule: [
      {id: 1, name: 'Thomas Crane', time: '7:00am', kind:'New Patient'},
      {id: 2, name: 'Jon Snow', time: '9:30am', kind:'Follow-Up'},
      {id: 3, name: 'Jamie Lannistar', time: '11:15am', kind:'New Patient'},
      {id: 4, name: 'Arya Stark', time: '12:00pm', kind:'New Patient'},
      {id: 5, name: 'Daenerys Targaryen', time: '3:00pm', kind:'New Patient'},
    ]},
    {id: '3', 
    schedule: [
      {id: 1, name: 'Walter White', time: '8:45am', kind:'New Patient'},
      {id: 2, name: 'Jesse Pinkman', time: '10:00am', kind:'New Patient'},
      {id: 3, name: 'Saul Goodman', time: '11:15am', kind:'Follow-Up'},
      {id: 4, name: 'Gus Fring', time: '12:00pm', kind:'New Patient'},
      {id: 5, name: 'Lydia Alquist', time: '8:00pm', kind:'New Patient'},
    ]},
  ];
  res.json(data);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))