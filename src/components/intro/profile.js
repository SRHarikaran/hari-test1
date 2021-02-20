import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import laptop from '../../theme/assets/laptop.png';
import wave from '../../theme/assets/wave.svg';

const profile = () => {
  return (
    <div className="profile-wraper" style={{backgroundImage: `url(${wave})`}}>
      <Grid container className="profile">
        <Grid item xs={12} sm={6} className="profile-text">
          <Typography variant="h4" style={{fontWeight: 800}}>
            BEST<br />HEALTHCARE<br />MEDICAL<br />WEBSITE DESIGN
          </Typography>
          <br/>
          <span>ideas and inspiration</span>

        </Grid>
        <Grid item xs={12} sm={6} className="profile-img">
          <div style={{height: 400}}>
          <img src={laptop} alt="" style={{height: '100%',width:'100%'}} />
          </div>
        
        </Grid>
      </Grid> 
      <Grid item xs={12} className="owner">
        <Typography variant="h6" align="right">
          HARI
        </Typography>
      </Grid>
    </div>
  )
};

export default profile;
