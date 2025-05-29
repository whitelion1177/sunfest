import React from 'react';

import { Image, } from 'react-bootstrap';
import logo from './images/sunfest25_launch_fb-3.png'

function Logo(props) {


    let i = <Image src={logo} alt="Logo" className="logo" />   
    return i;
}

export default Logo;