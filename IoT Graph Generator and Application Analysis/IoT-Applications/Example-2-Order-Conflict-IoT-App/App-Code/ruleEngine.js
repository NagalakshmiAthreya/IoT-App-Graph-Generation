// ruleEngine.js - Processing sensor data
const mqtt = require('./mqtt');

const { createBundle, uploadStr } = require('./lambda');
class RuleEngine {
    static handleFireDetection(data) {
        if (data > 50) {
            console.log('Fire detected! Processing handlers...');
            // setImmediate(() => mqtt.emit('fire', data));
            console.log('Invoking asynchronous handlers...');
            // const data = JSON.stringify(data)
            createBundle(data);
            uploadStr(data);
            console.log('Fire detection handlers invoked.');
        }
    }
}
module.exports = RuleEngine;