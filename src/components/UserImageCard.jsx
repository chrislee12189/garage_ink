import React from 'react'
import { emTattoos, giorgiaTattoos, karleeTattoos, teneileTattoos, juannitaTattoos } from '../assets'
import styles from '../styles'
import { useState } from 'react'
import axios from 'axios'

//userInput = stores user form inputs
//userPostCard = array of objcets, user can upload to this array

//TODO: pictures are sent to cloudinary and a url is returned, img can be successfully uploaded and retrieved via that url to rended on front end but they do not stay there due to the url not being stored in backend. need url to be stored in backend so imgs arent lost on refresh.


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


const UserImageCard = () => {
//state

    const [userInput, setUserInput] = useState({img:"", heading:"", description:""})
    const [userPostCard, setUserPostCard] = useState(userPostCardArray)




//when user types in fields, record input, store input value
const handleChanges = (event) => {
    setUserInput({...userInput, [event.target.name]: event.target.value})}



//when user clicks add post, handle submit fires to take the values provided in the input fields and add them to the userPostCardArray, it then renders a new

// handle submit commented out as it was combined with the handleSubmitFile function. will move to delete when im sure it hasnt created more issues


    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     const lastID = userPostCard[userPostCard.length -1].id
    //     const newUserPost = {
    //         // target last id in array and add 1
    //         id: lastID + 1,
    //         heading: userInput.heading,
    //         description: userInput.description}

    //         setUserPostCard([...userPostCard, newUserPost])}


const [ fileInputState, setFileInputState ] = useState("")
const [ selectedFile, setSelectedFile ] = useState("")
const [ previewSource, setPreviewSource ] = useState()
const [ imageUrl, setImageUrl ] = useState("")

const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    setSelectedFile(file)
    setFileInputState(e.target.value)
    previewFile(file)
}



const previewFile = (file) => {
    // built in javascript api to read file url back to user after they select an img to upload
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setPreviewSource(reader.result)
    }
}


const handleSubmitFile = (e) => {
    e.preventDefault();


    if (!selectedFile) return;
    const reader = new FileReader();
    console.log("Submitting file")
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
        uploadImage(reader.result)
    }    
    const lastID = userPostCard[userPostCard.length -1].id
    const newUserPost = {
        // target last id in array and add 1
        id: lastID + 1,
        heading: userInput.heading,
        description: userInput.description}

        setUserPostCard([...userPostCard, newUserPost])
    
}

const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage)
    try {
        const data = new FormData()
        data.append("file", base64EncodedImage)
        data.append("upload_preset", "cloudinary_dev_steups")
        data.append("cloud_name","")
        const response = await axios.post('https://api.cloudinary.com/v1_1/ds8gbmpln/image/upload', data)

        //give the response.data.url to backend and backend savees to db.
        setImageUrl(response.data.url)
        console.log(response.data)
        setFileInputState('');
        setPreviewSource('');
    } catch (error) {
        console.error(error)
    }
}



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




{/* USER UPLOAD SECTION */}




{/* onSubmit={handleSubmit} */}

<form  className='w-[400px]'>
<div className='flex flex-col'> 
    
    {/* here we take user input, have them upload a pic */}
<input type='file' id='fileInput' accept='.jpeg, .jpg, .png' name='img' placeholder='Upload' onChange={handleFileInputChange} value={fileInputState} className={`${styles.input}` }></input>
<input type='text' name='heading' placeholder='Title' value={userInput.heading} onChange={handleChanges} className={`${styles.input}`} ></input>
<input name='description' placeholder='Description' value={userInput.description} onChange={handleChanges} className={`${styles.input}`} ></input>
<button type='submit' onClick={handleSubmitFile}className='bg-[#84bffe] rounded-xl ml-4  mt-6 py-3 px-8 text-white font-poppins hover:scale-110 duration-300'>Add Your Post</button>
</div>


</form> 

{previewSource && (<img src={previewSource} alt="chosen picture" className='h-[200px] p-6 m-6' />)}

{/* <img src={imageUrl} alt='user uploaded pic'/> */}









    {/* here we take description */}
    
</div>

)}

export default UserImageCard