function seventeen_mile_rocks_sinnamon_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9557;
var increase = Math.round(passed*3.05989775735296e-14*population);
document.getElementById("seventeen_mile_rocks_sinnamon_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(seventeen_mile_rocks_sinnamon_park_livepop, 500);
}
