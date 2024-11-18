function paddington_milton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10788;
var increase = Math.round(passed*4.9627217719272e-13*population);
document.getElementById("paddington_milton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(paddington_milton_livepop, 500);
}
