const user = require('../model/user')

module.exports = function (req, res) {
    let _id = req.session.userInfo._id
    let postData = req.body

    let data = {}
    for (let [key, value] of Object.entries(postData)) {
        if (value) {
            data['userInfo.' + key] = value
        }
    }
    user.updateOne({
            _id
        }, {
            $set: data
        }, {
            runValidators: true
        })
        .then((data) => {
            res.send({
                code: 1,
                msg: '更新成功'
            })
        })
        .catch(err => {
            let msg = err.ValidationError ?
                "更新失败，数据格式不正确！" :
                "更新失败…服务器异常，请重试…";
            res.send({
                code: 0,
                msg
            });
        })
}