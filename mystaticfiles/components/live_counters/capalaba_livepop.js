function capalaba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17593;
var increase = Math.round(passed*2.48116132515768e-13*population);
document.getElementById("capalaba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(capalaba_livepop, 500);
}
