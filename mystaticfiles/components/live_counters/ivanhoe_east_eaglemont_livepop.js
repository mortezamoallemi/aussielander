function ivanhoe_east_eaglemont_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7694;
var increase = Math.round(passed*3.29795035864231e-15*population);
document.getElementById("ivanhoe_east_eaglemont_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ivanhoe_east_eaglemont_livepop, 500);
}
