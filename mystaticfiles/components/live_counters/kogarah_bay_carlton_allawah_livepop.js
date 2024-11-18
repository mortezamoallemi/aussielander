function kogarah_bay_carlton_allawah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15965;
var increase = Math.round(passed*4.63850685836859e-13*population);
document.getElementById("kogarah_bay_carlton_allawah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kogarah_bay_carlton_allawah_livepop, 500);
}
