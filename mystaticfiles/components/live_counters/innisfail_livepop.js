function innisfail_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9377;
var increase = Math.round(passed*1.07082983694734e-13*population);
document.getElementById("innisfail_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(innisfail_livepop, 500);
}
