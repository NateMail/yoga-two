import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/first" component={First} />
        <Route exact path="/second" component={Second} />
        <Route exact path="/third" component={Third} />
        <Route exact path="/fourth" component={Fourth} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default AnimatedSwitch;
