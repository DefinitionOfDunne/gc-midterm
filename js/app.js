$(document).ready(function(){
console.log( "ready!" );

var reservations= [];
var $seatReservation= "";
var seat;

function countSeats(){

	for (var i =1; i <= 24; i++){

  			seat = {
  				name:"",
  				phone: "",
  				email: "",
  				movie: "",
  				time: "",
  				number: i };
  			reservations.push(seat);

  		}
}



  $(".seat").on('click', function() {
    $("#form").show();
	countSeats();
	$seatReservation = $(this).attr("data-seat");
	document.getElementById("form").reset();
  });



  $("#submit").on('click', function() {

   reservations.forEach(function(seat){

    	if ($seatReservation == seat.number){
    		seat.name = $('#name').val();
    		seat.phone = $('#phone').val();
    		seat.email = $('#email').val();
    		seat.movie = $('#movie').val();
    		seat.time = $('#time').val();

    	}

console.log(seat.name);


    });
		var $name = $('#name').val()
		var $phone = $('#phone').val();
		var $email = $('#email').val();
		var $movie = $('#movie').val();
		var $time = $('#time').val();



	      // 	reservations.push(
		     //  { name: $name,
		     //    phone: $phone,
			    // email: $email,
			    // movie: $movie,
			    // time: $time }

	// );





		console.log(reservations);
		});

}); // end .ready() function
