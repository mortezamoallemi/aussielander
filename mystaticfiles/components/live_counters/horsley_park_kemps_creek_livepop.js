function horsley_park_kemps_creek_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4426;
var increase = Math.round(passed*1.44932230454026e-13*population);
document.getElementById("horsley_park_kemps_creek_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(horsley_park_kemps_creek_livepop, 500);
}
