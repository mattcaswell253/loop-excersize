$(function() {
  $('form').submit(function() {
    var numberTo = $parseInt(('#countTo').val());
    var numberBy = $parseInt(('#countBy').val());

    for (var i = numberBy; i <= numberTo; i += numberBy) {
      numberTo += i;
    }
      alert(numberTo);
      event.preventDefault;
  });
});
