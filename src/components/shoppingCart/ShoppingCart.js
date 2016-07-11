/**
 * Created by cjpowers on 7/4/16.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ShoppingCart = ({products, cart, onCreate, onDelete}) => {
    let cartTotal = 0;
    for(let i = 0; i < cart.length; i++){
        console.log(cart);
        cartTotal += cart[i].price * cart[i].quantity;
    }

  return (
    <div className="cart-items-holder">
      {cart.map(cart =>
          <div key={cart.id} className="cart-individual-item-holder">
            <div className="cart-img-holder">
              <Link to={'/shop/' + cart.productid}>
                <img src={cart.image_url} alt=""/>
              </Link>
            </div>
            <div className="cart-item-desc">
              <p>{cart.title}</p>
              <div className="pointer"  onClick={onDelete.bind(null, cart.id)} >Remove</div>
            </div>
            <div className="cart-quantity">
              <p>Quantity: {cart.quantity}</p>
            </div>
            <div className="cart-price green">
              <h5>${cart.price * cart.quantity}</h5>

            </div>
          </div>
      )}
        <div className="cart-total">Total: ${cartTotal}</div>
    </div>

  );
};

ShoppingCart.propTypes = {
  products: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  onDelete: PropTypes.func
};

export default ShoppingCart;
