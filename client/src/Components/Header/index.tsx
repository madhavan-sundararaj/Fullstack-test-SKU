import * as React from 'react';
import './style.css';

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-left-container">
          <div>Logo</div>
          <div>Home</div>
          <div>Shop</div>
          <div>Track</div>
          <div>FAQ</div>
          <div>Refer a Friend</div>
        </div>
        <div className="header-right-container">
          <div>
            <img
              src="https://oof-project.s3-ap-southeast-2.amazonaws.com/iconfinder_search_172546.png"
              width="20px"
              height="20px"
            />
          </div>
          <div>
            <img
              src="https://oof-project.s3-ap-southeast-2.amazonaws.com/heart_3.jpg"
              width="20px"
              height="20px"
            />
          </div>
          <div>
            <img
              src="https://oof-project.s3-ap-southeast-2.amazonaws.com/icon_3.png"
              width="20px"
              height="20px"
            />
          </div>
          <div>
            <img
              src="https://oof-project.s3-ap-southeast-2.amazonaws.com/user_2.png"
              width="20px"
              height="20px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
