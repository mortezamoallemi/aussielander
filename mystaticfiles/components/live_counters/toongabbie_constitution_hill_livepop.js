function toongabbie_constitution_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21936;
var increase = Math.round(passed*3.65660295928912e-13*population);
document.getElementById("toongabbie_constitution_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(toongabbie_constitution_hill_livepop, 500);
}
