function naracoorte_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6038;
var increase = Math.round(passed*3.73132174757117e-13*population);
document.getElementById("naracoorte_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(naracoorte_livepop, 500);
}
