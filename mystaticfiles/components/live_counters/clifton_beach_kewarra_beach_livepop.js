function clifton_beach_kewarra_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10834;
var increase = Math.round(passed*5.33436489340438e-13*population);
document.getElementById("clifton_beach_kewarra_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(clifton_beach_kewarra_beach_livepop, 500);
}
