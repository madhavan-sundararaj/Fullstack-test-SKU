import * as React from 'react';
import './style.css';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="title">
        {product.title} - {product.id}
      </div>
      <div className="stock">
        Stock - {product.variants[0].inventory_quantity}
      </div>
      <div className="description">
        <div className="price-details">
          Price - ${product.variants[0].price}
        </div>
        <div
          className="body-html"
          dangerouslySetInnerHTML={{ __html: product.body_html }}
        />
        <div className="shipping">
          Requires shipping -{' '}
          {product.variants[0].requires_shipping ? 'Yes' : 'No'}
        </div>
      </div>
      <div className="image">
        {product.image ? (
          <img
            src={product.image?.src}
            width="200px"
            height="200px"
            alt={product.image.alt || 'Product Image'}
          />
        ) : (
          <div>Image not available</div>
        )}
      </div>
    </div>
  );
}
