function ashfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24497;
var increase = Math.round(passed*4.63083142977966e-13*population);
document.getElementById("ashfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ashfield_livepop, 500);
}
