function the_coorong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5391;
var increase = Math.round(passed*-1.70614715114399e-13*population);
document.getElementById("the_coorong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(the_coorong_livepop, 500);
}
