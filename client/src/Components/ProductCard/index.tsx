import * as React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

export default function ProductCard({ searchTerm }) {
  const productsList = useSelector((state: any) => state.productsList);

  return (
    <>
      {productsList.error ? (
        <div>{productsList.errorMessage}</div>
      ) : productsList.products ? (
        productsList.products
          .filter((data: any) => {
            if (searchTerm === null) {
              return data;
            } else if (
              data.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            }
          })
          .map((product: any, i) => (
            <div key={i} className="product-card">
              <div className="title">
                {product.title} - {product.id}
              </div>
              <div className="stock">Stock - {product.inventory_quantity}</div>
              <div className="description">
                <div className="price-details">Price - ${product.price}</div>
                <div
                  className="body-html"
                  dangerouslySetInnerHTML={{ __html: product.body_html }}
                />
                <div className="shipping">
                  Requires shipping - {product.requires_shipping ? 'Yes' : 'No'}
                </div>
              </div>
              <div className="image">
                {product.image_src ? (
                  <img
                    src={product.image_src}
                    className="product-image"
                    alt={product.image_alt || 'Product Image'}
                  />
                ) : (
                  <div>Image not available</div>
                )}
              </div>
            </div>
          ))
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
