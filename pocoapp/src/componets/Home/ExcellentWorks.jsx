import React from 'react';
import { Grid } from 'antd-mobile';
import '../../assets/css/ExcellentWorks.css';

const data = Array.from(new Array(6)).map(() => ({
  icon: 'https://pic3.pocoimg.cn/image/poco/works/68/2020/0409/09/15863966894205061_201318911.jpg?imageView2/1/w/240/h/240/q/95&',
}));

const ExcellentWorks = () => (
  <div>
    <div className="sub-title">勋章作品</div>
    <Grid data={data} columnNum={2} itemStyle={{ height: '150px', background: 'rgba(0,0,0,.05)' }} />
  </div>
  );

export default ExcellentWorks;