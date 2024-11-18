function st_georges_basin_erowal_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14006;
var increase = Math.round(passed*6.65878102844355e-13*population);
document.getElementById("st_georges_basin_erowal_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_georges_basin_erowal_bay_livepop, 500);
}
