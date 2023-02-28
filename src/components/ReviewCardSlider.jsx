import React from "react";


//TODO: POTENTIALLY SCRAP COMPONENT, NOT USED ANYWHERE, DOUBLE CHECK

//TODO: review card slider will map through a hardcoded array of reviews. this is a display piece and wont have user interaction/functionality
//TODO: user review will be a div at the bottom of page for users to add, edit, save, delete reviews they post

const initialReviewsSlider = [
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
{
    id: 3,
    artistname: "Em",
    description: "The best experience ever!",
    tips: "No tips, experience was great.",
    rating: 10,
},
{
    id: 4,
    artistname: "Karlee",
    description: "Loved it!",
    tips: "No tips, experience was great.",
    rating: 10,
},
{
    id: 5,
    artistname: "Tayler",
    description: "Tattoo was great.",
    tips: "No tips, experience was great.",
    rating: 10,
},
];

const ReviewCardSlider = () => {
    return (
    <div className="flex flex-col md:m-6 m-2 p-2 bg-sky-400 bg-transparent-50 rounded-lg">
        <h1 className="flex py-5 mx-5 my-5 font-bold text-2xl text-gray-800 font-poppins">Garage Ink's Reviews</h1>
        <div className="flex flex-col p-6">
            {initialReviewsSlider.map((review) => (
            <div
            key={review.id}
            className="flex flex-col mb-5 max-w-xs overflow-hidden rounded-lg drop-shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Artist: {review.artistname}</h2>
                <p className="text-gray-700 text-base">{review.description}</p>
                <p className="text-gray-700 text-base">Rating: {review.rating}/10</p>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
};


export default ReviewCardSlider;

