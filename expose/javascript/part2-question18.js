function timeFunction() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    console.log(time);
}
setInterval(timeFunction, 1000)
