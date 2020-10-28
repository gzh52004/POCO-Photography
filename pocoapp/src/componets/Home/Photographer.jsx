import React from 'react';
import { List } from 'antd-mobile';
import '../../assets/css/Photographer.css';

const Item = List.Item;
const Brief = Item.Brief;
// const data=[
//     {
//         img:'https://pic3.pocoimg.cn/image/poco/works/68/2020/0409/09/15863966894205061_201318911.jpg?imageView2/1/w/240/h/240/q/95&',
//         txt:'摄影师私藏的8个拍摄道具：你也可以拍摄出杂志感大片'
//     },
//     {
//         img:'https://pic3.pocoimg.cn/image/poco/works/04/2020/0331/17/15856461176819077_201318911.jpg?imageView2/1/w/240/h/240/q/95&',
//         txt:'#本叔PS教程# | 摄影后期必备调色技巧之色相色谱条技法'
//     },
//     {
//         img:'https://pic3.pocoimg.cn/image/poco/works/05/2020/0327/16/15852980447956431_201318833.jpg?imageView2/1/w/240/h/240/q/95&',
//         txt:'#后期教程#如何给客片修出杂志感照片？'
//     }
// ];

class Photographer extends React.Component {
  state = {
    disabled: false,
  }

  render() {
    return (
    <div>
        <List className="my-list">
            <Item>热门摄影师</Item>
            <Item align="top" thumb="https://pic3.pocoimg.cn/image/poco/works/68/2020/0409/09/15863966894205061_201318911.jpg?imageView2/1/w/240/h/240/q/95&" multipleLine>
            <Brief>摄影师私藏的8个拍摄道具：你也可以拍摄出杂志感大片</Brief>
            </Item>
            <Item align="top" thumb="https://pic3.pocoimg.cn/image/poco/works/04/2020/0331/17/15856461176819077_201318911.jpg?imageView2/1/w/240/h/240/q/95&" multipleLine>
            <Brief>#本叔PS教程# | 摄影后期必备调色技巧之色相色谱条技法</Brief>
            </Item>
            <Item align="top" thumb="https://pic3.pocoimg.cn/image/poco/works/05/2020/0327/16/15852980447956431_201318833.jpg?imageView2/1/w/240/h/240/q/95&" multipleLine>
            <Brief>#后期教程#如何给客片修出杂志感照片？</Brief>
            </Item>
        </List>
    </div>);
  }
}

export default Photographer;