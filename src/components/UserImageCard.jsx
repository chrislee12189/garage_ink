import React from 'react'
import { emTattoos, giorgiaTattoos, karleeTattoos, teneileTattoos, juannitaTattoos } from '../assets'
import { useState } from 'react'

//userInput = stores user form inputs
//userPostCard = array of objcets, user can upload to this array

//TODO: need to figure out a way around the no local image upload issue faced when submitting a picture from local machine. 


const userPostCardArray = [
    {
        id:1,
        img: emTattoos[0],
        heading:'Pet Portrait',
        description: 'I was tattooed by Emily. She tattooed my cat on my leg and i absolutely love the tattoo! It looks exaclty like my fur baby!'
    },
    {
        id:2,
        img: emTattoos[1],
        heading: 'Pet Portrait',
        description: 'My pooch has always had unique eyes. This tattoo helped emphasize those eyes.'
    },
    {
        id:3,
        img: emTattoos[5],
        heading: "Shark Week",
        description: 'I like sharks.'
    }, 
    {
        id:4,
        img: giorgiaTattoos[4],
        heading: "Cover Up",
        description: 'I had some really old tattoos i needed to cover up. First session down on this awesome tiger!'
    },
    {
        id:5,
        img: giorgiaTattoos[3],
        heading: "Spiders!!!!",
        description: 'I have adored arachnids for years now. They have a very creepy but interesting appeal!'
    },
    {
        id:6,
        img: karleeTattoos[2],
        heading: "Bear Sleeve :)",
        description: 'Karlee did a phenomenal job on my tattoo! Excited to get more! '
    },
    {
        id:7,
        img: teneileTattoos[2],
        heading: "Absolutely perfect!",
        description: 'Teneile is unmatched at creating soft, beautiful pieces of art.'
    },
    {
        id:8,
        img: teneileTattoos[6],
        heading: "The best studio in QLD",
        description: 'The ribs hurt a lot but it was worth every minute of the pain. This piece is timeless.'
    },
    {
        id:9,
        img: juannitaTattoos[0],
        heading: "Juannita is a genuine master of the arts!",
        description: 'This is by far the greatest tattoo i have. Juannita absolutely blew my expectations away!'
    },

]

const inputFieldStyle ={
    input: ' md:w-[500px] w-[250px] p-2 mt-4 rounded-xl border-rounded bg-gray-100'
}

const UserImageCard = () => {
//state

    const [userInput, setUserInput] = useState({img:"", heading:"", description:""})
    const [userPostCard, setUserPostCard] = useState(userPostCardArray)
//when user types in fields, record input, store input value
    const handleChanges = (event) => {
        setUserInput({...userInput, [event.target.name]: event.target.value})}
//when user clicks add post, handle submit fires to take the values provided in the input fields and add them to the userPostCardArray, it then renders a new
    const handleSubmit = (event) => {
        event.preventDefault()
        const lastID = userPostCard[userPostCard.length -1].id
        const newUserPost = {
            // target last id in array and add 1
            id: lastID + 1,
            img: userInput.img,
            heading: userInput.heading,
            description: userInput.description}

            setUserPostCard([...userPostCard, newUserPost])}


//component
return (
    <div className=" max-w-5xl md:m-10 m-20 grid md:grid-cols-3 grid-cols-1 gap-6">
    {userPostCard.map((image) => {
        return (
        <div key={image.id} className="bg-[#214d76] border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
            <img src={image.img} className='rounded-2xl p-2' />
            <div className="p-4 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-dimWhite font-poppins">{image.heading}</h5>
            <p className="mb-3 font-normal text-dimWhite font-poppins dark:text-gray-400">{image.description}</p>
            </div>
        </div>
        )
})}
<form onSubmit={handleSubmit} className='w-[400px]'>
<div className='flex flex-col'>
    
    {/* here we take user input, have them upload a pic */}
    <input type='file' accept='.jpeg, .jpg, .png' name='img' placeholder='Upload' value={userInput.img} onChange={handleChanges}  className={`${inputFieldStyle.input}` }></input>
</div>
<div>
    {/* here we take the heading from the user */}
    
    <input type='text' name='heading' placeholder='Title' value={userInput.heading} onChange={handleChanges} className={`${inputFieldStyle.input}`} ></input>
</div>
<div>
    {/* here we take description */}
    
    <input name='description' placeholder='Description' value={userInput.description} onChange={handleChanges} className={`${inputFieldStyle.input}`} ></input>
</div>
<button type='submit' className='bg-[#84bffe] rounded-xl ml-4  mt-6 py-3 px-8 text-white font-poppins hover:scale-110 duration-300'>Add Your Post</button>
</form>
</div>)}

export default UserImageCard