function seven_hills_toongabbie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23920;
var increase = Math.round(passed*3.85307421130075e-13*population);
document.getElementById("seven_hills_toongabbie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(seven_hills_toongabbie_livepop, 500);
}
