import React from 'react';
import './App.css';
import api from './axios';
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';

// ✅ loader function
const getRecipes = async () => {
  const res = await api.get("/recipe");
  return res.data;
};

// ✅ router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainNavigation />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: getRecipes
      },
      {
    path:"/myRecipe",
    element:<Home />
  },
  {
    path:"/favRecipe",
    element:<Home />
  }
    ]
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
