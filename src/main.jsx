import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Login from './components/Login/Login'
import Layout from './components/Layout/Layout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('fakedb.json')
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: '/contacts',
        element: <Contacts></Contacts>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
