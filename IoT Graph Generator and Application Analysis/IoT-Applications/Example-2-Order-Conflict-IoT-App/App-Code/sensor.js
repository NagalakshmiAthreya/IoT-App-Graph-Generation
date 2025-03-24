const EventEmitter = require('events');
class Sensor extends EventEmitter {
    constructor() {
        super();
        this.threshold = 50; // Example threshold for fire detection
    }
    
    start() {
        // setInterval(() => {
            const temperature = Math.random() * 100; // Simulated sensor data
            console.log(`Sensor reading: ${temperature}`);
            this.emit('data', temperature);
        // }, 2000);
    }
}
module.exports = new Sensor();