/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, n * 1000);
    })

}
function calculateTime(t1) {
    const beforeDate = new Date();
    return Promise.all([wait(t1)]).then(() => {
        const totalTimeTaken = new Date() - beforeDate;
        return Promise.resolve(totalTimeTaken);
    })
}
calculateTime(3).then((value) => { console.log(`${value}`) })
module.exports = wait;
