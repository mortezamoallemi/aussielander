function ardeer_albion_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7836;
var increase = Math.round(passed*5.73047905049762e-13*population);
document.getElementById("ardeer_albion_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ardeer_albion_livepop, 500);
}
