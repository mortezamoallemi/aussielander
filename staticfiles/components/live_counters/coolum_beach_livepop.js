function coolum_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14590;
var increase = Math.round(passed*6.57575425215961e-13*population);
document.getElementById("coolum_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coolum_beach_livepop, 500);
}
