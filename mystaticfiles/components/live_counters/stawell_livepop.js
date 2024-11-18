function stawell_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8096;
var increase = Math.round(passed*-1.37158090201269e-13*population);
document.getElementById("stawell_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(stawell_livepop, 500);
}
