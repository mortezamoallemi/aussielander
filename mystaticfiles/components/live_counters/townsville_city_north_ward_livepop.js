function townsville_city_north_ward_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9053;
var increase = Math.round(passed*3.19661282812498e-13*population);
document.getElementById("townsville_city_north_ward_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(townsville_city_north_ward_livepop, 500);
}
