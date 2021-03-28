import React from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import { DrawerStyles } from '../styles'
import {
  Container,
  Divider,
  Fab,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@material-ui/core';

const listItems = ['About', 'portfolio', 'Album'];

export default function Drawer() {
  const classes = DrawerStyles();
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const getIcon = index => {
    if (index === 0) {
      return <InfoIcon color='primary' />
    }
    if (index === 1) {
      return <AccountBoxIcon color='primary' />
    }
    if (index === 2) {
      return <PhotoAlbumIcon color='primary' />
    }
  }

  const list = anchor => (
    <div
      className={classes.list}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Container className={classes.logo}>
        <Link href="/">
            Richard & Joy Album
        </Link>
      </Container>
      <Divider />
      {listItems.map((text, index) => (
        <Link href={text} key={index}>
          <ListItem key={text}>
              <ListItemIcon>{getIcon(index)}</ListItemIcon>
              <ListItemText primary={text} />
          </ListItem>
        </Link>
      ))}
    </div>
  );

  return (
    <div className={classes.root}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Fab color="primary" aria-label="drawer" onClick={toggleDrawer(anchor, true)} >
            <MenuIcon />
          </Fab>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
