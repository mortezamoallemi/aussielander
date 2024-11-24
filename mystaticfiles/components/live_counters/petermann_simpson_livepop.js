function petermann_simpson_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2463;
var increase = Math.round(passed*8.20787405848337e-13*population);
document.getElementById("petermann_simpson_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(petermann_simpson_livepop, 500);
}
