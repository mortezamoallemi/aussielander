function mundaring_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12866;
var increase = Math.round(passed*1.05871586641819e-13*population);
document.getElementById("mundaring_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mundaring_livepop, 500);
}
