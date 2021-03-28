import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Parallax from '../components/Parallax'
import { Page } from '../partials'

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
     img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
     title: 'Image',
     author: 'author',
     cols: 1,
  },
  {
     img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
     title: 'Image',
     author: 'author',
     cols: 2,
  },
  {
     img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
     title: 'Image',
     author: 'author',
     cols: 2,
  },
  {
     img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
     title: 'Image',
     author: 'author',
     cols: 1,
  },
  {
     img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
     title: 'Image',
     author: 'author',
     cols: 3,
  },
];

const Album = (props) => {
  const classes = useStyles();

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
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Page>
  )
}

export default Album
