function balga_mirrabooka_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20049;
var increase = Math.round(passed*6.67875691922189e-13*population);
document.getElementById("balga_mirrabooka_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(balga_mirrabooka_livepop, 500);
}
