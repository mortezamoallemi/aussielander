function middle_park_jamboree_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7066;
var increase = Math.round(passed*-1.61350265324302e-14*population);
document.getElementById("middle_park_jamboree_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(middle_park_jamboree_heights_livepop, 500);
}
