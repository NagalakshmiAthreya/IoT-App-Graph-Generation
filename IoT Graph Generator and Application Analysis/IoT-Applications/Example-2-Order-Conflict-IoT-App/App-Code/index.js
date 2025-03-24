// index.js - Main application
const sensor = require('./sensor');
const mqtt = require('./mqtt');
const RuleEngine = require('./ruleEngine');
const { createBundle, uploadStr } = require('./lambda');

sensor.on('data', (data) => {
    mqtt.publish(data);
});

mqtt.on('message', (data) => {
    RuleEngine.handleFireDetection(data);
});

// mqtt.on('fire', async (data) => {
//     console.log('Invoking asynchronous handlers...');
//     createBundle(data);
//     uploadStr(data);
//     console.log('Fire detection handlers invoked.');
// });

sensor.start();