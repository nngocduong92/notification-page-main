import { Order, Product } from "./data/entities";
import { createElement } from "./tools/jsxFactory";

export class HtmlDisplay {
  props: {
    products: Product[];
    order: Order;
  };

  getContent(): HTMLElement {
    return createElement("h3", { className: "bg-secondary text-center"}, this.getElementText());
    // return <h3>{this.getElementText()}</h3>;
  }

  getElementText() {
    return (
      `${this.props.products.length} Products, ` +
      `Order total: $${this.props.order.total}`
    );
  }
}
