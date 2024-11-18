function mitcham_sa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15837;
var increase = Math.round(passed*5.26773817662738e-14*population);
document.getElementById("mitcham_sa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mitcham_sa_livepop, 500);
}
