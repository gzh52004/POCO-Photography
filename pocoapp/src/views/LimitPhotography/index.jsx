import React from 'react';
import { Icon } from 'antd-mobile';
import TabExample from  '../../componets/LimitPhotography.js'

function LimitPhotography(){
    // 极限摄影
    return(
        <div>
            <div className="header">
                <div>{<Icon type="ellipsis" />}</div>
                <div>极限摄影</div>
                <div></div>
            </div>
            <div className="content">
                <div className="content-con">
                  {/* 内容 */}
                   <TabExample />
                </div>
            </div>
        </div>
    )
}

export default LimitPhotography