import React from 'react';
import styles from './styles';
import { Navbar } from './components';

const App = () => (
<div className="bg-primary overflow-hidden w-full">
  <div className={`${styles.paddingX} ${styles.paddingY}`}>
    <div className="max-w-auto">
      <Navbar />
    </div>
  </div>
</div>

) 


export default App
