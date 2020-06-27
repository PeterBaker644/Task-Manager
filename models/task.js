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
    create: function (col, val, cb) {
        orm.insertOne("tasks", col, val, function (res) {
            cb(res);
        });
    },
    update: function (objColVal, condition, cb) {
        orm.updateOne("tasks", objColVal, condition, function (res) {
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
