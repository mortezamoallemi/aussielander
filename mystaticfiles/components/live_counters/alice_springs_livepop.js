function alice_springs_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24751;
var increase = Math.round(passed*-1.10743887331039e-13*population);
document.getElementById("alice_springs_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(alice_springs_livepop, 500);
}
