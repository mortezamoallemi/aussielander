function stafford_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6855;
var increase = Math.round(passed*7.07046839513516e-14*population);
document.getElementById("stafford_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(stafford_heights_livepop, 500);
}
