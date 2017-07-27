$(document).ready(function(){

console.log( "ready!" );

var reservations= [];
var $seatReservation= "";

  $(".seat").on('click', function() {
    $("#form").show();
	   $seatReservation = $(this).attr("id");
     //reservations.push({seat: $seatReservation});
  });

  $("#submit").on('click', function() {
    var $name = $('#name').val();
    var $phone = $('#phone').val();
    var $email = $('#email').val();
    var $movie = $('#movie').val();
    var $time = $('#time').val();

    reservations.push(
      {name: $name,
      phone: $phone,
      email: $email,
      movie: $movie,
      time: $time})

      for (var i = 0; i < reservations.length; i++) {
        var name = reservations[i].name;
      console.log(name);}



console.log(reservations);

    });
});
