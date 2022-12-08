import { AbstractDataSource } from "./data/abstractDataSource";
import { Order, Product } from "./data/entities";
import { ProductList } from "./productList";
import { createElement } from "./tools/jsxFactory";

export class HtmlDisplay {

  private containerElem: HTMLElement;
  private selectedCategory: string;

  constructor() {
    this.containerElem = document.createElement("div");
  }


  props: {
    dataSource: AbstractDataSource
  };

  async getContent(): Promise<HTMLElement> {
    await this.updateContent();
    return this.containerElem;
    // return createElement("h3", { className: "bg-secondary text-center"}, this.getElementText());
    // return <h3>{this.getElementText()}</h3>;
  }


  async updateContent() {
    let products = await this.props.dataSource.getProducts("id", this.selectedCategory);
    let categories = await this.props.dataSource.getCategories();
    this.containerElem.innerHTML = "";
    let content = <div>
      <ProductList products={products} categories={categories} selectedCategory={this.selectedCategory} addToOrderCallback={this.addToOrder} filterCallback={this.selectedCategory} />
      
    </div>;
    this.containerElem.appendChild(content);
  }

  addToOrder = (product: Product, quantity: number) => {
    this.props.dataSource.order.addProduct(product, quantity);
    this.updateContent();
  }

  selectCategory = (selected:string) => {
    this.selectedCategory = selected === "All" ? undefined : selected;
    this.updateContent();
  }

}
