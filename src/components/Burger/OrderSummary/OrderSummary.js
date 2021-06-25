import React, { Component } from "react";
import Auxillary from "../../../hoc/Auxillary/Auxillary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Auxillary>
        <h4 style={{ marginBlockStart: 0, marginBlockEnd: 0 }}>Your Order</h4>
        <p>A delicious Burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to Checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Auxillary>
    );
  }
}
export default OrderSummary;
