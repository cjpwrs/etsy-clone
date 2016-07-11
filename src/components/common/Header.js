/**
 * Created by cjpowers on 6/26/16.
 */
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = (userLoggedIn, user) => {
  //console.log('Is the user logged in: ',userLoggedIn.userLoggedIn);
  //console.log('This is the user', user);

  // <Link className="user-not-logged-in nav-icon first-icon" to="user"><button>Sell</button></Link>
  // <Link className="user-not-logged-in nav-icon first-icon" to="user"><button>Sign In</button></Link>
  // <a className="user-logged-in nav-icon first-icon" href=""><span className="glyphicon glyphicon-home"></span></a>
  // <a className="user-logged-in nav-icon" href=""><span className="glyphicon glyphicon-heart"></span></a>
  // <a className="user-logged-in nav-icon" href=""><img className="nav-img" src="https://www.etsy.com/images/avatars/default_shop_icon_75x75.png" alt=""/></a>
  // <a className="user-logged-in nav-icon" href=""><img className="nav-img circle" src="https://www.etsy.com/images/avatars/default_avatar_75x75.png" alt=""/></a>
  // <a className="nav-icon" href=""><span className="glyphicon glyphicon-shopping-cart"></span></a>
  var headerOptions;
  if(userLoggedIn.userLoggedIn){
    headerOptions = (
      <div className="header-icon-holder">
        <Link className="first-icon" to="/"><div className="header-individual-option-holder"><div className="header-top"><span className="glyphicon glyphicon-home"></span></div><span className="header-option-large">Home</span></div></Link>
        <Link className="nav-icon" to="products"><div className="header-individual-option-holder"><div className="header-top"><span className="glyphicon glyphicon-heart"></span></div><span className="header-option-large">Favorites</span></div></Link>
        <Link className="nav-icon" to="products"><div className="header-individual-option-holder"><div className="header-top"><img className="nav-img" src="https://www.etsy.com/images/avatars/default_shop_icon_75x75.png" alt=""/></div><span className="header-option-large">Your shop</span></div></Link>
        <Link className="nav-icon" to="user/register"><div className="header-individual-option-holder"><div className="header-top"><img className="nav-img circle" src="https://www.etsy.com/images/avatars/default_avatar_75x75.png" alt=""/></div><span className="header-option-large">You</span></div></Link>
        <Link className="nav-icon" to="cart"><div className="header-individual-option-holder"><div className="header-top"><span className="glyphicon glyphicon-shopping-cart"></span></div><span className="header-option-large">Cart</span></div></Link>
      </div>
    )
  } else {
    headerOptions = (
      <div className="header-icon-holder">
        <Link className="user-not-logged-in nav-icon first-icon" to="user/register"><button className="header-register-button">Register</button></Link>
        <Link className="user-not-logged-in nav-icon first-icon" to="user/signin"><button className="header-signin-button">Sign In</button></Link>
        <Link className="nav-icon" to="cart"><span className="glyphicon glyphicon-shopping-cart"></span></Link>
      </div>
    )
  }
  return (
    <nav>
      <div className="index-link-div"><IndexLink className="header-logo" to="/">F<span className="header-logo-large">etsy</span></IndexLink></div>
        {headerOptions}
    </nav>
  );
};

export default Header;
