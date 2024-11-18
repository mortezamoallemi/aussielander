function baulkham_hills_west_bella_vista_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20068;
var increase = Math.round(passed*4.76653978293546e-13*population);
document.getElementById("baulkham_hills_west_bella_vista_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(baulkham_hills_west_bella_vista_livepop, 500);
}
