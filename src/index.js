import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles.js';
import Layout from './Layout';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:"about",
        element:<About/>
      }
    ]
  },{
    path:'new',
    element:<h2>Dummy New Element.</h2>
  }
])

root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

