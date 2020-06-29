const connection = require("./connection.js");
const util = require("util");

const orm = {
    selectAll: function (table, cb) {
        connection.query(`SELECT * FROM ${table};`, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, col, val, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)";

        connection.query(
            queryString,
            [table, col, val],
            function (err, result) {
                if (err) throw err;
                cb(result);
            });
    },
    updateOne: function (table, condition1, condition2, cb) {
        let queryString = "UPDATE ?? SET ";
        queryString += condition1;
        queryString += " WHERE ";
        queryString += condition2;

        connection.query(
            queryString,
            [table],
            function (err, result) {
                if (err) throw err;
                cb(result);
            });
    },
    delete: function (table, condition, cb) {
        let queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
}

module.exports = orm;