import { CategoryList } from "./categoryList";
import { Product } from "./data/entities";
import { ProductItem } from "./productItem";
import { createElement } from "./tools/jsxFactory";

export class ProductList {
  props: {
    products: Product[],
    categories: string[],
    selectedCategory: string,
    addToOrderCallback?: (product: Product, quantity: number) => void,
    filterCallback?: (category: string) => void
  };

  getContent(): HTMLElement {
    return (
      <div>
        <div>
          <div>
            <CategoryList
              categories={this.props.categories}
              selectedCategory={this.props.selectedCategory}
              callback={this.props.filterCallback}
            />
          </div>
          <div>
            {this.props.products.map((p) => (
              <ProductItem
                product={p}
                callback={this.props.addToOrderCallback}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
