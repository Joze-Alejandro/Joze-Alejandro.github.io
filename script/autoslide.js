let control = document.querySelector('.control');
let container = document.querySelector('.container');

let p = false;			//power
let d = 1500;			//delay
let meter;
let buf;
let buf2;
let pause;
let interval;
container.ondblclick = checkdbl;
container.onmouseenter = control.onmouseenter = () => {pause = true;  afd()};
container.onmouseleave = control.onmouseleave = () => {pause = false; afd()};

check();

function checkdbl() {
    p = !p;
    check();
}

function check() {
	// p = (buf != undefined) ? buf : p;
    console.log('power = '+p);
    // p ? power_on() : power_off();
    
    afd();
}

// function power_on() {
// 	!interval ? (meter = setInterval(next, d), interval = !interval, console.log('run')) : null;
// }

// function power_off() {
// 	interval ? (clearInterval(meter), interval = !interval, console.log('pause')) : null;
// }

function afd() {
    !(p && !pause) ? (interval ? (clearInterval(meter), interval = !interval, console.log('pause')) : null) : (!interval ? (meter = setInterval(next, d), interval = !interval, console.log('run')) : null)
}