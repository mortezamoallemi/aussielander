function paradise_point_hollywell_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9396;
var increase = Math.round(passed*5.53295351868583e-13*population);
document.getElementById("paradise_point_hollywell_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(paradise_point_hollywell_livepop, 500);
}
