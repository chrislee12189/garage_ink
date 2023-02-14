import React from 'react'
import styles from '../styles';
import { hero }  from '../assets';
import { CreateAcc } from '../components';

//layer text over image
//className='bg-white absolute font-poppins font-bold text-[30px] italic mt-[235px] mr-[175px]

//<p className={`${styles.paragraph} max-w-[470px] mt-5`}>Garage Ink Studios have been leading the industry across every aspect of tattooing for over 15 years.</p>


const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                <img src={hero[1]} alt='user icon' className='w-[32px] h-[32px]' />
                <p className={`${styles.paragraph} ml-2`}>
                <span className='text-white'>10%</span> Discount On Aftercare/Merch For {" "}
                <span className='text-white'>New</span> Users
                </p>
            </div>


            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>THE 
                <br className='sm:block hidden'/>{" "}
                <span className='text-gradient'>GARAGE INK </span>{" "}STUDIO
                </h1>
                <div className='ss:flex hidden md:mr-4 mr-0'>
                    <CreateAcc />
                </div>
            </div>

            <h1 className={`${styles.paragraph} max-w-[470px] mt-5`}>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our Studio has been leading the way across all aspects of tattooing for over 15 years. From consultation to design and finally aftercare, the artists at Garage Ink are here to guide you throughout the entire process.</p>
            </h1>
        </div>


        {/* applying gradient behind the hero image */}
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={hero[0]} alt='hero image' className='w-[100%] h-[100%] relative z-[5] rounded-full'/>
            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
            <div className='absolute z-[1] w-[80%] h-[80%] bottom-50 white__gradient rounded-full' />
            <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
            <div className={`{ss:hidden ${styles.flexCenter}`}>
        </div>
        {/* gradient end */}


        <div className={`ss:hidden ${styles.flexCenter}`}>
            <CreateAcc />
        </div>
    </div>
</section>
)


export default Hero