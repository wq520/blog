const article = require('../model/article')

module.exports = function (req, res) {
    let {
        title,
        tags,
        content
    } = req.body;
    if (!(title && tags.length && content)) {
        return res.send({
            code: 0,
            msg: "格式错误"
        });
    }
    article.create({
        title,
        content,
        tags: tags.join(","),
        author: req.session.userInfo._id
    }).then((data) => {
        if (data) {
            res.send({
                code: 1,
                msg: "文章发表成功"
            });
        } else {
            res.send({
                code: 0,
                msg: "文章发表失败"
            });
        }
    }).catch(err => {
        res.send({
            code: 0,
            msg: "服务器异常~请稍后重试~"
        });
    });
}