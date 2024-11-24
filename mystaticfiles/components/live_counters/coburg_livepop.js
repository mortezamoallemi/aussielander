function coburg_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26163;
var increase = Math.round(passed*2.93954600913654e-13*population);
document.getElementById("coburg_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coburg_livepop, 500);
}
