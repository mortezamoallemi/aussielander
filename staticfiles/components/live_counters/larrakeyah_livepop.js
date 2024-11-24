function larrakeyah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3731;
var increase = Math.round(passed*8.87044380935149e-13*population);
document.getElementById("larrakeyah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(larrakeyah_livepop, 500);
}
