function babinda_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4238;
var increase = Math.round(passed*1.88328694922259e-13*population);
document.getElementById("babinda_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(babinda_livepop, 500);
}
