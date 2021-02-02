import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";
import Video from "./Video";
import Calendar from "./Calendar";
import User from "./User";
import About from "./About";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/user" component={User} />
        <Route exact path="/about" component={About} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default AnimatedSwitch;
