import React from 'react';

import Icons from '../icons/Icons';
import './info-bar-top.css'

const InfobarTop = () => {
    const current = new Date();
    const day = `${current.getDay()}`;
    const date = `${current.getDay()}/${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;    
    
    return (
        <div className='info-bar-top'>
            <div className='info-bar-to__date'>{date}</div>
            <div className='info-bar-top__socials'>                    
                <span>Members</span>
                <span>Sign up</span>
                <span><Icons /></span>
            </div>
        </div>        
    );
};

export default InfobarTop;