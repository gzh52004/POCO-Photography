import React from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
// const data=[
//     {
//         img:'https://pic3.pocoimg.cn/image/poco/works/68/2020/0409/09/15863966894205061_201318911.jpg?imageView2/1/w/240/h/240/q/95&',
//     },
//     {
//         img:'https://pic3.pocoimg.cn/image/poco/works/04/2020/0331/17/15856461176819077_201318911.jpg?imageView2/1/w/240/h/240/q/95&',
//     },
//     {
//         img:'https://pic3.pocoimg.cn/image/poco/works/05/2020/0327/16/15852980447956431_201318833.jpg?imageView2/1/w/240/h/240/q/95&',
//     }
// ]

class Recommend extends React.Component {
  state = {
    disabled: false,
  }

  render() {
    return (
    <div>
        <List className="my-list">
            <Item>热门推荐</Item>
            <Item align="top" thumb="https://pic3.pocoimg.cn/image/poco/works/68/2020/0409/09/15863966894205061_201318911.jpg?imageView2/1/w/240/h/240/q/95&" multipleLine>
            <Brief>subtitle</Brief>
            </Item>
            <Item align="top" thumb="https://pic3.pocoimg.cn/image/poco/works/04/2020/0331/17/15856461176819077_201318911.jpg?imageView2/1/w/240/h/240/q/95&" multipleLine>
            <Brief>subtitle</Brief>
            </Item>
            <Item align="top" thumb="https://pic3.pocoimg.cn/image/poco/works/05/2020/0327/16/15852980447956431_201318833.jpg?imageView2/1/w/240/h/240/q/95&" multipleLine>
            <Brief>subtitle</Brief>
            </Item>
        </List>
    </div>);
  }
}

export default Recommend;