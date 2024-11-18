function clarendon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2654;
var increase = Math.round(passed*6.24355358171715e-14*population);
document.getElementById("clarendon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(clarendon_livepop, 500);
}
