import axios from 'axios';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './Components/Header';
import ProductCard from './Components/ProductCard';
import ToolBar from './Components/ToolBar';

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get('/api/products/fetch')
      .then((response) => {
        dispatch({
          type: 'SET_PRODUCTS',
          payload: response.data.returnProduct,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'SET_ERROR',
          payload: error.response.data.message,
        });
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
            <div className="sub-filter">Filter</div>
          </div>
        </div>
        <ProductCard searchTerm={searchTerm} />
      </div>
    </main>
  );
}
