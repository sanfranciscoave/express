
$(document).ready(function(){


// All variables
var volumeGlobal = $('input#volumeSTR').val();
var volumeLYGlobal = $('input#volumeLYSTR').val();
var planGlobal = $('input#planSTR').val();
var conversionGlobal = $('input#conversionSTR').val();
var conversionLYGlobal = $('input#conversionLYSTR').val();
var adsGlobal = $('input#adsSTR').val();
var nextGlobal = $('input#nextSTR').val();
var creditGlobal = $('input#creditSTR').val();


// Highlight & un-hughlight form boxex
$('input').focus(function(){
  $(this).css('background', 'lightgrey');
})

$('input').blur(function(){
  $(this).css('background', 'white');
})



$('#form').submit(function(e){
  e.preventDefault();
  var volumeGlobal = $('input#volumeSTR').val();
  var volumeLYGlobal = $('input#volumeLYSTR').val();
  var convertedPercent;
  convertedPercent = Math.floor(((volumeGlobal / volumeLYGlobal) - 1) * 100);
  console.log("percent to ly: " + convertedPercent + "%")
});



});
