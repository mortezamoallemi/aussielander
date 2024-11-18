function christie_downs_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9335;
var increase = Math.round(passed*5.01685781812928e-13*population);
document.getElementById("christie_downs_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(christie_downs_livepop, 500);
}
