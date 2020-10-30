/* 测试上传文件接口 */
const multer = require('multer');
let express = require("express");
let {update} = require("../../db/mongo");
let formatData = require("../../utils/formatData");
let {PORT} = require("../../config.json");
let router = express.Router();

var storage = multer.diskStorage({
    destination:"uploads/",
    filename: function (req, file, cb) {
        /* 
            * req：请求对象
            * file：文件所有信息
                + filedname：upload.single/array设置的名字，比如avatar、photos
                + originalname：上传的文件名字(包含后缀)
                + encodeing
                + mimetype:图片类型(jpg/image)
            * cb：回调
        */
        let filename = file.originalname;
        let arr = filename.split('.');  // ["touxiang","png"]
        cb(null, arr[0] + '-' + Date.now() + '.' + arr[1])
    }
})

var upload = multer({ storage: storage });

// 1.根据_id修改用户头像
router.post('/avatar', upload.single('avatar'), async (req, res)=>{
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any

    console.log(req.file);
    /* 
        * file:文件信息
            + filedname：upload.single/array设置的名字
            + originalname：文件原名字
                > image.jpg
            + destination：存放的目录
                > uploads/
            + filename：经过storage文件配置后的文件重命名
                > avatar-1599486327450.png
            + path：拼接后的相对路径
                > uploads\\avatar-1599486327450.png
    */
    // console.log(req.body);

    /* 目的：拼接出能过在静态资源服务器上显示的图片路径 */
    let {_id} = req.body;
    let url = `http://localhost:${PORT}/${req.file.destination}${req.file.filename}`   // http://localhost:2004/uploads/avatar-1599486398908.png

    try{
        let data = await update('user',{
            _id
        },{
            avatar:url,
            filename:req.file.originalname
        })
        if(data.modifiedCount){
            res.send(formatData({
                code:1,
                msg:'修改成功！'
            }))
        }else{
            res.send(formatData({
                code:0,
                msg:'修改失败！'
            }))
        }
    }
    catch(err){
        res.send(formatData());
    }
})

// 2.根据_id修改图片组
router.post('/goodimgs', upload.array('photos', 3), async (req, res)=>{
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any

    // console.log(req.files); // 以数组形式存有所有文件信息 [{},{}]
    // console.log(req.body);  // 除文件信息外的所有信息

    /* {
        fieldname: 'photos',
        originalname: 'tx-1599464518319.jpg',
        encoding: '7bit',
        mimetype: 'image/jpeg',
        destination: 'uploads/',
        filename: 'tx-1599464518319-1599487166073.jpg',
        path: 'uploads\\tx-1599464518319-1599487166073.jpg',
        size: 18339
    } */

    let {_id,name} = req.body;
    let imgurl = [];

    req.files.forEach(item=>{
        let url = `http://localhost:${PORT}/${item.destination}${item.filename}`
        imgurl.push(url);
    })
    
    try{
        let data = await update('goods',{
            _id
        },{
            name,
            imgurl
        })
        if(data.modifiedCount){
            res.send(formatData({
                code:1,
                msg:'修改成功！'
            }))
        }else{
            res.send(formatData({
                code:0,
                msg:'修改失败！'
            }))
        }
    }catch(err){
        res.send(formatData())
    }
})

module.exports = router;