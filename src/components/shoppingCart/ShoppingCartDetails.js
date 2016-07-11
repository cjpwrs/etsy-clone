/**
 * Created by cjpowers on 7/4/16.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/shoppingCartActions';
import ShoppingCart from './ShoppingCart';
import {browserHistory} from 'react-router';

class ShoppingCartDetails extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddProductPage = this.redirectToAddProductPage.bind(this);
    this.state = {
      product: {title: "", id:6}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  loadProducts(userId){
    this.props.actions.loadProducts(userId);
  }

  onTitleChange(event) {
    let product = this.state.product;
    product.title = event.target.value;
    this.setState({product: product});
  }

  onClickSave() {
    this.props.actions.createProduct(this.state.product);
  }

  deleteItem(id) {
    let cartItemId = id;
    //event.preventDefault();
    console.log(this.state);
    this.props.actions.deleteCartItem(cartItemId);
    //this.context.router.push('/products');

  }

  productRow(product, index) {
    return <div key={index}>{product.title}</div>;
  }

  redirectToAddProductPage() {
    browserHistory.push('/product');
  }

  render() {
    //this is called destructuring
    const {products} = this.props;
    const {cart} = this.props;
    let cartCount = cart.length;
    if(cartCount === 1) cartCount += ' item in your cart';
    else cartCount += ' items in your cart';

    return (
      <div className="cart-user-page">
        <h3>{cartCount}</h3>
        <ShoppingCart products={products}
                      cart={cart}
                     onCreate={this.redirectToAddProductPage}
                     onDelete={this.deleteItem}
        />

      </div>
    );
  }
}
ShoppingCartDetails.propTypes = {
  user: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps){
  return{
    products: state.products,
    user: state.user,
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartDetails);
