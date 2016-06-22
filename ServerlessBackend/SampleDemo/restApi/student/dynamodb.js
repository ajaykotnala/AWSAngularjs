'use strict';

var dynamodb = module.exports;

var projectName = process.env.SERVERLESS_PROJECT_NAME;
var stage = process.env.SERVERLESS_STAGE;

var projectTable = projectName + '-project-' + stage;
var studentTable = studentsls;

var byId = 'by-id';
var byUserId = 'by-userid';

dynamodb.byId = byId;
dynamodb.byUserId = byUserId;

dynamodb.projects = vogels.define('Project', {
    hashKey: 'index',
    timestamps: true,
    schema: {
        id: vogels.types.uuid(),
        index: joi.string(),
        name: joi.string(),
        description: joi.string()
    },
    indexes: [
        { hashKey: 'id', name: byId, type: 'global' }
    ],
    tableName: studentTable
});