function karrinyup_gwelup_carine_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20303;
var increase = Math.round(passed*4.447384014718e-13*population);
document.getElementById("karrinyup_gwelup_carine_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(karrinyup_gwelup_carine_livepop, 500);
}
