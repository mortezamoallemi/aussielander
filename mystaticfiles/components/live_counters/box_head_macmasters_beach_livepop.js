function box_head_macmasters_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10688;
var increase = Math.round(passed*2.11156709921629e-13*population);
document.getElementById("box_head_macmasters_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(box_head_macmasters_beach_livepop, 500);
}