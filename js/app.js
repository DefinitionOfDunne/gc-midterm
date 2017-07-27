$(document).ready(function() {
    console.log("ready!");

    var reservations = [];
    var $seatReservation = "";
    var $seatIndex;
    var seat;

    function countSeats() {

        for (var i = 1; i <= 24; i++) {

            seat = {
                name: "",
                phone: "",
                email: "",
                movie: "",
                time: "",
                number: i
            };
            reservations.push(seat);

        }
    }



    $(".seat").on('click', function() {
        $("#form").show();
        countSeats();
        $seatReservation = $(this).attr("data-seat");
        $(this).addClass("reserved");
        document.getElementById("form").reset();
    });



    $("#submit").on('click', function() {

        reservations.forEach(function(seat) {

            if ($seatReservation == seat.number) {
                seat.name = $('#name').val();
                seat.phone = $('#phone').val();
                seat.email = $('#email').val();
                seat.movie = $('#movie').val();
                seat.time = $('#time').val();
                seat.reserved = true;
            }
            console.log(seat.name);

        });
        console.log(reservations);
    });
    var $name = $('#name').val()
    var $phone = $('#phone').val();
    var $email = $('#email').val();
    var $movie = $('#movie').val();
    var $time = $('#time').val();


  $('.seat').mouseover(function() {
    if ( $(this).hasClass('reserved') ) {
      name = $(this).attr('data-lastname');
      $(this).children('p').text(name);
    }
  })

  //return to reserved when mouse out
  $('.seat').mouseout(function() {
    if ( $(this).hasClass('reserved') ) {
      $(this).children('p').text('Reserved');
    }
  })





});

// end .ready() function
