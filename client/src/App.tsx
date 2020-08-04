import axios from 'axios';
import * as React from 'react';
import './App.css';
import Header from './Components/Header';
import ProductCard from './Components/ProductCard';
import ToolBar from './Components/ToolBar';

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    axios.get('/api/products/fetch').then((response) => {
      setProducts(response.data.response);
    });
  }, []);

  function searchProduct(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <main className="main">
      <Header />
      <ToolBar />
      <div className="container">
        <div className="search-toolbar">
          <input
            type="text"
            placeholder="Search the order"
            className="search-input"
            onInput={searchProduct}
          />
          <div className="filter">
            <div>
              <img
                src="https://oof-project.s3-ap-southeast-2.amazonaws.com/filter_icon.svg"
                width="20px"
                height="20px"
              />
            </div>
            <div style={{ marginLeft: '15px' }}>Filter</div>
          </div>
        </div>
        {products ? (
          products
            .filter((data: any) => {
              if (searchTerm === null) {
                return data;
              } else if (
                data.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return data;
              }
            })
            .map((product: any, i) => <ProductCard product={product} key={i} />)
        ) : (
          <div> Loading </div>
        )}
      </div>
    </main>
  );
}
