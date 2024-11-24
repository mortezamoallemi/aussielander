function kiama_hinterland_gerringong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7812;
var increase = Math.round(passed*6.73425911939517e-13*population);
document.getElementById("kiama_hinterland_gerringong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kiama_hinterland_gerringong_livepop, 500);
}
