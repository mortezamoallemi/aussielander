function spring_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6066;
var increase = Math.round(passed*4.77553901564715e-13*population);
document.getElementById("spring_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(spring_hill_livepop, 500);
}
