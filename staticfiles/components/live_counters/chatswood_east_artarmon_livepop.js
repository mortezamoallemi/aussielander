function chatswood_east_artarmon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 28683;
var increase = Math.round(passed*1.04046346336971e-12*population);
document.getElementById("chatswood_east_artarmon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chatswood_east_artarmon_livepop, 500);
}
