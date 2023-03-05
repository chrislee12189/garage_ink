import React from 'react';
import { formIcons, artistList} from '../assets'
import { useState } from 'react';
import  Footer  from './Footer';
import styles from '../styles';
import axios from 'axios';

//TODO: CHECK COMMUNICATION WITH BACKEND

const Consultations = () => {
    //STATE
const [menuOpen, setOpen] = useState(false);
const [selectArtist, setSelectArtist] = useState('');
const [errorMessage, setErrorMessage] = useState(null)
const [newBooking, setNewBooking] = useState({
    first_name:"",
    last_name: "",
    email:  "",
    dob:  "",
    phone_number:  "",
    description:  "",
    deposit:  "",
    artist_name: selectArtist
})




    //FUNCTIONS
const artistSelector = (artistList) => {
    setSelectArtist(artistList);
    setOpen(false)
};



const handleSubmit = (event) => {
    event.preventDefault();
    if(!newBooking.first_name){
        setErrorMessage("You must provide a first name")
    } else if(newBooking.dob < 18) {
        setErrorMessage("You must be 18 or older to register a consultation.")
    } else if(newBooking.phone_number) {
        setErrorMessage("You must provide a email address")
    } else {
            axios.post('/bookings', newBooking)
            .then((res) => res.data,(error) => {
                setErrorMessage("There was an error with your booking: " + error.response.data.error)
            })
    .then((json) => (console.log(json))); 
    setNewBooking({
                first_name:"",
                last_name: "",
                email:  "",
                dob:  "",
                phone_number:  "",
                description:  "",
                deposit:  "",
                artist_name: selectArtist
            })}}



const handleChange = (event) => {
    console.log(event.target.name)
    setNewBooking({
        ...newBooking,
        [event.target.name]: event.target.value
        
    })
}





    //COMPONENT


return (
    <>
<section className='min-h-screen flex items-center justify-center'>

        {/* gradient set up here */}
        
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute -z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />


    {/* set up container */}

<div className='bg-gradient-to-t from-[#2b79ee] to-transparent flex sm:rounded-3xl shadow-lg max-w-7xl p-5 relative'>

    {/* left side of container */}

    <div className='md:w-1/2 px-8 m-10'>
        <h2 className={`${styles.heading2}`}>Consultations</h2> 
        <p className={`${styles.paragraph} mt-3`}>Fill the following fields to the best of your ability. Your artist will contact you for further discussion.</p>

                {/* form fields */}

        <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='items-center'>
            <input className='p-2 mt-8 rounded-xl border w-full' type='text' name='first_name' placeholder='First Name' value={newBooking.first_name} onChange={handleChange} />
            <label className='font-poppins text-[14px] text-dimWhite bg-grey-500'>Enter your first name.</label>

            <input className='p-2 mt-8 rounded-xl border w-full' type='text' name='last_name' placeholder='Last Name' value={newBooking.last_name} onChange={handleChange}/>
            <label className='font-poppins text-[14px] text-dimWhite bg-grey-500'>Enter your last name.</label>


            <input className='p-2 mt-8 rounded-xl border w-full' type='text' name='email' placeholder='Email' value={newBooking.email} onChange={handleChange} />
            <label className='font-poppins text-[14px] text-dimWhite bg-grey-500'>Enter your email address. Ensure spelling is correct.</label>

            <input className='p-2 mt-8 rounded-xl border w-full' type='date' name='dob' placeholder='Date of Birth' value={newBooking.dob} onChange={handleChange}/>
            <label className='font-poppins text-[14px] text-dimWhite bg-grey-500'>Enter your date of birth.</label>


            <input className='p-2 mt-8 rounded-xl border w-full' type='number' name='phone_number' placeholder='Mobile Number' value={newBooking.phone_number} onChange={handleChange} />
            <label className='font-poppins text-[14px] text-dimWhite bg-grey-500'>Enter your mobile number.</label>


            <input className='p-2 mt-8 rounded-xl border w-full' type='text' name='description' placeholder='Description' value={newBooking.description} onChange={handleChange} />
            <label className='font-poppins text-[14px] text-dimWhite bg-grey-500'>Enter a brief description of the Style, Location and Size. Explain your ideas as best as possible.</label>


            <input className='p-2 mt-8 rounded-xl border w-full' type='number' min='100' name='deposit' placeholder='Deposit' value={newBooking.deposit} onChange={handleChange}/>
            <label className='font-poppins text-[14px] text-dimWhite bg-grey-500'>Minimum deposit amount is $100.</label>
            
            </div>

{/* last form field here, this adds a drop down menu to select form list + 'x' button to exit list */}

<div className='relative'>
    <input className=' bg-grey-800 p-2 mt-8 rounded-xl border w-full' type='text' name='artist_name' placeholder='Artist Name' value={selectArtist} onClick={() => setOpen(true)} readOnly/>
        
        {menuOpen && (
            <div className='absolute top-10 left-0 w-full bg-white border rounded-xl shadow-lg'>
                <button className='absolute bg-gray-800 rounded-full w-[25px] top-3 right-5 text-white hover:text-white focus:outline-double' onClick={() => setOpen(false)}>X</button>
        {artistList.map((artist, index) => (
                <div key={index} className='px-4 py-2 hover:bg-gray-200 cursor-pointer' onClick={() => artistSelector(artist)}> {artist} </div>))}
            </div>)}
        <label className='font-poppins text-[14px] text-dimWhite bg-grey-500'>
            Select the Artist you want from the drop down menu.</label>
            
        </div>

        {/* sets up space for error message to display */}

        <div>{errorMessage}</div>
            </form>

            {/* sets up register button bottom left */}

            <button className='bg-gray-800 rounded-xl py-1 px-8 mt-10 text-white font-poppins hover:scale-110 duration-300' type='submit' onClick={handleSubmit}>Register</button>
            </div>

            {/* right side of container, hidden on small and medium devices */}

            <div className='w-1/2 sm:block hidden'>
                <img src={formIcons[1]} alt='Artist: Cinnamona' className='absolute rounded-2xl w-[50%] top-1/2 right-3 -translate-y-1/2 md:block hidden mt-1'/>
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

