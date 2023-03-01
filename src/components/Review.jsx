import React, { useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import styles from "../styles";
import Footer from './Footer';
import axios from "axios";
import { initialReviews } from "../constants";




const Review = () => {
  //reviews = all reviews
  //review = 1 review
const [reviews, setReviews] = useState(initialReviews)

const [review, setReview] = useState("")

  //initially, we dont want to show edit box so useState value is set to false
const [showEditBox, setShowEditBox] = useState(false)

  //this state is used to provide id to save edit button. save edit button is outside of the map function (which renders reviews to front end) so it will get id from here.
const [editReviewId, setEditReviewId] = useState(null)

const [editReviewDesc, setEditReviewDesc] = useState("")


const [errorMessage, setErrorMessage] = useState(null)

  //set up function to target value provided in the add review text area
const handleOnChange = (e) => {
    setReview(e.target.value)
}





const addReview = (e) => {
    e.preventDefault()
    //add review inside the reviews
    //callback function to give us access to previous reviews so we can calculate new id for new review
    if(!review) {
        setErrorMessage("Review must contain a message.")
    } else {
    setErrorMessage(null)
    axios.post('/community/reviews', review)
    .then((res) => res.data,(error) => {
        setErrorMessage("There was an error with your booking: " + error.response.data.error)
    })
    .then((json) => console.log(json))
    }}





// The delete method is functional but i am not a fan of its purpose. later down the track it will likely be revised to work differently

    const deleteReview = (id) => {
        axios.delete(`/community/reviews/${id}`)
        .then(res => {
        const newReviews = reviews.filter((review) => review.id !== id)
        setReviews(newReviews)
        })
        //delete the review from review list that has 'x' ID
        //filter will return array according to conditional, here we say, return all items in review array so long as they dont match the selected ID. new array will not contain 'x' id, so, it was deleted

    }







  //here we are applying state to open an edit text area when edit button is clicked
    const editReview = (id) => {
    //show edit box
    setShowEditBox(true)
    setEditReviewId(id)
    setEditReviewDesc(reviews.find((review) => review.id === id).description)}
  //here we are taking the value added by user into text area after clicking edit
    const handleEditReview = (e) => {
    setEditReviewDesc(e.target.value)
}


const handleEdit = () => {
    // Check whether user provides updated description. if not, return error message
    if (!editReviewDesc) { 
    const newReviews = [...reviews];
    const reviewIndexToEdit = reviews.findIndex((review) => review.id === editReviewId);
    newReviews[reviewIndexToEdit].description = editReviewDesc;
    setErrorMessage("Failed to provide updated description.")}
    //if user provides updated description, sent put request to backend to have it updated, include review id in header, description value in body
    else {
        setErrorMessage(null)
    axios.put(`/community/reviews/${editReviewId}`, 
    {
        description: editReviewDesc,
    }).then(() => {
        setReviews(newReviews);
        setEditReviewDesc("");
        setShowEditBox(false);
        console.log(res.data)
    }).catch((error) => {
        console.log(error);
    });
    }
};















return (
 //sets up headings and tattoo of the day picture    
    <>
    <section className="relative">
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute -z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        <h1 className={`${styles.heading2} ${styles.paddingX} flex justify-center mt-[50px]`}>Welcome to the Garage Ink Community</h1>
        <p className={`${styles.paragraph} ${styles.paddingX} md:text-[30px] text-[16px] italic flex justify-center mt-[30px]`}>Here, users can leave a review to help others understand how their experience was!</p>
<p className="text-white md:text-[30px] text-[16px] font-poppins md:leading-[65px] leading-10 p-5 m-10 text-center">We base ourselves on love and creativity. <br />
We welcome you to experience the amazing energy that is art in all its forms client and artist alike. <br />
We are a family and have great appreciation for each other and our wonderful clients. <br />
</p>










<div className={`${styles.flexCenter} pt-36 w-full`}>

    <div className="flex items-center justify-center p-10">
      {/* sets up reviews section */}
        <div className="relative border-[6px] border-sky-600 p-10 bg-[#214d76]">
        <div className={`${styles.paragraph} font-bold underline`}>How was your experience?</div>
        {reviews.map((review) => {
            return (
                <div className=" md:w-[550px] p-5" key={review.id}>
                    <div className="py-6 bg-gray-300 w-auto rounded-xl px-5 mb-3">{review.description}</div>
                    <button className={`${styles.buttonHover} py-2 px-2  w-[150px] bg-dimWhite  rounded-lg mx-2 mb-3  `} onClick={() => editReview(review.id)}>Edit</button>
                    <button className={`${styles.buttonHover} py-2 px-2 hover:bg-red-500 w-[150px] bg-dimWhite  rounded-lg mx-2 mb-3`} onClick={() => deleteReview(review.id)}>Delete</button>
                </div>)
        })}
        {showEditBox && (
            <div className=' md:w-[550px]'>
                <input value={editReviewDesc} onChange={handleEditReview} className='md:w-[550px] w-full p-6 mb-4 rounded-xl outline-none border-[6px] border-orange-500 animate-[wiggle_0.4s_ease-in-out] '/>
                    <div>
                    <button onClick={handleEdit} className={`${styles.buttonHover} py-2 px-2  w-[150px] bg-dimWhite  rounded-lg mx-2 mb-3 hover:bg-green-400`}>Save Edit</button>
                    </div>
            </div>)}
        <form className='md:w-[550px]'>
            <div className={`${styles.paragraph}`}>Add Review</div>
            <input value={review} onChange={handleOnChange} className='md:w-[550px] w-full p-5 rounded-xl mb-6 bg-gray-300 ' placeholder="Enter your review here!" />
            <div>
                <button className={`${styles.paragraph} p-2 bg-gray-600 w-[100px] rounded-xl hover:bg-green-400`} onClick={addReview}>Add</button>
                <div>{errorMessage}</div>
            </div>
        </form>
        </div>
        </div>
        </div>
        <h1 className={`${styles.heading2} text-center mb-[90px] mt-[90px] md:px-10 px-28`}>The Garage Ink Instagram is one of the best ways to keep up to date.</h1>
        <p className='text-white text-center px-10 mb-[60px] leading-10 md:text-[25px] text-[16px]'>
            
            We believe in creating a world class experience for both client and artist. The studio is an open and safe environment full of people who are incredibly passionate about all things art.<br />

Our resident artists are of the highest quality in Australia and we also provide the opportunity for clients to get tattooed from the world’s best travelling artists. <br />

With multi awards within our industry world wide. Countless local and international press, over 1 million following across social media Garage Ink is humbled to say we love what we do and are so grateful to you!
</p>


        <div className="flex justify-center relative">
            <div className='md:w-[45%] w-[90%]'>
                <InstagramEmbed url='https://www.instagram.com/reel/CjBgNltgzHe'/>
            </div>
        </div>

        
    </section>        
    <div className="relative md:mt-36 mt-24 md:px-36 px-6">
            <Footer />
        </div>
    </>
)}


export default Review
