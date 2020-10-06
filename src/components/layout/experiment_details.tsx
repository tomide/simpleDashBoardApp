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
        backgroundColor: "red",
      },
      "&:hover": {
        backgroundColor: "paper",
      },
    },
    selected: {},
    content: {
      height: "100%",
    },
  })
);

export default function ExperimentDetails() {
  const { state, dispatch } = React.useContext(Store);
  const details = state.current_details_list;

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    name: string
  ) => {
    setSelectedIndex(index);
    return dispatch({
      type: "SELECT_DETAILS",
      payload: name,
    });
  };
  return (
    <Grid item xs={12} sm={2} className={classes.gridItem}>
      <Card className={classes.content}>
        <CardHeader title="Experiment Description" className={classes.title} />
        <CardContent className={classes.content}>
          <Paper style={{ maxHeight: 200, overflow: "auto" }}>
            <div className={classes.root3}>
              <List component="nav" aria-label="main mailbox folders">
               
                    <ListItem button classes={{ root: classes.root3,
                        selected: classes.selected,
                      }}
                      onClick={(event) =>
                        handleListItemClick(event, 0, "name")
                      }
                    >
                      <ListItemText primary="coming soon" />
                    </ListItem>
              </List>
            </div>
          </Paper>
        </CardContent>
      </Card>
    </Grid>
  );
}
