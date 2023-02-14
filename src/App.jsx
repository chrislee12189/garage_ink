import React from 'react';
import styles from './styles';
import { Navbar, Hero, CreateAcc } from './components';


//test to see if imported images works === <img src={teneileTattoos[6]}/>
import { teneileTattoos }  from './assets';
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


  </div>

) 


export default App
//<p className={`${styles.heading2} p-10`}>Industry Leading <br /> Artists</p>