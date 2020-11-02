import React from 'react';
import { Icon } from 'antd-mobile';
import TabExample from '../../componets/imageSquare'
// import '../../assets/css/imageSquare.css'
import '../../componets/imageSquare.js'

function ImageSquare() {
    return (
        <div>
            {/* 头部 */}
            <div className="header-cent">
                <div>{<Icon type="ellipsis" />}</div>
                <div>图片广场</div>
                <div> 分类</div>
            </div>
            {/* 内容区 */}
            <div className="content">
                {/* 切换按钮 */}
                <div className="content-con">
                <TabExample/>
                  
                   
                </div>
            </div>
        </div>
    )
}

export default ImageSquare