const user = require('../model/user')

module.exports = function (req, res) {

    let data = {}
    if (req.session.userInfo) {
        // data = req.session.userInfo
        user.findById(req.session.userInfo._id).then(data => {
            res.render('contact', data)
        })
    } else {
        res.render('contact', {
            _id: null
        })
    }
}