function ormeau_yatala_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19677;
var increase = Math.round(passed*1.35446271096541e-12*population);
document.getElementById("ormeau_yatala_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ormeau_yatala_livepop, 500);
}
