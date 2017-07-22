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
  },
  jwtClaims: function (id) {
    return {
      sub: id,
      exp: (new Date(new Date().setDate(new Date().getDate() + 15)).getTime() / 1000 | 0),
    }
  },
  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}

function noDataResponse () {
  return {
    status: {
      code: 404,
      message: 'No data found'
    }
  }
}

function successResponseWithData (data) {
  return {
    status: {
      code: 200,
      message: 'Success'
    },
    data: data
  }
}

module.exports = service;