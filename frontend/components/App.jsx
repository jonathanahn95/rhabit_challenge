import React from "react";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route } from "react-router-dom";
import SplashContainer from "./splash/splash_container";
import AddFormContainer from "./form/add_form_container";
import EditFormContainer from "./form/edit_form_container";

const App = () => (
  <div>
    <Route exact path="/" component={SplashContainer} />
    <Route exact path="/users/new" component={AddFormContainer} />
    <Route exact path="/users/edit/:id" component={EditFormContainer} />
  </div>
);

export default App;
