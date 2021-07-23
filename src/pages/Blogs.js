import React from 'react'
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Page } from '../partials'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: '1128px',
    overflow: 'hidden',
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    margin: '16px 0', 
    textAlign: 'center',
  },
  paperProfile: {
    padding: '0',
    margin: '16px 0',
    textAlign: 'center',
  },
  avatar: {
    height: '50px',
    margin: '0 auto',
    width: '50px',
  }
}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <Page>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={3} xs={12}>
          <Paper elevation={3} className={classes.paperProfile}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Avatar
                      alt="Remy Sharp"
                      src="https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG_0623.JPEG"
                      className={classes.avatar}/>
                  <Typography variant="h6">
                    Richard Matic
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Senior Software Engineer at Stratpoint
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Paper>
          <Paper elevation={3} className={classes.paper}>
            Recent activity section
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper elevation={3} className={classes.paper}>Share Box</Paper>
          <Paper elevation={3} className={classes.paper}>Post Section</Paper>
          <Paper elevation={3} className={classes.paper}>Post 1</Paper>
          <Paper elevation={3} className={classes.paper}>Post 2</Paper>
          <Paper elevation={3} className={classes.paper}>Post 3</Paper>
          <Paper elevation={3} className={classes.paper}>Post 4</Paper>
          <Paper elevation={3} className={classes.paper}>Post 5</Paper>
          <Paper elevation={3} className={classes.paper}>Post 6</Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper elevation={3} className={classes.paper}>Featured seciont</Paper>
          <Paper elevation={3} className={classes.paper}>Ads</Paper>
        </Grid>
      </Grid> 
    </Page>
  )
}

export default Home
