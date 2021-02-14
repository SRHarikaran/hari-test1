import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import style from './style';
import { withRouter } from 'react-router-dom';

const header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{flex:1}} onClick={() => props.history.push('/landing')} >
          Hari
        </Typography>
        <Button color="inherit" style={style.btnStyle} onClick={() => props.history.push('/calculator')}>Calculator</Button>
        <Button color="inherit" style={style.btnStyle} onClick={() => props.history.push('/calculator/mobile')}>CalculatorMobile</Button>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(header);
