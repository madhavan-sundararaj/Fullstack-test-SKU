import { combineReducers, compose, createStore } from 'redux';

const reducers = {
  productsList: (
    oldState = {
      products: [],
      error: false,
      isLoading: true,
    },
    action
  ) => {
    const { type } = action;
    switch (type) {
      case 'SET_PRODUCTS':
        return {
          ...oldState,
          products: action.payload,
          error: false,
          isLoading: false,
        };
      case 'SET_ERROR':
        return {
          ...oldState,
          error: true,
          errorMessage: action.payload,
          isLoading: false,
        };
      default:
        return oldState;
    }
  },
};

const slices = combineReducers({ ...reducers });

const composeEnhancers = compose;

const store = createStore(slices, composeEnhancers());

export default store;
