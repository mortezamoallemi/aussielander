function kiama_downs_minnamurra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5875;
var increase = Math.round(passed*1.49640680308534e-13*population);
document.getElementById("kiama_downs_minnamurra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kiama_downs_minnamurra_livepop, 500);
}
