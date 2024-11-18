function flemington_racecourse_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 85;
var increase = Math.round(passed*6.26876170957843e-13*population);
document.getElementById("flemington_racecourse_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(flemington_racecourse_livepop, 500);
}
