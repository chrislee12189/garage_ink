import React from 'react'
import { userPostCardArray } from '../assets'
import styles from '../styles'
import { useState } from 'react'
import axios from 'axios'

//userInput = stores user form inputs
//userPostCard = array of objcets, user can upload to this array

//TODO: pictures are sent to cloudinary and a url is returned, img can be successfully uploaded and retrieved via that url to rended on front end but they do not stay there due to the url not being stored in backend. need url to be stored in backend so imgs arent lost on refresh.



const UserImageCard = () => {
    //State
    const [userInput, setUserInput] = useState({img:"", heading:"", description:""})
    const [userPostCard, setUserPostCard] = useState(userPostCardArray)
    const [ fileInputState, setFileInputState ] = useState("")
    const [ selectedFile, setSelectedFile ] = useState("")
    const [ previewSource, setPreviewSource ] = useState()
    //state that will be used to grab returned img url from cloudinary. will need to be changed to grab from backend as backend should store cloudinary img url
    const [ imageUrl, setImageUrl ] = useState("")



    //Functions
//when user types in fields, record input, store input value
const handleChanges = (event) => {
    setUserInput({...userInput, [event.target.name]: event.target.value})}




//when user uploads an img, they will see a preview of the image they are uploading

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


//when file is submitted, we perform some operations on the file to ensure it has a unique id. Also record heading and description here. 
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


//base64EncodedImage is a string that represents the image. This string is then sent to cloudinary and stored in a folder i have set up called cloudinary_dev_setups
//the response that this function recieves needs to be sent to backend so that backend can store it and i can access it from the front end
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






<form  className='w-[400px]'>
<div className='flex flex-col'> 
    
    {/* here we take user input, have them upload a pic */}
<input type='file' id='fileInput' accept='.jpeg, .jpg, .png' name='img' placeholder='Upload' onChange={handleFileInputChange} value={fileInputState} className={`${styles.input}` }></input>
<input type='text' name='heading' placeholder='Title' value={userInput.heading} onChange={handleChanges} className={`${styles.input}`} ></input>
<input name='description' placeholder='Description' value={userInput.description} onChange={handleChanges} className={`${styles.input}`} ></input>
<button type='submit' onClick={handleSubmitFile}className='bg-[#84bffe] rounded-xl ml-4  mt-6 py-3 px-8 text-white font-poppins hover:scale-110 duration-300 hover:bg-green-400'>Add Your Post</button>
</div>


</form> 

{/* preview source is taken from the previewFile funciton. It is set to empty by default until previewFile updates its state, here the img is rendered to show the preview of the img the user uploaded */}
{previewSource && (<img src={previewSource} alt="chosen picture" className='h-[200px] p-6 m-6' />)}


    
</div>

)}

export default UserImageCard