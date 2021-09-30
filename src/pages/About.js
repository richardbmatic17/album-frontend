import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
  Link,
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
    textAlign: 'left',
  },
  media: {
    height: '100%',
  },
  link: {
    textDecoration: 'none !important',
  },
  ltr: {
    direction: 'ltr',
  },
  rtl: {
    direction: 'rtl',
  },
  image: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '30vh'
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      height: '40vh'
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: 'auto'
    },
  }
}));

const posts = [
  {
    id: '1',
    title: 'Intro',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: 'https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG_0623.JPEG',
    direction: 'ltr',
  },
  {
    id: '2',
    title: 'Inspirations',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: 'https://album-2021-03-02.s3.ap-southeast-1.amazonaws.com/ilocos/240792377_532589737971349_357464997435326562_n.jpg',
    direction: 'rtl',
  },
  {
    id: '3',
    title: 'Highlights',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: 'https://album-2021-03-02.s3.ap-southeast-1.amazonaws.com/cafe-1919/149528835_4338652139484397_3700494737887296012_n.jpg',
    direction: 'ltr',
  },
];

// Part of about page.
// 1. intro
// 2. Tapos bakit ka na inspired gumawa ng web natin
// 3. Tapos I highlight mo din yung nag simbang gabi tayo. Yung mga pictures natin sa church or chapel I highlight mo hehehe

const Home = (props) => {
  const classes = useStyles(props);

  return (
    <Page>
        {posts.map(post => (
          <Grid container spacing={3} className={`${classes.root} ${classes[post.direction]}`} direction={post.direction}>
            <Grid item md={6} xs={12}  className={classes.image}>
              <Link href={'/blogs/' + post.id} className={classes.link}>
                <CardMedia className={classes.media} image={post.image} />
              </Link>
            </Grid>
            <Grid item md={6} xs={12} >
              <Paper elevation={3} className={classes.paper} key={post.title}>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography variant="h5">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {post.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          </Grid> 
        ))}
    </Page>
  )
}

export default Home
