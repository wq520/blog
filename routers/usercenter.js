const user = require('../model/user')

module.exports = function (req, res) {
    // user.findById(req.cookie._id)
    //     .then(data => {
    //         // console.log(data);

    //         if (data) {
    //             res.render('/usercenters', {
    //                 username: data.username
    //             })
    //         } else {
    //             res.render('/usercenters', {
    //                 username: null
    //             })
    //         }
    //     })
    // console.log(req.session.userInfo)

    let data = {}
    if (req.session.userInfo) {
        // data = req.session.userInfo
        user.findById(req.session.userInfo._id).then(data => {
            res.render('usercenter', data)
        })
    } else {
        res.render('usercenter', {
            _id: null
        })
    }
}