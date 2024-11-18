function wamberal_forresters_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9758;
var increase = Math.round(passed*4.49724462228932e-13*population);
document.getElementById("wamberal_forresters_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wamberal_forresters_beach_livepop, 500);
}
