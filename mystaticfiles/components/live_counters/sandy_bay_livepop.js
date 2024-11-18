function sandy_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11777;
var increase = Math.round(passed*3.42413416007578e-13*population);
document.getElementById("sandy_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sandy_bay_livepop, 500);
}
