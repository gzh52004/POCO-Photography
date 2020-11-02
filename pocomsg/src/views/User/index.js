import React from 'react';

import { Table, Switch, Radio, Form, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import userAPI from '../../api/userAPI';

// "_id" : ObjectId("5f9cdb178eaa5d6100db9b0f"),
// "uid" : "460000198704065323",
// "username" : "1234567",
// "password" : "8bb0cf6eb9b17d0f7d22b456f121257dc1254e1f01665370476383ea776df414",
// "regtime" : "2020-10-31 11:33:43"
const columns = [
  {
    title: 'ID',
    key:"uid",
    dataIndex: 'uid',
  },
  {
    title: '用户名',
    key:"username",
    dataIndex: 'username',
  },
  {
    title: '注册时间',
    key:"regtime",
    dataIndex: 'regtime',
  },
  {
    title: '操作',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <button>删除</button>
      </Space>
    ),
  },
];
// let  dataSource = [{username:12345}];
// for (let i = 1; i <= 10; i++) {
//   dataSource.push({
//     key: i,
//     name: 'John Brown',
//     age: `${i}2`,
//     address: `New York No. ${i} Lake Park`,
//     description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
//   });
// }

const expandable = { expandedRowRender: record => <p>{record.description}</p> };
const showHeader = true;
const pagination = { position: 'bottom' };

class User extends React.Component {
  state = {
    size: 'default',
    expandable,
    showHeader,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
    tableLayout: undefined,
    top: 'none',
    bottom: 'bottomCenter',
    dataSource : []

  };

  handleToggle = prop => enable => {
    this.setState({ [prop]: enable });
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  handleTableLayoutChange = e => {
    this.setState({ tableLayout: e.target.value });
  };

  handleExpandChange = enable => {
    this.setState({ expandable: enable ? expandable : undefined });
  };

  handleEllipsisChange = enable => {
    this.setState({ ellipsis: enable });
  };

  handleHeaderChange = enable => {
    this.setState({ showHeader: enable ? showHeader : false });
  };

  handleRowSelectionChange = enable => {
    this.setState({ rowSelection: enable ? {} : undefined });
  };

  handleYScrollChange = enable => {
    this.setState({ yScroll: enable });
  };

  handleXScrollChange = e => {
    this.setState({ xScroll: e.target.value });
  };

  handleDataChange = hasData => {
    this.setState({ hasData });
  };
  
  async datalist() {
      // userAPI.getUserData().then(res=>{
      //   this.state.dataSource=res.data.data.rows
      //   console.log(88,this.state.dataSource);
      // })
      const data=await userAPI.getUserData()
      this.setState({
        dataSource:data.data.data.rows
      })  
  }

  async componentDidMount(){
    this.datalist()
  }
  componentDidUpdate(){
    this.datalist()
  }

  render() {
    const { xScroll, yScroll, ...state } = this.state;
    const scroll = {};
    if (yScroll) {
      scroll.y = 240;
    }
    if (xScroll) {
      scroll.x = '100vw';
    }

    const tableColumns = columns.map(item => ({ ...item, ellipsis: state.ellipsis }));
    if (xScroll === 'fixed') {
      tableColumns[0].fixed = true;
      tableColumns[tableColumns.length - 1].fixed = 'right';
    }

    return (
      <>
        <Form
          layout="inline"
          className="components-table-demo-control-bar"
          style={{ marginBottom: 16 }}
        >
          <Form.Item label="列标题">
            <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange} />
          </Form.Item>
          <Form.Item label="选择">
            <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange} />
          </Form.Item>
          <Form.Item label="数据">
            <Switch checked={!!state.hasData} onChange={this.handleDataChange} />
          </Form.Item>
          <Form.Item label="行距设置">
            <Radio.Group value={state.size} onChange={this.handleSizeChange}>
              <Radio.Button value="default">默认</Radio.Button>
              <Radio.Button value="middle">中</Radio.Button>
              <Radio.Button value="small">小</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="滚动设置">
            <Radio.Group value={xScroll} onChange={this.handleXScrollChange}>
              <Radio.Button value={undefined}>固定</Radio.Button>
              <Radio.Button value="scroll">左右滚动</Radio.Button>
              <Radio.Button value="fixed">两边固定仅中间滚动</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
        <Table
          {...this.state}
          pagination={{ position: [this.state.top, this.state.bottom] }}
          columns={tableColumns}
          dataSource={state.hasData ? this.state.dataSource : null}
          // dataSource={this.state.dataSource}
          scroll={scroll}
        />
      </>
    );
  }
}


export default User;