import React from "react";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import Popular from "./Popular";
import UserBattle from "./UserBattle";
import BattleResult from "./BattleResult";
import Header from "./Header";
export default function Main() {
  return (

    <Switch>
        <Header/>
      <Route path="/" exact component={Popular} />
      <Route path="/battle" exact>
        <UserBattle />
      </Route>
      <Route path="/battle/results" component={BattleResult} />
    </Switch>
  );
}