import { Order } from "./data/entities";
import { createElement } from "./tools/jsxFactory";

export class OrderDetail {
  props: {
    order: Order;
    cancelCallback: () => void;
    submitCallback: () => void;
  };

  getContent(): HTMLElement {
    return (
      <div>
        <h3 className="text-center bg-primay text-white p-2">Order Summary</h3>
        <div className="p-3">
          <table className="table table-sm table-striped">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Product</th>
                <th className="text-right">Price</th>
                <th className="text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {this.props.order.orderLines.map((line) => (
                <tr>
                  <td>{line.quantity}</td>
                  <td>{line.product.name}</td>
                  <td className="text-right">
                    ${line.product.price.toFixed(2)}
                  </td>
                  <td className="text-right">${line.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <button
            className="btn btn-secondary m-1"
            onclick={this.props.cancelCallback}
            type="button"
          >
            Back
          </button>
          <button
            className="btn btn-primary m-1"
            onclick={this.props.submitCallback}
            type="button"
          >
            Submit Order
          </button>
        </div>
      </div>
    );
  }
}
