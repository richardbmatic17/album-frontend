import React from 'react';
import {
  Box,
  Container,
  Link,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: 'white',
    maxWidth: '80%',
    margin: '0 auto',
    justifyContent: 'space-between'
  },
  headerRightLinks: {
    margin: '0 5px',
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Box display="flex" p={1} className={classes.root}>
      <Box p={1}>
        <Link href="/">
          R&J Album
        </Link>
      </Box>
      <Box p={1}>
        <Link href="/albums" className={classes.headerRightLinks}>
          Albums
        </Link>
        <Link href="/portfolio" className={classes.headerRightLinks}>
          Blog
        </Link>
        <Link href="/about" className={classes.headerRightLinks}>
          About Us
        </Link>
        <Link href="#" className={classes.headerRightLinks}>
          Contact Us
        </Link>
      </Box>
    </Box>  
  );
}
