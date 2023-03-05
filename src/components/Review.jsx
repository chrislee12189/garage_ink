import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles";
import { InstagramEmbed } from "react-social-media-embed";
import Footer from './Footer'


function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("")
    const [newReview, setNewReview] = useState({
    description: "",
    tips: "",
    rating: "",
});




    // GET METHOD

    useEffect(() => {
        async function fetchReviews() {
        const response = await axios.get("/community/reviews");
        setReviews(response.data);
    }   
    fetchReviews();
    }, []);


        // DELETE METHOD
    async function deleteReview(id) {
        try {
            await axios.delete(`/community/reviews/${id}`);
            setReviews(reviews.filter((review) => review._id !== id));
            } catch (error) {
            console.error(error);
            }
        }


        // POST METHOD
        async function addReview(e) {
            e.preventDefault();
            if (!newReview.description || !newReview.rating) {
                setError("All fields are required");
                return;
            }
            try {
            const response = await axios.post("/community/reviews", newReview);
            setReviews([...reviews, response.data]);
            setSuccessMessage("Your review has been added, refresh the page to see it!")
            setNewReview({
                description: "",
                rating: "",
                tips:""
            });
            setError("");
            } catch (error) {
                console.log(error)
                setError("There was an error with your review: " + error.response.data.error)        
            }
        }




return (
    <>
    {/* containers for top of page: headings, text and reviews list is all sorted out in this section */}
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

    {/*  begin setting up review functionality/style */}
    <div className="relative border-[6px] border-sky-600 md:w-1/2 w-full rounded-3xl  m-auto p-10 bg-[#1f4d77]">
        <h2 className={`${styles.heading2} font-bold underline pb-6`}>Reviews</h2>
        <div className={`${styles.paragraph} font-bold underline pb-10`}>How was your experience?</div>
        <div className=" flex flex-col items-center bg-opacity-50 gap-5 ">
        {reviews.map((review) => {
            return (
                <div className="w-full p-5 bg-slate-500 rounded-3xl"  key={review.id}>
                    <div className={`${styles.reviewFields}`}><p className={styles.reviewFieldText}>Review Description:</p>{review.description}</div>
                    <div className={`${styles.reviewFields}`}><p className={styles.reviewFieldText}>Rating (1 - 10):</p>{review.rating}</div>
                    <div className={`${styles.reviewFields}`}><p className={styles.reviewFieldText}>Tips (Feedback):</p>{review.tips}</div>
                    <button className={`${styles.buttonHover} py-2 px-2 hover:bg-red-500 w-[150px] bg-dimWhite  rounded-lg mx-2 mb-3`} onClick={() => deleteReview(review._id)}>Delete</button>
                </div>)
        })}
        </div>
    </div>




    {/*  form user fills out to add review */}
    
    <div className="bg-sky-600 relative  md:w-2/3 w-full m-auto rounded-3xl">
        <form onSubmit={addReview} className="flex flex-col md:w-1/2 md:px-2 px-5 w-full m-auto ">
            <label className="font-poppins mt-10 md:p-5 p-3 md:text-[32px] text-[26px] text-white mb-2 bg-slate-800 rounded-xl">New Review:</label>
            <input name="description" value={newReview.description} onChange={(e) => setNewReview({ ...newReview, description: e.target.value })} className={`${styles.userFormFields}`} placeholder="Enter description!"/>
            <input name="rating" value={newReview.rating} onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })} className={`${styles.userFormFields}`} placeholder="Enter rating!"/>
            <input name="tips" value={newReview.tips} onChange={(e) => setNewReview({ ...newReview, tips: e.target.value })} className={`${styles.userFormFields} w-full`}  placeholder="Enter tips!"/>
            {error && <div className='bg-red-500 m-6 rounded-xl p-5'>{error}</div>}
            {successMessage && <div className="bg-green-500 m-6 rounded-xl p-5">{successMessage}</div>}
            <button type="submit" className="bg-green-400 text-white rounded-lg px-4 py- mt-4 mb-10 p-5 hover:bg-green-500" onClick={addReview}>Submit</button>
        </form>
        </div>

        {/* end form  */}


















        {/* section after reviews, used to rended instagram embed and some text */}
        <div>
        <h1 className={`${styles.heading2}  text-center mb-[90px] mt-[90px] px-16`}>The Garage Ink Instagram is one of the best ways to keep up to date.</h1>
        <p className='text-white text-center px-10 mb-[60px] leading-10 md:text-[25px] text-[12px]'>
            
            We believe in creating a world class experience for both client and artist. The studio is an open and safe environment full of people who are incredibly passionate about all things art.<br />

Our resident artists are of the highest quality in Australia and we also provide the opportunity for clients to get tattooed from the world’s best travelling artists. <br />

With multi awards within our industry world wide. Countless local and international press, over 1 million following across social media Garage Ink is humbled to say we love what we do and are so grateful to you!
</p>


        <div className="flex justify-center relative">
            <div className='md:w-[45%] w-[90%]'>
                <InstagramEmbed url='https://www.instagram.com/reel/CjBgNltgzHe'/>
            </div>
        </div>

        
            
    <div className="relative md:mt-36 mt-24 md:px-36 px-6">
            <Footer />
        </div>
        </div>
        </section>
    </>
);
}

export default Reviews;




