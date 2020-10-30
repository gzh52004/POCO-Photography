import React from 'react';
import {Route,Switch} from 'react-router-dom';
import { List } from 'antd-mobile';
import Home from '../../views/Home';
import Mine from '../../views/Mine';
import Talks from '../../views/Talks';
import Works from '../../views/Works';
import LimitPhotography from '../../views/LimitPhotography';
import Identification from '../../views/Identification';
import PhotographyTechnique from '../../views/PhotographyTechnique';
import ImageSquare from '../../views/ImageSquare';
import '../../assets/css/Panel.css';

class Panel extends React.Component {
    
    render() {

      return (
      <div>
        <List>
            <a className="texttop">
                <span className="user"></span>
                <span className="usertext">登录/注册</span>
            </a>
            <div className="panel-wrap">
                <ul>
                    <li>
                        <a>
                            <i></i>
                            首页
                        </a>
                    </li>
                    <li>
                        <a>作品</a>
                    </li>
                    <li>
                        <a>图片广场</a>
                    </li>
                    <li>
                        <a>摄影技巧</a>
                    </li>
                    <li>
                        <a>对话</a>
                    </li>
                    <li>
                        <a>极限摄影</a>
                    </li>
                    <li>
                        <a>POCO认证</a>
                    </li>
                </ul>
            </div>
            <div className="listfooter">
                <span className="listfooterImg"></span>
                <span>&gt;</span>
            </div>
        </List>
      </div>);
      
    }
  }
  
  export default Panel;