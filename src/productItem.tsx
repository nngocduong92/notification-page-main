import { Product } from "./data/entities";
import { createElement } from "./tools/jsxFactory";

export class ProductItem {
  private quantity: number = 1;

  props: {
    product: Product,
    callback: (product: Product, quantity: number) => void;
  };

  getContent(): HTMLElement {
    return (
      <div>
        <h4>
          {this.props.product.name}
          <span>${this.props.product.price.toFixed(2)}</span>
        </h4>
        <div>{this.props.product.description}</div>
        <button type="button" onclick={this.handleAddToCart}>Add To Card</button>
        <select title="quantity" onchange={this.handleQuantityChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    );
  }

  handleQuantityChange = (ev: Event): void => {
    this.quantity = Number((ev.target as HTMLSelectElement).value);
  }

  handleAddToCart = (): void => {
    this.props.callback(this.props.product, this.quantity);
  }

}
