function brighton_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15834;
var increase = Math.round(passed*1.71315956274296e-13*population);
document.getElementById("brighton_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brighton_east_livepop, 500);
}
