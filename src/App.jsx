import React from 'react';
import styles from './styles';
import { Navbar } from './components';
import { teneileTattoos } from './assets';

const App = () => (
<div className="bg-primary overflow-hidden w-full">
  <div className={`${styles.paddingX} ${styles.paddingY}`}>
    <div className="max-w-auto">
      <Navbar />
      <img src={teneileTattoos[6]}/>
    </div>
  </div>
</div>

) 


export default App
