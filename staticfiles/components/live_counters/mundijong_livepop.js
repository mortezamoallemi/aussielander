function mundijong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6350;
var increase = Math.round(passed*7.00455350556775e-13*population);
document.getElementById("mundijong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mundijong_livepop, 500);
}
