function coonamble_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4113;
var increase = Math.round(passed*-2.21218300943616e-13*population);
document.getElementById("coonamble_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coonamble_livepop, 500);
}
