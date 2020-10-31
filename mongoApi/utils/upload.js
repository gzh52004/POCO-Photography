const multer = require('multer');

function setDirectory(destination){
    var storage = multer.diskStorage({

        // destination:"uploads/",

        destination,

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

    return upload;
}

module.exports = setDirectory;