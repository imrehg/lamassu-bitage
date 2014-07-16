'use strict';

var BitageTicker = function () {

};

BitageTicker.factory = function factory() {
    return new BitageTicker();
};

BitageTicker.prototype.ticker = function ticker(currencies, callback) {
    // Dummy callback for the moment
    callback(null, {
        TWD: {currency: 'TWD', rate: 20000}
    });
};

module.exports = BitageTicker;
