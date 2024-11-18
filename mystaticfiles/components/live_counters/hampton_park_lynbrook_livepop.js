function hampton_park_lynbrook_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25532;
var increase = Math.round(passed*4.54036207721362e-13*population);
document.getElementById("hampton_park_lynbrook_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hampton_park_lynbrook_livepop, 500);
}
