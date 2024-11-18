function wheelers_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19752;
var increase = Math.round(passed*2.11216838812882e-13*population);
document.getElementById("wheelers_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wheelers_hill_livepop, 500);
}
