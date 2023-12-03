import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import Order from './components/Order'
import User from './components/User'
import Login from './components/Login'
import Register from './components/Register'
import AuthProviders from './providers/AuthProviders'
import PrivetRoute from './routes/PrivetRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'order',
        element: <PrivetRoute><Order></Order></PrivetRoute>
      },
      {
        path: 'user',
        element: <PrivetRoute><User></User></PrivetRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
