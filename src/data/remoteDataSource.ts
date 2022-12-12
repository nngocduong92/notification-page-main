import { AbstractDataSource } from "./abstractDataSource";
import { Product } from "./entities";
import Axios from "axios";

const protocol = "http";
const hostname = "localhost";
const port = 4600;

const urls = {
    products: `${protocol}://${hostname}:${port}/products`,
    orders: `${protocol}://${hostname}:${port}/orders`
};

export class RemoteDataSource extends AbstractDataSource {
    
    protected loadProducts(): Promise<Product[]> {
        return Axios.get(urls.products).then(response => response.data);
    }

    storeOrder(): Promise<number> {
        let orderData = {
            lines: [...this.order.orderLines.values()].map(x => ({
                productId: x.product.id,
                productName: x.product.name,
                quantity: x.quantity
            }))
        };
        return Axios.post(urls.orders, orderData).then(response => response.data.id);
    }
}