
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
  convertedPercent = Math.floor(((volumeGlobal / volumeLYGlobal) - 1) * 100);
  var volumePtoLY = "Percent to LY: " + convertedPercent + "%";
  var volume = "Volume: $" + volumeGlobal;

  $('#data-final-1').text(volume);
  $('#data-final-2').text(volumePtoLY);


});

// plan and percent to plan function
$('#form').submit(function(e){
  e.preventDefault();

  var volumeGlobal = $('input#volumeSTR').val();
  var planGlobal = $('input#planSTR').val();
  var convertedPercent;
  convertedPercent = Math.floor(((volumeGlobal / planGlobal) - 1) * 100);
  var planPtoLY = "Percent to plan: " + convertedPercent + "%";
  var plan = "Plan: $" + planGlobal;

  $('#data-final-3').text(plan);
  $('#data-final-4').text(planPtoLY);

});

// conversion and conversion percent to LY function
$('#form').submit(function(e){
  e.preventDefault();

  var conversionGlobal = $('input#conversionSTR').val();
  var conversionLYGlobal = $('input#conversionLYSTR').val();
  var convertedPercent;
  convertedPercent = Math.floor(conversionGlobal - conversionLYGlobal);
  var conversionPtoLY = "Percent to LY: " + convertedPercent + "%";
  var conversion = "Conversion: " + conversionGlobal + "%";

  $('#data-final-5').text(conversion);
  $('#data-final-6').text(conversionPtoLY);

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


  $('#data-final-7').text(ads);
  $('#data-final-8').text(next);
  $('#data-final-9').text(credit);

});


// ********** email response **********

$('#form').submit(function(e){
  e.preventDefault();

  var volumeGlobal = $('input#volumeSTR').val();
  var volumeLYGlobal = $('input#volumeLYSTR').val();
  var planGlobal = $('input#planSTR').val();
  var conversionGlobal = $('input#conversionSTR').val();
  var conversionLYGlobal = $('input#conversionLYSTR').val();
  var adsGlobal = $('input#adsSTR').val();
  var nextGlobal = $('input#nextSTR').val();
  var creditGlobal = $('input#creditSTR').val();

$('#email-final').text('Hello Shane, ')

// plan and LY sentence
if (volumeGlobal >= planGlobal && volumeGlobal >= volumeLYGlobal) {
  $('#email-final').append('we made plan and LY. ');
} else if (volumeGlobal >= planGlobal && volumeGlobal < volumeLYGlobal) {
  $('#email-final').append('we made plan and we missed LY. ');
} else if (volumeGlobal < planGlobal && volumeGlobal <= volumeLYGlobal) {
  $('#email-final').append('we missed plan and LY. ');
} else if (volumeGlobal < planGlobal && volumeGlobal > volumeLYGlobal){
  $('#email-final').append('we missed plan and we made LY. ');
}


// Conversion, loyalty, and ADS

// opportunities
if (conversionGlobal < 18 && adsGlobal < 70 && nextGlobal < 5 && creditGlobal < 1) {
    $('#email-final').append('Our opportunity was in our conversion, loyalty, and ADS. ');
} else if (adsGlobal < 70 && nextGlobal < 5 && creditGlobal < 1) {
    $('#email-final').append('Our opportunity was in our loyalty and ADS. ');
} else if (conversionGlobal < 18 && nextGlobal < 5 && creditGlobal < 1) {
    $('#email-final').append('Our opportunity was in our conversion and loyalty. ');
} else if (conversionGlobal < 18 && adsGlobal < 70) {
    $('#email-final').append('Our opportunity was in our conversion and ADS. ');
} else if (conversionGlobal < 18) {
    $('#email-final').append('Our opportunity was in our conversion. ');
} else if (nextGlobal < 5 && creditGlobal < 1) {
    $('#email-final').append('Our opportunity was in our loyalty. ');
} else if (adsGlobal < 70) {
    $('#email-final').append('Our opportunity was in our ADS. ');
}

// strengths
if (conversionGlobal >= 18 && adsGlobal >= 70 && nextGlobal >= 5 && creditGlobal >= 1) {
    $('#email-final').append('Our strengths for the day were our conversion, loyalty, and ADS. ');
} else if (adsGlobal >= 70 && nextGlobal >= 5 && creditGlobal >= 1) {
    $('#email-final').append('Our strengths for the day were our loyalty and ADS. ');
} else if (conversionGlobal >= 18 && nextGlobal >= 5 && creditGlobal >= 1) {
    $('#email-final').append('Our strengths for the day were our conversion and loyalty. ');
} else if (conversionGlobal >= 18 && adsGlobal >= 70) {
    $('#email-final').append('Our strengths for the day were our conversion and ADS. ');
} else if (conversionGlobal >= 18) {
    $('#email-final').append('Our strength was in our conversion. ');
} else if (nextGlobal >= 5 && creditGlobal >= 1) {
    $('#email-final').append('Our strength was in our loyalty. ');
} else if (adsGlobal >= 70) {
    $('#email-final').append('Our strength was in our ADS. ');
}

// opportunity comments
if (conversionGlobal < 18 && adsGlobal < 70 && nextGlobal < 5 && creditGlobal < 1) {
    $('#email-final').append('We need to make sure that we are engaging with every customer that comes in the store as well as building complete outfits for our guy and girl. We also need to be informing customers about the benefits of our NEXT program and credit card. ');
} else if (adsGlobal < 70 && nextGlobal < 5 && creditGlobal < 1) {
    $('#email-final').append('We need to make sure that we are always informing customers about the benefits of our NEXT program and credit card. We also need to focus on building complete outfits for our guy and girl. ');
} else if (conversionGlobal < 18 && nextGlobal < 5 && creditGlobal < 1) {
    $('#email-final').append('We need to make sure that we are engaging with every customer that comes in the store and also informing purchasing customers about the benefits of our NEXT program and credit card. ');
} else if (conversionGlobal < 18 && adsGlobal < 70) {
    $('#email-final').append('We need to make sure that we are engaging with every customer that comes in the store and also focus on building complete outfits for our guy and girl. ');
} else if (conversionGlobal < 18) {
    $('#email-final').append('We need to make sure that we are engaging with every customer that comes in the store to drive up our conversion. ');
} else if (nextGlobal < 5 && creditGlobal < 1) {
    $('#email-final').append('We need to make sure that we are always informing customers about the benefits of our NEXT program and credit card in order to drive up our loyalty. ');
} else if (adsGlobal < 70) {
    $('#email-final').append('We need to focus on building complete outfits for our guy and girl in order to drive up our ADS. ');
}

if (volumeGlobal >= planGlobal && volumeGlobal >= volumeLYGlobal) {
  $('#email-final').append('Overall, it was a good day.');
}

$('#email-final-signature').append('- Francisco')

});

});
