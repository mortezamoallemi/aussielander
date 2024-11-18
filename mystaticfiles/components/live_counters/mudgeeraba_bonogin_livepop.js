function mudgeeraba_bonogin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18261;
var increase = Math.round(passed*3.11405083225676e-13*population);
document.getElementById("mudgeeraba_bonogin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mudgeeraba_bonogin_livepop, 500);
}
