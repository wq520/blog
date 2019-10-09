const user = require('../model/user')

module.exports = function (req, res) {

    let data = {}
    if (req.session.userInfo) {
        data = req.session.userInfo
    } else {
        data = {
            _id: null
        }
    }
    res.render('canvas', data)
}