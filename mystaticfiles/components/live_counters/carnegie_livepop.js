function carnegie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18064;
var increase = Math.round(passed*6.52840979283704e-13*population);
document.getElementById("carnegie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(carnegie_livepop, 500);
}
