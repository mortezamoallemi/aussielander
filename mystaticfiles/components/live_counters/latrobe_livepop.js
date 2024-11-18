function latrobe_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4511;
var increase = Math.round(passed*4.16896956001385e-13*population);
document.getElementById("latrobe_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(latrobe_livepop, 500);
}
