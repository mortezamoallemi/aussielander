function carramar_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16618;
var increase = Math.round(passed*2.42749633112619e-12*population);
document.getElementById("carramar_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(carramar_livepop, 500);
}
