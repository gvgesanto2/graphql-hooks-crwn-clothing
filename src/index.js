import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { default as App } from './App.container';
import ApolloClientProvider from './graphql/apollo.client';

ReactDOM.render(
  <ApolloClientProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloClientProvider>,
  document.getElementById('root')
);
