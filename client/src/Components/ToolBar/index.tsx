import * as React from 'react';
import './style.css';

export default function ToolBar() {
  return (
    <div className="toolbar-wrapper">
      <div className="toolbar">
        <div>ACCOUNT</div>
        <div>ADDRESS</div>
        <div>PAYMENT METHOD</div>
        <div>INVENTORY</div>
        <div>REWARDS</div>
      </div>
    </div>
  );
}
