import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './icons.css'

const Icons = () => {
  return (
    <ul className="social-icons">        
        <li><FontAwesomeIcon icon={faFacebook} size="1x" /></li>
        <li><FontAwesomeIcon icon={faTwitter} size="1x" /></li>   
        <li><FontAwesomeIcon icon={faInstagram} size="1x" /></li>   
        <li><FontAwesomeIcon icon={faEnvelope} size="1x" /></li>        
    </ul>
  );
};


export default Icons