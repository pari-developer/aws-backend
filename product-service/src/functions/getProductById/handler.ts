import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import {ProductService} from "../../services/product-service";



const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    const productService = new ProductService();
    const id: string = event.pathParameters.id;
    const product = await productService.getProductById(id)

	return product
		? formatJSONResponse(product)
		: formatJSONResponse(`Product with ${id} not found`, 404);
};

export const main = middyfy(getProductsById);