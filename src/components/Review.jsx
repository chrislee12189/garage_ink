import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({
        artistname: '',
        description: '',
        tips: '',
        rating: '',
    });
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchReviews() {
            const response = await axios.get('/community/reviews');
            setReviews(response.data);
        }

        fetchReviews();
    }, []);

    async function deleteReview(id) {
        try {
          await axios.delete(`/community/reviews/${id}`);
          setReviews(reviews.filter(review => review._id !== id));
        } catch (error) {
          console.error(error);
        }
      }



    async function addReview(e) {
        e.preventDefault();

        if (!newReview.description || !newReview.rating) {
            setError('Description and rating fields are required');
            return;
        }

        try {
            const response = await axios.post('/community/reviews', {
                artistname: newReview.artistname,
                description: newReview.description,
                tips: newReview.tips,
                rating: newReview.rating,
            });

            setReviews([...reviews, response.data]);
            setNewReview({
                artistname: '',
                description: '',
                tips: '',
                rating: '',
            });
            setError('');
        
        } catch (error) {
            console.error(error);
        }
    }








    return (
        <div className="relative border-[6px] border-sky-600 w-[500px] m-auto p-10 bg-[#214d76]">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>
            <ul className="border border-gray-300 rounded-lg">
                {reviews.map((review) => (
                    <li key={review.id} className="px-4 py-2 border-b border-gray-300">
                        {review.description}
                        <button onClick={() => deleteReview(review._id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {error && (
                <div className="text-red-500 mt-2">
                    {error}
                </div>
            )}
            <form onSubmit={addReview} className="mt-4">
                <label className="block mb-2 font-bold">New Review:</label>
                <input
                    name="description"
                    value={newReview.description}
                    onChange={(e) => setNewReview({ ...newReview, description: e.target.value })}
                    className="bg-pink-800 p-2 mt-8 rounded-xl border "
                    placeholder="Enter description!"
                />
                <input
                    name="artistname"
                    value={newReview.artistname}
                    onChange={(e) => setNewReview({ ...newReview, artistname: e.target.value })}
                    className="bg-pink-800 p-2 mt-8 rounded-xl border "
                    placeholder="Enter artist name!"
                />
                <input
                    name="rating"
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                    className="bg-pink-800 p-2 mt-8 rounded-xl border "
                    placeholder="Enter rating!"
                />
                <input
                    name="tips"
                    value={newReview.tips}
                    onChange={(e) => setNewReview({ ...newReview, tips: e.target.value })}
                    className="bg-pink-800 p-2 mt-8 rounded-xl border w-full"
                    placeholder="Enter tips!"
                />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-600" onClick={addReview}>Submit</button>
      </form>
    </div>
  );
}

export default Reviews;