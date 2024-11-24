function rosebery_bellamack_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6676;
var increase = Math.round(passed*3.66796326220347e-12*population);
document.getElementById("rosebery_bellamack_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rosebery_bellamack_livepop, 500);
}
