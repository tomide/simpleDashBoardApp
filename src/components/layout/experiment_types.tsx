import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import GridList from "@material-ui/core/GridList";
import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { Store } from "../../store/store";
import { IState, IAction, IexperimentDesign } from "../../store/interfaces";
import {
  fade,
  TextField,
  Typography,
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    gridContainer: {
      paddingTop: "2%",
      paddingLeft: "18%",
      paddingRight: "10%",
      backgroundColor: "yellow",
    },
    gridItem: {
      paddingTop: "2%",
      paddingLeft: "50%",
      // backgroundColor: "red",
      padding: "2%",
    },
    grid_root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: "100%",
      height: "auto",
      flexWrap: "nowrap",
    },
    title: {
      fontSize: 10,
    },
    root2: {
      minWidth: 275,
    },
    root3: {
      "&$selected": {
        backgroundColor: "teal",
      },
      "&:hover": {
        backgroundColor: "paper",
      },
    },
    selected: {},
    content: {
      height: "100%",
    },
    searchContainer: {
      display: "flex",
      backgroundColor: fade(theme.palette.common.white, 0.15),
      paddingLeft: "20px",
      paddingRight: "20px",
      marginTop: "5px",
      marginBottom: "5px",
    },
    searchIcon: {
      alignSelf: "flex-end",
      marginBottom: "5px",
    },
    searchText: {
      width: "100%",
      fontSize: "5",
    },
    labelSize: {
      fontSize: "10px",
    },
  })
);

export default function ExperimentTypes() {
  const { state, dispatch } = React.useContext(Store);
  const types = state.current_type_list;

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    return dispatch({
      type: "SEARCH_TYPES",
      payload: name,
    });
  };


  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    name: string
  ) => {
    setSelectedIndex(index);
    return dispatch({
      type: "SELECT_TYPES",
      payload: index,
    });
  };
  return (
    <Grid item xs={12} sm={2} className={classes.gridItem}>
      <Card className={classes.content}>
        <CardHeader title="Experiment Types" className={classes.title} />
        <CardContent className={classes.content}>
          <Paper style={{ maxHeight: 200, overflow: "auto" }}>
            <div className={classes.searchContainer}>
              <SearchIcon className={classes.searchIcon} />
              <TextField
                className={classes.searchText}
                onChange={handleSearchChange}
                label={
                  <Typography className={classes.labelSize}>
                    {" "}
                    experiment types
                    {" "}
                  </Typography>
                }
                variant="standard"
              />
            </div>
            <div className={classes.root3}>
              <List component="nav" aria-label="main mailbox folders">
                {types.map((name: string, index: number) => {
                  return (
                    <ListItem
                      key={index}
                      button
                      selected={selectedIndex === index}
                      classes={{
                        root: classes.root3,
                        selected: classes.selected,
                      }}
                      onClick={(event) =>
                        handleListItemClick(event, index, name)
                      }
                    >
                      <ListItemText primary={name} />
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </Paper>
        </CardContent>
      </Card>
    </Grid>
  );
}
