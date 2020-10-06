import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Store } from '../../store/store'
import { IState, IAction } from '../../store/interfaces';
import { RouteComponentProps } from 'react-router-dom';


const drawerWidth = 350;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "5%",
      display: "flex",
    },
    appBar: {
      alignContent:'center',
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    typography: {
      flexGrow: 1,
      align: "center",
    },
  })
);

export default function TopAppBar(props: RouteComponentProps) {
  const { state, dispatch } = React.useContext(Store);

  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const open = state.drawerState;
  const routes = [
    "Post Campaign Analysis",
    "Lifetime Value Simulation - DARWIN",
    "VIP-Product",
  ];

  const link = [
    "PCA",
    "CLTV",
    "VIP_PRODUCTS",
  ];

  const handleDrawerOpen = () => {
    return dispatch({
      type: "TOGGLE_DRAWER",
      payload: "not needed",
    });
  };

  const handleDrawerClose = () => {
    return dispatch({
      type: "TOGGLE_DRAWER",
      payload: "not needed",
    });
  };

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return dispatch({
        type: "TOGGLE_DRAWER",
        payload: "not needed",
      });
    }
    return dispatch({
      type: "TOGGLE_DRAWER",
      payload: "not needed",
    });
  };

  return (
    <div
      className={classes.root}
      onClick={() => toggleDrawer}
      onKeyDown={() => toggleDrawer}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.typography}>
            CUSTOMER INSIGHT AND ANALYTICS PLATFORM
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {routes.map((text, index) => (
            <ListItem button key={text}>
              <Divider />
              <ListItemText
                primary={text}
                onClick={() => history.push(`/${link[index]}`)}
              />
              <Divider />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
