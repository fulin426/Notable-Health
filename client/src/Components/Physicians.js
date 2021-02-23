import React from 'react';
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  name: {
    cursor: 'pointer',
    width: 200,
    height: 32,
    borderRadius: 6,
    paddingTop: 12,
    paddingLeft: 16,
    listStyle: 'none',
  },
  container: {
    backgroundColor: '#E8E8E8',
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 2,
  }
}));

function Physicians({ names, clickName, selectedNameId }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3>PHYSICIANS</h3>
      <ul>
        {names.map(name => 
          <li 
            key={name.id} 
            data-id={name.id} 
            onClick={(e) => clickName(e)}
            className={classes.name}
            style={name.id === selectedNameId ? {backgroundColor: '#2480e0', color:'#fff'} : {}}
          >
            {`${name.lastName}, ${name.firstName}`}
          </li>
        )}
      </ul>
      <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
        <Button style={{backgroundColor: '#2480e0', color:'#fff', fontWeight: 700}}>Logout</Button>
      </Box>
    </div>
  );
}

export default Physicians;