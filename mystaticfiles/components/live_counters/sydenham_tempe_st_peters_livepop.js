function sydenham_tempe_st_peters_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7840;
var increase = Math.round(passed*5.47117815785118e-13*population);
document.getElementById("sydenham_tempe_st_peters_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sydenham_tempe_st_peters_livepop, 500);
}
