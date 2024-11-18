function caloundra_kings_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6704;
var increase = Math.round(passed*6.17521397289505e-13*population);
document.getElementById("caloundra_kings_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(caloundra_kings_beach_livepop, 500);
}
