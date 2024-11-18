function avoca_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3303;
var increase = Math.round(passed*3.8412832166206e-15*population);
document.getElementById("avoca_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(avoca_livepop, 500);
}
