/**
 * Created by cjpowers on 6/27/16.
 */
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const SubHeader = () => {
  return (
    <div className="sub-header">
      <Link to="/products" activeClassName="active">Clothing & Accessories</Link>
      <Link to="/products" activeClassName="active">Jewelry</Link>
      <Link to="/products" activeClassName="active">Craft Supplies & Tools</Link>
      <Link to="/products" activeClassName="active">Weddings</Link>
      <Link to="/products" activeClassName="active">Entertainment</Link>
      <Link to="/products" activeClassName="active">Home & Living</Link>
      <Link to="/products" activeClassName="active">Kids & Baby</Link>
      <Link to="/products" activeClassName="active">Vintage</Link>
    </div>
  );
};

export default SubHeader;
