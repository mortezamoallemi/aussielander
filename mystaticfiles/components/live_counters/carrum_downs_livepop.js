function carrum_downs_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20713;
var increase = Math.round(passed*5.07193778301392e-13*population);
document.getElementById("carrum_downs_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(carrum_downs_livepop, 500);
}
