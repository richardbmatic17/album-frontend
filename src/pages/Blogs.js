import React from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography
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
    margin: '16px 0',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperProfile: {
    padding: '0',
    margin: '16px 0',
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
          <Paper elevation={3} className={classes.paperProfile}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG_0623.JPEG"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Profile section
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
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
