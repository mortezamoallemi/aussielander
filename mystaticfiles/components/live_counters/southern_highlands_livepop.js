function southern_highlands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6585;
var increase = Math.round(passed*4.35486488577467e-13*population);
document.getElementById("southern_highlands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(southern_highlands_livepop, 500);
}
