/**
 * Created by cjpowers on 6/28/16.
 */
import React from 'react';
import {Link} from 'react-router';

class CategorySelector extends React.Component{
  render() {
    return (
      <div className="category-holder">
          <div className="link-holder">
            <Link className="category-link" to="shop">
              <div className="category-box">
                  <div className="category-img">
                      <img src="https://img0.etsystatic.com/074/1/8347968/il_570xN.804390426_cxtu.jpg" alt=""/>
                  </div>
                   <div className="category-pieces">
                    <img className="category-icon category-small" src="https://www.etsy.com/assets/dist/images/homepage/vesta/mobile_categories_home-living.20160609191624.png" alt=""/>
                    <p className="category-text">HOME & LIVING</p>
                    <div className="category-arrow category-small"><span className="glyphicon glyphicon-chevron-right"></span></div>
                   </div>
              </div>
            </Link>
          </div>
        <Link to="shop">
          <div className="category-box">
              <div className="category-img">
                  <img src="https://img1.etsystatic.com/018/1/5216059/il_570xN.551836211_j4au.jpg" alt=""/>
              </div>
              <div className="category-pieces">
                <img className="category-icon category-small" src="https://www.etsy.com/assets/dist/images/homepage/vesta/mobile_categories_jewelry.20160609191624.png" alt=""/>
                <p className="category-text">JEWELRY</p>
                <div className="category-arrow category-small"><span className="glyphicon glyphicon-chevron-right"></span></div>
              </div>
          </div>
        </Link>
        <Link to="shop">
          <div className="category-box">
              <div className="category-img">
                  <img src="https://img1.etsystatic.com/138/1/5157644/il_570xN.890956475_iptj.jpg" alt=""/>
              </div>
              <div className="category-pieces">
                <img className="category-icon category-small" src="https://www.etsy.com/assets/dist/images/homepage/vesta/mobile_categories_clothing.20160609191624.png" alt=""/>
                <p className="category-text">CLOTHING</p>
                <div className="category-arrow category-small"><span className="glyphicon glyphicon-chevron-right"></span></div>
              </div>
          </div>
        </Link>
        <Link to="shop">
          <div className="category-box">
              <div className="category-img">
                  <img src="https://img0.etsystatic.com/029/0/8763581/il_570xN.616938208_7z7y.jpg" alt=""/>
              </div>
              <div className="category-pieces">
                <img className="category-icon category-small" src="https://www.etsy.com/assets/dist/images/homepage/vesta/mobile_categories_crafts.20160609191624.png" alt=""/>
                <p className="category-text">CRAFT SUPPLIES & TOOLS</p>
                <div className="category-arrow category-small"><span className="glyphicon glyphicon-chevron-right"></span></div>
              </div>
          </div>
        </Link>
        <Link to="shop">
          <div className="category-box">
              <div className="category-img">
                  <img src="https://img0.etsystatic.com/140/0/7284261/il_570xN.916774078_3tp1.jpg" alt=""/>
              </div>
              <div className="category-pieces">
                <img className="category-icon category-small" src="https://www.etsy.com/assets/dist/images/homepage/vesta/mobile_categories_weddings.20160609191624.png" alt=""/>
                <p className="category-text">WEDDINGS</p>
                <div className="category-arrow category-small"><span className="glyphicon glyphicon-chevron-right"></span></div>
              </div>
          </div>
        </Link>
        <Link to="shop">
          <div className="category-box">
              <div className="category-img">
                  <img src="https://img0.etsystatic.com/072/0/11200606/il_570xN.821774166_1y4r.jpg" alt=""/>
              </div>
              <div className="category-pieces">
                <img className="category-icon category-small" src="https://www.etsy.com/assets/dist/images/homepage/vesta/mobile_categories_toys-games.20160609191624.png" alt=""/>
                <p className="category-text">TOYS & GAMES</p>
                <div className="category-arrow category-small"><span className="glyphicon glyphicon-chevron-right"></span></div>
              </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default CategorySelector;

