function pearce_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2582;
var increase = Math.round(passed*9.65233763601489e-14*population);
document.getElementById("pearce_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pearce_livepop, 500);
}
