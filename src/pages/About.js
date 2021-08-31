import React from 'react'
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Typography,
  Link,
} from '@material-ui/core';
import {
  Favorite,
  Share,
  LocationOn,
} from '@material-ui/icons';

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
    margin: '16px 0', 
    textAlign: 'left',
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
  },
  createPost: {
    display: 'flex',
    margin: '16px 0', 
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  createPostButton: {
    borderRadius: '20px',
    marginLeft: '16px',
    width: '100%',
  },
  media: {
    height: '240px',
  },
  cardActions: {
    padding: '0',
  },
  link: {
    textDecoration: 'none !important',
  }
}));

const posts = [
  {
    id: '1',
    title: 'Boracay Adventure',
    description: 'This is our first time in Boracay and first time riding a plane. The experience is so awesome, we\'ll definitely try this again.',
    image: 'https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG_0623.JPEG'
  },
  {
    id: '2',
    title: 'Random Post 1',
    description: 'This is our first time in Boracay and first time riding a plane. The experience is so awesome, we\'ll definitely try this again.',
    image: 'https://source.unsplash.com/random'
  },
  {
    id: '3',
    title: 'Random Post 2',
    description: 'This is our first time in Boracay and first time riding a plane. The experience is so awesome, we\'ll definitely try this again.',
    image: 'https://source.unsplash.com/random'
  },
  {
    id: '4',
    title: 'Random Post 3',
    description: 'This is our first time in Boracay and first time riding a plane. The experience is so awesome, we\'ll definitely try this again.',
    image: 'https://source.unsplash.com/random'
  },
];

const Home = (props) => {
  const classes = useStyles();

  return (
    <Page>
        {posts.map(post => (
          <Grid container spacing={3} className={classes.root}>
            <Grid item md={6} xs={12}>
              <Typography className={classes.root}>
                <Link href="#">
                  <CardMedia
                    className={classes.media}
                    image={post.image}
                    title={post.title}
                  />
                </Link>
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper elevation={3} className={classes.paper} key={post.title}>
                <Card className={classes.root}>
                  <Link href={'/blogs/' + post.id} className={classes.link}>
                    <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {post.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {post.description}
                          </Typography>
                        </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Paper>
          </Grid>
          </Grid> 
        ))}
    </Page>
  )
}

export default Home
