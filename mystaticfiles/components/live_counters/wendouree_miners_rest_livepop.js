function wendouree_miners_rest_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14633;
var increase = Math.round(passed*1.86030631667176e-13*population);
document.getElementById("wendouree_miners_rest_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wendouree_miners_rest_livepop, 500);
}
