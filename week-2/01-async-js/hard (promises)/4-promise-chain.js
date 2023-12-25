/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    const beforeTime = new Date();
    return new Promise((resolve) => {
        setTimeout(() => {

            resolve(new Date() - beforeTime);
        }, t * 1000)
    })
}

function wait2(t) {
    const beforeTime = new Date();
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date() - beforeTime);
        }, t * 1000)
    })
}

function wait3(t) {
    const beforeTime = new Date();
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date() - beforeTime);
        }, t * 1000)
    })
}

function calculateTime(t1, t2, t3) {
    let totalTime = 0;


    return new Promise((resolve) => {
        wait1(t1).then((value) => {
            totalTime += value;

            return wait2(t2)

        }).then((value) => {

            totalTime += value;
            return wait3(t3);
        }).then((value) => {


            totalTime += value;
            resolve(totalTime);
        })

    })

}

module.exports = calculateTime;
