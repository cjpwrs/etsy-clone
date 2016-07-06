/**
 * Created by cjpowers on 6/27/16.
 */
import React from 'react';
import {Link} from 'react-router';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <div className="search-bar-container"><input className="search-input" type="text" placeholder="What are you shopping for?"/><button className="search-button">Search</button></div>
      </div>
    )
  }
}

export default SearchBar;
