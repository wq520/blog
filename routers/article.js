const express = require("express");
const article = require("../model/article");
const comment = require("../model/comment");

let router = express.Router();

//发表文章
router.post("/", (req, res) => {
    let {
        title,
        tags,
        content
    } = req.body;

    // console.log(req.body);


    if (!(title && content)) {
        return res.send({
            code: 0,
            msg: "文章格式错误"
        });
    }

    article.create({
        title,
        content,
        tags: tags.join(","),
        author: req.session.userInfo._id,
        commentNum: 0,
        readNum: 0
    }).then((data) => {
        if (data) {
            res.send({
                code: 1,
                msg: "文章发表成功"
            });
        } else {
            res.send({
                code: 0,
                msg: "服务器异常~请稍后重试~"
            });
        }
    }).catch(e => {
        res.send({
            code: 0,
            msg: "服务器异常~请稍后重试~"
        });
    });
});

//访问文章页面
router.get("/:_id", (req, res) => {
    let _id = req.params._id;
    // 更新当前文章的阅读量
    article.update({
        _id: req.params._id
    }, {
        $inc: {
            readNum: 1
        }
    }, err => {
        if (err) return console.log(err);
    })
    if (!_id) {
        res.render("article", {
            code: 0,
            msg: "没有对应的文章"
        });
    } else {
        article.findById(_id).populate("author")
            .then(data => {
                if (data) {
                    let time = format(data.date)
                    comment.find({
                            article: _id
                        }).populate({
                            path: 'author',
                            select: '_id username userInfo.photo'
                        })
                        .then(commentData => {
                            commentData = commentData.reverse()
                            res.render("article", {
                                code: 1,
                                data,
                                time,
                                commentData,
                                format
                            });
                        })
                        .catch(e => {
                            res.render("article", {
                                code: 1,
                                data,
                                comentData: [],
                            });
                        });
                } else {
                    res.render("article", {
                        code: 0,
                        msg: "没有对应的文章"
                    });
                }
            })
            .catch(e => {
                res.render("article", {
                    code: 0,
                    msg: "服务器异常"
                });
            });

    }
});

function format(timestamp) {
    var time = new Date(timestamp);
    var year = time.getFullYear();
    var month = (time.getMonth() + 1) > 9 && (time.getMonth() + 1) || ('0' + (time
        .getMonth() +
        1))
    var date = time.getDate() > 9 && time.getDate() || ('0' + time.getDate())
    var hour = time.getHours() > 9 && time.getHours() || ('0' + time.getHours())
    var minute = time.getMinutes() > 9 && time.getMinutes() || ('0' + time.getMinutes())
    var second = time.getSeconds() > 9 && time.getSeconds() || ('0' + time.getSeconds())
    var YmdHis = year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
    return YmdHis;
}

module.exports = router;
