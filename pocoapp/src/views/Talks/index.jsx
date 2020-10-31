import React from 'react';
import { Icon,SearchBar} from 'antd-mobile';
import TabExamplf from  '../../componets/Talks.js'

function Talks(){
    // 对话 Talks
    return(
        <div>
            <div className="header">
                <div>{<Icon type="ellipsis" />}</div>
                <div>对话</div>
                <div></div>
            </div>
            <div className="content">
                <div className="content-con">
                  {/* 内容 */}
                  <SearchBar defaultValue="请输入搜索"/>
                   <TabExamplf />
                </div>
            </div>
        </div>
    )
}

export default Talks