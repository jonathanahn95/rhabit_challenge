import React from "react";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route } from "react-router-dom";
import UserInfoContainer from "./user/user_info_container";

const App = () => (
  <div>
    <Route exact path="/" component={UserInfoContainer} />
  </div>
);

export default App;
