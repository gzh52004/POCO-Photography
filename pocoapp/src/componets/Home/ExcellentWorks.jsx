import React from 'react';
import { Grid } from 'antd-mobile';
import '../../assets/css/ExcellentWorks.css';

const data = Array.from(new Array(6)).map(() => ({
  icon: 'https://pic3.pocoimg.cn/image/poco/works/14/2020/1017/00/16028642914834960_65998947.jpg?imageView2/1/w/360/h/360/q/95&',
}));

const ExcellentWorks = () => (
  <div>
    <div className="sub-title">勋章作品</div>
      <Grid data={data} columnNum={2} itemStyle={{ height: '140px' }} />
  </div>
  );

export default ExcellentWorks;