function redfern_chippendale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22495;
var increase = Math.round(passed*1.94217737624164e-12*population);
document.getElementById("redfern_chippendale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(redfern_chippendale_livepop, 500);
}
