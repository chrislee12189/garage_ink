import React from 'react';
import styles from '../styles';
import { ImgSlider } from '../components';

const Gallery = () => {
return (
    <section id="gallery">
        <div className={`${styles.heading2} md:flex-row ${styles.paddingY}`}>The Garage Ink Oeuvere</div>
        <div>
            {/* image carousel component goes here*/ }
            {/* currently some images inside the slider do not fit very well */ }
            <ImgSlider />
            <p className={`cursor-pointer mt-0 ${styles.flexCenter} ${styles.paragraph}`}>Enter Gallery</p>
        </div>
    </section>
)
}

export default Gallery