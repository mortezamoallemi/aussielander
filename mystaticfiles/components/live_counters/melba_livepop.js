function melba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3148;
var increase = Math.round(passed*-1.03903343800888e-13*population);
document.getElementById("melba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(melba_livepop, 500);
}
