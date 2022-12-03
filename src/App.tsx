import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import { store } from './app/store';
import Service from './components/service/Service';
import { serviceApi } from './features/api/apiSlice';

function App() {
  return (
 <Provider store={store}>
    <ApiProvider api={serviceApi}>
    <div className="App">
     <Service/>
    </div>
    </ApiProvider>
 </Provider>
  );
}

export default App;
