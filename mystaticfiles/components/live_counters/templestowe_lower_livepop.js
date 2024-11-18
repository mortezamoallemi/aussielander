function templestowe_lower_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13592;
var increase = Math.round(passed*2.10145067636029e-13*population);
document.getElementById("templestowe_lower_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(templestowe_lower_livepop, 500);
}
