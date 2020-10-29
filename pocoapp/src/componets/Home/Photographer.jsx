import React from 'react';
import { Grid } from 'antd-mobile';
import '../../assets/css/Photographer.css';

const data1=[
  {
    personImg:'https://pic3.pocoimg.cn/image/poco/avatar/30/20021/200213811_1519144405_53416.jpg',
    userName:'清溪',
    verified:'自由摄影师'
  },
  {
    personImg:'https://pic3.pocoimg.cn/image/poco/avatar/81/4648/46480999_1514322418_21996.jpg',
    userName:'Hc',
    verified:'简单、随心'
  },
  {
    personImg:'https://pic3.pocoimg.cn/image/poco/avatar/85/20144/201441548_1594793177_48998.jpg',
    userName:'黑摄会女青年',
    verified:'这个家伙很懒，什么都没有写'
  }
];

const data = Array.from(new Array(3)).map(() => ({
  icon: 'https://pic3.pocoimg.cn/image/poco/works/68/2020/0409/09/15863966894205061_201318911.jpg?imageView2/1/w/240/h/240/q/95&',
}));

const Photographer = () => (
  <div>
    <div className="photographerBox">
      <div className="sub-title">热门摄影师</div>
      <div className="item">
        <div className="personCard">
          <div className="personHead">
            <a className="personImg">
              <img src="https://pic3.pocoimg.cn/image/poco/avatar/30/20021/200213811_1519144405_53416.jpg" />
            </a>
            <a>
              <div className="personInfo">
                <span className="userName">清溪</span>
                <span className="verified">
                  <i>自由摄影师</i>
                </span>
              </div>
              <i className="txt">流水不争先</i>
            </a>
          </div>
        </div>
        <Grid data={data} columnNum={3} itemStyle={{ height: '150px', background: 'rgba(0,0,0,.05)' }} />
      </div>
      <div className="item">
        <div className="sub-title">热门摄影师</div>
        <Grid data={data} columnNum={3} itemStyle={{ height: '150px', background: 'rgba(0,0,0,.05)' }} />
      </div>
      <div className="item">
        <div className="sub-title">热门摄影师</div>
        <Grid data={data} columnNum={3} itemStyle={{ height: '150px', background: 'rgba(0,0,0,.05)' }} />
      </div>
    </div>
  </div>
  );





export default Photographer;