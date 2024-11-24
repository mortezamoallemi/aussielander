function willoughby_castle_cove_northbridge_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25463;
var increase = Math.round(passed*2.90747891438268e-13*population);
document.getElementById("willoughby_castle_cove_northbridge_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(willoughby_castle_cove_northbridge_livepop, 500);
}
