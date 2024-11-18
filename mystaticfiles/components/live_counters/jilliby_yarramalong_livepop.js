function jilliby_yarramalong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3352;
var increase = Math.round(passed*6.8039658244698e-13*population);
document.getElementById("jilliby_yarramalong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(jilliby_yarramalong_livepop, 500);
}
