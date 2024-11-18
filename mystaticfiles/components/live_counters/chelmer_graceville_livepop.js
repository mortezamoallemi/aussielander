function chelmer_graceville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7410;
var increase = Math.round(passed*7.6980355033238e-13*population);
document.getElementById("chelmer_graceville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chelmer_graceville_livepop, 500);
}
