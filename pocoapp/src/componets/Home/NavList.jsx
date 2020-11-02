import React from 'react';
import home from '../../assets/data/HomeData/list/home.png';
import works from '../../assets/data/HomeData/list/works.png';
import photosquare from '../../assets/data/HomeData/list/photosquare.png';
import skills from '../../assets/data/HomeData/list/skills.png';
import talks from '../../assets/data/HomeData/list/talks.png';
import limit from '../../assets/data/HomeData/list/limit.png';
import verified from '../../assets/data/HomeData/list/verified.png';
import download from '../../assets/data/HomeData/list/download.png';
import go from '../../assets/data/HomeData/list/go.png';

class NavList extends React.Component{
    
    render(){
        return (
            <div>
                <div className="texttop">
                <span className="user"></span>
                <span className="usertext">登录/注册</span>
            </div>
            <ul>
                <li>
                <a href='/'>
                    <img src={home} />
                    首页
                </a>
                </li>
                <li>
                <a href='#/works'>
                    <img src={works} />
                    作品
                </a>
                </li>
                <li>
                <a href='#/imagesquare'>
                    <img src={photosquare} />
                    图片广场
                </a>
                </li>
                <li>
                <a href='#/photographytechnique'>
                    <img src={skills} />
                    摄影技巧
                </a>
                </li>
                <li>
                <a href='#/talks'>
                    <img src={talks} />
                    对话
                </a>
                </li>
                <li>
                <a href='#/limitphotography'>
                    <img src={limit} />
                    极限摄影
                </a>
                </li>
                <li>
                <a href='#/identification'>
                    <img src={verified} />
                    POCO认证
                </a>
                </li>
            </ul>
            <div className="listfooter">
                <a href='https://www.poco.cn/app/photo'>
                <img src={download} />
                <img className='go-icon' src={go} />
                </a>
                </div>
            </div>
        )
    }
}

export default NavList;