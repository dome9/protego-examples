'use strict';

const aws = require('aws-sdk');
const s3 = new aws.S3();

var getParams = {
    Bucket: 'devdatta-policy-bucket-test',
    Key: 'arn:aws:lambda:us-east-1:188911838461:function:shmorDemo_get_events:$LATEST'
}

exports.handler = async (event) => {
    s3.createBucket(getParams, function (err, data) {
        if (err)
            return err;

        let objectData = data.Body.toString('utf-8');
        console.log(objectData);
    });
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};