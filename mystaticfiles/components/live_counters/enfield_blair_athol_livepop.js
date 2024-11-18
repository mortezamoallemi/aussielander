function enfield_blair_athol_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23173;
var increase = Math.round(passed*4.57560006309915e-13*population);
document.getElementById("enfield_blair_athol_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(enfield_blair_athol_livepop, 500);
}
