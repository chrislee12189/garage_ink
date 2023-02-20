import React from 'react';
import  Artists from './Artists';
import Blog from './Blog';
import Consultations from './Consultations';
import Community from './Community';
import Footer from './Footer';
import HomeGallery from './HomeGallery';
import Hero from './Hero';
import Store from './Store';
import Location  from './Location';
import styles from '../styles';


function HomePage () {
        return (
        <>
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
                </div>
            </div>
        
        
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                <div>
                    <HomeGallery />
                </div>
        
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                <div>
                    <Location />
                </div>
                </div>
            </div>
        
                
                <Blog />
                <Consultations />
                <Community />
                <Store />
                <Footer/>
                </div>
            </div>
            </> 
        )
        }

export default HomePage