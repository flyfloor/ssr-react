const users = [{
    id: 1,
    name: 'jerry',
    sex: 'male',
    age: 18,
    stupid: false,
}, {
    id: 2,
    name: 'marryxxx',
    sex: 'female',
    age: 20,
    stupid: false,
}]

exports.list = function(req, res, next) {
    res.render('list', {
        users: users
    });
};