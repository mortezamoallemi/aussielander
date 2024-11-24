function monash_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5428;
var increase = Math.round(passed*5.84458468860426e-15*population);
document.getElementById("monash_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(monash_livepop, 500);
}
