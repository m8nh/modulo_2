class StopWatch {
    constructor(starTime,endTime) {
        this.starTime = starTime;
        this.endTime = endTime;
    }
    star(){
        let currentStartTime = new Date()
        this.starTime = currentStartTime.getSeconds()*1000 + currentStartTime.getMilliseconds();
        return this.starTime;
    }
    stop(){
        let currentEndTime = new Date()
        this.endTime = currentEndTime.getSeconds()*1000 + currentEndTime.getMilliseconds();
        return this.endTime
    }
    getElapsedTime(){
        return (this.endTime-this.starTime);
    }
}
function randomUniqueNum (range, outputCount){
    let arr = []
    for (let i = 1; i <= range; i++) {
        arr.push(i);
    }
     let result = [];
    for (let i = 1; i <= outputCount; i++) {
        const random = Math.floor(Math.random() * (range - i));
        result.push(arr[random]);
        arr[random] = arr[range - i];
    }
    return result;
}

let StopWatch = new StopWatch();
stopWatch.star()
let a = randomUniqueNum(1000000, 100000);
stopWatch.stop()
console.log(stopWatch.starTime)
console.log(stopWatch.endTime)
console.log(stopWatch.getElapsedTime)
console.log(a);