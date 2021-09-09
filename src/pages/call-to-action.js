import * as React from 'react'
import {callToAction,icons,buttonDiv} from './layout.module.css';
import whatsapp from '../images/whatsapp.svg'
const CallToAction=({call})=>{
    return(<div className={buttonDiv}>
        <button className={callToAction}><img className={icons} src={whatsapp} alt=""/>{call}</button>
        </div>);

}

export default CallToAction;