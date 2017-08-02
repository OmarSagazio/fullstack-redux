import React from 'react';
import ReactDOM from 'react-dom';

import { products } from '../model/seed.js';

import Product from './Product';

class ProductList extends React.Component {
    render() {

        const product = products[0];

        return (
            <div className="items">
                <Product
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                />
            </div>
        );
    }
}

export default ProductList;
