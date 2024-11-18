function somerset_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3903;
var increase = Math.round(passed*-1.15926305858811e-13*population);
document.getElementById("somerset_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(somerset_livepop, 500);
}
