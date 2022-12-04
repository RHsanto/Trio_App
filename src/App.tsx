import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { serviceApi } from './features/api/apiSlice';
import Home from './components/Home';
import './App.css';

function App() {
  return (
 <Provider store={store}>
    <ApiProvider api={serviceApi}>
    <div className="App">
     <Home/>
    </div>
    </ApiProvider>
 </Provider>
  );
}

export default App;
