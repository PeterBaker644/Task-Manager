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
        let queryString = "INSERT INTO ?? (??) VALUES ?";

        connection.query(
            queryString,
            [table, col, val],
            function (err, result) {
                if (err) throw err;
                cb(result);
            });
    },
    updateOne: function (table, objColVal, condition, cb) {
        let queryString = "UPDATE ?? SET ?? WHERE "
        queryString += condition;

        condition.query(
            queryString,
            [table, objColVal],
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