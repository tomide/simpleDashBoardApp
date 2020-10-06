import React, { useEffect } from 'react';
import './App.css';

import { Route, BrowserRouter,  Switch } from 'react-router-dom';
import Darwin from './components/pages/darwin';
import Pca from './components/pages/pca'
import  VipProducts from './components/pages/vip_products'
import { Link } from 'react-router-dom';
import { IState, IAction, IexperimentDesign } from "./store/interfaces";

import { Store } from "./store/store";


function App() {

  const { state, dispatch } = React.useContext(Store);

  useEffect(() => {
    return dispatch({
      type: "INITIALIZE_PAGE",
      payload: state.currentPcaOfferings.flatMap(
        (exp: IexperimentDesign) => exp.experimentName
      )[0],
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/PCA" render={(props) => <Pca {...props} />} />
        <Route path="/CLTV" render={(props) => <Darwin {...props} />} />
        <Route
          path="/VIP_PRODUCTS"
          render={(props) => <VipProducts {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;