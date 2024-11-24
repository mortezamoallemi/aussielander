function mitchelton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8360;
var increase = Math.round(passed*5.56237785651366e-13*population);
document.getElementById("mitchelton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mitchelton_livepop, 500);
}
