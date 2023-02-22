//this component renders the link to the create an acc page
import React from 'react';
import styles from '../styles';
import { Link } from 'react-router-dom';

const CreateAcc= () => (
    <Link to='/login'>
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                <span className="text-gradient">Join</span>
                </p>
                </div>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                <span className="text-gradient">Today</span>
            </p>
        </div>
</div>
</Link>
);

export default CreateAcc