import * as React from 'react';
import './style.css';

export default function ToolBar() {
  return (
    <div className="toolbar-wrapper">
      <div className="desktop-visible toolbar">
        <div>ACCOUNT</div>
        <div>ADDRESS</div>
        <div>PAYMENT METHOD</div>
        <div>INVENTORY</div>
        <div>REWARDS</div>
      </div>
      <div className="mobile-visible toolbar">
        <div>
          <img
            className="header-icon"
            src="https://oof-project.s3-ap-southeast-2.amazonaws.com/Account.png"
          />
        </div>
        <div>
          <img
            src="https://oof-project.s3-ap-southeast-2.amazonaws.com/address.png"
            className="header-icon"
          />
        </div>
        <div>
          <img
            src="https://oof-project.s3-ap-southeast-2.amazonaws.com/payment.png"
            className="header-icon"
          />
        </div>
        <div>
          <img
            src="https://oof-project.s3-ap-southeast-2.amazonaws.com/inventory.png"
            className="header-icon"
          />
        </div>
        <div>
          <img
            src="https://oof-project.s3-ap-southeast-2.amazonaws.com/rewards.png"
            className="header-icon"
          />
        </div>
      </div>
    </div>
  );
}
