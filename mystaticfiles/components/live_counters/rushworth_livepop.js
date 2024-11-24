function rushworth_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4037;
var increase = Math.round(passed*-9.20157652613071e-14*population);
document.getElementById("rushworth_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rushworth_livepop, 500);
}
