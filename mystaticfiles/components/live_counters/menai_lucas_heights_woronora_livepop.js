function menai_lucas_heights_woronora_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21128;
var increase = Math.round(passed*2.16490350832343e-14*population);
document.getElementById("menai_lucas_heights_woronora_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(menai_lucas_heights_woronora_livepop, 500);
}
