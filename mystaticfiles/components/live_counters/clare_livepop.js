function clare_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4044;
var increase = Math.round(passed*1.89421295813377e-13*population);
document.getElementById("clare_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(clare_livepop, 500);
}
