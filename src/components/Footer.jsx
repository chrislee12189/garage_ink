import React from 'react';
import styles from '../styles';
import { logos, socialIcons } from '../assets';
import { footerLink, socialMedia } from '../constants';

const Footer = () => (

    // sets up container for logo and promo slogon
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className='flex-1 flex flex-col justify-startmr-10'>
                <img src={logos[0]} alt="garage_logo" className='w-[366px] h-[92px] object-contain'/>
                <p className={`${styles.paragraph} mt-5 max-w-[310px]`}>Experience a new generation of Tattooing.</p>
            </div>

            {/* sets up container for footer links and headings */}
            <div className='flex-[1.5] w-full flex flex-row justify-between md:mt-0 mt-10'>
                {footerLink.map((footerLink) => (
                    <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                        <h4 className='font-poppins font-medium text-[20px] leading-[27px] text-white pb-5'>{footerLink.title}</h4>


            {/* maps through list of links from constants file and returns them. also checks to see if the link is the last in the list, if it is app margin bottom 4 */}
                        <ul className='list-none mt-4'>{footerLink.links.map((link, index) => (
                            <li key={link.name} className={`font-poppins font-normal text-16[px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`}>{link.name}</li>
                        ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* this section sets up the social media icon links */}
            <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]'>
            <div className='flex flex-row md:mt-0 mt-6'>
                {socialMedia.map((social, index) => (
                    <img key={social.id} src={social.icon} alt={social.id} className={`w-[25px] h-[25px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}/>
                ))}
            </div>
            </div>
        </div>
    </section>
)


//2:11:17 in video
//need to fix format of footer social links

//need to work on responsive design more



export default Footer