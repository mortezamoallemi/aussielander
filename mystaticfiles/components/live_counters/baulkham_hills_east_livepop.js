function baulkham_hills_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22943;
var increase = Math.round(passed*4.56671606531189e-13*population);
document.getElementById("baulkham_hills_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(baulkham_hills_east_livepop, 500);
}
