import React from 'react';
import { Table, Button} from 'antd';

function List() {
    const columns = [
        {
          title: 'id',
          width: 20,
          dataIndex: 'id',
          key: 'id',
          fixed: 'left',
        },
        {
          title: '作者名字',
          width: 30,
          dataIndex: 'name',
          key: 'name',
          fixed: 'left',
        },
        {
          title: '图片',
          dataIndex: 'address',
          key: '1',
          width: 100,
        },
        {
          title: '内容',
          dataIndex: 'address',
          key: '2',
          width: 100,
        },
        
       
      //  Action
        {
          title: '',
          key: 'operation',
          fixed: 'right',
          width: 25,
          render: () => <Button danger>编辑</Button>,
        }, {
          title: '',
          key: 'operation',
          fixed: 'right',
          width: 25,
          render: () => <Button danger>删除</Button>,
        }
        
      ];
      
      const data = [];
      for (let i = 0; i < 100; i++) {
        data.push({
          key: i,
          name: `Edrward ${i}`,
          id: i+1,
          address: `London Park no. ${i}`,
        });
      }
    return (
        <div>
            <Table columns={columns} dataSource={data} scroll={{ x: 1000, y: 500 }} />
        </div>
    )
}

export default List