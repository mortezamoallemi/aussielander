function broadsound_nebo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8505;
var increase = Math.round(passed*-9.49111087459462e-13*population);
document.getElementById("broadsound_nebo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(broadsound_nebo_livepop, 500);
}
