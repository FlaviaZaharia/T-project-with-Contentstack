import * as React from 'react'
import {callToAction,icons} from './layout.module.css';
import whatsapp from '../images/whatsapp.svg'
const CallToAction=({call})=>{
    return(<div>
        <button className={callToAction}><img className={icons} src={whatsapp} alt=""/>{call}</button>
        </div>);

}

export default CallToAction;