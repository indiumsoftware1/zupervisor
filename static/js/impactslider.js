

//impact slider

var sheet = document.createElement('style'),
  $rangeInput = $('.range1 input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);
console.log(sheet)


var getTrackStyle1 = function (el) {
  console.log(el);
  var curVal = el.value,
    val = (curVal - 1) * 24.666666667,
    style2 = '';
  // Set active label
  $('.range-labels1 li').removeClass('active selected');

  var curLabel = $('.range-labels1').find('li:nth-child(' + curVal + ')');
  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');

  // Change background gradient
  for (var i = 0; i < prefs.length; i++) {

    style2 += '.range1 {background: linear-gradient(to right, #ebdf34 0%, #ebdf34 ' + val + '%, #fff ' + val + '%, #fff 100%)}';
    if (curLabel.selector == ".range-labels1 li:nth-child(2)") {
      style2 += '.range1 input::-' + prefs[i] + '{background: linear-gradient(to right, #f7e02f 0%, #fcbc26 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
    }
    else if (curLabel.selector == ".range-labels1 li:nth-child(3)") {
      style2 += '.range1 input::-' + prefs[i] + '{background: linear-gradient(to right, #f7e02f 0%, #fca532 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
    }
    else if (curLabel.selector == ".range-labels1 li:nth-child(4)") {
      style2 += '.range1 input::-' + prefs[i] + '{background: linear-gradient(to right, #f7e02f 0%, #f56c22 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
    }
    else if (curLabel.selector == ".range-labels1 li:nth-child(5)") {
      style2 += '.range1 input::-' + prefs[i] + '{background: linear-gradient(to right, #f7e02f 0%, #f53b22 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
    }

  }

  return style2;
}

$rangeInput.on('range1 input', function () {
  sheet.textContent = getTrackStyle1(this);
});

// Change input value on label click
$('.range-labels1 li').on('click', function () {
  var index = $(this).index();

  $rangeInput.val(index + 1).trigger('.range1 input');

});




function updateTextInput1(val) {
  document.getElementById('impact').value=val; 
}