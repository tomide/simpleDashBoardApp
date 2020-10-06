import { PlotData } from "plotly.js";

export interface IState {
  drawerState: boolean;
  selected_exp: string;
  current_experiment_list: string[];
  selected_cohorts: string;
  current_cohorts_list: string[];
  selected_type: string;
  current_type_list: string[];
  selected_details: string;
  current_details_list: string[];
  currentPcaOfferings: IexperimentDesign[];
  xyPlotData: IXYData[];
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IexperimentDesign {
  experimentName: string;
  experimentTypes: string[];
  experimentCohorts: string[];
  experimentDetails: Record<string, string>[];
}

export interface IXYData {
  plotName: string;
  plotData: Partial<PlotData>;
}

const testing1: IexperimentDesign = {
  experimentName: "mm_c",
  experimentTypes: ["testing1"],
  experimentCohorts: ["testing 2"],
  experimentDetails: [{ end: "test" }],
};

const testing2: IState = {
  drawerState: true,
  selected_exp: "string",
  current_experiment_list: ["string"],
  selected_cohorts: "string",
  current_cohorts_list: ["string"],
  selected_type: "string",
  current_type_list: ["string"],
  selected_details: "string",
  current_details_list: ["string"],
  currentPcaOfferings: [
    {
      experimentName: "mm_c",
      experimentTypes: ["testing1"],
      experimentCohorts: ["testing 2"],
      experimentDetails: [{ end: "test" }],
    },
  ],

  xyPlotData: [
    {
      plotName: "Plot of X Vs Y",
      plotData: {
        type: "bar",
        x: [1, 2, 3],
        y: [2, 5, 3],
      },
    },
    {
      plotName: "Plot of X Vs Y",
      plotData: {
        values: [19, 26, 55],
        labels: ["Residential", "Non-Residential", "Utility"],
        type: "pie",
      },
    },
  ],
};
