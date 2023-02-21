import React from 'react';
import styles from '../styles';
import { useState } from 'react';



// move this array to constants after testing 
    const initialReviews = [
        {
            id:1,
            description: "Tattoo was perfect!"
        },
        {
            id:2,
            description: "Tattoo was great, different to my original idea, but great nonetheless!"
        }
    ]


const Review = () => {
                                                                                                                                                            // STATE


    //reviews = all reviews
    //review = 1 review
const [reviews, setReviews] = useState(initialReviews)
const [review, setReview] = useState('')
//initially, we dont want to show edit box so useState value is set to false
const [showEditBox, setShowEditBox] = useState(false)
//this state is used to provide id to save edit button. save edit button is outside of the map function so it will get id from here.
const [editReviewId, setEditReviewId] = useState(null)

const [editReviewDesc, setEditReviewDesc] = useState("")





                                                                                                                                                            //FUNCTIONS


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
            {id: prevReviews.length + 1, description: review} 
    ]
    })
    //set state of review box back to empty after review is added
    setReview("")
}

const deleteReview = (id) => {
    //delete the review from review list that has 'x' ID
    //filter will return array according to conditional, here we say, return all items in review array so long as they dont match the selected ID. new array will not contain 'x' id, so, it was deleted
    const newReviews = reviews.filter((review) => review.id !==id)
    setReviews(newReviews)
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
}

                                                                                                                                                            //COMPONENT

return (
    <div className='bg-purple-600 mx-10 px-10' >
        <div className={`${styles.heading2}`}>Reviews</div>
        {reviews.map((review) => {
            return (
                <div key={review.id}>
                    <div className={`${styles.paragraph}`}>{review.description}</div>


                    <button className={`${styles.paragraph} mb-5 mt-2 p-2 mr-5 w-[100px] bg-gray-600`} onClick={() => editReview(review.id)}>Edit</button>

                    {/* onClick={() => deleteReview(review.id) on the delete button calls a function to execute against a specific id */}
                    <button className={`${styles.paragraph} mb-5 mt-2 p-2 bg-gray-600 w-[100px]`} onClick={() => deleteReview(review.id)}>Delete</button>
                </div>
            )
        })}


{/* show edit box is true after edit button is clicked, when state is set to true it displays textarea form and button to save  */}
        {
            showEditBox && (
                <div>
                    <textarea value={editReviewDesc} onChange={handleEditReview} />
                        <div>
                            <button onClick={handleEdit}>Save Edit</button>
                        </div>
                </div>
            )
        }
        



        <form>
            <div>Add Review</div>
            <textarea value={review} onChange={handleOnChange}/>
            <div>
                <button className={`${styles.paragraph} p-2 bg-gray-600 w-[100px]`} onClick={addReview}>Add</button>
            </div>
            </form>
    </div>
    
)
}






export default Review
