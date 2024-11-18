function the_oaks_oakdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8997;
var increase = Math.round(passed*3.11328698895247e-13*population);
document.getElementById("the_oaks_oakdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(the_oaks_oakdale_livepop, 500);
}
