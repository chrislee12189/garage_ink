import React from 'react';
import { formIcons, artistList} from '../assets'
import { useState } from 'react';
import  Footer  from './Footer';

import styles from '../styles';



const Consultations = () => {
const [menuOpen, setOpen] = useState(false);
const [selectArtist, setSelectArtist] = useState('');

const artistSelector = (artistList) => {
    setSelectArtist(artistList);
    setOpen(false)
};

return (
    <>
<section className='min-h-screen flex items-center justify-center'>

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute -z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

<div className='bg-[#2b79ee] flex sm:rounded-3xl shadow-lg max-w-7xl p-5 relative'>
    <div className='sm:w-1/2 px-8 m-10'>
        <h2 className={`${styles.heading2}`}>Appointment Registration</h2> 
        <p className={`${styles.paragraph} mt-3`}>Fill the following fields to the best of your ability. Your artist will contact you for further discussion.</p>

                {/* form fields */}
        <form className='flex flex-col'>
            <div className='items-center'>
            <input className='p-2 mt-8 rounded-xl border w-full' type='text' name='customer name' placeholder='Customer Name' />
            <label className='font-poppins text-[14px] text-dimWhite bg-grey-500'>Enter your full name.</label>


            <input className='p-2 mt-8 rounded-xl border w-full' type='text' name='email' placeholder='Email' />
            <label className='font-poppins text-[14px] text-dimWhite bg-grey-500'>Enter your email address. Ensure spelling is correct.</label>



            <input className='p-2 mt-8 rounded-xl border w-full' type='phone' name='phone number' placeholder='Mobile Number' />
            <label className='font-poppins text-[14px] text-dimWhite bg-grey-500'>Enter your mobile number.</label>


            <input className='p-2 mt-8 rounded-xl border w-full' type='text' name='description' placeholder='Description' />
            <label className='font-poppins text-[14px] text-dimWhite bg-grey-500'>Enter a brief description of the Style, Location and Size. Explain your ideas as best as possible.</label>


            <input className='p-2 mt-8 rounded-xl border w-full' type='number' min='100' name='deposit' placeholder='Deposit' />
            <label className='font-poppins text-[14px] text-dimWhite bg-grey-500'>Minimum deposit amount is $100.</label>
            
            </div>

<div className='relative'>
    <input className='p-2 mt-8 rounded-xl border w-full' type='text' name='artist name' placeholder='Artist Name' value={selectArtist} onClick={() => setOpen(true)} readOnly/>
        
        {menuOpen && (
            <div className='absolute top-10 left-0 w-full bg-white border rounded-xl shadow-lg'>
        {artistList.map((artist, index) => (
                <div key={index} className='px-4 py-2 hover:bg-gray-200 cursor-pointer' onClick={() => artistSelector(artist)}> {artist} </div>))}
            </div>)}
        <label className='font-poppins text-[14px] text-dimWhite bg-grey-500'>
            Select the Artist you want from the drop down menu.</label>
            
        </div>
            </form>
            <button className='bg-[#84bffe] rounded-xl py-1 px-8 mt-10 text-white font-poppins hover:scale-110 duration-300 '>Register</button>
            </div>
            <div className='w-1/2 sm:block hidden'>
                <img src={formIcons[1]} alt='Artist: Cinnamona' className='absolute rounded-2xl  w-[50%] top-1/2 right-3 -translate-y-1/2 sm:block hidden mt-1'/>
            </div>
            
            </div>
</section>
<div className='sm:m-10 m-5'>
<Footer />
</div>



</>


    );
    }
    

                
                


export default Consultations

