import * as React from 'react'
import {additionalButtons} from './layout.module.css'
import alternative from '../images/alternative.svg';
import alternativeblue from '../images/alternative-blue.svg'
import { useState } from 'react';
const AdditionalButtons=({text})=>{

    const [hover,setHover]=useState(false);
    return(<button className={additionalButtons} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>{text}<img src={hover?alternativeblue:alternative} alt=""/></button>)
}

export default AdditionalButtons;