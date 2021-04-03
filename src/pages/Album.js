import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Footer,
  Parallax,
} from '../components'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '50vh',
    display: 'flex',
    flexDirection: 'row',
  },
  cardMedia: {
    width: '50%',
  },
  cardContent: {
    width: '50%',
    padding: '0',
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Drawer />
      <Parallax
        parallaxImage="https://source.unsplash.com/random"
        parallaxMessage="Welcome to Album Lists"
      />
      <main>
        <Container className={classes.cardGrid}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}