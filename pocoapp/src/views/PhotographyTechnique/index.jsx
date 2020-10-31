import React from 'react';
import { Icon,SearchBar} from 'antd-mobile';
import TabExampls from  '../../componets/PhotographyTechnique.js'


function PhotographyTechnique(){
    // 摄影技巧
    return(
        <div>
            <div className="header">
                <div>{<Icon type="ellipsis" />}</div>
                <div>摄影技巧</div>
                <div></div>
            </div>
            <div className="content">
                <div className="content-con">
                  {/* 内容 */}
                  <SearchBar defaultValue="请输入搜索"/>
                   <TabExampls />
                </div>
            </div>
        </div>
    )
}

export default PhotographyTechnique