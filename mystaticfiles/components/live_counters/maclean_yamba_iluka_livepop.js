function maclean_yamba_iluka_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16283;
var increase = Math.round(passed*1.72930147382034e-13*population);
document.getElementById("maclean_yamba_iluka_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maclean_yamba_iluka_livepop, 500);
}
