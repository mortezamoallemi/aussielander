function marcoola_mudjimba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10867;
var increase = Math.round(passed*4.12297126402753e-13*population);
document.getElementById("marcoola_mudjimba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(marcoola_mudjimba_livepop, 500);
}
