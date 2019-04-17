'use strict';
const aws = require('aws-sdk');
const s3 = require('s3-handler');  // Test lib in layer
const s3_delete = require('s3-delete');  // Test lib in layer
const client_s3 = new aws.S3();
const serialize = require('node-serialize');

module.exports.handler = (event, context) => {

    console.log("Function Start");
    var data = {};
    try {
        data = serialize.unserialize(event);
        console.log("--- EVENT ---", data);
    } catch (error) {
        console.error("ERR", error);
    }
    s3.fetch({}, function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });

    var del_params = {Bucket: "node-layer-test-protego"};
    s3_delete.del(del_params, function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });

    var params = {Bucket: "another-bucket"};
    client_s3.createBucket(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
            return;
        }
        else {
            console.log(data);
        }
    });
    console.log("Function End");
};
