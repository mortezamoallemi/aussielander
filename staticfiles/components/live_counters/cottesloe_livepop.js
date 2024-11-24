function cottesloe_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7370;
var increase = Math.round(passed*-2.57628995996879e-14*population);
document.getElementById("cottesloe_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cottesloe_livepop, 500);
}
