function flemington_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10111;
var increase = Math.round(passed*6.27136844802204e-13*population);
document.getElementById("flemington_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(flemington_livepop, 500);
}
