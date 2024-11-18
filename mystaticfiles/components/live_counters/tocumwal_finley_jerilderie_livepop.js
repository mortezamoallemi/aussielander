function tocumwal_finley_jerilderie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9728;
var increase = Math.round(passed*2.88760172820928e-13*population);
document.getElementById("tocumwal_finley_jerilderie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tocumwal_finley_jerilderie_livepop, 500);
}
