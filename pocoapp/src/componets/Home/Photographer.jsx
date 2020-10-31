import React from 'react';
import { Grid } from 'antd-mobile';
import '../../assets/css/Home/Photographer.css';

// const data=Array.from(new Array(3)).map(() =>([
//   {
//     icon:'https://pic3.pocoimg.cn/image/poco/avatar/30/20021/200213811_1519144405_53416.jpg',
//     userName:'清溪',
//     verified:'自由摄影师'
//   },
//   {
//     icon:'https://pic3.pocoimg.cn/image/poco/avatar/81/4648/46480999_1514322418_21996.jpg',
//     userName:'Hc',
//     verified:'简单、随心'
//   },
//   {
//     icon:'https://pic3.pocoimg.cn/image/poco/avatar/85/20144/201441548_1594793177_48998.jpg',
//     userName:'黑摄会女青年',
//     verified:'这个家伙很懒，什么都没有写'
//   }
// ]));

const data = Array.from(new Array(3)).map(() => ({
  icon:'https://pic3.pocoimg.cn/image/poco/works/44/2020/1031/07/16041006801397880_200213811.jpg?imageView2/1/w/240/h/240/q/95&',
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
          <ul className="list clearfix">
            <a className="shuiyin"></a>
          </ul>
        </div>
        <Grid data={data} columnNum={3} itemStyle={{ width:'2.475rem', background: '#ffffff' }} hasLine={false} square={false} />

      </div>
      <div className="item">
        <div className="personCard">
          <div className="personHead">
            <a className="personImg">
              <img src="https://pic3.pocoimg.cn/image/poco/avatar/81/4648/46480999_1514322418_21996.jpg" />
            </a>
            <a>
              <div className="personInfo">
                <span className="userName">Hc</span>
                <span className="verified">
                  <i>自由摄影师</i>
                </span>
              </div>
              <i className="txt">简单、随心</i>
            </a>
          </div>
          <ul className="list clearfix"></ul>
        </div>
        <Grid data={data} columnNum={3} itemStyle={{ width:'2.475rem', background: '#ffffff' }} hasLine={false} square={false} />
      </div>

      <div className="item">
        <div className="personCard">
          <div className="personHead">
            <a className="personImg">
              <img src="https://pic3.pocoimg.cn/image/poco/avatar/85/20144/201441548_1594793177_48998.jpg" />
            </a>
            <a>
              <div className="personInfo">
                <span className="userName">黑摄会女青年</span>
                <span className="verified">
                  <i>自由摄影师</i>
                </span>
              </div>
              <i className="txt">这个家伙很懒，什么都没有写</i>
            </a>
          </div>
          <ul className="list clearfix"></ul>
        </div>
        <Grid data={data} columnNum={3} itemStyle={{ width:'2.475rem', background: '#ffffff' }} hasLine={false} square={false} />
      </div>
    </div>
  </div>
  );





export default Photographer;