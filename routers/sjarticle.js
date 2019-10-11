const user = require('../model/user')
const article = require("../model/article");
module.exports = function (req, res) {
    let page = req.params._id || 1
    page--

    // const maxNum = article.estimatedDocumentCount((err, num) => err ? console.log(err) : num)
    // console.log(maxNum);
    //一步用来获取分类，第二步用来获取种类和获取条数，以及后面的具体的内容列表
    var data = {
        userInfo: req.userInfo,
        count: [],
        categories: [],
        page: Number(req.query.page || 1),
        limit: 10,
        pages: 0,
        contents: []
    }

    article.find()

        // .skip(5 * (page-1)) //跳过多少条
        // .limit(5)
        .populate({ // mongodb用于连表查询
            path: 'author',
            select: '_id username'
        })
        .then((categories) => {
            data.categories = categories;
            // //读取内容的总记录数
            // return article.countDocuments();


        }).then(function (count) {

            data.count = count;

            //计算总页数
            data.pages = Math.ceil(data.count / data.limit); //向上取整
            //取值不能超过pages
            data.page = Math.min(data.page, data.pages);
            //取值不能小于1
            data.page = Math.max(data.page, 1);

            var skip = (data.page - 1) * data.limit;

            return article.find()
                .limit(data.limit).skip(skip).populate({ // mongodb用于连表查询
                    path: 'author',
                    select: '_id username photo'
                }).sort({
                    addTime: -1
                });
        }).then(function (contents) {
            data.contents = contents;
            res.send({
                code: 1,
                data
            })
            // console.log(data);

        })

        .catch(err => {
            console.log(err);

        })
}