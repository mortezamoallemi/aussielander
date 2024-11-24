function youngtown_relbia_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4644;
var increase = Math.round(passed*-7.19681837215439e-14*population);
document.getElementById("youngtown_relbia_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(youngtown_relbia_livepop, 500);
}
