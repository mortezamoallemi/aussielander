function avoca_beach_copacabana_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7315;
var increase = Math.round(passed*2.70099780730523e-13*population);
document.getElementById("avoca_beach_copacabana_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(avoca_beach_copacabana_livepop, 500);
}
