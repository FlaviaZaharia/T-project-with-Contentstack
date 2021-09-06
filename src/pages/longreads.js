import * as React from 'react';
import ArticleLongReads from './article-longreads';
import { step4Frame,longReads,gridStep4 } from './layout.module.css'
const LongReads=({data})=>{
    return(<div className={step4Frame}>
        <div className={longReads}>
          <div className={gridStep4}>
            {data.allContentstackTPages.nodes[0].longreads&&data.allContentstackTPages.nodes[0].longreads.map((node)=>{
                return(<ArticleLongReads key={node.id} title={node.title} text={node.text} img_url={node.image.url}/>)
            })}
          </div>
        </div>
      </div>);
}

export default LongReads;