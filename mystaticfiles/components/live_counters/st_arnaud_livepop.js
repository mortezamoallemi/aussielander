function st_arnaud_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3351;
var increase = Math.round(passed*-4.29848848476457e-13*population);
document.getElementById("st_arnaud_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_arnaud_livepop, 500);
}
