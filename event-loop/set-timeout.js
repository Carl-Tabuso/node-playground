export default function setTimeoutEvent() {
    console.log('start process'); // runs first
    setTimeout(() => {
        console.log('second process'); // runs last
    });
    console.log('third process'); // runs second
}