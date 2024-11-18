function reedy_creek_andrews_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7976;
var increase = Math.round(passed*9.43913879503229e-13*population);
document.getElementById("reedy_creek_andrews_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(reedy_creek_andrews_livepop, 500);
}
