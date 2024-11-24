function duffy_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3162;
var increase = Math.round(passed*-1.56501682979008e-13*population);
document.getElementById("duffy_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(duffy_livepop, 500);
}
