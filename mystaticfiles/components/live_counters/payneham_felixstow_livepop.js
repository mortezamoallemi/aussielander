function payneham_felixstow_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12338;
var increase = Math.round(passed*1.46635397407741e-13*population);
document.getElementById("payneham_felixstow_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(payneham_felixstow_livepop, 500);
}
