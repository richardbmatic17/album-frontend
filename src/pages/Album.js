import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Parallax from '../components/Parallax'
import { Page } from '../partials'
import { useParams } from "react-router-dom";

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

const data = [
  {
    id: 1,
    img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
    title: 'Boom Paness!!!',
    author: 'Richard Matic',
    cols: 1,
  },
  {
    id: 2,
    img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    id: 3,
    img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    id: 4,
    img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    id: 5,
    img: 'https://via.placeholder.com/400.png/09f/fff%20C/O%20https://placeholder.com/',
    title: 'Image',
    author: 'author',
    cols: 3,
  },
];

const Album = (props) => {
  const classes = useStyles();
  let { albumId } = useParams();
  const pageData = data.filter(item => item.id.toString() === albumId ? item : '');

  return (
    <Page>
      {JSON.stringify(pageData[0])}
    </Page>
  )
}

export default Album
