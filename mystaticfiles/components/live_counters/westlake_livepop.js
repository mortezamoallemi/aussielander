function westlake_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4351;
var increase = Math.round(passed*-4.3577531032587e-14*population);
document.getElementById("westlake_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(westlake_livepop, 500);
}
