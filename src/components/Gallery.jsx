import React from 'react';
import styles from '../styles';
import { imgSlides } from '../assets';





const Gallery = () => (
    <>
    {/* set up headings */}
    <h1 id='top' className="flex items-center justify-center font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]">The Complete Garage Ink Collection</h1>
    <h2 className='flex items-center justify-center text-dimWhite font-semibold xs:text-[25px] text-[20px] italic py-6'>Express your story through ink.</h2>
    <div className='grid grid-flow-row-dense sm:grid-cols-3 grid-cols-2 grid-rows-3 gap-x-5 py-[10px] px-[10px] sm:ml-20 ml-1'>

        {/* map through massive array of images and render them. the names of the artist is also included in the array, so map those too underneath the picture */}

        {imgSlides.map((item, index) => {
            return(
                <div key={index} name={item.id}>
                    <img src={item.url} className='sm:max-w-[80%] max-w-[100%] mb-[12px]'/>
                    <div className={`${styles.paragraph} mt-0 mb-20 ss:text-12[px]`}>{item.name}</div>
                </div>
            )
        })}
        
    </div>

    {/* set up footer message. */}
    
    <div className='flex italic items-center justify-center font-poppins text-dimWhite font-[36px] mb-5'>Garage Ink Studios 2023</div>
</>
    
)


export default Gallery
//className='grid grid-flow-dense md:grid-cols-3 grid-cols-2 bg-green-500 align-content justify-center px-5 py-5 gap-[5px] max-h-[100%] max-w-[100%]'