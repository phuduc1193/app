'use strict';

var service = {
  validateEmail: function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
  },
  //Query mongodb as SQL query LIKE
  queryLIKE: function (modelCollection, attribute, likeParam, callback) {
    var query = {};
    query[attribute] = new RegExp('^' + likeParam + '$', "i");
    collection.find(query);
    callback(err, data);
  },
  //Handle response status and message based on data input
  response: function (res, data) {
    if (data != null && data.length != 0)
      res.status(200).json(successResponseWithData(data));
    else
      res.status(404).json(noDataResponse());
  }
}

function noDataResponse () {
  return {
    response: {
      code: 404,
      message: 'No data found'
    }
  }
}

function successResponseWithData (data) {
  return {
    response: {
      code: 200,
      message: 'Success'
    },
    data: data
  }
}

module.exports = service;