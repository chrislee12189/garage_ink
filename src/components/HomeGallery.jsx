import React from 'react';
import styles from '../styles';
import { ImgSlider } from '.';

const HomeGallery = () => {
return (
    <section>
        <div className={`${styles.heading2} md:flex-row ${styles.paddingY}`}>The Garage Ink Oeuvere</div>
        <div>
            {/* image carousel component goes here*/ }
            {/* currently some images inside the slider do not fit very well */ }
            <ImgSlider />
            <a href="/gallery" className={`cursor-pointer mt-0 ${styles.flexCenter} ${styles.paragraph}`}>Enter Gallery</a>
        </div>
    </section>
)
}

export default HomeGallery