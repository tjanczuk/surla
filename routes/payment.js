var db = require('../src/db.js')
    , config = require('../src/config.js')
    , https = require('https')
    , crypto = require('crypto');

exports.finish = function (id, res, view, message) {
    db.post(id, 'application/json', [ message, null ], 0, function (error) {
        if (error) {
            config.logger.error('Unable to post payment completion to relay', { id: id, error: error });
            res.render('interactions/paymentfailed');
        }
        else {
            res.render('interactions/' + view);
        }
    });
}
