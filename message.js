let slide = document.querySelectorAll('.slide');
let previous_button = document.querySelector('.previous-button');
let next_button = document.querySelector('.next-button');
let radiobuttons = document.querySelectorAll('[name="rgb-slider"]');
let rbcont = document.querySelector('.radiobuttons');
next_button.onclick = next;
previous_button.onclick = prev;
rbcont.onclick = jai;


let rl = radiobuttons.length;	//radiobuttons length
let c = 0;						//current
let n = 0;						//next
let p = 0;						//previous
let b = 0;						//boofer
let rout;
let t
let x
jai();


function next() {
	slides(1);
}

function prev() {
	slides(-1);
}

function slides(i) {
	c += i;
	n = c + 1;
	p = c - 1;

	c = nplet(c);
	n = nplet(n);
	p = nplet(p);

	function nplet(q) {
		q = (q < 0) ? (q + rl) : (q);
		q = q % rl;
		return q;
	}

	radiobuttons[c].checked = true;

	rout = ((Math.abs(c - b) < (rl / 2)) && ((c - b) > 0)) || ((Math.abs(c - b) > (rl / 2)) && ((c - b) < 0)) || (Math.abs(c - b) == (rl / 2));
	// alert(rout);
	b = c;


	for(let q=0; q<rl; q++) {
		x = q + c + Math.ceil(rl / 2);
		x = nplet(x);
		t = rout ? (rl - 1) - q : q;
		slide[x].style.zIndex = t;
	};

	console.log('порядок слайдов '+(c + 1));
	for(let q=0; q<rl; q++) {
		x = q + c + Math.ceil(rl / 2);
		x = nplet(x);
		t = q - Math.floor(rl / 2);
		slide[x].style.left = 100 * t + "%";
		console.log('слайд '+(x + 1));
	};

}





function jai() {
	for(i=0; i<rl; i++) {
		if (radiobuttons[i].checked) {
			c = 0;
			slides(i);
		};
	};
}

function tstart () {
	next_button.disabled = true;
	previous_button.disabled = true;
	rbcont.style.pointerEvents = "none";
}

function tend() {
	next_button.disabled = false;
	previous_button.disabled = false;
	rbcont.style.pointerEvents = "auto";
}

// slide[c].addEventListener("transitionend", tend);
// slide[c].addEventListener("transitionstart", tstart);