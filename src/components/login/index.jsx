import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import useStyles from './style.js';
import { useConnect } from '@blockstack/connect';

const Login = () => {
  const classes = useStyles();
  const { doAuth } = useConnect();
  
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Button onClick={() => doAuth()}>Authenticate</Button>
          </div>
        </Grid>
      </Grid>
    </div>
    
  );
};

export default Login;
