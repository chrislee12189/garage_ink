import React from 'react';
import styles from '../styles';
import { imgSlides } from '../assets';








const Gallery = () => {
    
    const slide = [    {
        id:1,
        url: 'src/assets/amity_tattoo1.jpg',
    },
    {
        id:2,
        url: 'src/assets/briar_tattoo1.jpg',
    },
    {
        id: 3,
        url: 'src/assets/briar_tattoo2.jpg'
    },
    {
        id: 3,
        url: 'src/assets/briar_tattoo3.jpg'
    },
    {
        id: 4,
        url: 'src/assets/briar_tattoo4.jpg'
    },
    {
        id: 6,
        url: 'src/assets/briar_tattoo6.jpg'
    },
    {
        id:7,
        url: 'src/assets/briar_tattoo7.jpg'
    },
    {
        id: 8,
        url: 'src/assets/briar_tattoo8.jpg'
    },
    {
        id: 9,
        url: 'src/assets/briar_tattoo9.jpg'
    },
    {
        id:10,
        url: 'src/assets/cim_tattoo1.jpg'
    },
    {
        id:11,
        url: 'src/assets/cim_tattoo2.jpg'
    },
    {
        id:12,
        url: 'src/assets/cim_tattoo3.jpg'
    },
    {
        id:13,
        url: 'src/assets/crit_tattoo1.jpg'
    },
    {
        id:14,
        url: 'src/assets/crit_tattoo2.jpg'
    },
    {
        id:15,
        url: 'src/assets/crit_tattoo3.jpg'
    },
    {
        id:16,
        url: 'src/assets/crit_tattoo4.jpg'
    },
    {
        id:17,
        url: 'src/assets/crit_tattoo5.jpg'
    },
    {
        id:18,
        url: 'src/assets/crit_tattoo6.jpg'
    },
    {
        id:19,
        url: 'src/assets/crit_tattoo7.jpg'
    },
    {
        id:20,
        url: 'src/assets/crit_tattoo8.jpg'
    },
    {
        id:21,
        url: 'src/assets/em_tattoo1.jpg'
    },
    {
        id:22,
        url: 'src/assets/em_tattoo2.jpg'
    },
    {
        id:23,
        url: 'src/assets/em_tattoo3.jpg'
    },
    {
        id:24,
        url: 'src/assets/em_tattoo4.jpg'
    },
    {
        id:25,
        url: 'src/assets/em_tattoo5.jpg'
    },
    {
        id:26,
        url: 'src/assets/em_tattoo6.jpg'
    },
    {
        id:27,
        url: 'src/assets/em_tattoo7.jpg'
    },
    {
        id:28,
        url: 'src/assets/em_tattoo8.jpg'
    },
    {
        id:29,
        url: 'src/assets/em_tattoo9.jpg'
    },
    {
        id:30,
        url: 'src/assets/em_tattoo10.jpg'
    },
    {
        id:31,
        url: 'src/assets/giorgia_tattoo1.jpg'
    },
    {
        id:32,
        url: 'src/assets/giorgia_tattoo2.jpg'
    },
    {
        id:33,
        url: 'src/assets/giorgia_tattoo3.jpg'
    },
    {
        id:34,
        url: 'src/assets/giorgia_tattoo4.jpg'
    },
    {
        id:35,
        url: 'src/assets/giorgia_tattoo5.jpg'
    },
    {
        id:36,
        url: 'src/assets/giorgia_tattoo6.jpg'
    },
    {
        id:37,
        url: 'src/assets/juannita_tattoo1.jpg'
    },
    {
        id:38,
        url: 'src/assets/juannita_tattoo2.jpg'
    },
    {
        id:39,
        url: 'src/assets/juannita_tattoo3.jpg'
    },
    {
        id:40,
        url: 'src/assets/karlee_tattoo1.jpg'
    },
    {
        id:41,
        url: 'src/assets/karlee_tattoo2.jpg'
    },
    {
        id:42,
        url: 'src/assets/karlee_tattoo3.jpg'
    },
    {
        id:43,
        url: 'src/assets/karlee_tattoo4.jpg'
    },
    {
        id:44,
        url: 'src/assets/karlee_tattoo5.jpg'
    },
    {
        id:45,
        url: 'src/assets/karlee_tattoo6.jpg'
    },
    {
        id:46,
        url: 'src/assets/karlee_tattoo7.jpg'
    },
    {
        id:47,
        url: 'src/assets/kim_tattoo1.jpg'
    },
    {
        id:48,
        url: 'src/assets/kim_tattoo2.jpg'
    },
    {
        id:49,
        url: 'src/assets/kim_tattoo3.jpg'
    },
    {
        id:50,
        url: 'src/assets/michelle_tattoo1.jpg'
    },
    {
        id:51,
        url: 'src/assets/michelle_tattoo2.jpg'
    },
    {
        id:52,
        url: 'src/assets/michelle_tattoo3.jpg'
    },
    {
        id:53,
        url: 'src/assets/michelle_tattoo3.jpg'
    },
    {
        id:54,
        url: 'src/assets/michelle_tattoo4.jpg'
    },
    {
        id:55,
        url: 'src/assets/michelle_tattoo5.jpg'
    },
    {
        id:56,
        url: 'src/assets/michelle_tattoo6.jpg'
    },
    {
        id:57,
        url: 'src/assets/michelle_tattoo7.jpg'
    },
    {
        id:58,
        url:'src/assets/paytan_tattoo1.jpg'
    },
    {
        id:59,
        url:'src/assets/paytan_tattoo2.jpg'
    },
    {
        id:60,
        url: 'src/assets/paytan_tattoo3.jpg'
    },
    {
        id:61,
        url: 'src/assets/paytan_tattoo4.jpg'
    },
    {
        id:62,
        url: 'src/assets/paytan_tattoo5.jpg'
    },
    {
        id:63,
        url: 'src/assets/tay_tattoo1.jpg'
    },
    {
        id:64,
        url: 'src/assets/tay_tattoo2.jpg'
    },
    {
        id:65,
        url: 'src/assets/tay_tattoo3.jpg'
    },
    {
        id:66,
        url: 'src/assets/tay_tattoo4.jpg'
    },
    {
        id:67,
        url: 'src/assets/tay_tattoo5.jpg'
    },
    {
        id:68,
        url: 'src/assets/tay_tattoo6.jpg'
    },
    {
        id:69,
        url: 'src/assets/tay_tattoo7.jpg'
    },
    {
        id:70,
        url: 'src/assets/teneile_tattoo1.jpg'
    },
    {
        id:71,
        url: 'src/assets/teneile_tattoo2.jpg'
    },
    {
        id:72,
        url: 'src/assets/teneile_tattoo3.jpg'
    },
    {
        id:73,
        url: 'src/assets/teneile_tattoo4.jpg'
    },
    {
        id:74,
        url: 'src/assets/teneile_tattoo5.jpg'
    },
    {
        id:75,
        url: 'src/assets/teneile_tattoo6.jpg'
    },
    {
        id:76,
        url: 'src/assets/teneile_tattoo7.jpg'
    }]
    console.log(slide)


return (
    <>
    <h1 className="flex items-center justify-center font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]">The Complete Garage Ink Collection</h1>
    <h2 className='flex items-center justify-center text-dimWhite font-semibold xs:text-[25px] text-[20px] italic pt-6'>Express your story through ink.</h2>
    <div className='grid grid-flow-dense md:grid-cols-3 grid-cols-2 bg-green-500 align-content justify-center px-5 py-5 gap-[5px] max-h-[100%] max-w-[100%]'>
        {slide.map((item, index) => {
            return(
                <div key={index}>
                    <img src={item.url}/>
                </div>
            )
        })}
        





    </div>
</>
    
)
}

export default Gallery
//<section className={`${styles.paragraph} mt-10 mx-5`}>Embrace your story. Tell it with ink.</section>