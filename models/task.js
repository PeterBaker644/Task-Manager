// 
// Might need a little work. Pretty standard.
//

var orm = require("../config/orm.js");

var task = {
    all: function (cb) {
        orm.selectAll("tasks", function (res) {
            cb(res);
        });
    },
    create: function (val, cb) {
        orm.insertOne("tasks", "body", val, function (res) {
            cb(res);
        });
    },
    update: function (condition, cb) {
        orm.updateOne("tasks", 'completed = true', condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("tasks", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = task;
