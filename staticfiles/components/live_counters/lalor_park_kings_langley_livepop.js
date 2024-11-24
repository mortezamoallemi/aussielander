function lalor_park_kings_langley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24874;
var increase = Math.round(passed*2.35308687828134e-13*population);
document.getElementById("lalor_park_kings_langley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lalor_park_kings_langley_livepop, 500);
}
