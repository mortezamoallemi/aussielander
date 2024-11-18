function taigum_fitzgibbon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12155;
var increase = Math.round(passed*1.97102269389248e-12*population);
document.getElementById("taigum_fitzgibbon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(taigum_fitzgibbon_livepop, 500);
}
