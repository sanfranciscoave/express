
$(document).ready(function(){


// All input variables
var volumeGlobal = $('input#volumeSTR').val();
var volumeLYGlobal = $('input#volumeLYSTR').val();
var planGlobal = $('input#planSTR').val();
var conversionGlobal = $('input#conversionSTR').val();
var conversionLYGlobal = $('input#conversionLYSTR').val();
var adsGlobal = $('input#adsSTR').val();
var nextGlobal = $('input#nextSTR').val();
var creditGlobal = $('input#creditSTR').val();




// Highlight & un-hughlight form boxes
$('input').focus(function(){
  $(this).css('background', 'lightgrey');
})

$('input').blur(function(){
  $(this).css('background', 'white');
})


// ***************  data calculation fnctions ***************

// volume & volume percent to LY function
$('#form').submit(function(e){
  e.preventDefault();

  var volumeGlobal = $('input#volumeSTR').val();
  var volumeLYGlobal = $('input#volumeLYSTR').val();
  var convertedPercent;
  convertedPercent = Math.round((((volumeGlobal / volumeLYGlobal) - 1) * 100)*100)/100;
  var volumePtoLY = "% to LY: " + convertedPercent + "%";
  var volume = "Volume: $" + volumeGlobal;
  var volumeLY = "LY $" + volumeLYGlobal;

  $('#data-final-1').text(volume);
  $('#data-final-4').text(volumeLY);
  $('#data-final-5').text(volumePtoLY);


});

// plan and vpercent to plan function
$('#form').submit(function(e){
  e.preventDefault();

  var volumeGlobal = $('input#volumeSTR').val();
  var planGlobal = $('input#planSTR').val();
  var convertedPercent;
  convertedPercent = Math.round((((volumeGlobal / planGlobal) - 1) * 100)*100)/100;
  var volumePtoPlan = "% to plan: " + convertedPercent + "%";
  var plan = "Plan: $" + planGlobal;

  $('#data-final-2').text(plan);
  $('#data-final-3').text(volumePtoPlan);

});

// conversion and conversion percent to LY function
$('#form').submit(function(e){
  e.preventDefault();

  var conversionGlobal = $('input#conversionSTR').val();
  var conversionLYGlobal = $('input#conversionLYSTR').val();
  var convertedPercent;
  convertedPercent = Math.round((conversionGlobal - conversionLYGlobal))*100/100;
  var conversionPtoLY = "% to LY Conversion: " + convertedPercent + "%";
  var conversion = "Conversion: " + conversionGlobal + "%";

  $('#data-final-6').text(conversion);
  $('#data-final-7').text(conversionPtoLY);

});

// appending ADS, NEXT, and Credit
$('#form').submit(function(e){
  e.preventDefault();

  var adsGlobal = $('input#adsSTR').val();
  var nextGlobal = $('input#nextSTR').val();
  var creditGlobal = $('input#creditSTR').val();
  var ads = "ADS: $" + adsGlobal
  var next = "NEXT: " + nextGlobal
  var credit = "Credit: " + creditGlobal


  $('#data-final-8').text(ads);
  $('#data-final-9').text(next);
  $('#data-final-10').text(credit);

});


// ********** email response **********



});
