import { MethodEnum, ProductNameEnum, ProductPriceEnum } from 'enums';

import { NextApiRequest } from 'next';

export type Product = {
  name: ProductNameEnum;
  price: number;
};

export class API {
  private product?: Product;
  private quantity?: number;

  private static priceFromName(name: ProductNameEnum): number {
    switch (name) {
      case ProductNameEnum.HONEYMOON:
        return ProductPriceEnum.honeymoon;
      case ProductNameEnum.WEDDING_PICTURES:
        return ProductPriceEnum.weddingpictures;
      default:
        throw new Error(`Unknown product name: ${name}`);
    }
  }

  constructor(private req: NextApiRequest) {
    const { name, quantity } = JSON.parse(req.body);

    this.product = {
      name,
      price: API.priceFromName(name),
    };

    this.quantity = Number(quantity);
  }

  getProductPrice(): number {
    if (!this.product) {
      throw new Error(`Product not set!`);
    }

    if (!this.quantity) {
      throw new Error(`Quantity not set!`);
    }

    return this.product.price * this.quantity;
  }

  isPostRequest(): boolean {
    return this.req.method.toUpperCase() === MethodEnum.POST;
  }
}
