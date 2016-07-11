/**
 * Created by cjpowers on 6/27/16.
 */
import React from 'react';
import {Link} from 'react-router';
import SearchBar from '../common/SearchBar';

class Banner extends React.Component {
  render() {
    return (
      <div className="banner-container">
        <div className="banner-phrase"><h2>Whoever you are, find whatever you're into</h2></div>
        <div className="banner-search"><SearchBar /></div>
      </div>
    );
  }
}

export default Banner;
