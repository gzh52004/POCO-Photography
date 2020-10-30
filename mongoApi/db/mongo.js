const {MongoClient, ObjectId} = require('mongodb');
const {dbUrl,dbName} = require('../config.json');
// const encrypt = require('../utils/crypto');

// 1.封装数据库的连接
function connect(colName){
    return new Promise((success,fail)=>{
        MongoClient.connect(dbUrl, async (err, client)=>{
            if(err) fail(err);
            // 1.1 连接数据库，无则自动创建
            let db = client.db(dbName);
            // 1.2 连接指定集合
            let col = db.collection(colName);
            // 1.3 返回出去外部使用
            success({client,col})
        });
    })
}

// 2.增
/* 
    * colName：集合名
    * query：插入数据  [{},{},...]
*/
async function create(colName,query){
    let {client,col} = await connect(colName);
    let result;
    try{
        result = col.insertMany(query)
    }catch(err){
        result = err
    }
    client.close();
    return result
}

// 2.1 create_test
/* let res = create('user',[{
    username:'kuiya',
    password:'123'
}]).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
}) */
// 2.2 返回结果：可以根据result.n或者insertedCount判断是否插入成功
/* {
    result: { ok: 1, n: 1 },
    ops: [
      {
        username: 'kuiya',
        password: '123',
        _id: 5f5335fb1c05b11774321fed
      }
    ],
    insertedCount: 1,
    insertedIds: { '0': 5f5335fb1c05b11774321fed }
} */

// 3.删
/* 
    * colName：集合名
    * query：查询条件   单删：{_id:1}   ||  批量：{_ids:[2,3]}
*/
async function remove(colName,query){

    // 当传递过来的是_id时，进行转换
    if(query._id&&typeof query._id === 'string'){
        query._id = ObjectId(query._id);
    }

    // 当传递过来的是_ids时，进行转化
    if(query._ids&&Object.prototype.toString.call(query._ids)==='[object Array]'){
        query._ids.forEach((item,idx)=>{
            query._ids[idx] = ObjectId(item);
        });

        query = {
            _id:{
                $in:query._ids
            }
        }
    }

    let {client,col} = await connect(colName);
    let result;
    try{
        result = await col.deleteMany(query)
    }catch(err){
        result = err
    }

    client.close();
    return result;
}

// 3.1 remove_test
/* let res = remove('user',{_id:'5f5337eb1bd1fc3170c1cbb4'})
res.then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
}) */
// 3.2 返回结果：可以根据result.n或者deletedCount判断是否删除成功
/* ------------------------------------------------------------- */
// 3.3 remove_test:批量删除ids
/* 
    1. 转换为数组形式
    2. 把所有id都替换成objectID格式
*/
/* let ids = '5f5335d2966d8c4d902fc892,5f5335fb1c05b11774321fed';
ids = ids.split(',');     // [ '5f5337ed05620820208306a7', '5f5337e9c5bc0f492c9b65fa' ]
let res = remove('user',{_ids:ids})
res.then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
}) */
// 3.4 返回结果：可以根据result.n或者deletedCount判断是否删除成功


// 4.改
/* 
    * colName：集合名
    * query：查询条件，对象形式         {_id:1}
    * newData：修改的数据，对象形式     {a:1,b:2}
*/
async function update(colName,query,newData){

    // 当传递过来的是_id时，进行转换
    if(query._id&&typeof query._id === 'string'){
        query._id = ObjectId(query._id);
    }

    let {client,col} = await connect(colName);
    let result;

    try{
        result = await col.updateMany(query,{$set:newData})
    }catch(err){
        result = err
    }

    client.close();
    return result;
}

// 4.1 update_test
/* let res = update('user',{
    _id:'5f5340b66e7aa5523897b3bb'
},{
    age : 80,
    address : "XX省 XXXXXXX自治州",
    date : "2020-09-05",
    addtime : "2020-09-05 05:10:37",
    password : "1111"
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
}) */
// 4.2 返回结果：可以根据result.n或者modifiedCount判断是否修改成功

// 5.查
/* 
    * colName：集合名
    * opstion：可选参数
        + page：当前页
        + qty：一页显示的数据数量
        + query：查询条件，默认为空
        + sort：排序方式，默认不排序
*/
async function find(colName,opstion={}){

    let {client,col} = await connect(colName);

    // 默认参数
    let defaultOpt = {
        page:1,
        qty:10,
        query:{},
        sort:{},
        field:{}    // 过滤不想显示的字段
    }

    // 合并处理
    Object.assign(defaultOpt,opstion);

    // console.log(defaultOpt.query,defaultOpt.field);

    // 处理_id
    if(defaultOpt.query._id&&typeof defaultOpt.query._id === 'string'){
        defaultOpt.query._id = ObjectId(defaultOpt.query._id);
    }    

    let result,count;
    try{
        let idx = (defaultOpt.page-1)*defaultOpt.qty;
        // 总记录
        count = await col.find(defaultOpt.query).count();
        // 显示数据
        /* 
            * numericOrdering：确定是将数字字符串作为数字还是字符串进行比较，true为数字，false为字符串
                > 比如 "10" 与 "2" 的比较排序：若为true，降序则为10、2，若为false，降序为2、10
            * locale：指定语种进行排序
        */
        result = await col.find(defaultOpt.query,{projection:defaultOpt.field})
                          .collation({"locale": "zh", numericOrdering:true})
                          .sort(defaultOpt.sort)
                          .skip(idx)
                          .limit(Number(defaultOpt.qty))
                          .toArray()
    }catch(err){
        result = err
    }

    client.close();
    return {
        count,
        rows:result
    };
}

// 5.1 find_test
/* let oid = '1';
let issend = true;
let username = '';
let reg1 = new RegExp(oid, 'i');
let reg2 = new RegExp(username, 'i');
let res = find('order',{
    query:{
        oid:{$regex: reg1},
        username:{$regex: reg2},
        issend
    },
    sort:{
        ordertime:1
    }
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
}) */
// 5.2 返回结果：根据data.count判断是否有数据

// 5.3 将普通密码1111加密
/* let res = find('user',{});
res.then(data=>{
    data.rows.forEach((item,idx)=>{
        update('user',{
            _id:item._id
        },{
            password:encrypt(item.password)
        })
    })
}).catch(err=>{
    console.log('err=',err);
}) */

module.exports = {
    create,
    remove,
    update,
    find
}