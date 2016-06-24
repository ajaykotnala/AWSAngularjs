'use strict';

var dynamodb = module.exports;
const vogels = require('vogels'),
    joi = require('joi'),
     async = require('async'),
     aws = require('aws-sdk');

var projectName = process.env.SERVERLESS_PROJECT_NAME;
var stage = process.env.SERVERLESS_STAGE;

var studentTable = "StudentTableSls";

var byId = 'by-id';
var byUserId = 'by-userid';

dynamodb.byId = byId;

dynamodb.students = vogels.define('students', {
    hashKey: 'studentId',
    timestamps: true,
    schema: {
        studentId: joi.string(),
        studentName: joi.string()
    },
    indexes: [
        { hashKey: 'studentId', name: byId, type: 'global' }
    ],
    tableName: studentTable
});