function umina_booker_bay_patonga_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23588;
var increase = Math.round(passed*2.89908855887135e-13*population);
document.getElementById("umina_booker_bay_patonga_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(umina_booker_bay_patonga_livepop, 500);
}
