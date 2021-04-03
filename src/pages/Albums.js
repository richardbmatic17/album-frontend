import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Parallax } from '../components'
import { Page } from '../partials'
import {
  Button,
  GridList,
  GridListTile,
  GridListTileBar,
  Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '1200px',
    height: '900px',
  },
  button: {
    color: 'white !important',
    fontWeight: 'bolder',
  }
}));

const tileData = [
  {
    id: 1,
    img: 'https://source.unsplash.com/random',
    title: 'Boracay Adventure',
    author: 'author',
    cols: 1,
  },
  {
    id: 2,
    img: 'https://source.unsplash.com/random',
    title: 'Sinagtala Adventure',
    author: 'author',
    cols: 2,
  },
  {
    id: 3,
    img: 'https://source.unsplash.com/random',
    title: 'Grand Cafe 1919',
    author: 'author',
    cols: 2,
  },
  {
    id: 4,
    img: 'https://source.unsplash.com/random',
    title: 'fort santiago',
    author: 'author',
    cols: 1,
  },
  {
    id: 5,
    img: 'https://source.unsplash.com/random',
    title: 'Ramen Kuroda',
    author: 'author',
    cols: 3,
  },
];

const Album = (props) => {
  const classes = useStyles();
  <Link href="/">Richard & Joy Album</Link>
  return (
    <Page>
      <Parallax
        parallaxImage="https://source.unsplash.com/random"
        parallaxMessage="Welcome to Album Lists"
      />
      <br />
      <div className={classes.root}>
        <GridList cellHeight={300} className={classes.gridList} cols={3}>
          {tileData.map((tile) => (
            <GridListTile key={tile.id} cols={tile.cols || 1} xs={100}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={
                    <Button href={`/albums/${tile.id}`} className={classes.button}>
                        {tile.title}
                    </Button>
                  }
                />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Page>
  )
}

export default Album
