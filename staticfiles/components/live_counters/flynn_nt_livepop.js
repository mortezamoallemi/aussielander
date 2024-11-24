function flynn_nt_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4386;
var increase = Math.round(passed*-1.6977575510277e-13*population);
document.getElementById("flynn_nt_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(flynn_nt_livepop, 500);
}
