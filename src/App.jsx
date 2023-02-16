import React from 'react';
import styles from './styles';
import {  Artists, Community, Consultations, Gallery, Navbar, HomePage, Store, Login} from './components';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet} from 'react-router-dom';

//<> </> fragmenting



const App = () => (
  <RouterProvider router={router} />
) 



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="artists" element={<Artists />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="consultations" element={<Consultations />} />
      <Route path="community" element={<Community />} />
      <Route path="store" element={<Store />} />
      <Route path="login" element={<Login />} />
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