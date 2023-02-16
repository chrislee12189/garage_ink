import React from 'react';
import styles from './styles';
import {  Gallery, Navbar, HomePage } from './components';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet} from 'react-router-dom';

//<> </> fragmenting



const App = () => (
  <RouterProvider router={router} />
) 



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="gallery" element={<Gallery />} />
      
    </Route>
  )
)

function MainPage() {
  return (
      <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <Outlet />
  </div>
  )
}



export default App
//<p className={`${styles.heading2} p-10`}>Industry Leading <br /> Artists</p>