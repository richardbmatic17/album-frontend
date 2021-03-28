import React from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import { DrawerStyles } from '../styles'
import {
  Button,
  Divider,
  Fab,
  Link,
  List,
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
      <Link href="/">
        <div className={classes.logo}>
          <span>Richard & Joy Album</span>
        </div>
      </Link>
      <Divider />
      <List>
        {listItems.map((text, index) => (
          <Link href={text}>
            <ListItem button key={text}>
                <ListItemIcon>{getIcon(index)}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className={classes.button}
          >
            <Fab color="primary" aria-label="add">
              <MenuIcon />
            </Fab>
          </Button>
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
