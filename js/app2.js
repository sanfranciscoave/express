$(document).ready(function(){

 // Highlight & un-hughlight form boxes
 $('input').focus(function(){
   $(this).css('background', 'lightgrey');
 })

 $('input').blur(function(){
   $(this).css('background', 'white');
 })




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
  var percentToPlan = calcPercentToPlan(getData()[0], getData()[2]);
  var percentToLY = calcPercentToLY(getData()[0], getData()[1]);
  var percentToLYConversion = calcPercentToLYConversion(getData()[3], getData()[4]);

  // *****print values to DOM*****
  // print volume
  $('#data-final-1').text("Volume: $" + getData()[0]);
  // print plan
  $('#data-final-2').text("Plan: $" + getData()[2]);
  // print percent to plan
  $('#data-final-3').text("% to plan: " + percentToPlan + "%");
  // print volume LY
  $('#data-final-4').text("Volume LY: $" + getData()[1]);
  // print percent to LY
  $('#data-final-5').text("% to LY: " + percentToLY + "%");
  // print conversion
  $('#data-final-6').text("Conversin: " + getData()[3] + "%");
  // print conversion percent to LY
  $('#data-final-7').text("Conversion % to LY: " + percentToLYConversion + "%");
  // print ads
  $('#data-final-8').text("ADS: $" + getData()[5]);
  // print next
  $('#data-final-9').text("NEXT: " + getData()[6]);
  // print credit
  $('#data-final-10').text("Credit: " + getData()[7]);

}


$('#form').submit(function(e){
  e.preventDefault();
  main()
});


});
