function buninyong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7153;
var increase = Math.round(passed*5.11248901096919e-13*population);
document.getElementById("buninyong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(buninyong_livepop, 500);
}
