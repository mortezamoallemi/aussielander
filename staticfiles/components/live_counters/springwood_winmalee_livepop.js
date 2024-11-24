function springwood_winmalee_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21633;
var increase = Math.round(passed*-4.03277673857018e-14*population);
document.getElementById("springwood_winmalee_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(springwood_winmalee_livepop, 500);
}
