function newport_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17574;
var increase = Math.round(passed*5.33150334721956e-13*population);
document.getElementById("newport_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(newport_livepop, 500);
}
