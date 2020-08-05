import * as React from 'react';
import './style.css';

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="desktop-visible header-left-container">
          <div>Logo</div>
          <div>Home</div>
          <div>Shop</div>
          <div>Track</div>
          <div>FAQ</div>
          <div>Refer a Friend</div>
        </div>
        <div className="mobile-visible header-left-container">
          <div>
            <img
              src="https://oof-project.s3-ap-southeast-2.amazonaws.com/home.jpg"
              className="header-icon"
            />
          </div>
          <div>
            <img
              src="https://oof-project.s3-ap-southeast-2.amazonaws.com/shop.png"
              className="header-icon"
            />
          </div>
          <div>
            <img
              src="https://oof-project.s3-ap-southeast-2.amazonaws.com/track-order.png"
              className="header-icon"
            />
          </div>
          <div>
            <img
              src="https://oof-project.s3-ap-southeast-2.amazonaws.com/faq.png"
              className="header-icon"
            />
          </div>
          <div>
            <img
              src="https://oof-project.s3-ap-southeast-2.amazonaws.com/refr.png"
              className="header-icon"
            />
          </div>
        </div>
        <div className="header-right-container">
          <div>
            <img
              src="https://oof-project.s3-ap-southeast-2.amazonaws.com/iconfinder_search_172546.png"
              className="header-icon"
            />
          </div>
          <div>
            <img
              src="https://oof-project.s3-ap-southeast-2.amazonaws.com/heart_3.jpg"
              className="header-icon"
            />
          </div>
          <div>
            <img
              src="https://oof-project.s3-ap-southeast-2.amazonaws.com/icon_3.png"
              className="header-icon"
            />
          </div>
          <div>
            <img
              src="https://oof-project.s3-ap-southeast-2.amazonaws.com/user_2.png"
              className="header-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
