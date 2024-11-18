function glenhaven_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6253;
var increase = Math.round(passed*4.43130621164015e-13*population);
document.getElementById("glenhaven_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glenhaven_livepop, 500);
}
