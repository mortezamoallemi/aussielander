function fannie_bay_the_gardens_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3348;
var increase = Math.round(passed*1.7671045463556e-13*population);
document.getElementById("fannie_bay_the_gardens_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fannie_bay_the_gardens_livepop, 500);
}
