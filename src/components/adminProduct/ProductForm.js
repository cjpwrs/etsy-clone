/**
 * Created by cjpowers on 6/26/16.
 */
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ProductForm = ({ product, user, className, productCategories, who_made_it, what_is_it, when_was_it_made, onSave, onDelete, onChange, loading, errors}) => {
  return (
    <div className="product-form">
      <div className="product-form-options-holder">
        <form>
          <h3>Listing Details</h3>

          <h4>Image URL<span className="asterisk">*</span></h4>
          <TextInput
            type="file" images="images" accept="image/*"/>

          <TextInput
            type="text"
            name="image_url"
            label="image"
            value={product.image_url}
            onChange={onChange}
            error={errors.image_url}
            className="form-standards"/>

          <h4>Title<span className="asterisk">*</span></h4>
            <TextInput
              type="text"
              name="title"
              label="Title"
              value={product.title}
              onChange={onChange}
              error={errors.title}
              className="form-standards"/>

          <h4>About this listing<span className="asterisk">*</span></h4>
            <SelectInput
              name="who_made_it"
              value={product.who_made_it}
              defaultOption="Who made it?"
              options={who_made_it}
              onChange={onChange} error={errors.category}
              className="form-standards"/>
            <SelectInput
              name="what_is_it"
              value={product.what_is_it}
              defaultOption="What is it?"
              options={what_is_it}
              onChange={onChange} error={errors.category}
              className="form-standards"/>
            <SelectInput
              name="when_was_it_made"
              value={product.when_was_it_made}
              defaultOption="When was it made?"
              options={when_was_it_made}
              onChange={onChange} error={errors.category}
              className="form-standards"/>

          <h4>Category<span className="asterisk">*</span></h4>
            <SelectInput
              name="category"
              label="Category"
              value={product.category}
              defaultOption="Select Category"
              options={productCategories}
              onChange={onChange} error={errors.category}
              className="form-standards"/>

          <h4>Price<span className="asterisk">*</span></h4>
            <TextInput
            type="number"
            name="price"
            label="Price"
            value={product.price}
            onChange={onChange}
            error={errors.price}
            className="form-half-width"/>

          <h4>Quantity<span className="asterisk">*</span></h4>
            <TextInput
              type="number"
              name="quantity"
              label="Quantity"
              value={product.quantity}
              onChange={onChange}
              error={errors.quantity}
              className="form-half-width"/>
          <div className="form-btn-holder">
            <input
              type="submit"
              disabled={loading}
              value={loading ? 'Canceling' : 'Cancel' }
              className="btn btn-primary"
              onClick={onDelete}
              className="form-cancel-btn"/>

            <input
              type="submit"
              disabled={loading}
              value={loading ? 'Saving...' : 'Save and continue' }
              className="btn btn-primary"
              onClick={onSave}
              className="form-save-btn"/>
          </div>


        </form>
      </div>
    </div>
  );
};

ProductForm.propTypes = {
  product: React.PropTypes.object.isRequired,
  allUsers: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default ProductForm;
