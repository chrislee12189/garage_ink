import React from 'react';
// import Blog from './Blog'
import Review from './Review';
import UserImageCard from './UserImageCard';



const Community = () => {
return (
    <div>
    <div className='min-h-screen'><Review /></div>
    <div className='bg-green-600 flex items-center justify-center'><UserImageCard /></div>
    </div>
)
}

export default Community