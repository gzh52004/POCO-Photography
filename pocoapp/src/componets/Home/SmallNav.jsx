import React from 'react';
import '../../assets/css/Home/SmallNav.css';

// const data = [
//     {
//         icon:'https://static-c.pocoimg.cn/project/poco_wap/prod/online/image/page/index/i/icon_work_46fda5e.png',
//         text:'作品'
//     },
//     {
//         icon:'https://static-c.pocoimg.cn/project/poco_wap/prod/online/image/page/index/i/icon_pic_84620ff.png',
//         text:'图片'
//     },
//     {
//         icon:'https://static-c.pocoimg.cn/project/poco_wap/prod/online/image/page/index/i/icon_skill_ce883b7.png',
//         text:'技巧'
//     }
// ];

const SmallNav = () => (
    <div>
        <div className="smlist">
            <ul className="list clearfix">
                <li>
                    <a href='#/works'>
                        <img src="https://static-c.pocoimg.cn/project/poco_wap/prod/online/image/page/index/i/icon_work_46fda5e.png" alt=""/>
                        <div className='txt'>作品</div>
                    </a>
                </li>
                <li>
                    <a href='#/imagesquare'></a>
                    <img src="https://static-c.pocoimg.cn/project/poco_wap/prod/online/image/page/index/i/icon_skill_ce883b7.png" alt=""/>
                    <div className='txt'>图片</div>
                </li>
                <li>
                    <a href='#/photographytechnique'>
                        <img src="https://static-c.pocoimg.cn/project/poco_wap/prod/online/image/page/index/i/icon_work_46fda5e.png" alt=""/>
                        <div className='txt'>技巧</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  
);

export default SmallNav;