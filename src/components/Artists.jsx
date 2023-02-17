import React from 'react';
import styles from '../styles';
import {  blackAndGreyProfilePic, blackWorkProfilePic, colourProfilePic } from '../assets'


//map through list of artists in style list (b&g or neotrad etc)
//this component is not dry. it needs to map over multiple different arrays for specific use cases and so the sections end up repeated but using different headings and search criterai

const Artists = () => {
return (
<>
 {/* section for black and grey realism artist */}
   <div className={`sm:${styles.heading2} text-[24px] flex justify-center items-center w-full`}>The Garage Ink Artists</div>
   <div className={`sm:${styles.paragraph} sm:text-[26px] text-[16px] flex items-center justify-center sm:mt-8 mt-4 sm:mb-3 mb-6`}>Black and Grey Realism</div>
      <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
         {blackAndGreyProfilePic.map((item, index) => {return (
            <div key={index} name={item.name}><img src={item.url} className='w-[165px] h-[150px] sm:w-[265px] sm:h-[250px]'></img>
            <div className={`${styles.paragraph} mt-3 ss:text-12[px] hover:cursor-pointer`}>{item.name}</div>
            </div>
         )})}
      </div>



{/* this is the section for artists who do black work */}
<div className={`sm:${styles.paragraph} sm:text-[26px] text-[16px] flex items-center justify-center sm:mt-8 mt-4 sm:mb-3 mb-6`}>Black Work</div>
      <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
         {blackWorkProfilePic.map((item, index) => {return (
            <div key={index} name={item.name}><img src={item.url} className='w-[165px] h-[150px] sm:w-[265px] sm:h-[250px]'></img>
            <div className={`${styles.paragraph} mt-3 ss:text-12[px] hover:cursor-pointer`}>{item.name}</div>
            </div>
         )})}
      </div>



 {/* this is the section for artists that do colour realism or colour styles */}

<div className={`sm:${styles.paragraph} sm:text-[26px] text-[16px] flex items-center justify-center sm:mt-8 mt-4 sm:mb-3 mb-6`}>Colour Artists</div>
      <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
         {colourProfilePic.map((item, index) => {return (
            <div key={index} name={item.name}><img src={item.url} className='w-[165px] h-[150px] sm:w-[265px] sm:h-[250px]'></img>
            <div className={`${styles.paragraph} mt-3 ss:text-12[px] hover:cursor-pointer`}>{item.name}</div>
            </div>
         )})}
      </div>




</>)}
            


export default Artists



