function strathfieldsaye_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8629;
var increase = Math.round(passed*1.29792911683977e-12*population);
document.getElementById("strathfieldsaye_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(strathfieldsaye_livepop, 500);
}
