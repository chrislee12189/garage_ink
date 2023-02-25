import React from 'react';
import { useState, useEffect } from 'react';

import styles from '../styles';
import { UserImageCard, Review, Footer } from './index.js';
import { imgGallery } from '../assets';





const Community = () => {
//sets initial tattoo of the day to img gallery index 0 (first tattoo in imgGallery array)
const [tattooOfDayIndex, setTattooOfDayIndex] = useState(0);

//set up state to iterate through imgGallery and change the tattoo of the day once every 12 hours


useEffect(() => {
    const interval = setInterval(() => {
        setTattooOfDayIndex((prevIndex) => {
            if (prevIndex === imgGallery.length - 1) {
                return 0;} 
                    else {
                        return prevIndex + 1;}
            });
        }, 
        50000)
    return () => clearInterval(interval)
    },
    []);
    





return (
    <>
    <div className='relative'>
    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute -z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        <h1 className={`${styles.heading2} ${styles.paddingX} flex justify-center mt-[50px]`}>Welcome to the Garage Ink Community</h1>
        <p className={`${styles.paragraph} ${styles.paddingX} flex justify-center mt-[25px]`}>Here, users can post their tattoos and leave a review!</p>

        <div className={`${styles.flexCenter} pt-36 w-full`}>
        <div className={`${styles.flexCenter} relative`}>
            <img className={`md:w-[850px] w-[500px] ${styles.paddingX}`} src={imgGallery[tattooOfDayIndex]}/>
        </div>
            <h2 className={` ${styles.paddingX} font-poppins text-white md:text-5xl text-2xl absolute bg-gradient-to-r from-cyan-500 to-blue-500 md:translate-y-[300px] translate-y-[275px] md:-translate-x-[370px] -translate-x-[0px]  rounded-xl p-3`}>Tattoo of the week!</h2>
            
        </div>
        <p className={`${styles.paragraph} ${styles.paddingX} flex justify-center md:mt-[25px] mt-[170px]`}>The tattoo of the week is chosen from a very large collection of ours. It may be selected for its fond memories or for its sheer display of artistic talent.</p>
        <div className='text-center text-white font-poppins text-[50px] pb-10 relative mt-60'>Customer Uploads</div>
            <div className='flex items-center justify-center relative'><UserImageCard /></div>
        </div>



    <div className='bg-slate-900 drop-shadow-2xl flex items-center justify-center m-5 rounded-xl p-5 mt-[500px] md:text-center'>
        <h2 className='text-white font-poppins md:text-[24px] text-[20px] md:px-40 px-3 '>If you've enjoyed our community page, feel free to follow us on Facebook or Instagram for more regular content. The links can be found in the footer.</h2>
    </div>


    <div className='md:px-[250px] px-3 w-full'>
    <Footer />
    </div></>
)
}

export default Community