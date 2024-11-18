function sawtell_boambee_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19474;
var increase = Math.round(passed*1.76332792989804e-13*population);
document.getElementById("sawtell_boambee_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sawtell_boambee_livepop, 500);
}
