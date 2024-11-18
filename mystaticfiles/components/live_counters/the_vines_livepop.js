function the_vines_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9903;
var increase = Math.round(passed*3.8424872315908e-12*population);
document.getElementById("the_vines_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(the_vines_livepop, 500);
}
