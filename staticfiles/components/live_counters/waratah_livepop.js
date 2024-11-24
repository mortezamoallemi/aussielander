function waratah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3588;
var increase = Math.round(passed*-2.54647858880206e-13*population);
document.getElementById("waratah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(waratah_livepop, 500);
}
