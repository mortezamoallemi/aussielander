function warnervale_wadalba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15219;
var increase = Math.round(passed*1.25022865395315e-12*population);
document.getElementById("warnervale_wadalba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(warnervale_wadalba_livepop, 500);
}