import React from "react";
import Plot from "react-plotly.js";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider } from "@material-ui/core";
import { Store } from "../../store/store";
import { IXYData } from "../../store/interfaces";
import { PlotData} from "plotly.js";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "83%",
      marginTop: "2%",
      //   padding: "2%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    plotRoot: {
      paddingLeft: "10%",
      width: "100%",
      position: "relative",
      alignContent: "center",
    },
  })
);

export default function Plots() {
  const { state, dispatch } = React.useContext(Store);
  const xyPlotData: IXYData[] = state.xyPlotData;

  const classes   = useStyles();

  return (
    <div className={classes.root}>
      {xyPlotData.map((item: IXYData) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                {item.plotName}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.plotRoot}>
                <Plot
                  data={[item.plotData]}
                  layout={{
                    width: 1000,
                    height: 400,
                    title: "A Fancy Plot",
                  }}
                />
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
