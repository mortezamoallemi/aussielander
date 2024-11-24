function deloraine_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5721;
var increase = Math.round(passed*1.53717972008627e-13*population);
document.getElementById("deloraine_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(deloraine_livepop, 500);
}
