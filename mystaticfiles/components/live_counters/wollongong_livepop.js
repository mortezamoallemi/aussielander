function wollongong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 285680;
var increase = Math.round(passed*3.82858471557297e-13*population);
document.getElementById("wollongong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wollongong_livepop, 500);
}
