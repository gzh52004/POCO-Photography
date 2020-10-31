// import React from 'react';
import { Icon} from 'antd-mobile';
import TabExampla from  '../../componets/Works.js'

function Works(){
    // 对话 Works
    return(
        <div>
            <div className="header">
                <div>{<Icon type="ellipsis" />}</div>
                <div>作品</div>
                <div>分类</div>
            </div>
            <div className="content">
                <div className="content-con">
                  {/* 内容 */}
                   <TabExampla />
                </div>
            </div>
        </div>
    )
}

export default Works