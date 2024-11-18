function kirwan_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15555;
var increase = Math.round(passed*-1.19548829694034e-13*population);
document.getElementById("kirwan_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kirwan_west_livepop, 500);
}
