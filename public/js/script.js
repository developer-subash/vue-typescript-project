$(document).ready(function() {
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
  jQuery(".entry-banner").each(function() {
    ImageStretcher.add({
      container: this,
      image: "img.bg-stretch"
    });
  });
  // var maxField = 10; //Input fields increment limitation
  // var addButton = $('.add_button'); //Add button selector
  // var wrapper = $('.field_wrapper'); //Input field wrapper
  // var fieldHTML = '<label for="inputPassword" class="col-sm-2 col-form-label">Itinerary</label><div class="col-sm-8"><div class="input-group"><input type="text" class="form-control mb-3" placeholder="Itinerary title (eg.Kathmandu to Lukla flight)" aria-label="Username" aria-describedby="basic-addon1"><textarea name="" id="" rows="5" class="w-100" placeholder="Itinerary description"></textarea></div></div><div class="col-sm-2"><button type="button" class="default-btn btn-block remove_button"><i class="fas fa-plus"></i> Remove</button></div>'; //New input field html
  // var x = 1; //Initial field counter is 1

  // //Once add button is clicked
  // $(addButton).click(function(){
  //     //Check maximum number of input fields
  //     if(x < maxField){
  //         x++; //Increment field counter
  //         $(wrapper).append(fieldHTML); //Add field html
  //     }
  // });

  // //Once remove button is clicked
  // $(wrapper).on('click', '.remove_button', function(e){
  //     e.preventDefault();
  //     $('.field_wrapper').remove(); //Remove field html
  //     x--; //Decrement field counter
  // });

  //     var ctx = document.getElementById("myChart");
  // var myChart = new Chart(ctx, {
  //     type: 'doughnut',
  //     data: {
  //         labels: ["Pending", "Inprogress", "Completed"],
  //         datasets: [{
  //             label: '# of Votes',
  //             data: [12, 19, 3,],
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 1)',
  //                 'rgba(54, 162, 235, 1)',
  //                 'rgba(255, 206, 86, 1)'

  //             ]

  //         }]
  //     },
  //     options: {
  //         scales: {
  //             yAxes: [{
  //                 ticks: {
  //                     display:false
  //                 },
  //                 gridLines: {
  //                     display: false,
  //                     drawBorder: false
  //                   },

  //             }],
  //             xAxes: [{
  //                 ticks: {
  //                     display:false
  //                 },
  //                 gridLines: {
  //                     display: false,
  //                     drawBorder: false
  //                   },

  //             }],

  //         },
  //         padding: {
  //             left: 0,
  //             right: 0,
  //             top: 0,
  //             bottom: 0
  //         }
  //     }
  // });
});
