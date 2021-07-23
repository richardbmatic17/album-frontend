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
    backgroundColor: 'white',
    width: '100%',
  },
  headerRightLinks: {
    margin: '0 5px',
  },
  outerBox: {
    adding: '8px 0',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: '1128px',
    overflow: 'hidden',
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" p={1} className={classes.outerBox}>
        <Box p={1}>
          <Link href="/">
            R&J Album
          </Link>
        </Box>
        <Box p={1}>
          <Link href="/albums" className={classes.headerRightLinks}>
            Albums
          </Link>
          <Link href="/blogs" className={classes.headerRightLinks}>
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
    </div>
  );
}
