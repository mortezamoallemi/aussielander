function southern_downs_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4655;
var increase = Math.round(passed*3.68830584232629e-13*population);
document.getElementById("southern_downs_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(southern_downs_west_livepop, 500);
}