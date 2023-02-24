import React from 'react';
// import Blog from './Blog'
import Review from './Review';
import UserImageCard from './UserImageCard';
import Footer from './Footer';


const Community = () => {
return (
    <>
    <div>
    <div className='min-h-screen'><Review /></div>
    <div className='flex items-center justify-center'><UserImageCard /></div>
    </div>



    <div className='bg-slate-900 drop-shadow-2xl flex items-center justify-center m-5 rounded-xl p-5 mt-[500px] md:text-center'>
        <h2 className='text-white font-poppins md:text-[24px] text-[20px] md:px-40 px-3 '>If you've enjoyed our community page, feel free to follow us on Facebook or Instagram for more regular content. The links can be found in the footer.</h2>
    </div>


    <div className='md:px-[250px] px-3 w-full'>
    <Footer />
    </div></>
)
}

export default Community