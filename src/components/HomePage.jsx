import React from 'react';
import Footer from './Footer';
import HomeGallery from './HomeGallery';
import Hero from './Hero';
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
                <Footer/>
                </div>
            </div>
            </> 
        )
        }

export default HomePage