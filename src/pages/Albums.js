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
    width: '900px',
    height: '600px',
  },
}));

const tileData = [
  {
    id: 1,
    img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
    title: 'Boracay Adventure',
    author: 'author',
    cols: 1,
  },
  {
    id: 2,
    img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
    title: 'Sinagtala Adventure',
    author: 'author',
    cols: 2,
  },
  {
    id: 3,
    img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
    title: 'Grand Cafe 1919',
    author: 'author',
    cols: 2,
  },
  {
    id: 4,
    img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
    title: 'fort santiago',
    author: 'author',
    cols: 1,
  },
  {
    id: 5,
    img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
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
        parallaxImage="https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/"
        parallaxMessage="Welcome to Album Lists"
      />
      <br />
      <div className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList} cols={3}>
          {tileData.map((tile) => (
            <GridListTile key={tile.id} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={
                    <Button href={`/albums/${tile.id}`} color="primary">
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
