function seaton_grange_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16279;
var increase = Math.round(passed*2.27252211274036e-13*population);
document.getElementById("seaton_grange_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(seaton_grange_livepop, 500);
}
