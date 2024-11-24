function west_wallsend_barnsley_killingworth_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6481;
var increase = Math.round(passed*3.47949906663522e-13*population);
document.getElementById("west_wallsend_barnsley_killingworth_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_wallsend_barnsley_killingworth_livepop, 500);
}
