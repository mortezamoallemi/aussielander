function doncaster_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20581;
var increase = Math.round(passed*7.24558616262396e-13*population);
document.getElementById("doncaster_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(doncaster_livepop, 500);
}
