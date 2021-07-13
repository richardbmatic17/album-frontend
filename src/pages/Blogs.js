import React from 'react'
import {
  Grid,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Page } from '../partials'

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: 'white',
    maxWidth: '1128px',
    margin: '0 auto',
    justifyContent: 'space-between'
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <Page>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={3} xs={12}>
          <Paper className={classes.paper}>
            Profile section
          </Paper>
          <Paper className={classes.paper}>
            Recent activity section
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper className={classes.paper}>Share Box</Paper>
          <Paper className={classes.paper}>Post Section</Paper>
          <Paper className={classes.paper}>Post 1</Paper>
          <Paper className={classes.paper}>Post 2</Paper>
          <Paper className={classes.paper}>Post 3</Paper>
          <Paper className={classes.paper}>Post 4</Paper>
          <Paper className={classes.paper}>Post 5</Paper>
          <Paper className={classes.paper}>Post 6</Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper className={classes.paper}>Featured seciont</Paper>
          <Paper className={classes.paper}>Ads</Paper>
        </Grid>
      </Grid> 
    </Page>
  )
}

export default Home
