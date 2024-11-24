function mudgee_region_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3445;
var increase = Math.round(passed*1.86816405919775e-13*population);
document.getElementById("mudgee_region_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mudgee_region_east_livepop, 500);
}
