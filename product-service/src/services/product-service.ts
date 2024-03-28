import { IProduct } from './products';
import products from './products.json';

class ProductService implements IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  logo: string;
  count: number;
  async getAllProducts(): Promise<Record<string, unknown>[]> {
    return products;
  }
  async getProductById(id: string): Promise<Record<string, unknown>> {
    return products.find((product: IProduct) => product.id === id);
  }
}

export { ProductService };
