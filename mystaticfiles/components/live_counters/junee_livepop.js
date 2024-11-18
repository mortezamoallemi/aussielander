function junee_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6245;
var increase = Math.round(passed*4.458972303903e-13*population);
document.getElementById("junee_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(junee_livepop, 500);
}
