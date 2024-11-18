function murdoch_kardinya_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12255;
var increase = Math.round(passed*7.39140090398956e-14*population);
document.getElementById("murdoch_kardinya_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(murdoch_kardinya_livepop, 500);
}
