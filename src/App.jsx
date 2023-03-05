import React from 'react';
import styles from './styles';
import {  Artists, Community, Consultations, Gallery, Navbar, HomePage, Store, Login, Review, TattooStyles, Prices, Register } from './components';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider, Outlet} from 'react-router-dom';

//<> </> fragmenting



const App = () => (
  <RouterProvider router={router} />
) 



const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="showcase/artists" element={<Artists />} />
      <Route path="showcase/gallery" element={<Gallery />} />
      <Route path="bookings" element={<Consultations />} />
      <Route path="/bookings/pricing" element={<Prices />} />
      <Route path="community" element={<Community />} />
      <Route path="community/reviews" element={<Review />} />
      <Route path="store" element={<Store />} />
      <Route path="login" element={<Login />} />
      <Route path="login/register" element={<Register />} />
      <Route path="styles" element={<TattooStyles />} />
    </Route>
  )
)


//main page set us so that all pages render navbar.
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

