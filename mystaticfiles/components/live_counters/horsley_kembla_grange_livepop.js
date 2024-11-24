function horsley_kembla_grange_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8655;
var increase = Math.round(passed*9.78105717660917e-13*population);
document.getElementById("horsley_kembla_grange_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(horsley_kembla_grange_livepop, 500);
}
