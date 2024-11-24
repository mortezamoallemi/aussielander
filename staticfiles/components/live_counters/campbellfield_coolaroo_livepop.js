function campbellfield_coolaroo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16123;
var increase = Math.round(passed*3.62917064565342e-14*population);
document.getElementById("campbellfield_coolaroo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(campbellfield_coolaroo_livepop, 500);
}
