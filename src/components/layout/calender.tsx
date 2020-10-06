import React from 'react'
import TopAppBar from '../layout/appbar'
import { Card, CardContent, CardHeader, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { Theme, createStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


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



export default function DaterPickers() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date('2014-08-18T21:11:54'),);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const classes = useStyles();
    return (
      <Grid item xs={12} sm={2} className={classes.gridItem}>
        <Card className={classes.content}>
          <CardHeader title="Experiment Cohorts" className={classes.title} />
          <CardContent className={classes.content}>
            <Paper style={{ maxHeight: 200, overflow: "auto" }}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Paper>
          </CardContent>
        </Card>
      </Grid>
    );
}