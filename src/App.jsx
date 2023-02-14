import React from 'react';
import styles from './styles';
import { Artists, Blog, Consultations, Community, Footer, Gallery, Navbar, Hero, Store } from './components';

//<> </> fragmenting

const App = () => (

  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>


    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>


    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Artists />
        <Gallery />
        <Consultations />
        <Community />
        <Store />
        <Blog />
        <Footer/>
      </div>
    </div>

  </div>

) 


export default App
//<p className={`${styles.heading2} p-10`}>Industry Leading <br /> Artists</p>