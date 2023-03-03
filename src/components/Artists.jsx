import React from 'react';
import styles from '../styles';
import {  blackAndGreyProfilePic, blackWorkProfilePic, colourProfilePic, lineWorkProfilePic } from '../assets';
import Footer from './Footer';



//this component maps over an imported array of images such as blackAndGreyProfilePic and returns those images as well as some other values like names and years of experience. the images are also wrapped in <a> tags so that each  image will lead to the artist's instagram. the functionality of each section is the same but it maps over different arrays. could not figure out how to make that a bit DRYer.






const Artists = () => {
return (

<div className='bg-gradient-to-t from-[#000102] via-[#2b79ee10] to-[#000102]'>



 {/* section for black and grey realism artist */}

   <div className={`sm:${styles.heading2} text-[24px] flex justify-center items-center w-full  px-10`}>The Garage Ink Artists</div>
   <div className={`sm:${styles.paragraph} text-[24px] flex justify-center items-center w-full py-10 px-10`}>Click the profile picture of the artist you are interested in to be directed to their instagram.</div>
   <div className={`sm:${styles.paragraph} ${styles.artistCategory}`}>Black and Grey Realism</div>
   <div className="flex items-center justify-center mx-5 font-poppins text-dimWhite sm:text-[16px] text-[13px]">This style focuses on representing art the way that it appears naturally in the world.</div>
   <hr className={`${styles.divider}`}></hr>
      <div className={`${styles.artistContainer}`}>
         {/* here we map through an imported array of photos, the photos also double as links to the artists respective instagrams */}
         {blackAndGreyProfilePic.map((item, index) => {return (
            <div key={index} name={item.name}>
               <a href={item.insta} target="_blank">
                  <img src={item.url} className={`${styles.artistCard}`} />
               </a>
            <div className={`${styles.paragraph} ${styles.artistNameAndYOE}`}>{item.name}</div>
            <div className={`${styles.paragraph} ${styles.artistNameAndYOE} `}>{item.yoe}</div>
            </div>
         )})}
      </div>



{/* this is the section for artists who do black work */}

<div className={`sm:${styles.paragraph} ${styles.artistCategory} `}>Black Work</div>
<div className="flex items-center justify-center mx-5 font-poppins text-dimWhite sm:text-[16px] text-[13px]">This style incorporates only solid blacks and stylised design. It borrows from realism and accentuates certain aspects to compliment the shape of our bodies. </div>
<hr className={`${styles.divider}`}></hr>
      <div className={`${styles.artistContainer}`}>
         {/* here we map through an imported array of photos, the photos also double as links to the artists respective instagrams */}
         {blackWorkProfilePic.map((item, index) => {return (
            <div key={index} name={item.name}>
               <a href={item.insta} target="_blank">
                  <img src={item.url} className={`${styles.artistCard}`}></img>
               </a>
            <div className={`${styles.paragraph} ${styles.artistNameAndYOE}`}>{item.name}</div>
            <div className={`${styles.paragraph} ${styles.artistNameAndYOE}`}>{item.yoe}</div>
            </div>
         )})}
      </div>




 {/* this is the section for artists that do colour realism or colour styles */}

<div className={`sm:${styles.paragraph} ${styles.artistCategory}`}>Colour Artists</div>
<div className="flex items-center justify-center mx-5 font-poppins text-dimWhite sm:text-[16px] text-[13px]">This style is self explanatory. It implements vivid and solid colours that help bring designs to life.</div>
<hr className={`${styles.divider}`}></hr>
      <div className={`${styles.artistContainer}`}>
         {/* here we map through an imported array of photos, the photos also double as links to the artists respective instagrams */}
         {colourProfilePic.map((item, index) => {return (
            <div key={index} name={item.name}>
               <a href={item.insta} target="_blank">
                  <img src={item.url} className={`${styles.artistCard}`}></img>
               </a>
            <div className={`${styles.paragraph} ${styles.artistNameAndYOE}`}>{item.name}</div>
            <div className={`${styles.paragraph} ${styles.artistNameAndYOE}`}>{item.yoe}</div>
            </div>
         )})}
      </div>


{/*this section is for artists that do line work*/}

<div className={`sm:${styles.paragraph} ${styles.artistCategory}`}>Stylised Realism and Line Work Artists</div>
<div className="flex items-center justify-center mx-5 font-poppins text-dimWhite sm:text-[16px] text-[13px]">This style leverages lines and negative space to help contrast the design. This style is broad and ranges from realistic with soft shading techniques, to abstract and flowing lines. This style compliments all body types.</div>
<hr className={`${styles.divider}`}></hr>
      <div className={`${styles.artistContainer}`}>
         {/* here we map through an imported array of photos, the photos also double as links to the artists respective instagrams */}
         {lineWorkProfilePic.map((item, index) => {return (
            <div key={index} name={item.name}>
               <a href={item.insta} target="_blank">
                  <img src={item.url} className={`${styles.artistCard}`} />
               </a>
            <div className={`${styles.paragraph} ${styles.artistNameAndYOE}`}>{item.name}</div>
            <div className={`${styles.paragraph} ${styles.artistNameAndYOE}`}>{item.yoe}</div>
            </div>
         )})}
      </div>
      <div className='md:px-[250px] px-3 w-full'>
         <Footer />
      </div>
</div>)}
            


export default Artists



