function guanaba_springbrook_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4238;
var increase = Math.round(passed*3.66546795574688e-13*population);
document.getElementById("guanaba_springbrook_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(guanaba_springbrook_livepop, 500);
}
