import React from 'react';
import ReactDOM from 'react-dom';

import { productSeeds } from '../model/seed.js';

import Product from './Product';


class ProductList extends React.Component {

    state = {
        products: []
    };

    componentDidMount() {
        this.setState({products: productSeeds});
    }


    handleProductUpVote = (productId) => {
        const nextProducts =
        this.state.products.map(
            product => {
                if(product.id === productId) {
                    return {
                        ...product,
                        votes: product.votes + 1
                    }
                } else {
                    return product;
                }
            }
        );

        this.setState({
            products: nextProducts
        });
    }

    render() {

        const products = this.state.products.sort(
            (a, b) => b.votes - a.votes
        );

        const productComponents = products.map(product =>(
            <Product
                id={product.id}
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
