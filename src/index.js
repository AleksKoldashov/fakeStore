import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{ Provider} from 'react-redux'
import store from './redux/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './router/ErrorPage';
import Cataloge from './router/page/Cataloge';
import Electronics from './router/page/sidebar/Electronics';
import Jewelery from './router/page/sidebar/Jewelery';
import Mens from './router/page/sidebar/Mens';
import Womans from './router/page/sidebar/Womans';
import Market from './router/page/Market';
import Contacts from './router/page/Contakts';
import Basket from './router/page/Basket';
import Description from './components/UI/description';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
 {
  path: '/market',
  element: <Market/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: '/market/cataloge',
      element: <Cataloge/>
    },
    {
      path: '/market/cataloge/:productId',
      element: <Description/>
    },
    {
      path: '/market/electronics',
      element: <Electronics/>
    },
    {
      path: '/market/jewelery',
      element: <Jewelery/>
    },
    {
      path: '/market/mens-clothing',
      element: <Mens/>
    },
    {
      path: '/market/womens-clothing',
      element: <Womans/>
    },
    {
      path: '/market/basket',
      element: <Basket/>
    },
]
  },
  {
  path: '/contacts',
  element: <Contacts/>,
  errorElement: <ErrorPage/>,
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     < RouterProvider router={router}/>
    </Provider>

  </React.StrictMode>
);


