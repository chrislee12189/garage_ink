import React from 'react';
import styles from '../styles';


//component to embed google maps address to home page

const Location = () => {
    return (
        <section id="location">
            <div className={`${styles.heading2} m-auto py-3 px-0`}>Our Location</div>
            <div className=' max-w-[1600px] h-[780px] bg-center bg-cover'>
            <iframe className='w-full h-full ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.078286427425!2d153.493946716795!3d-28.144104882613075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91466a5a8fd83b%3A0x94619374db04b8b0!2sGARAGE%20INK!5e0!3m2!1sen!2sau!4v1676461672418!5m2!1sen!2sau" /></div>
            <p className={`cursor-pointer mt-0 ${styles.flexCenter} ${styles.paragraph}`}>427 Golden Four Dr, Tugan 4224</p>
        </section>
    )
    }
export default Location