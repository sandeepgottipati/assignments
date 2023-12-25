

function setCustomInterval(callback, duration = 100) {

    let intervalId;
    function execute() {
        callback();
        intervalId = setTimeout(execute, duration);
    }
    intervalId = setTimeout(execute, duration);

    return () => {
        clearTimeout(intervalId)
    }

}

const intervalID = setCustomInterval(() => { console.log("hi") }, 1000);
setTimeout(intervalID, 6000);