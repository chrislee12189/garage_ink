import React from "react";
import styles from "../styles";
import { useState } from "react";
import { imgGallery } from '../assets';
import UserImageCard from './UserImageCard';

// move this array to constants after testing
const initialReviews = [
{
    id: 1,
    artistname: "Amity",
    description: "Tattoo was perfect!",
    tips: "Start time could be earlier",
    rating: 10,
},
{
    id: 2,
    artistname: "Briar",
    description:"Tattoo was great, different to my original idea, but great nonetheless!",
    tips: "No tips, experience was great.",
    rating: 10,
},
];

const Review = () => {
  //reviews = all reviews
  //review = 1 review
const [reviews, setReviews] = useState(initialReviews)

const [review, setReview] = useState("")

  //initially, we dont want to show edit box so useState value is set to false
const [showEditBox, setShowEditBox] = useState(false)

  //this state is used to provide id to save edit button. save edit button is outside of the map function so it will get id from here.
const [editReviewId, setEditReviewId] = useState(null)

const [editReviewDesc, setEditReviewDesc] = useState("")

  //set up function to target value provided in the add review text area
const handleOnChange = (e) => {
    setReview(e.target.value)
}

const addReview = (e) => {
    e.preventDefault()
    //add review inside the reviews
    //callback function to give us access to previous reviews so we can calculate new id for new review
    setReviews((prevReviews) => {
    return [
        ...prevReviews,
        { id: prevReviews.length + 1, description: review },
    ]
    })
    //set state of review box back to empty after review is added
    setReview("")
}

const deleteReview = (id) => {
    //delete the review from review list that has 'x' ID
    //filter will return array according to conditional, here we say, return all items in review array so long as they dont match the selected ID. new array will not contain 'x' id, so, it was deleted
    const newReviews = reviews.filter((review) => review.id !== id)
    setReviews(newReviews)
}

  //here we are applying state to open an edit text area when edit button is clicked
const editReview = (id) => {
    //show edit box
    setShowEditBox(true)
    setEditReviewId(id)
    setEditReviewDesc(reviews.find((review) => review.id === id).description)
}

  //here we are taking the value added by user into text area after clicking edit
const handleEditReview = (e) => {
    setEditReviewDesc(e.target.value)
}

  //here we are applying the change to the description
  //find review with id, update description of that id and then update reviews state
const handleEdit = () => {
    const newReviews = [...reviews]
    //here, we compare the id of a review from the review list against the review provided in the edit review state
    //findIndex returns index positon of element found against conditional
    const reviewIndexToEdit = reviews.findIndex((review) => review.id === editReviewId)

    //get reviews array, target description and update the description of said element at that index
    newReviews[reviewIndexToEdit].description = editReviewDesc
    setReviews[newReviews]
    setEditReviewDesc("")
    setShowEditBox(false)
};

return (
    <>
    // sets up headings and tattoo of the day picture
    <section className="relative">
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute -z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        <h1 className={`${styles.heading2} ${styles.paddingX} pb-10`}>Welcome to the Garage Ink Community</h1>
        <p className={`${styles.paragraph} ${styles.paddingX} pb-10`}>Here, users can post their tattoos and leave a review!</p>

        <div className={`${styles.flexCenter} pt-36 w-full`}>
        <div className={`${styles.flexCenter} bg-green-300 relative`}>
            <img className={`md:w-[850px] w-[500px] ${styles.paddingX}`} src={imgGallery[54]} />
        </div>
            <h2 className={` ${styles.paddingX} font-poppins text-white md:text-5xl text-2xl absolute bg-gradient-to-r from-cyan-500 to-blue-500 md:translate-y-[300px] translate-y-[250px] md:-translate-x-[370px] -translate-x-[0px]  rounded-xl p-3`}>Tattoo of the day!</h2>
        </div>
        <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} m-20`}>
        <div className={`${styles.boxWidth}`}>
            <h1 className={`${styles.heading2} relative py-10`}>Garage Ink's Reviews</h1>
        </div>
        </div>

    <div className="flex items-center justify-center p-10 ">
      {/* sets up reviews section */}
        <div className="relative border-[6px] border-sky-600 p-10 bg-[#214d76]">
        <div className={`${styles.paragraph}`}>Have Your Say</div>
        {reviews.map((review) => {
            return (
                <div className=" md:w-[550px] p-20" key={review.id}>
                    <div className="py-5 bg-gray-300 w-auto rounded-xl px-5 mb-3">{review.description}</div>
                    <button className={`${styles.buttonHover} py-2 px-2  w-[150px] bg-dimWhite  rounded-lg mx-2 mb-3 `} onClick={() => editReview(review.id)}>Edit</button>
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
            </div>
        </form>
        </div>
        </div>
        
    </section>
    <div className='text-center text-white font-poppins text-[50px] pb-10'>Customer Uploads</div>
    </>
)}


export default Review
