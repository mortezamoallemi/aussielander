function bayonet_head_lower_king_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4831;
var increase = Math.round(passed*7.99207855347497e-13*population);
document.getElementById("bayonet_head_lower_king_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bayonet_head_lower_king_livepop, 500);
}
