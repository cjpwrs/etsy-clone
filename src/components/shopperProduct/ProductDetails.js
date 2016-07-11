/**
 * Created by cjpowers on 7/2/16.
 */
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ProductDetails = ({ product, user, className, onAddToCart, onDelete, onChange, loading, errors}) => {
  return (
    <div className="product-details-page">
      <div className="details-page-favorite-box">
        <button className="details-page-favorite-button"><span className="glyphicon glyphicon-heart fav-button"></span>Favorite</button>
        <div>
          <h3 className="bold-question">Like this item?</h3>
          <p>Add it to your favorites to revisit it later.</p>
        </div>
      </div>
      <div className="details-page-img-holder">
        <img src={product.image_url} alt=""/>
      </div>
        <div className="details-page-product-details">
          <div className="details-page-product-info">
            <h2 className="product-details-title">{product.title}</h2>
            <h2 className="product-details-price">${product.price}</h2>
            <h3>Item Details</h3>
            <p className="product-details-description">{product.description}</p>
          </div>
            <div className="product-details-btn-holder">
                <button className="add-to-cart-btn" onClick={onAddToCart}>Add to Cart</button>
            </div>
        </div>
      
    </div>
  );
};

ProductDetails.propTypes = {
  product: React.PropTypes.object.isRequired,
  allUsers: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object,
  onAddToCart: React.PropTypes.func
};

export default ProductDetails;
