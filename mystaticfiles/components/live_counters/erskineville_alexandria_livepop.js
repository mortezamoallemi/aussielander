function erskineville_alexandria_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16236;
var increase = Math.round(passed*9.86998795267931e-13*population);
document.getElementById("erskineville_alexandria_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(erskineville_alexandria_livepop, 500);
}
