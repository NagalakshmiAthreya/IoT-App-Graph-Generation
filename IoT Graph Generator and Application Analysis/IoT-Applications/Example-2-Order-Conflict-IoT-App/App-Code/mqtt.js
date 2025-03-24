// mqtt.js - MQTT module for publishing and subscribing
const EventEmitter = require('events');
class MQTTHandler extends EventEmitter {
    publish(data) {
        console.log(`MQTT Published: ${data}`);
        this.emit('message', data);
    }
}
module.exports = new MQTTHandler();

// // ruleEngine.js - Processing sensor data
// const mqtt = require('./mqtt');
// class RuleEngine {
//     static handleFireDetection(data) {
//         if (data > 50) {
//             console.log('Fire detected! Processing handlers...');
//             setImmediate(() => mqtt.emit('fire', data));
//         }
//     }
// }
// module.exports = RuleEngine;
