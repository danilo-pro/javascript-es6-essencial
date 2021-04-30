class Observable {
    constructor() {
        this.observables = [];
    }

    subscrible(fn) {
        this.observables.push(fn);
    }

    notify(data) {
        this.observables.forEach(fn => fn(data));
    }

    unsbscrible(fn) {
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscrible 1: ${data}`);
const logData2 = data => console.log(`Subscrible 2: ${data}`);
const logData3 = data => console.log(`Subscrible 3: ${data}`);

o.subscrible(logData1);
o.subscrible(logData2);
o.subscrible(logData3);

o.notify('Notified 1');

o.unsbscrible(logData2);

o.notify('Notified 2');