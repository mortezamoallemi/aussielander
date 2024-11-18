function chambers_flat_logan_reserve_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5060;
var increase = Math.round(passed*1.87311677488847e-12*population);
document.getElementById("chambers_flat_logan_reserve_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chambers_flat_logan_reserve_livepop, 500);
}
