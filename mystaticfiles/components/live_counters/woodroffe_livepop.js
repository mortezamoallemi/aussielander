function woodroffe_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3235;
var increase = Math.round(passed*-3.50831955253047e-13*population);
document.getElementById("woodroffe_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(woodroffe_livepop, 500);
}
