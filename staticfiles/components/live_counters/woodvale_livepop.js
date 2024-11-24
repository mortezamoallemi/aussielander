function woodvale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9281;
var increase = Math.round(passed*5.42139008116368e-14*population);
document.getElementById("woodvale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(woodvale_livepop, 500);
}
