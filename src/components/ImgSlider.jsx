import React from 'react';
import { useState } from 'react';
import { imgSlides } from '../assets';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';



const ImgSlider = (oeuvere) => {

const [currentIndex, setCurrentIndex] = useState(0)


const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? imgSlides.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex)
}


const nextSlide = () => {
    const isLast = currentIndex === imgSlides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
}


return (
        //sets the container for the images
    <div className='max-w-[1400px] h-[780px] m-auto py-16 px-4 relative group'>
    <div className='w-full h-full rounded-2xl bg-center bg-cover duration-300' style={{backgroundImage:`url(${imgSlides[currentIndex].url})`}} />



        {/*left arrow on image slider */}
        <div className = 'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white bg-black/20 cursor-pointer'>
            <BsChevronCompactLeft size = {30} onClick={prevSlide}/>
        </div>
        {/*right arrow on image slider */}
        <div className = 'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white bg-black/20 cursor-pointer'>
            <BsChevronCompactRight size = {30} onClick={nextSlide}/>
        </div>
    </div>
)
}

export default ImgSlider