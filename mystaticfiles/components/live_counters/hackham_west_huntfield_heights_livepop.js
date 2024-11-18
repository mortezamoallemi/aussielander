function hackham_west_huntfield_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7588;
var increase = Math.round(passed*6.46844201477236e-14*population);
document.getElementById("hackham_west_huntfield_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hackham_west_huntfield_heights_livepop, 500);
}
