import React from 'react'
import styles from '../styles';
import { hero }  from '../assets';
import { CreateAcc } from '../components';





//This component is responsible for rendering the large hero image on the home page and also the large logo + create account component. When looking at the home page, this component is responsible for rendering the content from underneath the navbar to above the garage ink oevure (home gallery component)
const Hero = () => {
    return (
        // set up hero pic and headings 
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={hero[1]} alt="discount" className="w-[32px] h-[32px]" />


            {/* set up the banner that displays a deal for new users */}
            {/* styles.paragraph targets all text, text inside of their own span overwrites the properties of the styles.paragraph class too add the effect of some words being highlighted */}

            <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">10%</span> Discount On{" "}
            <span className="text-white">AfterCare/Merch</span> For New Users
            </p>
        </div>


        {/* set up heading under banner */}

        <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Garage <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Ink</span>{" "}
            </h1>

            {/* render create acccount component  */}
            <div className="ss:flex hidden md:mr-4 mr-0">
                <CreateAcc />
            </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Studio.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our Studio has been leading the way across all aspects of tattooing for over 15 years. From consultation to design and finally aftercare, the artists at Garage Ink are here to guide you throughout the entire process.
        </p>
        </div>

        {/* set up hero image */}

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={hero[0]} alt="hero" className="w-[100%] h-[100%] relative z-[5] rounded-full" />

          {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute -z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>


        {/* create acc component used again but only for small devices (iphone 12 etc) with this breakpoint, the create acc component drops beneath the hero image*/}
        
        <div className={`ss:hidden ${styles.flexCenter}`}>
        <CreateAcc/>
        </div>
    </section>
    );
};

export default Hero;