import { EventEmitter } from 'node:events';

const customEmitter = new EventEmitter();
let eventName;

const setEventName = (event) => {
    eventName = event;
    customEmitter.on(eventName, () => {
        console.log(`You dispatched ${eventName}, that refreshed the server`);    
    });
}

const emitEvent = () => {
    customEmitter.emit(eventName);
}

export { setEventName, emitEvent };