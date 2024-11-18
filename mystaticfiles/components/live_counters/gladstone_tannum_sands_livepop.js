function gladstone_tannum_sands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 43870;
var increase = Math.round(passed*2.81247590155501e-13*population);
document.getElementById("gladstone_tannum_sands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gladstone_tannum_sands_livepop, 500);
}
