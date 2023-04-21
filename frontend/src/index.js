import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, legacy_createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'store/index';

import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios';
import { handleApiException } from 'exception/ApiException';

const queryClient = new QueryClient({
  defaultOptions: {
    onError: handleApiException,
  },
});

//axios 설정
axios.defaults.baseURL = process.env.REACT_APP_API_ROOT;
//axios.defaults.validateStatus = status => status >= 200 && status < 500;

const enhancer =
  process.env.NODE_ENV === 'production' ? compose(applyMiddleware()) : composeWithDevTools(applyMiddleware(logger));

const store = legacy_createStore(rootReducer, enhancer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>,
);

reportWebVitals();
