import * as React from 'react';
import { button,linkItem } from "./layout.module.css";
import { Link} from "gatsby";
const NextStepButton=({button_text,img_src,url})=>{
    return(<div className={linkItem}>
        <Link className={button} to={url}>
          {button_text} <img src={img_src} alt="smallarrow"/>
        </Link>
      </div>);
}

export default NextStepButton;