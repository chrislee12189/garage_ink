import React from 'react'
import styles from '../styles'
import { pricingPics } from '../assets'
import Footer from './Footer'



const Prices = () => {
return (<>
<div className="flex items-center justify-center md:mt-[500px] mt-[200px] md:mb-[600px] mb-[350px]">
<p className='text-white text-[50px] text-opacity-70 relative z-10'>The Garage Ink Price Guide</p>
<img src={pricingPics[4]} alt="Tattoo machine used for background of header" className='absolute z-1' />
</div>



<h2 className={`${styles.heading2} text-center px-5`}>Garage Ink offers 4 tiers for our pricing ranges.</h2>
<p className={`${styles.paragraph} text-center px-7 py-10`}>The tiers represent the years of experience that an artist at our studio has. All teirs offer premium services and uncomparable quality.</p> 
<div className="max-w-screen-md mx-auto p-10">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-stretch">


    <div className="lg:col-span-2 lg:py-8">
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-4">


    {/* Junior artist card */}

        <li>
            <a href='' >
            <img src={pricingPics[0]} alt="" className="object-cover w-full rounded aspect-square"/>

            <div className="mt-3 bg-slate-500">
                <h3 className={`${styles.paragraph} text-center`}> Junior
                </h3>

                <p className={`${styles.paragraph} text-center`}>$100 /hour</p>
            </div>
            </a>
        </li>

{/* Middle artist card */}

        <li>
            <a href=''>
            <img src={pricingPics[1]} alt="" className="object-cover w-full rounded aspect-square"/>
            <div className="mt-3 bg-slate-500">
                <h3 className={`${styles.paragraph} text-black text-center`}>Middle</h3>

                <p className={`${styles.paragraph} text-black text-center`}>$150 /hour</p>
            </div>
            </a>
        </li>

{/* Professional artist card */}

        <li>
            <a href=''>
            <img src={pricingPics[2]} alt="" className="object-cover w-full rounded aspect-square"/>
            <div className="mt-3 bg-slate-500">
                <h3 className={`${styles.paragraph} text-black text-center`}>Professional</h3>

                <p className={`${styles.paragraph} text-black text-center`}>$200 /hour</p>
            </div>
            </a>
        </li>

{/* Experienced artist card */}

        <li>
            <a href=''>
            <img src={pricingPics[3]} alt="" className="object-cover w-full rounded aspect-square"/>
            <div className="mt-3 bg-slate-500">
                <h3 className={`${styles.paragraph} text-black text-center`}>Experienced</h3>

                <p className={`${styles.paragraph} text-black text-center`}>$250 /hour</p>
            </div>
            </a>
        </li>
        </ul>
    </div>
    </div>
    <div><p className={`${styles.paragraph} text-center px-7 py-10`}>During the consultation phase of your tattoo journey, the artist you are in contact with will inform you of what tier they are currently in.</p></div>
</div>
<div className='md:px-[250px] px-3 w-full mt-[30rem]'>
    <Footer />
</div>

</>
)
}

export default Prices


