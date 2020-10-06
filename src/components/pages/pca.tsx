import React, { useEffect } from "react";
import clsx from "clsx";
import TopAppBar from "../layout/appbar";
import { makeStyles } from "@material-ui/core/styles";
import ExperimentCohorts from "../layout/experiment_cohorts";
import ExperimentDetails from "../layout/experiment_details";
import ExperimentNames from "../layout/experiment_names";
import ExperimentTypes from "../layout/experiment_types";
import { Store } from "../../store/store";
import { Grid , GridList } from "@material-ui/core";
import { Theme, createStyles } from "@material-ui/core/styles";
import DaterPickers from "../layout/calender";
import { RouteComponentProps } from "react-router-dom";
import { IState, IAction, IexperimentDesign } from "../../store/interfaces";
import Plots from '../plots/plots'


const drawerWidth = 350;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainGrid: {
      flexGrow: 1,
      paddingLeft: theme.spacing(10),
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
    gridList: {
      width: "100%",
      height: "100%",
    },
  })
);

export default function Pca(props: RouteComponentProps): JSX.Element {

  const { state, dispatch } = React.useContext(Store);

  const { history } = props;
  const classes = useStyles();
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
        spacing={1}
        className={clsx(classes.mainGrid, {
          [classes.mainGridShift]: state.drawerState,
        })}
      >
        {<ExperimentNames />}
        {<ExperimentTypes />}
        {<ExperimentCohorts />}
        {<ExperimentDetails />}
        <DaterPickers />
      </Grid>
      <Grid
        container
        spacing={1}
        className={clsx(classes.mainGrid, {
          [classes.mainGridShift]: state.drawerState,
        })}
      >
        {<Plots />}
      </Grid>
    </div>
  );
}
