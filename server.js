const express = require('express');

const app = express();

// Bodyparser Middleware
app.use(express.json());

const names = [
  {id: '1', firstName:'Julius', lastName: 'Hibbert', email:'Julius@email.com'},
  {id: '2', firstName: 'Karen', lastName: 'Algernoppo', email:'Karen@email.com'},
  {id: '3', firstName:'Bob', lastName: 'Taylor', email:'Bob@email.com'},
];

const schedules = [
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

app.get('/api/data', (req, res) => {
  res.json(names);
});

app.get('/api/appointments', (req, res) => {
  res.json(schedules);
});

app.post('/api/add', (req, res) => {
  // Grab name id of doctor
  const nameId = req.body.selectedNameId;
  let index;
  // look for the index of doctor
  for (let i = 0; i < schedules.length; i++) {
    if (nameId === schedules[i].id) {
      index = i;
    }
  }
  // create new appointment object
  const newAppointment = {
    id: req.body.id,
    name: req.body.name,
    time: req.body.time,
    kind: req.body.kind,
  }
  // update schedules
  schedules[index].schedule.push(newAppointment);
  res.sendStatus(200);
});


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))