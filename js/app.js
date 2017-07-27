$(document).ready(function() {
    console.log("ready!");

    var reservations = [];
    var $seatReservation = "";
    var $seatIndex;
    var seat;


    intializeSeatsArray();

    function intializeSeatsArray() {

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

    $("#welcomeButton").on('click', function() {
        $("#welcome").hide();
        $("#mainPage").show();
    });




    $(".seat").on('click', function() {
        $("#form").show();
        $seatReservation = $(this).attr("data-seat");
        $(this).addClass("reserved");
        document.getElementById("form").reset();
    });



    $("#submit").on('click', function() {
        $("#seat-info").empty();
        reservations.forEach(function(seat) {
            if ($seatReservation == seat.number) {
                seat.name = $('#name').val();
                seat.phone = $('#phone').val();
                seat.email = $('#email').val();
                seat.movie = $('#movie').val();
                seat.time = $('#time').val();
            }

            $("#seat-info").append("<p>" + seat.name + "</p>");
        });
        $("#seat-info").append("<p>" + $seatReservation + "</p>");
        $('#exitPage').show();
        console.log(reservations);
    });
    var $name = $('#name').val()
    var $phone = $('#phone').val();
    var $email = $('#email').val();
    var $movie = $('#movie').val();
    var $time = $('#time').val();






});

// end .ready() function