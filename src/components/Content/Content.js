import React from "react";
import {Route, Switch} from "react-router-dom";

import {Main} from "./components/Main";
import {LogIn} from "./components/LogIn";
import {Registration} from "./components/Registration";
import {Home} from "./components/Home";
import {PageNotFound} from "./components/PageNotFound";


export const Content = () => (
  <section>
    <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/login" component={LogIn}/>
      <Route path="/registration" component={Registration}/>
      <Route path="/home" component={Home}/>
      <Route component={PageNotFound}/>
    </Switch>
  </section>
);
