function kiama_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7695;
var increase = Math.round(passed*4.52579312599615e-13*population);
document.getElementById("kiama_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kiama_livepop, 500);
}
