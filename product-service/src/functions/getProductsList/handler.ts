import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import {ProductService} from "../../services/product-service";

import schema from './schema';


const getProductList :  ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  const productService = new ProductService();

  const products = await productService.getAllProducts()
  return formatJSONResponse(products);
};

export const main = middyfy(getProductList);
