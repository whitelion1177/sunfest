import React from 'react';

import { Image, } from 'react-bootstrap';
import logo from './images/sunfest23_cop_fb.png'

function Logo(props) {


    let i = <Image src={logo} alt="Logo" className="logo" />   
    return i;
}

export default Logo;