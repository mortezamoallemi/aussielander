function werribee_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11334;
var increase = Math.round(passed*4.98029152469556e-13*population);
document.getElementById("werribee_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(werribee_south_livepop, 500);
}
