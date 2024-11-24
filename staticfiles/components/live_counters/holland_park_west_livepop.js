function holland_park_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6337;
var increase = Math.round(passed*3.8153971208419e-13*population);
document.getElementById("holland_park_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(holland_park_west_livepop, 500);
}
