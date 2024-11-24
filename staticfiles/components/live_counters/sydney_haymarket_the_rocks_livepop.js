function sydney_haymarket_the_rocks_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 27408;
var increase = Math.round(passed*1.17908555077973e-12*population);
document.getElementById("sydney_haymarket_the_rocks_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sydney_haymarket_the_rocks_livepop, 500);
}
