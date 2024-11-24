function karratha_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15825;
var increase = Math.round(passed*-2.54898607869211e-13*population);
document.getElementById("karratha_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(karratha_livepop, 500);
}
