function howrah_tranmere_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10391;
var increase = Math.round(passed*4.7971549126383e-13*population);
document.getElementById("howrah_tranmere_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(howrah_tranmere_livepop, 500);
}
