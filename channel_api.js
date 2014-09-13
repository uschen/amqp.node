'use strict';
var raw_connect = require('./lib/connect').connect;
var ChannelModel = require('./lib/channel_model').ChannelModel;
var Promise = require('bluebird');
var debug = require('debug')('amqp');

function connect(url, connOptions) {
  debug('url:', url);
  return new Promise(function (resolve, reject) {
    raw_connect(url, connOptions, function (err, conn) {
      if (err === null) {
        resolve(new ChannelModel(conn));
      } else {
        reject(err);
      }
    });
  });
}

module.exports.connect = connect;
