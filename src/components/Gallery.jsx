import React from 'react';
import styles from '../styles';
import { imgSlides } from '../assets';



const Gallery = () => (
    <>
    <h1 className="flex items-center justify-center font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]">The Complete Garage Ink Collection</h1>
    <h2 className='flex items-center justify-center text-dimWhite font-semibold xs:text-[25px] text-[20px] italic pt-6'>Express your story through ink.</h2>
    <div className='grid grid-flow-dense md:grid-cols-3 grid-cols-2 bg-green-500 align-content justify-center px-5 py-5 gap-[5px] max-h-[100%] max-w-[100%]'>
        {imgSlides.map((item, index) => {
            return(
                <div key={index}>
                    <img src={item.url}/>
                </div>
            )
        })}
    </div>
</>
    
)


export default Gallery
//<section className={`${styles.paragraph} mt-10 mx-5`}>Embrace your story. Tell it with ink.</section>