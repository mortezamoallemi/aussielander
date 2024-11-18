function north_mackay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5999;
var increase = Math.round(passed*-7.44272881586139e-13*population);
document.getElementById("north_mackay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_mackay_livepop, 500);
}
