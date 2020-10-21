
var sheet = document.createElement('style1'),
$rangeInput = $('.range2 input'),
prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

//likelihood slider

var getTrackStyle = function (el) {
var curVal = el.value,
  val = (curVal - 1) * 24.666666667,
  style1 = '';
// Set active label
$('.range-labels2 li').removeClass('active selected');

var curLabel = $('.range-labels2').find('li:nth-child(' + curVal + ')');
console.log(curVal);
curLabel.addClass('active selected');
curLabel.prevAll().addClass('selected');

// Change background gradient
for (var i = 0; i < prefs.length; i++) {

  style1 += '.range2 {background: linear-gradient(to right, #ebdf34 0%, #ebdf34 ' + val + '%, #fff ' + val + '%, #fff 100%)}';
  if (curLabel.selector == ".range-labels2 li:nth-child(2)") {
    style1 += '.range2 input::-' + prefs[i] + '{background: linear-gradient(to right, #f7e02f 0%, #fcbc26 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }
  else if (curLabel.selector == ".range-labels2 li:nth-child(3)") {
    style1 += '.range2 input::-' + prefs[i] + '{background: linear-gradient(to right, #f7e02f 0%, #fca532 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }
  else if (curLabel.selector == ".range-labels2 li:nth-child(4)") {
    style1 += '.range2 input::-' + prefs[i] + '{background: linear-gradient(to right, #f7e02f 0%, #f56c22 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }
  else if (curLabel.selector == ".range-labels2 li:nth-child(5)") {
    style1 += '.range2 input::-' + prefs[i] + '{background: linear-gradient(to right, #f7e02f 0%, #f53b22 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }

}

return style1;
}

$rangeInput.on('.range2 input', function () {
sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
$('.range-labels2 li').on('click', function () {
var index = $(this).index();

$rangeInput.val(index + 1).trigger('range2 input');

});


function updateTextInput(val) {
    document.getElementById('likelihood').value=val; 
  }