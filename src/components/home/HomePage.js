/**
 * Created by cjpowers on 6/25/16.
 */
import React from 'react';
import {Link} from 'react-router';
import Banner from './Banner';
import SearchBar from '../common/SearchBar';
import CategorySelector from '../common/CategorySelector';

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage-main-body">
        <Banner />
        <div className="home-page-search-bar-big"><SearchBar /></div>
        <h2 className="home-page-headers">Shop by category</h2>
        <CategorySelector />
      </div>
    );
  }
}

export default HomePage;
