import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import ContactUs from './components/ContactUs.jsx'
import About from './components/About.jsx'
import UserId from './components/UserId.jsx'

// const router = createBrowserRouter([
//     {
//       path:'',
//       element: <Layout/>,
//       children:[
//         {
//           path: '',
//           element: <Home/>
//         },
//         {
//           path:'contactus',
//           element: <ContactUs/>
//         },
//         {
//           path:'about',
//           element: <About/>
//         }
//       ]
//     }

//   ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="about" element={<About />} />
      <Route path="user/:userId" element={<UserId />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
