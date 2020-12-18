let slide = document.querySelectorAll('.slide');
let previous_button = document.querySelector('.previous-button');
let next_button = document.querySelector('.next-button');
let radiocontrol = document.querySelector('.slide-radiocontrol');
let radiobuttons = document.querySelectorAll('.slide-radiobutton');
let rl = radiobuttons.length;	//radiobuttons length
let c;							//current
let b;							//boofer
let route;						//route
let t;
let x;

next_button.onclick = next;
previous_button.onclick = prev;
radiocontrol.onclick = jai;

jai();

function next() {
	slides(1);
}

function prev() {
	slides(-1);
}

function jai() {
	for(i=0; i<rl; i++) {
		if (radiobuttons[i].checked) {
			c = 0;
			slides(i);
		};
	};
}

function slides(i) {
	console.clear();
	c += i;
	c = nplet(c);

	function nplet(q) {
		q = (q < 0) ? (q + rl) % rl : (q % rl);
		return q;
	}

	radiobuttons[c].checked = true;
	route = ((Math.abs(c - b) < (rl / 2)) && ((c - b) > 0)) || ((Math.abs(c - b) > (rl / 2)) && ((c - b) < 0));
	b = c;

	for(let q=0; q<rl; q++) {
		x = q + c + Math.ceil(rl / 2);
		x = nplet(x);
		t = route ? (rl - 1) - q : q;
		slide[x].style.zIndex = t;
	};

	console.log('порядок слайдов '+(c + 1));
	for(let q=0; q<rl; q++) {
		x = q + c + Math.ceil(rl / 2);
		x = nplet(x);
		t = q - Math.floor(rl / 2);
		slide[x].style.left = 100 * t + "%";
		x == c ? console.log('    слайд '+(x + 1)) : console.log('  слайд '+(x + 1));
	};
}


function tstart () {
	next_button.disabled = true;
	previous_button.disabled = true;
	radiocontrol.style.pointerEvents = "none";
}

function tend() {
	next_button.disabled = false;
	previous_button.disabled = false;
	radiocontrol.style.pointerEvents = "auto";
}

slide[c].addEventListener("transitionend", tend);
slide[c].addEventListener("transitionstart", tstart);