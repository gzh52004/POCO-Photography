import React from 'react';
import { Grid } from 'antd-mobile';
import '../../assets/css/Home/ExcellentWorks.css';

const data = Array.from(new Array(6)).map(() => ({
  icon: 'https://pic3.pocoimg.cn/image/poco/works/67/2020/1030/06/16040111308859252_201460307.jpg?imageView2/1/w/360/h/360/q/95&',
}));

const ExcellentWorks = () => (
  <div>
    <div className="sub-title">勋章作品</div>
      <Grid data={data} columnNum={2} itemStyle={{ height: '140px' }} />
  </div>
  );

export default ExcellentWorks;