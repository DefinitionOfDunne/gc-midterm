$(document).ready(function() {
    console.log("ready!");

    var reservations = [];				   // Empty array to store each chair and their info. There are 24 chairs.
    var $seatReservation = "";
    var $seatIndex;
    var seat;


    intializeSeatsArray();

    function intializeSeatsArray() {       // Function to initalize the array that contains the seat onjects. 
    									   
        for (var i = 1; i <= 24; i++) {	   // For that sets up each chair/object with the properties of name, phone,
        								   // email, movie, time, and the number of the selected chair.
            seat = {
                name: "",
                phone: "",
                email: "",
                movie: "",
                time: "",
                number: i
            };
            reservations.push(seat);	  // Pushes each object to the array reservations[]

        }
    }

    $("#welcomeButton").on('click', function() {	// Function that takes the user from the welcome page to the main
        $("#welcome").hide();						// page to select a seat once they click a button. 
        $("#mainPage").show();
    });




    $(".seat").on('click', function() {					// Function that shows the user a form to fill out once they have
        $("#form").show();								// clicked a chair. Once they click, the chair becomes transparent
        $seatReservation = $(this).attr("data-seat");	// 
        $(this).addClass("reserved");
        document.getElementById("form").reset();
    });



    $("#submit").on('click', function() {				// Function that empties the form once a new chair is clicked
        $("#seat-info").empty();
        reservations.forEach(function(seat) {
            if ($seatReservation == seat.number) {		// Adds the info from the form to the chair's object if the 
                seat.name = $('#name').val();			// $seatReservation id matches the seat.number.
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