function ipswich_central_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6558;
var increase = Math.round(passed*-1.14997863387914e-13*population);
document.getElementById("ipswich_central_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ipswich_central_livepop, 500);
}
