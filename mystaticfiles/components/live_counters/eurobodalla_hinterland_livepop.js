function eurobodalla_hinterland_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3298;
var increase = Math.round(passed*1.69544704655189e-13*population);
document.getElementById("eurobodalla_hinterland_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(eurobodalla_hinterland_livepop, 500);
}
