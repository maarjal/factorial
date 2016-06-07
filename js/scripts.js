$(document).ready(function() {
  $("#submit").click(function(event){
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var workingNumber = 1;

    for (var i = number; i > 0; i--) {
      workingNumber *= i;

    }

    alert(workingNumber);


  });
});
