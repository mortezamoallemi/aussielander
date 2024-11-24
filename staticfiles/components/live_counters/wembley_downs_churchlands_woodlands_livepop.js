function wembley_downs_churchlands_woodlands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13945;
var increase = Math.round(passed*6.42221521813727e-13*population);
document.getElementById("wembley_downs_churchlands_woodlands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wembley_downs_churchlands_woodlands_livepop, 500);
}
