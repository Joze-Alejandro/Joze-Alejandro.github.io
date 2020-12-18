let powercheckbox = document.querySelector('.slider-powerswitch');

powercheckbox.onchange = checkswitch;
powercheckbox.checked = p;

function checkswitch() {
    buf = powercheckbox.checked;
    check();
}