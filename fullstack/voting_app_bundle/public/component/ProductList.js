import React from 'react';
import ReactDOM from 'react-dom';

import { productSeeds } from '../model/seed.js';

import Product from './Product';


class ProductList extends React.Component {


    handleProductUpVote(productId) {
        console.log(productId + " was upvoted.");
    }

    render() {

        const products = productSeeds.sort(
            (a ,b) => b.votes - a.votes
        );

        const productComponents = products.map(product =>(
            <Product
                id={'product-' + product.id}
                key={'product-' + product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
            />
        ));

        return (
            <div className="items">
                {productComponents}
            </div>
        );

    }
}

export default ProductList;
