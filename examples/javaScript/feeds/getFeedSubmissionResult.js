'use strict';

var accessKey = process.env.AWS_ACCESS_KEY_ID || 'YOUR_KEY';
var accessSecret = process.env.AWS_SECRET_ACCESS_KEY || 'YOUR_SECRET';

var amazonMws = require('../../../lib/amazon-mws')(accessKey, accessSecret);

var feedRequest = function () {

    var FeedSubmissionId = '10101010XXX';
    amazonMws.feeds.search({
        'Version': '2009-01-01',
        'Action': 'GetFeedSubmissionResult',
        'SellerId': 'SELLER_ID',
        'MWSAuthToken': 'MWS_AUTH_TOKEN',
        'FeedSubmissionId': FeedSubmissionId
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
};

feedRequest();