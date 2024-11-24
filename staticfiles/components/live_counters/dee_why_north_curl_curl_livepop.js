function dee_why_north_curl_curl_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24949;
var increase = Math.round(passed*5.83491212237284e-13*population);
document.getElementById("dee_why_north_curl_curl_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dee_why_north_curl_curl_livepop, 500);
}
