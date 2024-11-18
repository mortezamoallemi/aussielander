function holland_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8306;
var increase = Math.round(passed*3.61328623929483e-13*population);
document.getElementById("holland_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(holland_park_livepop, 500);
}
