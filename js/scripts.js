$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    //capture name from form, if no name provided default to fam
    var name = $("#name").val();
    if ( name === "") { name = "fam"; }

     //capture the value from the form and if no input is made
     //default the value to 0
     var score1= parseInt($("input:radio[name=score1]:checked").val());
     if (isNaN(score1)) { score1 = 0; }
     var score2= parseInt($("input:radio[name=score2]:checked").val());
     if (isNaN(score2)) { score2 = 0; }
     var score3= parseInt($("input:radio[name=score3]:checked").val());
     if (isNaN(score3)) { score3 = 0; }
     var score4= parseInt($("input:radio[name=score4]:checked").val());
     if (isNaN(score4)) { score4 = 0; }
     var score5= parseInt($("input:radio[name=score5]:checked").val());
     if (isNaN(score5)) { score5 = 0; }


     //total the score and put into variable to use for determining results
     var result = score1 + score2 + score3 + score4 + score5

     //function for displaying the correct results
      var displayResults = function(result) {
         if (score1 < 3){
           $("#maincon").empty();
           $("#maincon").append("<img id='resultimg'src='img/pizza.jpg'>");
           $("#maincon").append("<h2 id='resulth'> You don't like Pizza, " + name + "?</h2>");
           $("#maincon").append("<h2 id='resulttext'>Pizza is dank af, fam. Try again with the correct response. You LOVE pizza.</h2>");
         } else if (result <= 3){
           $("#maincon").empty();
           $("#maincon").append("<img id='resultimg'src='img/ruby.png'>");
           $("#maincon").append("<h2 id='resulth'> You got Ruby, "+ name + "</h2>");
           $("#maincon").append("<h2 id='resulttext'>Ruby is dank af, fam.</h2>");
         } else if (result >= 4 && result < 8){
           $("#maincon").empty();
           $("#maincon").append("<img id='resultimg'src='img/python.png'>");
           $("#maincon").append("<h2 id='resulth'> You got Python, "+ name + "</h2>");
           $("#maincon").append("<h2 id='resulttext'>Python is dank af, fam.</h2>");
         } else if (result >= 8 && result < 12){
           $("#maincon").empty();
           $("#maincon").append("<img id='resultimg'src='img/javascript.jpg'>");
           $("#maincon").append("<h2 id='resulth'> You got Javascript, "+ name + "</h2>");
           $("#maincon").append("<h2 id='resulttext'>Javascript is dank af, fam.</h2>");
         } else if (result >= 12){
           $("#maincon").empty();
           $("#maincon").append("<img id='resultimg'src='img/assembly.jpg'>");
           $("#maincon").append("<h2 id='resulth'> You got Assembly, " + name + "</h2>");
           $("#maincon").append("<h2 id='resulttext'>Assembly is dank af, fam.</h2>");
         }
       }


    displayResults(result);
    $('html, body').animate({scrollTop:5}, 'slow');
  });
});
