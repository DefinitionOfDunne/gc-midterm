$(document).ready(function() {
    console.log( "ready!" );

var reservations= [];
var seatReservation= "";

$(".seat").on('click', function() {
	$("#form").show();
	seatReservation = $(this).attr("id");
  console.log(seatReservation);
});

$("#submit").on('click', function() {
  var $name = $('#name').val();
  var $phone = $('#phone').val();
  var $email = $('#email').val();
  var $movie = $('#movie').val();
  var $time = $('#time').val();
  console.log($name + $phone + $email + $movie + $time);
});


});
