
function counter(duration = 100) {
    let x = 0;
    let totalInterval = 0;
    let intervalId;
    if (intervalId) {
        clearInterval(intervalId)
    }
    intervalId = setInterval(() => {
        totalInterval += duration;
        let intervalCount = Math.floor(totalInterval / duration);
        x += 5;
        console.log(`counter -value :${x} at ${intervalCount} seconds`)

    }, duration)
}
counter(1000);
exports.default = counter;