import React from 'react'
import styles from '../styles'
import { tattooStyles } from '../assets'
import Footer from './Footer'

const TattooStyles = () => {
return (
    <>
    <div className='relative'>
    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute -z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[30%] right-20 bottom-20 blue__gradient" />

<h1 className={`${styles.heading2} text-center py-20 relative`}>Common Tattoo Styles</h1>
<p className={`${styles.paragraph} text-center pb-20 relative `}>Garage Ink does not offer all of the styles included in this list. Guest Artists come and go regularly at Garage Ink. These styles may or may not be available due to this.</p>



<div className='relative'>
    <h1 className={`${styles.heading2} text-gradient text-center font-poppins`}>Black and Grey Realism</h1>
    <p className='text-white m-auto font-poppins max-w-[1050px] py-6 px-6'>Black-and-gray is a style of tattooing that uses only black ink in varying shades. Typically, black-and-gray tattoo work is produced by diluting the black ink with distilled water in varying proportions to create a "wash" that results in lighter shades. Gray shades can also be produced by mixing small amounts of black ink with white ink, which produces a thicker but brighter result and requires a slower application.</p>
    <img src={tattooStyles[0]} className='m-auto md:w-1/3 w-2/3'/>
    <p className='text-white text-center font-poppins pb-32'>Artist: Emily Taylor</p>
</div>



<div className='relative'>
<h1 className={`${styles.heading2} text-gradient text-center font-poppins`}>Colour Tattoos</h1>
    <p className='text-white m-auto font-poppins max-w-[1050px] py-6 px-6'>Colour is a style of tattooing that is often splintered off into sub-categories. Colour styles that are popular are realism, fantasy, watercolour, japanese, neo-traditional and traditional. Unfortunately, colour is not accessible to all people. The pigmentation of a persons skin can affect how certain colours end up looking. A good tattoo artist will be aware of each skin type and colour and will be able to accomodate or explain the possibilities that are specific to each client.</p>
    <img src={tattooStyles[1]} className='m-auto md:w-1/3 w-2/3'/>
    <p className='text-white text-center font-poppins pb-32'>Artist: Emily Taylor</p>
</div>



<div className='relative'>
<h1 className={`${styles.heading2} text-gradient text-center font-poppins`}>Neo-Traditional</h1>
    <p className='text-white m-auto font-poppins max-w-[1050px] py-6 px-6'>By definition, neotraditional means to present a new adaption of something that is traditional. In the case of Neotrad, the new adaption is a reimagination of traditional tattoos. Traditional tattoos feature solid colours, usualy selected from a limited pallete. Traditional tattoos also feature bold lines and simple designs. Neotrad takes these features and tends to elaborate on the design, often choosing from a wider pallete range and art subject. Instead of the bold, solid and rigid lines that tradtional tattoos feature, neotrad has flowing and exaggerated lines that emphasize on the curves and shapes of the art subject.</p>
    <a href='https://www.instagram.com/p/CjkQECcri8n/?hl=en'><img src={tattooStyles[2]} alt='Robin Brandstatter' className='m-auto md:w-1/3 w-2/3'/></a>
    <p className='text-white text-center font-poppins pb-32'>Artist: Robin Brandstatter</p>
</div>




<div className='relative'>
<h1 className={`${styles.heading2} text-gradient text-center font-poppins`}>Japanese</h1>
    <p className='text-white m-auto font-poppins max-w-[1050px] py-6 px-6'>Black-and-gray is a style of tattooing that uses only black ink in varying shades. Typically, black-and-gray tattoo work is produced by diluting the black ink with distilled water in varying proportions to create a "wash" that results in lighter shades. Gray shades can also be produced by mixing small amounts of black ink with white ink, which produces a thicker but brighter result and requires a slower application.</p>
    <a href='https://www.tattooseo.com/japanese-tattoo-artist-chicago/'><img src={tattooStyles[3]} className='m-auto md:w-1/3 w-2/3'/></a>
    <p className='text-white text-center font-poppins pb-32'>Artist: Unsure, Click the image to follow the link to where it was found.</p>
</div>



<div className='relative'>
<h1 className={`${styles.heading2} text-gradient text-center font-poppins`}>American Tradional</h1>
    <p className='text-white m-auto font-poppins max-w-[1050px] py-6 px-6'>American Traditional focuses on solid borders, solid colours, clear and legible design and longevity. The intent is that the tattoo can be read from across the room from the day it was done, until the end of time. There is a small colour pallete in traditional tattoos. Typically, browns, reds, blacks and yellows are the most popular.</p>
    <img src={tattooStyles[4]} className='m-auto md:w-1/3 w-2/3 '/>
    <p className='text-white text-center font-poppins pb-32'>Artist: Unknown</p>
</div>



<div className='relative'>
<h1 className={`${styles.heading2} text-gradient text-center font-poppins`}>Black Work</h1>
    <p className='text-white m-auto font-poppins max-w-[1050px] py-6 px-6'>Black Work is a very vague name for a very, very broad area and style of tattoing. On one end of the blackwork spectrum, there is a focus on tribal style tattoos, crafted only from solid black. The use of negative space in this style helps to emphasise lines, body shapes and movement in the piece. When considering the other ends of the spectrum, you will find gothic peices that adopt a sratchy style to appear as though the ink was scracthed into the skin. Other more modern adaptations of the black work style include realistic elements that are still defined with the use of negative space etc. </p>
    <a href='https://un1ty.tattoo/the-best-blackwork-tattoo/'><img src={tattooStyles[5]} className='m-auto md:w-1/3 w-2/3'/></a>
    <p className='text-white text-center font-poppins pb-32'>Artist: HANUMANTRA</p>
</div>



<div className='relative'>
<h1 className={`${styles.heading2} text-gradient text-center font-poppins`}>Fine Line Tattooing</h1>
    <p className='text-white m-auto font-poppins max-w-[1050px] py-6 px-6'>Fine line tattoos are implemented using soft lining and shading techniques. These tattoos incorporate huge amounts of negative space in order to appear soft and dainty. This style often includes scripts, flowers, birds and other small cute animals. The style sometimes extends towards ancient greek mythology, where by the focus of the piece is a famous marble statue and the technique used helps to create a soft, stone look.</p>
    <a href='https://www.tattoodo.com/guides/styles/fine-line'><img src={tattooStyles[6]} className='m-auto md:w-1/3 w-2/3'/></a>
    <p className='text-white text-center font-poppins pb-32'>Artist: Unknown. Click the image to find the site that posted the image.</p>
</div>

<div className='md:px-[250px] px-3 w-full relative'>
    <Footer />
</div>
</div>
</>

)
}

export default TattooStyles