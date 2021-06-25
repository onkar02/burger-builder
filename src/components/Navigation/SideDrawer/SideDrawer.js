import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxillary from "../../../hoc/Auxillary/Auxillary";

const sideDrawer = (props) => {
  let attechedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attechedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Auxillary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attechedClasses.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Auxillary>
  );
};
export default sideDrawer;
