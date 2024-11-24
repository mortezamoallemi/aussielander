function emu_plains_leonay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14223;
var increase = Math.round(passed*1.54359297280053e-13*population);
document.getElementById("emu_plains_leonay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(emu_plains_leonay_livepop, 500);
}
