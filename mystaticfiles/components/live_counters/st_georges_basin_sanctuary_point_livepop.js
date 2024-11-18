function st_georges_basin_sanctuary_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18197;
var increase = Math.round(passed*2.32601848905554e-12*population);
document.getElementById("st_georges_basin_sanctuary_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_georges_basin_sanctuary_point_livepop, 500);
}
