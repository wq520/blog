const user = require('../model/user')
//node自带的加密模块
const crypto = require("crypto");

module.exports = function (req, res) {
    user.findOne({
            username: req.body.username

        })
        .then(data => {
            if (data) {
                //用户存在
                //检测密码是否匹配
                let Pwd = crypto.createHash('sha256').update(req.body.password).digest("hex");
                if (Pwd === data.password) {
                    //登录成功后给客户端设置一个cookie
                    res.cookie('_id', data._id, {
                        maxAge: 1000 * 60 * 60
                    })
                    //登录成功标记改用户已经登录
                    req.session.userInfo = data;

                    //密码正确
                    res.send({
                        code: 1,
                        msg: "登录成功"
                    })

                } else {
                    //密码不正确
                    res.send({
                        code: 0,
                        msg: "密码错误"
                    })
                }

            } else(
                //用户不存在
                res.send({
                    code: 0,
                    msg: "用户名不存在"
                })
            )
        })
        .catch(err => {
            res.send({
                code: 0,
                msg: "服务器异常，请重试~"
            })
        })
}