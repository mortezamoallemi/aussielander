function wilsons_promontory_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14;
var increase = Math.round(passed*9.77617198295652e-13*population);
document.getElementById("wilsons_promontory_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wilsons_promontory_livepop, 500);
}
