const express = require("express");
const router = express.Router();
const { PORT } = require("../../config.json");
const formatData = require("../../utils/formatData");
const { find, create, update, remove } = require("../../db/mongo");
let setDirectory = require("../../utils/upload");
const Mock = require("mockjs"); // 假数据

// 设置文件存放目录
let upload = setDirectory("uploads/goods/");

// 1.商品列表分页信息(包含模糊查询)
router.get("/list", async (req, res) => {
  // query:{"goodname":"裤","store":"杰克"}
  // sort:{"price":-1} 或者不填
  let { page = 1, qty = 10, query = {}, sort = {} } = req.query;

  // 对sort和query进行json化防止出错
  if (Object.prototype.toString.call(sort) !== "[object Object]") {
    try {
      sort = JSON.parse(sort);
    } catch {
      sort = {};
    }
  }
  if (Object.prototype.toString.call(query) !== "[object Object]") {
    try {
      query = JSON.parse(query);

      // 遍历搜索条件并设置正则
      for (let key in query) {
        let reg = new RegExp(query[key], "i");
        query[key] = { $regex: reg };
      }
    } catch (err) {
      query = {};
    }
  }

  try {
    let data = await find("list", {
      page,
      qty,
      query,
      sort,
    });
    if (data.count) {
      res.send(
        formatData({
          code: 1,
          msg: "获取商品信息成功！",
          data,
        })
      );
    } else {
      res.send(
        formatData({
          code: 0,
          msg: "获取商品信息失败！",
        })
      );
    }
  } catch (err) {
    console.log(err);
    res.send(formatData());
  }
});

// 2.根据_id查询商品信息
router.get("/getGoodInfo/:_id", async (req, res) => {
  let { _id } = req.params;
  try {
    let data = await find("goods", {
      query: {
        _id,
      },
    });
    if (data.count) {
      res.send(
        formatData({
          code: 1,
          msg: "获取指定商品信息成功！",
          data,
        })
      );
    } else {
      res.send(
        formatData({
          code: 0,
          msg: "获取指定商品信息失败！",
        })
      );
    }
  } catch (err) {
    res.send(formatData());
  }
});

// 3.根据gid修改商品信息(包含图片)
router.post("/edit/:_id", upload.array("goods", 5), async (req, res) => {
  // console.log(req.body);
  // console.log(req.params);
  // console.log(req.files);

  let { _id } = req.params;
  // 有上传图片则修改图片，没有则不设置goodurl属性来更新商品图片信息
  if (req.files.length) {
    let imgArr = [];
    req.files.forEach((pic) => {
      imgArr.push({
        picname: pic.originalname,
        picurl: `http://localhost:${PORT}/${pic.destination}${pic.filename}`,
      });
    });
    req.body.goodurl = imgArr;
  }
  try {
    let data = await update(
      "goods",
      {
        _id,
      },
      {
        ...req.body,
      }
    );
    if (data.modifiedCount) {
      res.send(
        formatData({
          code: 1,
          msg: "修改商品信息成功！",
        })
      );
    } else {
      res.send(
        formatData({
          code: 0,
          msg: "修改商品信息失败！",
        })
      );
    }
  } catch (err) {
    res.send(formatData());
  }
});

// 4.根据id删除指定商品
router.delete("/del/:_id", async (req, res) => {
  let { _id } = req.params;
  try {
    let data = await remove("goods", {
      _id,
    });
    if (data.result.n) {
      res.send(
        formatData({
          code: 1,
          msg: "删除成功！",
        })
      );
    } else {
      res.send(
        formatData({
          code: 0,
          msg: "删除失败！",
        })
      );
    }
  } catch (err) {
    res.send(formatData());
  }
});

// 5.批量删除商品
router.delete("/dels", async (req, res) => {
  let { ids } = req.body;
  console.log(ids);
  ids = ids.split(",");
  try {
    let data = await remove("goods", {
      _ids: ids,
    });
    if (data.deletedCount) {
      res.send(
        formatData({
          code: 1,
          msg: "批量删除成功！",
        })
      );
    } else {
      res.send(
        formatData({
          code: 0,
          msg: "批量删除失败！",
        })
      );
    }
  } catch (err) {
    res.send(formatData());
  }
});

// 6.新增商品
router.post("/addGood", upload.array("goods", 5), async (req, res) => {
  // console.log(req.body);
  // console.log(req.files);

  // 如果有图片信息，则写入req.body里，再于执行语句时解构
  if (req.files.length) {
    let goodurl = [];
    req.files.forEach((img) => {
      goodurl.push({
        picurl: `http://localhost:${PORT}/${img.destination}${img.filename}`,
        picname: img.originalname,
      });
    });
    req.body.goodurl = goodurl;
  }

  // console.log(req.body);

  try {
    let data = await create("goods", [
      {
        gid: Mock.mock("@id"),
        ...req.body,
      },
    ]);
    if (data.insertedCount) {
      res.send(
        formatData({
          code: 1,
          msg: "新增商品成功！",
        })
      );
    } else {
      res.send(
        formatData({
          code: 0,
          msg: "新增商品失败！",
        })
      );
    }
  } catch (err) {
    console.log(err);
    res.send(formatData());
  }
});

module.exports = router;
