import React, { Dispatch } from "react";
import { IState, IAction, IexperimentDesign } from "./interfaces";

const initialState: IState = {
  drawerState: false,
  selected_exp: "",
  current_experiment_list: [],
  selected_cohorts: "",
  current_cohorts_list: [],
  selected_type: "",
  current_type_list: [],
  selected_details: "",
  current_details_list: [],
  currentPcaOfferings: [
    {
      experimentName: "experiment_name_1",
      experimentTypes: ["type_1_A", "type_1_B"],
      experimentCohorts: ["cohort_1_A", "cohort_1_B"],
      experimentDetails: [
        {
          experiment_name_1_testingA_testing_2:
            "this an experiment description for the specificed experiment_name and \
      and type and cohort",
        },
      ],
    },
    {
      experimentName: "experiment_name_2",
      experimentTypes: ["type_2_A", "type_2_B"],
      experimentCohorts: ["cohort_2_A", "cohort_2_B"],
      experimentDetails: [
        {
          experiment_name_1_testingA_testing_2:
            "this an experiment description for the specificed experiment_name and \
      and type and cohort",
        },
      ],
    },
    {
      experimentName: "experiment_name_2_testing_1",
      experimentTypes: ["type_2_A", "type_2_B"],
      experimentCohorts: ["cohort_2_A", "cohort_2_B"],
      experimentDetails: [
        {
          experiment_name_1_testingA_testing_2:
            "this an experiment description for the specificed experiment_name and \
      and type and cohort",
        },
      ],
    },
    {
      experimentName: "experiment_name_3",
      experimentTypes: ["type_3_A", "type_3_B"],
      experimentCohorts: ["cohort_3_A", "cohort_3_B"],
      experimentDetails: [
        {
          experiment_name_1_testingA_testing_2:
            "this an experiment description for the specificed experiment_name and \
      and type and cohort",
        },
      ],
    },
    {
      experimentName: "experiment_name_4",
      experimentTypes: ["type_4_A", "type_4_B"],
      experimentCohorts: ["cohort_4_A", "cohort_4_B"],
      experimentDetails: [
        {
          experiment_name_1_testingA_testing_2:
            "this an experiment description for the specificed experiment_name and \
      and type and cohort",
        },
      ],
    },
    {
      experimentName: "experiment_name_5",
      experimentTypes: ["type_5_A", "type_5_B"],
      experimentCohorts: ["cohort_5_A", "cohort_5_B"],
      experimentDetails: [
        {
          experiment_name_1_testingA_testing_2:
            "this an experiment description for the specificed experiment_name and \
      and type and cohort",
        },
      ],
    },
  ],

  xyPlotData: [
    {
      plotName: "Percentage Lift Analysis",
      plotData: {
        type: "bar",
        x: [1, 2, 3],
        y: [2, 5, 3],
      },
    },
    {
      plotName: "Demograpghy Analysis",
      plotData: {
        values: [19, 26, 55],
        labels: ["Residential", "Non-Residential", "Utility"],
        type: "pie",
      },
    },
  ],
};

export const Store = React.createContext<{
  state: IState;
  dispatch: Dispatch<IAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return {
        ...state,
        drawerState: !state.drawerState,
      };
    case "SELECT_EXPERIMENT":
      return {
        ...state,
        selected_exp: action.payload,
        current_cohorts_list: state.currentPcaOfferings
          .filter((e) => e.experimentName === action.payload)
          .flatMap((i: IexperimentDesign) => i.experimentCohorts),
        current_type_list: state.currentPcaOfferings
          .filter((e) => e.experimentName === action.payload)
          .flatMap((i: IexperimentDesign) => i.experimentTypes),
      };

    case "SELECT_COHORTS":
      return {
        ...state,
        selected_cohorts: state.current_cohorts_list[action.payload],
      };
    case "SELECT_TYPES":
      return {
        ...state,
        selected_type: state.current_type_list[action.payload],
      };
    case "INITIALIZE_PAGE":
      return {
        ...state,
        current_experiment_list: state.currentPcaOfferings.flatMap(
          (exp: IexperimentDesign) => exp.experimentName
        ),
        selected_exp: action.payload,
        current_cohorts_list: state.currentPcaOfferings
          .filter((e) => e.experimentName === action.payload)
          .flatMap((i: IexperimentDesign) => i.experimentCohorts),
        current_type_list: state.currentPcaOfferings
          .filter((e) => e.experimentName === action.payload)
          .flatMap((i: IexperimentDesign) => i.experimentTypes),
      };

    case "SEARCH_EXPERIMENT":
      return {
        ...state,
        current_experiment_list: state.currentPcaOfferings
          .filter((e) => e.experimentName.includes(action.payload))
          .flatMap((i: IexperimentDesign) => i.experimentName),
      };

    case "SEARCH_TYPES":
      return {
        ...state,
        current_type_list: state.currentPcaOfferings
          .filter((e) => e.experimentName === state.selected_exp)
          .flatMap((i: IexperimentDesign) => i.experimentTypes)
          .filter((e) => e.includes(action.payload)),
      };

    case "SEARCH_COHORTS":
      return {
        ...state,
        current_cohorts_list: state.currentPcaOfferings
          .filter((e) => e.experimentName === state.selected_exp)
          .flatMap((i: IexperimentDesign) => i.experimentCohorts)
          .filter((e) => e.includes(action.payload)),
      };

    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {" "}
      {props.children}
    </Store.Provider>
  );
}
