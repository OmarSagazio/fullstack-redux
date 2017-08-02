import React from 'react';


class Product extends React.Component {

    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.productImageUrl} />
                </div>
                <div className="content">
                    <div className="header">
                        <a>
                            <span className="icon"></span>
                        </a>
                        {this.props.votes}
                    </div>
                    <div className="description">
                        <a href={this.props.url}>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="extra">
                        <span>Submitted by:</span>
                        <img className="avatar" src={this.props.submitterAvatarUrl} />
                    </div>
                </div>
            </div>
        );
    }

}

export default Product;
