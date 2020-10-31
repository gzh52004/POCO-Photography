import React from 'react';
import { Icon,SearchBar} from 'antd-mobile';
import TabExampl from  '../../componets/LimitPhotography.js'

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
                  <SearchBar defaultValue="请输入搜索"/>
                   <TabExampl />
                </div>
            </div>
        </div>
    )
}

export default LimitPhotography