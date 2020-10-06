import React from "react";
import clsx from "clsx";
import TopAppBar from "../layout/appbar";
import { makeStyles } from "@material-ui/core/styles";
import { Store } from "../../store/store";
import { Grid } from "@material-ui/core";
import { Theme, createStyles } from "@material-ui/core/styles";
import DaterPickers from "../layout/calender";
import { RouteComponentProps } from "react-router-dom";

const drawerWidth = 350;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainGrid: {
      flexGrow: 1,
      padding: theme.spacing(6),
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    mainGridShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  })
);

export default function VipProducts(props: RouteComponentProps): JSX.Element {
  const { history } = props;
  const classes = useStyles();
  const { state, dispatch } = React.useContext(Store);
  const selectedItems = [
    state.selected_exp,
    state.selected_type,
    state.selected_cohorts,
  ];

  console.log(selectedItems);

  return (
    <div>
      <TopAppBar {...props} />
      <Grid
        container
        spacing={2}
        className={clsx(classes.mainGrid, {
          [classes.mainGridShift]: state.drawerState,
        })}
      >
        <h1> Coming Soon!!! </h1>
      </Grid>
    </div>
  );
}
