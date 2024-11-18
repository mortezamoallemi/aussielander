function willetton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18187;
var increase = Math.round(passed*2.83100118714261e-13*population);
document.getElementById("willetton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(willetton_livepop, 500);
}
