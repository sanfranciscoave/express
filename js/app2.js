$(document).ready(function(){

 // Highlight & un-hughlight form boxes
 $('input').focus(function(){
   $(this).css('background', 'lightgrey');
 })

 $('input').blur(function(){
   $(this).css('background', 'white');
 })

});


// gather all input data
function getData(){
  var volume = $('input#volumeSTR').val();
  var volumeLY = $('input#volumeLYSTR').val();
  var plan = $('input#planSTR').val();
  var conversion = $('input#conversionSTR').val();
  var conversionLY = $('input#conversionLYSTR').val();
  var ads = $('input#adsSTR').val();
  var next = $('input#nextSTR').val();
  var credit = $('input#creditSTR').val();
  return [volume, volumeLY, plan, conversion, conversionLY, ads, next, credit];
}

// calculate % to plan
function calcPercentToPlan(volume, plan){
  var percentToPlan = Math.round(((volume / plan) - 1) * 100);
  return percentToPlan;
}

// calculate % to LY
function calcPercentToLY(volume, volumeLY){
  var percentToLY = Math.round(((volume / volumeLY) - 1) * 100);
  return percentToLY;
}

// calculate % to LY conversion
function calcPercentToLYConversion(conversion, conversionLY){
  var percentToLYConversion = Math.round(conversion - conversionLY)
  return percentToLYConversion;
}

function main(){
  var PercentToPlan = calcPercentToPlan(getData()[0], getData()[2]);
  var PercentToLY = calcPercentToLY(getData()[0], getData()[1]);
  var PercentToLYConversion = calcPercentToLYConversion(getData()[3], getData()[4]);

  // *****print values to DOM*****
  // print volume
  $('#data-final-1').text(getData()[0]);
  // print plan
  $('#data-final-2').text(getData()[2]);
  // print percent to plan
  $('#data-final-3').text(percentToPlan);
  // print volume LY
  $('#data-final-4').text(getData()[1]);
  // print percent to LY
  $('#data-final-5').text(percentToLY);
  // print conversion
  $('#data-final-6').text(getData()[3]);
  // print conversion percent to LY
  $('#data-final-7').text(percentToLYConversion);
  // print ads
  $('#data-final-8').text(getData()[5]);
  // print next
  $('#data-final-9').text(getData()[6]);
  // print credit
  $('#data-final-10').text(getData()[7]);

}

$('#form').submit(function(e){
  e.preventDefault();
  main()
});

main()
