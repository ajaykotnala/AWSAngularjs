'use strict';
var aws = require('aws-sdk');
var async = require('async');
var vogels = require('vogels');
var joi = require('joi');

var dynamodbitems = require('./dynamodb.js');


// Lambda Handler
module.exports.handler = function (event, context, callback) {
    lib.logging.standardLog(event, context);
    console.log("Event:" + JSON.stringify(event));
    try {
        var httpHandler = getHttpHandler(event);
        if (!httpHandler) {
            console.error("HTTP Method Not Supported");
            return callback(new Error("HTTP Method Not Supported"));
        }
        httpHandler(event, context);
    }
    catch (exception) {
        console.error(lib.errors.unexpectedErrorText() + exception);
        return callback(lib.errors.unexpectedErrorRequestText() + context.awsRequestId);
    }
};
    // Get project or projects
    function getHandler(event, context) {
      console.log("get handler execution:", param)
    dynamodbitems.projects
    .query(event.studentId)
    .exec(
       function (err, data) {
           if (err) context.fail(err);
           else {
              (context.succeed(data));
           }
       });
    }

function getHttpHandler(event) {
    switch (event.httpMethod) {
        // case 'DELETE':
        //     return deleteHandler;
        case 'GET':
            return getHandler;
        // case 'POST':
        //     return postHandler;
        // case 'PUT':
        //     return putHandler;
        default:
            return null;
    }

    // Delete a project instance
    // function deleteHandler(event, context) {
    //     console.log("projectId:", event.projectId);
    //     prv.removeServiceInstance({
    //         accountId: event.accountId,
    //         serviceId: event.projectId
    //     },
    //     function (err, data) {
    //         if (err) context.fail(err);
    //         else (context.succeed(data));
    //     });
    // }



//     console.log('Loading event');
// var AWS = require('aws-sdk');
// var dynamodb = new AWS.DynamoDB();

// var params = {
//     TableName : 'DemoStudent',
    
//   };
// exports.handler = function(event, context,callback) {
//   dynamodb.scan(params, function(err, data) {
//     if (err) {
//       console.log(err); // an error occurred
//       } 
//     else {
//       console.log(data); // successful response
//      callback(null, data.Items);
//       }
//   });
// };


    // Update a project instance
    ////MS todo: implement
    //function putHandler(event, context) {
    //    var project = lib.util.projectFromEvent(event);
    //    if (project.err) {
    //        context.fail(project.err);
    //    } else {
    //        prv.update(project.data)
    //            .then(function (data) {
    //                if (!data) {
    //                    context.fail(lib.errors.resourceNotFoundErrorText());
    //                } else {
    //                    context.done(null, data);
    //                }
    //            })
    //            .catch(function (err) { context.fail(err); });
    //    }
    //}

    // Create a project instance
    // function postHandler(event, context) {
    //     var project = lib.util.projectFromBody(event.body);
    //     if (project.err) {
    //         context.fail(project.err);
    //     } else {
    //         prv.createServiceInstance({
    //             config: project.data,
    //             accountId: event.accountId,
    //             serviceTypeId: serviceTypeId
    //         },
    //             function (err, data) {
    //                 if (err) context.fail(err);
    //                 else (context.succeed(data));
    //             });
    //     }
    // }

};
