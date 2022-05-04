//GLobal Object 

//console.log(global);


global.setTimeout(() => {
    console.log('in the timeOut')
}, 1000);

setInterval(() => {
    console.log('time Interval')
}, 1000);

console.log(__filename)
console.log(__dirname)